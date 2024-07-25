import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('handleworkers.token')?.value

  if (req.nextUrl.pathname.startsWith('/auth/login') && !token) return

  if (req.url.includes('/login') && token) {
    return NextResponse.redirect(new URL('/admin/home', req.url))
  }

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }
}

export const config = {
  matcher: ['/admin/:path*', '/auth/login'],
}
