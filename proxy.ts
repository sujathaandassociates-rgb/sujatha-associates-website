import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.NEXTAUTH_SECRET || "sujatha-associates-secret-change-in-production"
);

const COOKIE_NAME = "sa-session";

export async function proxy(request: NextRequest) {
  const url = request.nextUrl;

  if (
    url.pathname.startsWith("/dashboard") &&
    url.pathname !== "/dashboard/login"
  ) {
    const token = request.cookies.get(COOKIE_NAME)?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/dashboard/login", request.url));
    }

    try {
      await jwtVerify(token, SECRET);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/dashboard/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
