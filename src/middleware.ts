import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
    const authenticated = false;

    if (request.nextUrl.pathname.startsWith('/dashboard') && !authenticated) {
        console.log('Redirecionando para a página de login')
        return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
}   