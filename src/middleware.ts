import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  });

  // If no token or not an admin, redirect to signin
  if (!token || token.role !== "admin") {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
}; 