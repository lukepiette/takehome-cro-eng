/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.runpod.io",
  generateRobotsTxt: true,
  changefreq: "hourly",
  exclude: ["/console/*"],
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
}
