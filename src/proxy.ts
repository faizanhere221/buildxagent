import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Old WordPress install's admin/system paths. Google still has these indexed
// from before the migration; respond 410 (Gone) rather than letting them
// fall through to a redirect or a bare 404, so they get dropped from the index.
const WORDPRESS_GONE_PATTERNS = [
  /^\/wp-admin(\/.*)?$/,
  /^\/wp-login\.php$/,
  /^\/xmlrpc\.php$/,
  /^\/wp-content(\/.*)?$/,
];

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (WORDPRESS_GONE_PATTERNS.some((pattern) => pattern.test(pathname))) {
    return new NextResponse("Gone", { status: 410 });
  }

  const host = request.headers.get("host") || "";
  let needsRedirect = false;

  let newHost = host;
  if (host === "www.buildxagent.com" || host.startsWith("www.buildxagent.com:")) {
    newHost = "buildxagent.com";
    needsRedirect = true;
  }

  let newPathname = pathname;
  if (pathname === "/sitemap_index.xml") {
    newPathname = "/sitemap.xml";
    needsRedirect = true;
  } else if (pathname !== "/" && pathname.endsWith("/")) {
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
