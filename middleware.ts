import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Return a genuine 404 for .git path traversal attempts.
  // The vercel.json rewrite serves the 404 page content but with a 200 status
  // (pentest Finding 1). Middleware runs before Vercel rewrites and returns
  // the correct HTTP semantics.
  if (request.nextUrl.pathname.startsWith('/.git')) {
    return new NextResponse(null, { status: 404 });
  }
}

export const config = {
  matcher: ['/.git/:path*'],
};
