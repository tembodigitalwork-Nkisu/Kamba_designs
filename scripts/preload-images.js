// Pre-fetch every AI image listed in lib/images.js and save it as an
// optimized JPEG in public/looks/. Pollinations generates each on demand
// (slow on the first hit), so we cache locally to avoid runtime latency
// + dependency on a free third-party API.
//
// Run:  node scripts/preload-images.js
// Re-run anytime; it skips files that already exist.

const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

// Mirror of lib/images.js — the script can't import the ES module
// without bundler config. Keep the two in sync (or extract to JSON).
const MANIFEST = [
  { file: "hero.jpg",            w: 1400, h: 1750, seed: 11, prompt: "elegant African bride in flowing ivory silk wedding gown, full body editorial fashion photography, soft natural light, hand-stitched detailing, cinematic, high fashion" },
  { file: "bridal-pearl.jpg",    w: 900,  h: 1200, seed: 21, prompt: "African bride in minimalist ivory silk satin slip wedding dress, full body editorial fashion photography, soft natural light, clean studio backdrop" },
  { file: "bridal-iris.jpg",     w: 900,  h: 1200, seed: 22, prompt: "African bride in white lace mermaid wedding gown with intricate hand-cut lace details, full body fashion photography, soft natural light, elegant" },
  { file: "bridal-lily.jpg",     w: 900,  h: 1200, seed: 41, prompt: "African bride in dramatic beaded silk tulle ball gown wedding dress, full body editorial fashion photography, soft light, elegant" },
  { file: "bridal-imani.jpg",    w: 900,  h: 1200, seed: 42, prompt: "African bride in minimal A-line silk crepe wedding dress, modern bridal fashion photography, full body, clean architectural lines" },
  { file: "bridal-naledi.jpg",   w: 900,  h: 1200, seed: 43, prompt: "African bride in elegant off-shoulder column wedding gown, mikado silk, structured bodice, full body editorial fashion photography" },
  { file: "bridal-aurora.jpg",   w: 900,  h: 1200, seed: 44, prompt: "African bride in modern two-piece wedding dress with hand-pleated silk organza overskirt, contemporary bridal photography, full body" },
  { file: "occasion-tasila.jpg", w: 900,  h: 1200, seed: 23, prompt: "African woman in elegant chitenge formal dress, vibrant traditional African wax print fabric, structured tailoring, full body fashion editorial, Lusaka Zambia style" },
  { file: "occasion-mwana.jpg",  w: 900,  h: 1200, seed: 51, prompt: "elegant African woman in jewel-tone satin gala gown with cape sleeve, vibrant emerald and gold, full body editorial fashion photography, birthday celebration" },
  { file: "occasion-bupe.jpg",   w: 900,  h: 1200, seed: 52, prompt: "African woman in chic cocktail dress with asymmetric silk crepe drape, evening reception look, full body fashion editorial photography" },
  { file: "occasion-lerato.jpg", w: 900,  h: 1200, seed: 53, prompt: "African woman in elegant beaded silk midi dress with pearl details for bridal shower, soft pastel tone, full body fashion photography" },
  { file: "bespoke-teaser.jpg",  w: 1100, h: 1300, seed: 31, prompt: "close-up of hands sewing white wedding gown silk fabric in atelier workshop, fashion design studio, beading and lace, warm natural light, editorial photography" },
  { file: "bespoke-detail.jpg",  w: 900,  h: 1100, seed: 32, prompt: "close-up of African seamstress hands beading wedding gown silk fabric in atelier workshop, fashion design studio, warm natural light, editorial photography" },
  { file: "founder.jpg",         w: 900,  h: 1150, seed: 71, prompt: "elegant African woman fashion designer in her atelier studio surrounded by fabric and dressforms, professional portrait, warm natural light, editorial fashion photography, Lusaka" },
];

const OUT = path.join(__dirname, "..", "public", "looks");
const QUALITY = 82;

function urlFor(m) {
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(m.prompt)}?width=${m.w}&height=${m.h}&seed=${m.seed}&nologo=true&model=flux`;
}

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function fetchOne(m) {
  const dst = path.join(OUT, m.file);
  if (await exists(dst)) {
    console.log(`  · skip   ${m.file}  (already cached)`);
    return;
  }
  const url = urlFor(m);
  console.log(`  · fetch  ${m.file}  ${m.w}x${m.h} seed=${m.seed}`);
  // Pollinations can take 5-30s per first generation. Long timeout.
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 120_000);
  const res = await fetch(url, { signal: controller.signal });
  clearTimeout(timeout);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${m.file}`);
  const buf = Buffer.from(await res.arrayBuffer());
  // Re-encode to a slightly smaller mozjpeg progressive, strip metadata.
  await sharp(buf)
    .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
    .toFile(dst);
  const size = (await fs.stat(dst)).size;
  console.log(`           → ${(size / 1024).toFixed(0)} KB`);
}

(async () => {
  await fs.mkdir(OUT, { recursive: true });
  console.log(`Preloading ${MANIFEST.length} images → ${path.relative(process.cwd(), OUT)}/`);
  for (const m of MANIFEST) {
    try {
      await fetchOne(m);
    } catch (err) {
      console.error(`  ! ${m.file}  failed: ${err.message}`);
    }
  }
  console.log("Done.");
})();
