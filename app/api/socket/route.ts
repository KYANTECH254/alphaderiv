import { NextResponse } from "next/server";
import { getSocketInstance } from "@/lib/socket";

export async function GET(req: Request) {
    getSocketInstance();
    return NextResponse.json({ message: "Socket server initialized" });
}
