import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
    const hasUser = !!process.env.GMAIL_USER;
    const hasPass = !!process.env.GMAIL_APP_PASSWORD;

    return NextResponse.json({
        status: "ok",
        email_configured: hasUser && hasPass,
        GMAIL_USER: hasUser ? `✅ set (${process.env.GMAIL_USER!.substring(0, 4)}...)` : "❌ MISSING",
        GMAIL_APP_PASSWORD: hasPass ? `✅ set (${process.env.GMAIL_APP_PASSWORD!.length} chars)` : "❌ MISSING",
        node_env: process.env.NODE_ENV,
        timestamp: new Date().toISOString(),
    });
}
