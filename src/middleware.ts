import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl.clone();

  if (request.nextUrl.pathname === '/login') {
    if (token) {
      url.pathname = '/users';
      return NextResponse.redirect(url);
    }
  } else if (request.nextUrl.pathname === '/users') {
    if (!token) {
      url.pathname = '/error/403';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/users/:path*'],
};
