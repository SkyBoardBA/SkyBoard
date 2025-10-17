import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({
    items: [
      { id: "prov_01", name: "MediaPlus", devices: 42 },
      { id: "prov_02", name: "CityLED", devices: 28 }
    ]
  });
}