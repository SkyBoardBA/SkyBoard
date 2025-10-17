import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({
    items: [
      { id: "pkg_001", name: "Zimska_kampanja_TRG01.zip", size_mb: 320 },
      { id: "pkg_002", name: "Avenija07_slot15s.iso", size_mb: 480 }
    ]
  });
}