import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;
  let needsRedirect = false;

  let newHost = host;
  if (host === "www.buildxagent.com" || host.startsWith("www.buildxagent.com:")) {
    newHost = "buildxagent.com";
    needsRedirect = true;
  }

  let newPathname = pathname;
  if (pathname !== "/" && pathname.endsWith("/")) {
    newPathname = pathname.slice(0, -1);
    needsRedirect = true;
  }

  if (needsRedirect) {
    // Built as a plain string rather than mutating request.nextUrl.clone():
    // NextURL's href/toString() does not reliably reflect a reassigned
    // .pathname in this Next.js version, so a plain string sidesteps that.
    const protocol = request.nextUrl.protocol;
    const destination = `${protocol}//${newHost}${newPathname}${request.nextUrl.search}`;
    return NextResponse.redirect(destination, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
