/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost", "behind.kikiami.de"],
  },
};

module.exports = nextConfig;
