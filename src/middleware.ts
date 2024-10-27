import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/sign-in", "/sign-up", "/login", "/", "/site"];

const staticAssets = ["/favicon.ico", "/_next", "/public"];

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname } = url;
  //   For Tailwind CSS And Assets OR Stuffs
  if (staticAssets.some((asset) => pathname.startsWith(asset))) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/site")) {
    return NextResponse.next();
  }
  if (pathname === "/sign-up" || pathname === "/login") {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/site", req.url));
  }

  if (!publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/site", req.url));
  }

  return NextResponse.next();
}
