// app/api/hls/[variant]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { r2 } from "@/lib/r2-client";

export async function GET(
  req: NextRequest,
  { params }: { params: { variant: string } }
) {
  try {
    const bucket = process.env.R2_BUCKET_NAME!;
    const variantKey = `videos/${params.variant}`;

    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: variantKey,
    });

    const { Body } = await r2.send(command);
    const content = await Body?.transformToString();

    if (!content) {
      return new NextResponse("Playlist not found", { status: 404 });
    }

    const lines = content.split("\n");

    const modified = await Promise.all(
      lines.map(async (line) => {
        if (line.trim().endsWith(".ts")) {
          const segmentKey = `videos/${line.trim()}`;
          const signedUrl = await getSignedUrl(
            r2,
            new GetObjectCommand({
              Bucket: bucket,
              Key: segmentKey,
            }),
            { expiresIn: 3600 }
          );
          return signedUrl;
        }
        return line;
      })
    );

    return new NextResponse(modified.join("\n"), {
      headers: {
        "Content-Type": "application/vnd.apple.mpegurl",
      },
    });
  } catch (error) {
    console.error("Error reading variant playlist:", error);
    return new NextResponse("Failed to load variant playlist", { status: 500 });
  }
}
