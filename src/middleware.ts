import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  console.log("Middleware - Request URL:", request.url);
  
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  console.log("Middleware - Token:", token);

  // If no token, redirect to sign in
  if (!token) {
    console.log("Middleware - No token found, redirecting to sign in");
    const signInUrl = new URL("/signin", request.url);
    signInUrl.searchParams.set("callbackUrl", request.url);
    return NextResponse.redirect(signInUrl);
  }

  // Check if user has admin role
  if (token.role !== "admin") {
    console.log("Middleware - User does not have admin role:", token.role);
    const signInUrl = new URL("/signin", request.url);
    signInUrl.searchParams.set("error", "Unauthorized");
    return NextResponse.redirect(signInUrl);
  }

  console.log("Middleware - User authenticated and authorized");
  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
}; 