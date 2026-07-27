import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All catalogue and brand imagery is bundled locally with the site.
    // Direct static delivery avoids runtime image-optimizer dependencies.
    unoptimized: true,
  },
};

export default nextConfig;
