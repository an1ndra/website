import { type NextRequest, NextResponse } from "next/server";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { getCachedData,setCachedData } from "../../../../lib/redis";

const s3Client = new S3Client({
	region: "auto",
	endpoint: process.env.R2_ENDPOINT,
	credentials: {
		accessKeyId: process.env.R2_ACCESS_KEY_ID!,
		secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
	},
});

interface HLSUrls {
	masterPlaylist: string;
	resolutionPlaylists: Record<string, string>;
	segments: Record<string, string>;
}

async function presignUrl(
	key: string,
	expiresIn: number = 3600,
): Promise<string> {
	const command = new GetObjectCommand({
		Bucket: process.env.R2_BUCKET_NAME!,
		Key: key,
	});

	return await getSignedUrl(s3Client, command, { expiresIn });
}

async function generateHLSUrls(
	videoPath: string,
	expiresIn: number = 3600,
): Promise<HLSUrls> {
	const cacheKey = `hls:${videoPath}:${expiresIn}`;

	// Try to get from cache first
	const cachedUrls = await getCachedData(cacheKey);
	if (cachedUrls) {
		console.log("Using cached HLS URLs for:", videoPath);
		return JSON.parse(cachedUrls);
	}

	console.log("Generating new HLS URLs for:", videoPath);
	const resolutions = ["360p", "480p", "720p", "1080p"];
	const segmentCount = 60; // Updated to match your actual segment count (000-059)

	// Presign master playlist
	const masterPlaylist = await presignUrl(
		`${videoPath}/playlist.m3u8`,
		expiresIn,
	);

	// Presign resolution playlists
	const resolutionPlaylists: Record<string, string> = {};
	for (const resolution of resolutions) {
		resolutionPlaylists[resolution] = await presignUrl(
			`${videoPath}/${resolution}.m3u8`,
			expiresIn,
		);
	}

	// Presign all segment files
	const segments: Record<string, string> = {};
	for (const resolution of resolutions) {
		for (let i = 0; i < segmentCount; i++) {
			const segmentKey = `${resolution}_${i.toString().padStart(3, "0")}.ts`;
			segments[segmentKey] = await presignUrl(
				`${videoPath}/${segmentKey}`,
				expiresIn,
			);
		}
	}

	const hlsUrls = {
		masterPlaylist,
		resolutionPlaylists,
		segments,
	};

	// Cache the URLs (cache for 80% of expiration time to ensure fresh URLs)
	const cacheTime = Math.floor(expiresIn * 0.8);
	await setCachedData(cacheKey, JSON.stringify(hlsUrls), cacheTime);
	console.log(`Cached HLS URLs for ${videoPath} for ${cacheTime} seconds`);

	return hlsUrls;
}

async function createModifiedMasterPlaylist(
	originalUrl: string,
	videoPath: string,
	baseUrl: string,
): Promise<string> {
	const cacheKey = `master:${videoPath}:${baseUrl}`;

	// Try to get from cache first
	const cachedPlaylist = await getCachedData(cacheKey);
	if (cachedPlaylist) {
		console.log("Using cached master playlist for:", videoPath);
		return cachedPlaylist;
	}

	console.log("Creating new master playlist for:", videoPath);
	const response = await fetch(originalUrl);
	let content = await response.text();

	// Replace resolution playlist filenames with API endpoints that serve modified playlists
	const resolutions = ["360p", "480p", "720p", "1080p"];
	resolutions.forEach((resolution) => {
		const filename = `${resolution}.m3u8`;
		const apiUrl = `${baseUrl}/api/hls-presign?videoPath=${encodeURIComponent(videoPath)}&playlistType=${resolution}`;
		console.log(`Replacing ${filename} with API URL: ${apiUrl}`);
		content = content.replace(new RegExp(filename, "g"), apiUrl);
	});

	// Cache the modified playlist for 30 minutes
	await setCachedData(cacheKey, content, 1800);
	console.log("Cached master playlist for:", videoPath);

	return content;
}

