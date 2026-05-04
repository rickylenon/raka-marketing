import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Parent folder has its own lockfile; pin Turbopack to this app root.
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/request-brand-review",
        destination: "/brands",
        permanent: true,
      },
      {
        source: "/request-creator-review",
        destination: "/creators",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
