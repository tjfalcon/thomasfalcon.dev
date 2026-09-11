import type { NextConfig } from "next";

const onGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: onGitHubPages ? "/thomasfalcon.dev" : "",
};

export default nextConfig;
