import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disabled so the legacy WordPress URL redirect below can return an exact
  // 301 for both the trailing-slash and non-trailing-slash variants, instead
  // of Next's automatic trailing-slash normalization (308) firing first.
  // Sitewide trailing-slash stripping is preserved in src/proxy.ts.
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
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
