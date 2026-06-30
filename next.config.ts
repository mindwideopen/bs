import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const githubPagesBasePath = "/bs";
const basePath = isProduction ? githubPagesBasePath : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
