import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has('auth_token'); // Replace with your auth check
  const isLoginPage = request.nextUrl.pathname === '/';
  
  // Redirect to login if not authenticated and trying to access protected routes
  if (!isAuthenticated && !isLoginPage && (
    request.nextUrl.pathname.startsWith('/master') ||
    request.nextUrl.pathname.startsWith('/partner')
  )) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  // Redirect to appropriate portal if already authenticated and on login page
  if (isAuthenticated && isLoginPage) {
    // In a real app, you'd check the user's role from the token
    const userRole = 'master'; // Replace with actual role check
    return NextResponse.redirect(new URL(`/${userRole}`, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};