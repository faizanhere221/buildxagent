/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://buildxagent.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/services": 0.9,
      "/case-studies": 0.9,
      "/blog": 0.8,
      "/about": 0.7,
      "/contact": 0.7,
    };
    return {
      loc: path,
      changefreq: path.startsWith("/blog/") ? "monthly" : "weekly",
      priority: priorities[path] || 0.6,
      lastmod: new Date().toISOString(),
    };
  },
};
