import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
  serverExternalPackages: ["next-mdx-remote"],
  webpack: (config, { dev, isServer }) => {
    // Watch the content/ directory in dev so saving an .mdx file
    // triggers an automatic page reload (same as editing a .tsx file)
    if (dev && isServer) {
      config.plugins.push({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        apply: (compiler: any) => {
          compiler.hooks.thisCompilation.tap("MDXContentWatcher", (compilation: any) => {
            compilation.contextDependencies.add(
              path.resolve(process.cwd(), "content")
            );
          });
        },
      });
    }
    return config;
  },
};

export default nextConfig;

