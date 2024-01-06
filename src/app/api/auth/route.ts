import { type NextRequest, NextResponse } from "next/server";
import { sign } from "jsonwebtoken";

import { setCookie } from "@/lib/cookie";
import { env } from "@/env";

export async function POST(req: NextRequest) {
    const body = (await req.json()) as { user: string, password: string };
    if (body.user != env.ADMIN_USER || body.password != env.ADMIN_PASSWORD)
        return NextResponse.json({ message: "auth failed" }, { status: 500 });

    const res = NextResponse.json({ message: "auth succeeded" }, { status: 200 });

    const token = sign(body, env.SECRET);
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);

    setCookie(res.headers, "access_token", token, {
        path: "/",
        expires: expirationDate,
        sameSite: "none",
        secure: true
    });

    return res;
}
