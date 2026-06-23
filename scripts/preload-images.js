// Pre-fetch every AI image listed in the manifest below and save it as
// an optimized JPEG in public/looks/. Pollinations generates each on
// demand (slow on first hit), so we cache locally to avoid runtime
// latency + dependency on a free third-party API.
//
// Run:  node scripts/preload-images.js
// Re-run anytime; skips files that already exist. To force a re-fetch,
// delete public/looks/ first.

const fs = require("node:fs/promises");
const path = require("node:path");

// sharp is optional: when present we re-encode to an optimized progressive
// mozjpeg, otherwise we write Pollinations' JPEG bytes straight to disk.
// This keeps the script runnable in environments where sharp isn't
// installed (e.g. no registry access) without degrading the result much.
let sharp = null;
try { sharp = require("sharp"); } catch { /* fall back to raw write */ }

// Photography style modifiers appended to every prompt. Every garment is
// shown on a headless tailor's dress form (no human model) — AI is worst
// at faces and hands, and a dress form has neither, so the result reads
// as a clean boutique product shot instead of an uncanny fake person.
const STYLE = "displayed on an elegant headless tailor's dress form mannequin, no person, no model, no face, no hands, product still life, luxury bridal boutique lighting, shot on Hasselblad H6D, soft natural light, sharp focus, ultra high resolution, editorial catalogue quality, color-graded";
const HD_MODEL = "flux-realism"; // photorealistic variant
const QUALITY = 90;

const MANIFEST = [
  { file: "hero.jpg",            w: 1600, h: 2000, seed: 11,
    prompt: `a flowing ivory silk wedding gown with hand-stitched lace detailing, full gown visible head to hem, ethereal, ${STYLE}` },
  { file: "bridal-pearl.jpg",    w: 1200, h: 1600, seed: 21,
    prompt: `a minimalist ivory silk satin slip wedding dress, clean ivory studio backdrop, full gown visible, ${STYLE}` },
  { file: "bridal-iris.jpg",     w: 1200, h: 1600, seed: 22,
    prompt: `a white lace mermaid wedding gown with intricate hand-cut Chantilly lace, soft window light, full gown visible, ${STYLE}` },
  { file: "bridal-lily.jpg",     w: 1200, h: 1600, seed: 41,
    prompt: `a dramatic beaded silk tulle ball gown wedding dress, voluminous skirt, intricate hand beadwork catching the light, full gown visible, ${STYLE}` },
  { file: "bridal-imani.jpg",    w: 1200, h: 1600, seed: 42,
    prompt: `a minimal A-line silk crepe wedding dress, modern architectural lines, contemporary bridal couture, full gown visible, ${STYLE}` },
  { file: "bridal-naledi.jpg",   w: 1200, h: 1600, seed: 43,
    prompt: `an elegant off-shoulder column wedding gown in mikado silk with a structured bodice, statuesque, full gown visible, ${STYLE}` },
  { file: "bridal-aurora.jpg",   w: 1200, h: 1600, seed: 44,
    prompt: `a modern two-piece wedding dress with a hand-pleated silk organza overskirt, contemporary couture, full gown visible, ${STYLE}` },
  { file: "occasion-tasila.jpg", w: 1200, h: 1600, seed: 23,
    prompt: `a regal chitenge formal dress in vibrant traditional African wax print fabric, structured tailoring with pleated detailing, golden-hour light, Lusaka Zambia editorial, full garment visible, ${STYLE}` },
  { file: "occasion-mwana.jpg",  w: 1200, h: 1600, seed: 51,
    prompt: `a jewel-tone emerald satin gala gown with a statement cape sleeve, opulent, full gown visible, ${STYLE}` },
  { file: "occasion-bupe.jpg",   w: 1200, h: 1600, seed: 52,
    prompt: `a chic cocktail dress with an asymmetric silk crepe drape in a deep wine tone, modern evening look, full garment visible, ${STYLE}` },
  { file: "occasion-lerato.jpg", w: 1200, h: 1600, seed: 53,
    prompt: `an elegant beaded silk midi dress with a pearl-detail neckline in a soft blush palette, full garment visible, ${STYLE}` },
  { file: "bespoke-teaser.jpg",  w: 1400, h: 1700, seed: 31,
    prompt: `close-up of a white wedding gown bodice with intricate beading and Chantilly lace on a headless dress form, warm window light, fashion atelier, no person, no hands, ${STYLE}` },
  { file: "bespoke-detail.jpg",  w: 1200, h: 1500, seed: 32,
    prompt: `macro close-up of intricate hand-beading and lace detail on white wedding gown silk fabric, no person, no hands, warm natural light, ${STYLE}` },
  { file: "founder.jpg",         w: 1200, h: 1500, seed: 71,
    prompt: `interior of a luxury bridal atelier studio, an ivory wedding gown on a dress form beside fabric bolts, spools of thread, paper sketches and a sewing table, warm natural window light, Lusaka, no person, editorial interior still life, ${STYLE}` },
  // Social-share cover (Open Graph / Twitter). Landscape 1200x630 — the
  // ratio Facebook, WhatsApp & X expect. Lands at public/og.jpg (site
  // root), matching the og:image / twitter:image path in app/layout.js.
  { file: "og.jpg",              w: 1200, h: 630,  seed: 91, root: true,
    prompt: `a flowing ivory silk wedding gown with hand-stitched lace detailing alongside a vibrant chitenge formal dress, luxury bridal boutique, wide landscape composition with negative space, ${STYLE}` },
];

const OUT = path.join(__dirname, "..", "public", "looks");
const PUBLIC = path.join(__dirname, "..", "public");

function urlFor(m) {
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(m.prompt)}?width=${m.w}&height=${m.h}&seed=${m.seed}&nologo=true&model=${HD_MODEL}`;
}

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function fetchOne(m) {
  const dst = path.join(m.root ? PUBLIC : OUT, m.file);
  if (await exists(dst)) {
    console.log(`  · skip   ${m.file}  (already cached — delete to re-fetch)`);
    return;
  }
  const url = urlFor(m);
  console.log(`  · fetch  ${m.file}  ${m.w}x${m.h}  seed=${m.seed}  model=${HD_MODEL}`);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 180_000);
  let res;
  try {
    res = await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${m.file}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (sharp) {
    await sharp(buf)
      .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
      .toFile(dst);
  } else {
    await fs.writeFile(dst, buf);
  }
  const size = (await fs.stat(dst)).size;
  console.log(`           → ${(size / 1024).toFixed(0)} KB`);
}

(async () => {
  await fs.mkdir(OUT, { recursive: true });
  console.log(`Preloading ${MANIFEST.length} images → ${path.relative(process.cwd(), OUT)}/  (model: ${HD_MODEL}, quality: ${QUALITY})`);
  for (const m of MANIFEST) {
    try {
      await fetchOne(m);
    } catch (err) {
      console.error(`  ! ${m.file}  failed: ${err.message}`);
    }
  }
  console.log("Done.");
})();
