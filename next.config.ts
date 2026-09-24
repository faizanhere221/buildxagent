import type { NextConfig } from "next";

// Retired URLs (legacy WordPress post, blog, service pages) all 301 to the
// homepage so existing backlinks and indexed pages keep their equity.
const retiredPaths = [
  "/how-to-generate-leads-for-gohighlevel-agency",
  "/blog",
  "/blog/:slug*",
  "/services",
  "/services/:slug*",
];

const nextConfig: NextConfig = {
  // Disabled so the redirects below can return an exact 301 for both the
  // trailing-slash and non-trailing-slash variants, instead of Next's
  // automatic trailing-slash normalization (308) firing first.
  // Sitewide trailing-slash stripping is preserved in src/proxy.ts.
  skipTrailingSlashRedirect: true,
  async redirects() {
    return retiredPaths.flatMap((path) => [
      // www requests are matched first and sent straight to the final
      // non-www destination so they resolve in a single hop instead of
      // chaining into the www->non-www redirect in src/proxy.ts.
      {
        source: path,
        has: [{ type: "host" as const, value: "www.buildxagent.com" }],
        destination: "https://buildxagent.com/",
        statusCode: 301 as const,
      },
      {
        source: `${path}/`,
        has: [{ type: "host" as const, value: "www.buildxagent.com" }],
        destination: "https://buildxagent.com/",
        statusCode: 301 as const,
      },
      { source: path, destination: "/", statusCode: 301 as const },
      { source: `${path}/`, destination: "/", statusCode: 301 as const },
    ]);
  },
};

export default nextConfig;
