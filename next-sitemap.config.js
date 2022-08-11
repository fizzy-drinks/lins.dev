/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://lins.dev',
  generateRobotsTxt: true,
};

module.exports = config;
