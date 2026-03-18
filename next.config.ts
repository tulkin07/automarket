import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    domains: [
      "procuratorial-phrenetically-yessenia.ngrok-free.dev",
    ],
  },
};

export default nextConfig;