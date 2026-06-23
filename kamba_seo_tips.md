# SEO Implementation Tips for KAMBA Designs Website
> Paste this file into Claude Code and say: "Implement these SEO tips on my website."

---

## 1. Meta Tags — `<head>` of Every Page

Add the following to the `<head>` of every page. Update `[PAGE TITLE]` and `[PAGE DESCRIPTION]` per page.

```html
<!-- Primary Meta Tags -->
<title>KAMBA Designs | Bridal & Occasional Luxe — Lusaka, Zambia</title>
<meta name="description" content="Bespoke bridal gowns and luxury occasional wear by Kamba Designs, Lusaka's premier fashion house. Custom-made dresses for weddings, kitchen parties & special events. Call +260 972 035 672." />
<meta name="keywords" content="bridal gowns Lusaka, wedding dress Zambia, custom bridal Lusaka, Kamba Designs, occasional wear Zambia, bespoke fashion Lusaka, kitchen party dresses Zambia" />
<meta name="author" content="Kamba Designs" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://yourdomain.com/[current-page-path]" />
```

---

## 2. Open Graph & Social Meta Tags

Paste inside `<head>` — enables rich previews when shared on WhatsApp, Facebook, and Instagram.

```html
<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:title" content="KAMBA Designs | Bridal & Occasional Luxe — Lusaka" />
<meta property="og:description" content="Custom bridal gowns and luxury occasional wear. Based in Woodlands, Lusaka. Book via WhatsApp: +260 972 035 672." />
<meta property="og:image" content="https://yourdomain.com/images/og-cover.jpg" />
<meta property="og:url" content="https://yourdomain.com/" />
<meta property="og:site_name" content="Kamba Designs" />

<!-- Twitter / X Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="KAMBA Designs | Bridal & Occasional Luxe" />
<meta name="twitter:description" content="Bespoke bridal & occasional fashion. Lusaka, Zambia." />
<meta name="twitter:image" content="https://yourdomain.com/images/og-cover.jpg" />
```

> **Action:** Create a high-quality cover image (`og-cover.jpg`) at 1200×630px showing a standout gown or brand visual.

---

## 3. Local Business Schema (JSON-LD)

Paste this `<script>` block inside `<head>` on the homepage. This tells Google exactly who you are and where you are.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  "name": "Kamba Designs",
  "description": "Bespoke bridal gowns and luxury occasional wear in Lusaka, Zambia.",
  "url": "https://yourdomain.com",
  "telephone": "+260972035672",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Woodlands",
    "addressLocality": "Lusaka",
    "addressCountry": "ZM"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -15.3875,
    "longitude": 28.3228
  },
  "openingHours": "Mo-Sa 09:00-17:00",
  "sameAs": [
    "https://www.instagram.com/kamba_bridal/",
    "https://www.tiktok.com/@kambadesigns",
    "https://www.facebook.com/KambaDesigns/"
  ],
  "priceRange": "$$",
  "servesCuisine": null,
  "image": "https://yourdomain.com/images/og-cover.jpg"
}
</script>
```

---

## 4. Heading Structure — Every Page

Use only **one `<h1>`** per page. Structure headings logically below it.

```html
<!-- Homepage example -->
<h1>Luxury Bridal & Occasional Fashion in Lusaka, Zambia</h1>
<h2>Our Services</h2>
  <h3>Bridal Gowns</h3>
  <h3>Occasional Wear</h3>
<h2>Why Choose Kamba Designs</h2>
<h2>Book a Consultation</h2>
```

> **Rule:** Never skip heading levels (e.g. don't go `<h1>` → `<h3>`). Never use headings just to make text bigger — use CSS for that.

---

## 5. Image Optimisation

Apply to every `<img>` tag on the site.

```html
<!-- Always include descriptive alt text -->
<img
  src="/images/bridal-gown-lusaka.webp"
  alt="Custom bridal gown designed by Kamba Designs, Lusaka Zambia"
  width="800"
  height="1000"
  loading="lazy"
/>
```

**Checklist:**
- [ ] Convert all images to `.webp` format (smaller file size, faster load)
- [ ] Always set `width` and `height` attributes (prevents layout shift)
- [ ] Use `loading="lazy"` on images below the fold
- [ ] Use `loading="eager"` on the hero/above-the-fold image only
- [ ] Keep image filenames descriptive: `bridal-gown-lusaka.webp` not `IMG_0032.jpg`

---

## 6. Page Speed

Add to `<head>` to preload key resources:

```html
<!-- Preload hero image -->
<link rel="preload" as="image" href="/images/hero.webp" />

<!-- Preload main font if using Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

**Other speed tips to apply in code:**
- Minify CSS and JS files before deployment
- Add `defer` to non-critical scripts: `<script src="main.js" defer></script>`
- Enable gzip/Brotli compression on the server if self-hosting

---

## 7. Sitemap & Robots

### `robots.txt` — place at root of site (`/robots.txt`)
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### `sitemap.xml` — place at root (`/sitemap.xml`)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <priority>1.0</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://yourdomain.com/services</loc>
    <priority>0.9</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://yourdomain.com/gallery</loc>
    <priority>0.8</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://yourdomain.com/contact</loc>
    <priority>0.7</priority>
    <changefreq>yearly</changefreq>
  </url>
</urlset>
```

> After deploying, submit `sitemap.xml` to [Google Search Console](https://search.google.com/search-console).

---

## 8. WhatsApp Click-to-Chat Link (Local SEO Signal)

Replace any plain phone number display with a tappable WhatsApp link:

```html
<a
  href="https://wa.me/260972035672?text=Hello%20Kamba%20Designs%2C%20I%20would%20like%20to%20book%20a%20consultation."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with Kamba Designs on WhatsApp"
>
  Chat on WhatsApp
</a>
```

---

## 9. Mobile Responsiveness

Ensure this viewport meta tag is in every page's `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Test mobile layout at: https://search.google.com/test/mobile-friendly

---

## 10. Page-by-Page Title & Description Guide

| Page        | Title Tag                                                          | Meta Description                                                                                  |
|-------------|--------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| Home        | KAMBA Designs \| Bridal & Occasional Luxe — Lusaka, Zambia         | Bespoke bridal gowns and luxury occasional wear. Lusaka's premier fashion house. +260 972 035 672 |
| Services    | Our Services \| KAMBA Designs — Custom Bridal & Occasion Wear      | Explore custom bridal gowns, kitchen party dresses, and luxury occasion wear by Kamba Designs.    |
| Gallery     | Gallery \| KAMBA Designs — Bridal Gowns & Occasion Wear Lusaka     | Browse our portfolio of bespoke bridal gowns and stunning occasion wear created in Lusaka, Zambia.|
| Contact     | Book a Consultation \| KAMBA Designs Lusaka                        | Ready to create your dream dress? Contact Kamba Designs in Woodlands, Lusaka via WhatsApp today.  |

---

## 11. Post-Launch Checklist

- [ ] Submit site to Google Search Console and verify ownership
- [ ] Submit `sitemap.xml` in Search Console
- [ ] Set up Google Business Profile at: https://business.google.com
- [ ] Add business to Zambia Directory: https://www.zambiadirectory.com
- [ ] Test Core Web Vitals: https://pagespeed.web.dev
- [ ] Test structured data: https://search.google.com/test/rich-results
- [ ] Check mobile-friendliness: https://search.google.com/test/mobile-friendly

---

*Generated for KAMBA Designs | Lusaka, Zambia | kamba_bridal on Instagram*
