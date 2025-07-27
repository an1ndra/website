import { GetObjectCommand } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

import { r2 } from "@/lib/r2-client";

export async function GET() {
  try {
    const bucket = process.env.R2_BUCKET_NAME!;
    const m3u8Key = "videos/playlist.m3u8";

    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: m3u8Key,
    });

    const { Body } = await r2.send(command);
    const content = await Body?.transformToString();

    const modified = content
      ?.split("\n")
      .map((line) =>
        line.trim().endsWith(".m3u8")
          ? `/api/hls/${line.trim()}` // rewrite variant paths
          : line,
      )
      .join("\n");

    return new NextResponse(modified, {
      headers: {
        "Content-Type": "application/vnd.apple.mpegurl",
      },
    });
  } catch (error) {
    console.error("Error reading master playlist:", error);
    return new NextResponse("Failed to load master playlist", { status: 500 });
  }
}
