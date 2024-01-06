import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCookie } from './lib/cookie'
// import { verify } from 'jsonwebtoken';
// import { env } from './env';

export function middleware(request: NextRequest) {
    if (request.url.endsWith("/admin"))
        return NextResponse.next()

    const token = getCookie(request, "access_token");
    // const is_valid = verify(token!, env.SECRET);
    if (!token)
        return NextResponse.redirect(new URL('/', request.url))
    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*'],
}
