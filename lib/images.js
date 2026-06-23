// Manifest of every AI-generated image the site uses. Single source of
// truth for both the runtime <Image> src AND the preload script that
// downloads each from Pollinations and writes it to public/looks/.
//
// Every garment is shown on a headless tailor's dress form (no human
// model). AI is worst at faces and hands; a dress form has neither, so
// the result reads as a clean boutique product shot, not a fake person.
//
// Re-generate by:  node scripts/preload-images.js
// (re-runs only fetch any files missing from public/looks/)

const FORM = "displayed on an elegant headless tailor's dress form mannequin, no person, no model, no face, no hands, product still life, luxury bridal boutique lighting, editorial catalogue quality";

export const IMAGES = {
  hero: {
    file: "hero.jpg",
    prompt: `a flowing ivory silk wedding gown with hand-stitched lace detailing, full gown visible, ${FORM}`,
    width: 1400, height: 1750, seed: 11,
    alt: "Ivory silk wedding gown on a dress form",
  },
  bridalPearl: {
    file: "bridal-pearl.jpg",
    prompt: `a minimalist ivory silk satin slip wedding dress, clean studio backdrop, ${FORM}`,
    width: 900, height: 1200, seed: 21,
    alt: "Pearl, slip wedding dress",
  },
  bridalIris: {
    file: "bridal-iris.jpg",
    prompt: `a white lace mermaid wedding gown with intricate hand-cut lace details, ${FORM}`,
    width: 900, height: 1200, seed: 22,
    alt: "Iris, lace mermaid gown",
  },
  bridalLily: {
    file: "bridal-lily.jpg",
    prompt: `a dramatic beaded silk tulle ball gown wedding dress, ${FORM}`,
    width: 900, height: 1200, seed: 41,
    alt: "Lily, beaded ball gown",
  },
  bridalImani: {
    file: "bridal-imani.jpg",
    prompt: `a minimal A-line silk crepe wedding dress, clean architectural lines, ${FORM}`,
    width: 900, height: 1200, seed: 42,
    alt: "Imani, A-line crepe",
  },
  bridalNaledi: {
    file: "bridal-naledi.jpg",
    prompt: `an elegant off-shoulder column wedding gown in mikado silk with a structured bodice, ${FORM}`,
    width: 900, height: 1200, seed: 43,
    alt: "Naledi, off-shoulder column",
  },
  bridalAurora: {
    file: "bridal-aurora.jpg",
    prompt: `a modern two-piece wedding dress with a hand-pleated silk organza overskirt, ${FORM}`,
    width: 900, height: 1200, seed: 44,
    alt: "Aurora, two-piece convertible",
  },
  occasionTasila: {
    file: "occasion-tasila.jpg",
    prompt: `an elegant chitenge formal dress in vibrant traditional African wax print fabric, structured tailoring, Lusaka Zambia style, ${FORM}`,
    width: 900, height: 1200, seed: 23,
    alt: "Tasila, chitenge formal",
  },
  occasionMwana: {
    file: "occasion-mwana.jpg",
    prompt: `a jewel-tone emerald and gold satin gala gown with a cape sleeve, ${FORM}`,
    width: 900, height: 1200, seed: 51,
    alt: "Mwana, birthday gala",
  },
  occasionBupe: {
    file: "occasion-bupe.jpg",
    prompt: `a chic cocktail dress with an asymmetric silk crepe drape, evening reception look, ${FORM}`,
    width: 900, height: 1200, seed: 52,
    alt: "Bupe, cocktail / reception",
  },
  occasionLerato: {
    file: "occasion-lerato.jpg",
    prompt: `an elegant beaded silk midi dress with pearl details in a soft pastel tone, ${FORM}`,
    width: 900, height: 1200, seed: 53,
    alt: "Lerato, bridal shower midi",
  },
  bespokeTeaser: {
    file: "bespoke-teaser.jpg",
    prompt: "close-up of a white wedding gown bodice with beading and lace on a headless dress form, atelier workshop, warm natural light, no person, no hands, editorial photography",
    width: 1100, height: 1300, seed: 31,
    alt: "Beaded bodice detail in the atelier",
  },
  bespokeDetail: {
    file: "bespoke-detail.jpg",
    prompt: "macro close-up of intricate beading and lace detail on white wedding gown silk fabric, atelier workshop, warm natural light, no person, no hands, editorial photography",
    width: 900, height: 1100, seed: 32,
    alt: "Hand-beading detail",
  },
  founder: {
    file: "founder.jpg",
    prompt: "interior of a luxury bridal atelier studio, an ivory wedding gown on a dress form beside fabric bolts, thread and paper sketches, warm natural light, Lusaka, no person, editorial interior still life",
    width: 900, height: 1150, seed: 71,
    alt: "Inside the Kamba atelier",
  },
};

// Build the public/looks/ path for a given key.
export function localSrc(key) {
  const m = IMAGES[key];
  if (!m) throw new Error(`Unknown image key: ${key}`);
  return `/looks/${m.file}`;
}

// Descriptive alt text for a given key. Keeps alt copy in the manifest
// (the single source of truth) instead of scattered across components,
// so every <Image> ships SEO-friendly alt text.
export function localAlt(key) {
  const m = IMAGES[key];
  if (!m) throw new Error(`Unknown image key: ${key}`);
  return m.alt;
}

// Pollinations URL, used by the preload script (and as a runtime
// fallback if the local file isn't available yet during dev).
export function pollinationsUrl(key) {
  const m = IMAGES[key];
  if (!m) throw new Error(`Unknown image key: ${key}`);
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(m.prompt)}?width=${m.width}&height=${m.height}&seed=${m.seed}&nologo=true&model=flux`;
}
