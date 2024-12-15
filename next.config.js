//** @type {import('next').NextConfig} */
//const nextConfig = {
//  distDir: "build",
 // reactStrictMode: true,
//};

//module.exports = nextConfig;
// filepath: next.config.js
module.exports = {
  exportTrailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/MMXLVIII/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/MMXLVIII' : '',
};