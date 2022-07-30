/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: process.env.NODE_ENV === "production" ? "./build" : "./.next",
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
