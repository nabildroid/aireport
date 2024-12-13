
import Redis from "ioredis";

import { NextRequest, NextResponse, after } from "next/server";


const redis = new Redis({
    host: process.env.NODE_ENV == "development" ? "localhost" : "redis",
});




let connected = false;

export async function GET() {
    if (!connected) {
        await redis.connect().then(() => {
            connected = true;
        }).catch(() => { });
    }

    const name = await redis.get("name");

    after(async () => {
        const names = ["Lakrib", "Droid", "Github"];
        await redis.set("name", names[Math.floor(Math.random() * names.length)]);
    });

    return NextResponse.json({
        name: name ?? "Empty"
    });
}