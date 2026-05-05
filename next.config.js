/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    remotePatterns: [
      // AI-generated images via Pollinations (free, no auth — generates
      // from a text prompt in the URL path). Swap for the designer's real
      // portfolio before launch.
      { protocol: "https", hostname: "image.pollinations.ai" },
      // Kept available for fallback / mixed-source assets.
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
  },
};

module.exports = nextConfig;
