import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: process.env.NEXT_BASE_PATH || "",
  trailingSlash: true,
};

export default nextConfig;
