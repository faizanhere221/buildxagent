import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const url = request.nextUrl.clone();

  if (host === "www.buildxagent.com" || host.startsWith("www.buildxagent.com:")) {
    url.host = "buildxagent.com";
    return NextResponse.redirect(url, 301);
  }

  // next.config.ts sets skipTrailingSlashRedirect: true (needed so the legacy
  // WordPress URL redirect can return an exact 301), so replicate the site's
  // default trailing-slash-stripping behavior here for every other route.
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
