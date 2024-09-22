import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('handleworkers.token')?.value
  const isFirstRegisterComplete = req.cookies.get(
    'handleworkers.isFirstRegisterComplete',
  )?.value

  // if (req.url.includes('/login') && token) {
  //   return NextResponse.redirect(new URL('/admin/home', req.url))
  // }

  // if (req.nextUrl.pathname.startsWith('/admin') && !token) {
  //   return NextResponse.redirect(new URL('/auth/login', req.url))
  // }

  // if (req.nextUrl.pathname.startsWith('/auth/complete_register')) {
  //   if (!isFirstRegisterComplete || isFirstRegisterComplete !== 'true') {
  //     return NextResponse.redirect(new URL('/auth/register', req.url))
  //   }
  // }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/auth/:path*'],
}
