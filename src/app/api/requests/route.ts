import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({
    items: [
      { id: "req_001", device_id: "LED-TRG-01", cycle_length_seconds: 120, slot: { start_offset_seconds: 40, duration_seconds: 20 }, validity_until: "2026-01-31T23:59:59Z", status: "pending" },
      { id: "req_002", device_id: "LED-AV-07", cycle_length_seconds: 60, slot: { start_offset_seconds: 10, duration_seconds: 15 }, validity_until: "2025-12-31T23:59:59Z", status: "approved" }
    ]
  });
}