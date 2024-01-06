import { type CookieSerializeOptions, parse, serialize } from 'cookie'

export function getCookies(req: Request): Record<string, string> | undefined {
    const cookieHeader = req.headers.get('Cookie')
    if (!cookieHeader) return undefined;
    return parse(cookieHeader);
}

export function getCookie(req: Request, name: string): string | undefined {
    const cookieHeader = req.headers.get('Cookie')
    if (!cookieHeader) return;
    const cookies = parse(cookieHeader);
    return cookies[name];
}

export function setCookie(
    resHeaders: Headers,
    name: string,
    value: string,
    options?: CookieSerializeOptions
) {
    resHeaders.append('Set-Cookie', serialize(name, value, options))
}
