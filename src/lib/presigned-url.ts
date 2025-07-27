// lib/presigned-url.ts
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { r2 } from "./r2-client";

export async function generatePresignedUrl(
 bucket,key
): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: bucket,
    Key: key,
  });
  const signedUrl = await getSignedUrl(r2, command, { expiresIn: 3600 }); // Expires in 1 hour
  
  return signedUrl;
}
generatePresignedUrl("uploads", "videos/playlist.m3u8").then((url) =>
  console.log("URL ",url)
);
