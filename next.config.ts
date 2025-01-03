import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
    // images: {
    //   domains: ["images.microcms-assets.io"],
    // },
  },
};

export default nextConfig;
