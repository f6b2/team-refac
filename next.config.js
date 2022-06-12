/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = {
  nextConfig,
  eslint: {
    ignoreDuringBuilds: true,
  },
};