async function createModifiedResolutionPlaylist(
	originalUrl: string,
	segmentReplacements: Record<string, string>,
	resolution: string,
	videoPath: string,
): Promise<string> {
	const cacheKey = `resolution:${videoPath}:${resolution}`;

	// Try to get from cache first
	const cachedPlaylist = await getCachedData(cacheKey);
	if (cachedPlaylist) {
		console.log(`Using cached ${resolution} playlist for:`, videoPath);
		return cachedPlaylist;
	}

	console.log(`Creating new ${resolution} playlist for:`, videoPath);
	const response = await fetch(originalUrl);
	let content = await response.text();

	// Replace segment filenames with presigned URLs
	Object.entries(segmentReplacements).forEach(([segmentName, presignedUrl]) => {
		console.log(`Replacing ${segmentName} with presigned URL`);
		content = content.replace(new RegExp(segmentName, "g"), presignedUrl);
	});

	// Cache the modified resolution playlist for 45 minutes (80% of 1 hour)
	await setCachedData(cacheKey, content, 2700);
	console.log(`Cached ${resolution} playlist for:`, videoPath);

	return content;
}

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const videoPath = searchParams.get("videoPath");
		const expiresIn = parseInt(searchParams.get("expiresIn") || "3600");
		const playlistType = searchParams.get("playlistType");

		console.log("HLS Presign GET Request:", {
			videoPath,
			expiresIn,
			playlistType,
		});

		if (!videoPath) {
			return NextResponse.json(
				{ error: "videoPath is required" },
				{ status: 400 },
			);
		}

		return await handleHLSRequest(videoPath, expiresIn, playlistType);
	} catch (error) {
		console.error("Error in GET handler:", error);
		return NextResponse.json(
			{ error: "Failed to generate presigned URLs" },
			{ status: 500 },
		);
	}
}

export async function POST(request: NextRequest) {
	try {
		const { videoPath, expiresIn = 3600, playlistType } = await request.json();

		console.log("HLS Presign POST Request:", {
			videoPath,
			expiresIn,
			playlistType,
		});

		if (!videoPath) {
			return NextResponse.json(
				{ error: "videoPath is required" },
				{ status: 400 },
			);
		}

		return await handleHLSRequest(videoPath, expiresIn, playlistType);
	} catch (error) {
		console.error("Error in POST handler:", error);
		return NextResponse.json(
			{ error: "Failed to generate presigned URLs" },
			{ status: 500 },
		);
	}
}

async function handleHLSRequest(
	videoPath: string,
	expiresIn: number,
	playlistType: string | null,
) {
	const hlsUrls = await generateHLSUrls(videoPath, expiresIn);
	console.log("Generated HLS URLs:", {
		masterPlaylist: hlsUrls.masterPlaylist,
		resolutionPlaylistCount: Object.keys(hlsUrls.resolutionPlaylists).length,
		segmentCount: Object.keys(hlsUrls.segments).length,
	});

	// If requesting a modified playlist
	if (playlistType === "master") {
		console.log("Creating modified master playlist...");
		const baseUrl =
			process.env.NODE_ENV === "production"
				? "https://yourdomain.com"
				: "http://localhost:3000";

		const modifiedPlaylist = await createModifiedMasterPlaylist(
			hlsUrls.masterPlaylist,
			videoPath,
			baseUrl,
		);
		console.log("Modified playlist length:", modifiedPlaylist.length);

		return new NextResponse(modifiedPlaylist, {
			headers: {
				"Content-Type": "application/vnd.apple.mpegurl",
				"Cache-Control": "no-cache",
			},
		});
	}

	if (playlistType && playlistType !== "master") {
		const resolutionPlaylistUrl = hlsUrls.resolutionPlaylists[playlistType];
		if (!resolutionPlaylistUrl) {
			return NextResponse.json(
				{ error: "Resolution playlist not found" },
				{ status: 404 },
			);
		}

		// Create segment replacements for this resolution
		const segmentReplacements: Record<string, string> = {};
		Object.entries(hlsUrls.segments).forEach(([segmentName, url]) => {
			if (segmentName.startsWith(playlistType)) {
				segmentReplacements[segmentName] = url;
			}
		});

		console.log(
			`Creating modified ${playlistType} playlist with ${Object.keys(segmentReplacements).length} segment replacements`,
		);

		const modifiedPlaylist = await createModifiedResolutionPlaylist(
			resolutionPlaylistUrl,
			segmentReplacements,
			playlistType,
			videoPath,
		);

		return new NextResponse(modifiedPlaylist, {
			headers: {
				"Content-Type": "application/vnd.apple.mpegurl",
				"Cache-Control": "no-cache",
			},
		});
	}

	return NextResponse.json(hlsUrls);
}