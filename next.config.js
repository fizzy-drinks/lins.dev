/**
 * @type {import('next').NextConfig}
 */

/* eslint-disable @typescript-eslint/no-var-requires */
// const { i18n } = require('./next-i18next.config');

module.exports = {
  serverRuntimeConfig: {
    mongodb: {
      uri: process.env.MONGODB_URI,
    },
    lastfm: {
      apiKey: process.env.LASTFM_API_KEY,
      user: process.env.LASTFM_USERNAME,
    },
  },
  // i18n,
};
