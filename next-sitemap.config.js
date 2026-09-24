/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://buildxagent.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/proposal", "/proposal/*"],
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/case-studies": 0.9,
      "/about": 0.7,
      "/contact": 0.7,
    };
    if (!(path in priorities)) return null;
    return {
      loc: path,
      changefreq: "weekly",
      priority: priorities[path],
      lastmod: new Date().toISOString(),
    };
  },
};
