import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Old QR codes and ads link to the mixed-case URL; routes are lowercase
  if (pathname === '/discover-T8vN3z') {
    return NextResponse.redirect(new URL('/discover-t8vn3z' + request.nextUrl.search, request.url), 301)
  }

  // The live NAD+ page is /nad+ (Google also requests /nad%2B); /nad redirects there
  if (/^\/nad%2b\/?$/i.test(pathname)) {
    const url = request.nextUrl.clone()
    url.pathname = '/nad+'
    return NextResponse.rewrite(url)
  }
  if (pathname === '/nad' || pathname === '/nad/') {
    return NextResponse.redirect(new URL('/nad+' + request.nextUrl.search, request.url), 301)
  }

  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const auth = request.cookies.get('admin_auth')?.value
    if (auth !== process.env.ADMIN_PASSWORD) {
      const loginUrl = new URL('/admin/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/discover-T8vN3z', '/:path(nad.*)'],
}
