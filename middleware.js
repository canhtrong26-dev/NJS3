import { NextResponse } from 'next/server';

export function middleware(request) {
    const url = request.nextUrl.clone();

    if (url.pathname.startsWith('/admin')) {
        const userRole = request.cookies.get('userRole')?.value || '';

        if (userRole !== 'admin') {
            url.pathname = '/no-access';
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher : ['/admin/:path*']
}