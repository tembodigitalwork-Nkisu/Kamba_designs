// Manifest of every AI-generated image the site uses. Single source of
// truth for both the runtime <Image> src AND the preload script that
// downloads each from Pollinations and writes it to public/looks/.
//
// Re-generate by:  node scripts/preload-images.js
// (re-runs only fetch any files missing from public/looks/)

export const IMAGES = {
  hero: {
    file: "hero.jpg",
    prompt: "elegant African bride in flowing ivory silk wedding gown, full body editorial fashion photography, soft natural light, hand-stitched detailing, cinematic, high fashion",
    width: 1400, height: 1750, seed: 11,
    alt: "Editorial bridal cover",
  },
  bridalPearl: {
    file: "bridal-pearl.jpg",
    prompt: "African bride in minimalist ivory silk satin slip wedding dress, full body editorial fashion photography, soft natural light, clean studio backdrop",
    width: 900, height: 1200, seed: 21,
    alt: "Pearl — slip wedding dress",
  },
  bridalIris: {
    file: "bridal-iris.jpg",
    prompt: "African bride in white lace mermaid wedding gown with intricate hand-cut lace details, full body fashion photography, soft natural light, elegant",
    width: 900, height: 1200, seed: 22,
    alt: "Iris — lace mermaid gown",
  },
  bridalLily: {
    file: "bridal-lily.jpg",
    prompt: "African bride in dramatic beaded silk tulle ball gown wedding dress, full body editorial fashion photography, soft light, elegant",
    width: 900, height: 1200, seed: 41,
    alt: "Lily — beaded ball gown",
  },
  bridalImani: {
    file: "bridal-imani.jpg",
    prompt: "African bride in minimal A-line silk crepe wedding dress, modern bridal fashion photography, full body, clean architectural lines",
    width: 900, height: 1200, seed: 42,
    alt: "Imani — A-line crepe",
  },
  bridalNaledi: {
    file: "bridal-naledi.jpg",
    prompt: "African bride in elegant off-shoulder column wedding gown, mikado silk, structured bodice, full body editorial fashion photography",
    width: 900, height: 1200, seed: 43,
    alt: "Naledi — off-shoulder column",
  },
  bridalAurora: {
    file: "bridal-aurora.jpg",
    prompt: "African bride in modern two-piece wedding dress with hand-pleated silk organza overskirt, contemporary bridal photography, full body",
    width: 900, height: 1200, seed: 44,
    alt: "Aurora — two-piece convertible",
  },
  occasionTasila: {
    file: "occasion-tasila.jpg",
    prompt: "African woman in elegant chitenge formal dress, vibrant traditional African wax print fabric, structured tailoring, full body fashion editorial, Lusaka Zambia style",
    width: 900, height: 1200, seed: 23,
    alt: "Tasila — chitenge formal",
  },
  occasionMwana: {
    file: "occasion-mwana.jpg",
    prompt: "elegant African woman in jewel-tone satin gala gown with cape sleeve, vibrant emerald and gold, full body editorial fashion photography, birthday celebration",
    width: 900, height: 1200, seed: 51,
    alt: "Mwana — birthday gala",
  },
  occasionBupe: {
    file: "occasion-bupe.jpg",
    prompt: "African woman in chic cocktail dress with asymmetric silk crepe drape, evening reception look, full body fashion editorial photography",
    width: 900, height: 1200, seed: 52,
    alt: "Bupe — cocktail / reception",
  },
  occasionLerato: {
    file: "occasion-lerato.jpg",
    prompt: "African woman in elegant beaded silk midi dress with pearl details for bridal shower, soft pastel tone, full body fashion photography",
    width: 900, height: 1200, seed: 53,
    alt: "Lerato — bridal shower midi",
  },
  bespokeTeaser: {
    file: "bespoke-teaser.jpg",
    prompt: "close-up of hands sewing white wedding gown silk fabric in atelier workshop, fashion design studio, beading and lace, warm natural light, editorial photography",
    width: 1100, height: 1300, seed: 31,
    alt: "Atelier hands at work",
  },
  bespokeDetail: {
    file: "bespoke-detail.jpg",
    prompt: "close-up of African seamstress hands beading wedding gown silk fabric in atelier workshop, fashion design studio, warm natural light, editorial photography",
    width: 900, height: 1100, seed: 32,
    alt: "Hand-beading detail",
  },
  founder: {
    file: "founder.jpg",
    prompt: "elegant African woman fashion designer in her atelier studio surrounded by fabric and dressforms, professional portrait, warm natural light, editorial fashion photography, Lusaka",
    width: 900, height: 1150, seed: 71,
    alt: "Chikondi M., founder & lead designer",
  },
};

// Build the public/looks/ path for a given key.
export function localSrc(key) {
  const m = IMAGES[key];
  if (!m) throw new Error(`Unknown image key: ${key}`);
  return `/looks/${m.file}`;
}

// Pollinations URL — used by the preload script (and as a runtime
// fallback if the local file isn't available yet during dev).
export function pollinationsUrl(key) {
  const m = IMAGES[key];
  if (!m) throw new Error(`Unknown image key: ${key}`);
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(m.prompt)}?width=${m.width}&height=${m.height}&seed=${m.seed}&nologo=true&model=flux`;
}
