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
const sharp = require("sharp");

// Photography style modifiers appended to every prompt. Pulls AI output
// closer to editorial fashion photography (vs the slightly cartoony
// default flux look).
const STYLE = "Vogue editorial fashion photography, shot on Hasselblad H6D, 85mm portrait lens, soft natural light, sharp focus, ultra high resolution, magazine cover quality, color-graded, cinematic";
const HD_MODEL = "flux-realism"; // photorealistic variant
const QUALITY = 90;

const MANIFEST = [
  { file: "hero.jpg",            w: 1600, h: 2000, seed: 11,
    prompt: `elegant African bride in flowing ivory silk wedding gown, full body, hand-stitched lace detailing, ethereal, ${STYLE}` },
  { file: "bridal-pearl.jpg",    w: 1200, h: 1600, seed: 21,
    prompt: `stunning African bride in minimalist ivory silk satin slip wedding dress, full body portrait, clean ivory studio backdrop, ${STYLE}` },
  { file: "bridal-iris.jpg",     w: 1200, h: 1600, seed: 22,
    prompt: `African bride in white lace mermaid wedding gown with intricate hand-cut Chantilly lace details, full body, soft window light, elegant pose, ${STYLE}` },
  { file: "bridal-lily.jpg",     w: 1200, h: 1600, seed: 41,
    prompt: `African bride in dramatic beaded silk tulle ball gown wedding dress, voluminous skirt, intricate hand beadwork catching the light, full body, ${STYLE}` },
  { file: "bridal-imani.jpg",    w: 1200, h: 1600, seed: 42,
    prompt: `African bride in minimal A-line silk crepe wedding dress, modern architectural lines, full body, contemporary bridal couture, ${STYLE}` },
  { file: "bridal-naledi.jpg",   w: 1200, h: 1600, seed: 43,
    prompt: `African bride in elegant off-shoulder column wedding gown, mikado silk, structured bodice, full body, statuesque, ${STYLE}` },
  { file: "bridal-aurora.jpg",   w: 1200, h: 1600, seed: 44,
    prompt: `African bride in modern two-piece wedding dress with hand-pleated silk organza overskirt, contemporary couture, full body, fashion-forward, ${STYLE}` },
  { file: "occasion-tasila.jpg", w: 1200, h: 1600, seed: 23,
    prompt: `elegant African woman in regal chitenge formal dress, vibrant traditional African wax print fabric, structured tailoring with pleated detailing, full body, golden-hour light, Lusaka Zambia editorial, ${STYLE}` },
  { file: "occasion-mwana.jpg",  w: 1200, h: 1600, seed: 51,
    prompt: `elegant African woman in jewel-tone emerald satin gala gown with statement cape sleeve, full body, opulent, ${STYLE}` },
  { file: "occasion-bupe.jpg",   w: 1200, h: 1600, seed: 52,
    prompt: `chic African woman in cocktail dress with asymmetric silk crepe drape, deep wine tone, evening reception, full body, modern, ${STYLE}` },
  { file: "occasion-lerato.jpg", w: 1200, h: 1600, seed: 53,
    prompt: `African woman in elegant beaded silk midi dress with pearl-detail neckline for bridal shower, soft blush palette, full body, ${STYLE}` },
  { file: "bespoke-teaser.jpg",  w: 1400, h: 1700, seed: 31,
    prompt: `intimate close-up of skilled hands sewing white wedding gown silk fabric on a tailor's table in atelier workshop, beading and lace details, warm window light, fashion atelier, ${STYLE}` },
  { file: "bespoke-detail.jpg",  w: 1200, h: 1500, seed: 32,
    prompt: `intimate close-up of African seamstress hands hand-beading wedding gown silk fabric in atelier workshop, intricate detail work, warm natural light, ${STYLE}` },
  { file: "founder.jpg",         w: 1200, h: 1500, seed: 71,
    prompt: `confident African woman fashion designer in her atelier studio surrounded by fabric bolts and dressforms, professional editorial portrait, warm natural window light, Lusaka, ${STYLE}` },
];

const OUT = path.join(__dirname, "..", "public", "looks");

function urlFor(m) {
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(m.prompt)}?width=${m.w}&height=${m.h}&seed=${m.seed}&nologo=true&model=${HD_MODEL}`;
}

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function fetchOne(m) {
  const dst = path.join(OUT, m.file);
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
  await sharp(buf)
    .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
    .toFile(dst);
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
