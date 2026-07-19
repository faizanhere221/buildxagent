import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disabled so the legacy WordPress URL redirect below can return an exact
  // 301 for both the trailing-slash and non-trailing-slash variants, instead
  // of Next's automatic trailing-slash normalization (308) firing first.
  // Sitewide trailing-slash stripping is preserved in src/proxy.ts.
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      // www requests are matched first and sent straight to the final
      // non-www destination so they resolve in a single hop instead of
      // chaining into the www->non-www redirect in src/proxy.ts.
      {
        source: "/how-to-generate-leads-for-gohighlevel-agency",
        has: [{ type: "host", value: "www.buildxagent.com" }],
        destination:
          "https://buildxagent.com/blog/how-to-generate-leads-for-gohighlevel-agency",
        statusCode: 301,
      },
      {
        source: "/how-to-generate-leads-for-gohighlevel-agency/",
        has: [{ type: "host", value: "www.buildxagent.com" }],
        destination:
          "https://buildxagent.com/blog/how-to-generate-leads-for-gohighlevel-agency",
        statusCode: 301,
      },
      {
        source: "/how-to-generate-leads-for-gohighlevel-agency",
        destination: "/blog/how-to-generate-leads-for-gohighlevel-agency",
        statusCode: 301,
      },
      {
        source: "/how-to-generate-leads-for-gohighlevel-agency/",
        destination: "/blog/how-to-generate-leads-for-gohighlevel-agency",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
