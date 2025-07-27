// pages/api/set-cors.js
import { NextResponse } from "next/server";
import { setCors } from "./route"; // Import from your route.js

export async function GET() {
  await setCors();
  return NextResponse.json({ message: "CORS configuration applied" });
}