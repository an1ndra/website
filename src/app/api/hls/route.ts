import { NextResponse } from "next/server";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Load secrets from environment variables
const endpoint = process.env.STORJ_ENDPOINT || "https://gateway.storjshare.io";
const accessKeyId = process.env.STORJ_ACCESS_KEY!;
const secretAccessKey = process.env.STORJ_SECRET_KEY!;

const s3 = new S3Client({
  region: "ap1",
  endpoint,
  forcePathStyle: true,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export async function GET() {
  // Static test values — replace with query or dynamic source as needed
  const bucket = "course";
  const key = "master.m3u8";

  if (!bucket || !key) {
    return NextResponse.json(
      { error: "Missing bucket or key" },
      { status: 400 }
    );
  }

  try {
    const command = new GetObjectCommand({ Bucket: bucket, Key: key });
    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 900 }); // 15 min
    return NextResponse.json({ url: signedUrl });
  } catch (error) {
    console.error("Failed to sign Storj URL:", error);
    return NextResponse.json(
      { error: "Failed to generate signed URL" },
      { status: 500 }
    );
  }
}
