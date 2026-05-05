// Update SITE_URL once the production domain is wired up.
const SITE_URL = "https://kamba-fashion.example";

const routes = [
  { path: "", priority: 1.0, freq: "monthly" },
  { path: "/collection", priority: 0.9, freq: "monthly" },
  { path: "/bespoke", priority: 0.9, freq: "yearly" },
  { path: "/about", priority: 0.6, freq: "yearly" },
  { path: "/appointments", priority: 0.9, freq: "weekly" },
  { path: "/contact", priority: 0.7, freq: "yearly" },
];

export default function sitemap() {
  const now = new Date();
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
