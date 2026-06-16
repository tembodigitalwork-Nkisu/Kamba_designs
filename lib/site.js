// Single source of truth for the production URL. Set NEXT_PUBLIC_SITE_URL in
// the environment (e.g. Vercel project settings) for production. The fallback
// is only a placeholder for local development, replace or override before
// promoting, or canonical URLs, the sitemap, and JSON-LD will be wrong.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://kamba-fashion.example";
