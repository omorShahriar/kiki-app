/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost", "behind.theblackpanda.de"],
  },
};

module.exports = nextConfig;
