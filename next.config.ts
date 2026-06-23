import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.example.com",
      },
    ],
    formats: ["image/webp", "image/avif"],
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/GETTING_STARTED.md",
        permanent: false,
      },
    ];
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_APP_VERSION: "0.1.0",
  },

  // Experimental features for performance
  experimental: {
    // Optimize bundle size
    optimizePackageImports: ["@radix-ui/react-*"],
  },

  // Enable React strict mode for development
  reactStrictMode: true,

  // Compression
  compress: true,

  // Generate ETags
  generateEtags: true,

  // Production source maps (disabled for smaller bundle)
  productionBrowserSourceMaps: false,

  // Hide Vercel header
  poweredByHeader: false,
};

export default nextConfig;
