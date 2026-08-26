import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Strict Mode for development quality checks
  reactStrictMode: true,

  // Enable image optimization with Sharp (already in devDependencies)
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Experimental features for better performance
  experimental: {
    scrollRestoration: true,
  },

  // Turbopack config (Next.js 16 default bundler)
  turbopack: {},

  // Compress responses
  compress: true,

  // Production optimizations
  poweredByHeader: false,
};

export default nextConfig;
