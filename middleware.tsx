import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  await fetch(`${process.env.BASE_URL}/api/mdx`)
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('mdx-page', request.nextUrl.pathname)
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/courses/:path*',
}