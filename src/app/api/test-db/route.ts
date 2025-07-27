import { db } from "@/app/api/test-db/route";

export async function GET() {
  const result = await db.execute("select 1");
  console.log("result", result);
  return new Response("DB check complete");
}
