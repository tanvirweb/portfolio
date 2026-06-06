import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Tells Next.js to generate a static 'out' folder
  images: {
    unoptimized: true, // Required because Next.js default image optimization needs a live server
  },
};

export default nextConfig;
