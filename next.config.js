/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost", "behind.kikiami.de"],
  },
  output: "standalone",
};

module.exports = nextConfig;
