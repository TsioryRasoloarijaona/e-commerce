import type { NextRequest} from 'next/server'
 
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('session')?.value
 
  if (currentUser && !request.nextUrl.pathname.startsWith('/Admin')) {
    return Response.redirect(new URL('Admin/dashboard/main', request.url))
  }
 
  if (!currentUser && request.nextUrl.pathname.startsWith('/Admin/dashboard')) {
    return Response.redirect(new URL('/login' , request.url))
  }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}