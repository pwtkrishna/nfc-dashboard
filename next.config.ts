import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nfc.aardana.com",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "nfc.premierwebtechservices.com",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "johndoe.com",
        // pathname: "/**", // Optional: allows all paths
      },
    ],
  },
};

export default nextConfig;
