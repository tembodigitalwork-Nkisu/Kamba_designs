# Kamba Fashion Designs

Editorial Next.js 15 marketing site for a bespoke bridal designer. Placeholder brand — global find/replace `Kamba` and `Kamba Fashion Designs` once you have the real one.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Stack

- Next.js 15 (App Router, JS)
- React 19
- Tailwind CSS 3
- `next/font/google` — Cormorant Garamond (display) + Inter (body)
- `lucide-react` for icons
- `picsum.photos` for **placeholder photography** during prototyping

## Pages

| Route | Purpose |
|---|---|
| `/` | Hero, philosophy, featured looks, bespoke teaser, testimonial, appointments CTA |
| `/collection` | Eight-look gallery (made-to-measure) |
| `/bespoke` | Four-step process (consultation → design → fittings → reveal) + FAQs |
| `/about` | Atelier story, founding principle, stats |
| `/appointments` | Consultation booking form (mailto for v1) |
| `/contact` | Map placeholder, contact channels, hours |

## Brand

| Token | Value | Use |
|---|---|---|
| `ivory-50` | `#fbf7f0` | Page background |
| `ivory-100` | `#f5ede0` | Alt sections / champagne |
| `ivory-200` | `#ece1cb` | Borders, dividers |
| `ink-950` | `#1a1410` | Primary text, dark CTAs |
| `wine-700` | `#9c2d3b` | Accent — eyebrows, primary CTA hover |
| `gold-500` | `#b89968` | Champagne gold for dark sections |

Display: `Cormorant Garamond` (light/italic). Body: `Inter` (400/500). Editorial-eyebrow utility: 0.7rem, weight 600, uppercase, 0.3em letter-spacing.

## Replace before launch

- **Photography** — every `picsum.photos/seed/...` URL is a placeholder. Swap for verified Unsplash photos (via `images.unsplash.com/photo-{id}` with confirmed IDs) or the designer's own portfolio.
- **Brand name** — `Kamba Fashion Designs`, `kamba-fashion.example` URLs in `layout.js`, `sitemap.js`, `robots.js`, schema, and contact links.
- **Phone numbers** — placeholder `+0000000000`. Replace in Footer + Contact + AppointmentForm.
- **Address** — placeholder "12 Rue de la Soie".
- **Email** — `hello@kamba-fashion.example` is fake; wire AppointmentForm to a real backend (Resend / Formspree / etc.) before going live.
- **Map** — Contact page has a styled placeholder; embed a Google Maps iframe once the atelier location is confirmed.
- **OG image** — schema points at `/og.jpg`; create a 1200×630 editorial cover before social shares.

## Deploy

`vercel` from project root. Update the placeholder URL across the three SEO files above before promoting to production.
