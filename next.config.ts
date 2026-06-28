import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    localPatterns: [
      {
        pathname: "/hero-integration.png",
        search: "",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
