import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const isLoginPage = request.nextUrl.pathname.startsWith("/login");

  if (!token && !isLoginPage) {
    // Add the original URL as a query param
    const redirectUrl = encodeURIComponent(
      request.nextUrl.pathname + request.nextUrl.search
    );
    const loginUrl = new URL(`/login?redirect=${redirectUrl}`, request.url);
    return NextResponse.redirect(loginUrl);
  }

  // If already logged in and visiting /login, redirect back or to home
  if (token && isLoginPage) {
    const redirectTo = request.nextUrl.searchParams.get("redirect") || "/";
    return NextResponse.redirect(new URL(redirectTo, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
