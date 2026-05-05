// Generate a Pollinations.ai image URL from a text prompt.
// Free service, no auth. Images are deterministic per (prompt, seed).
//
// Usage:
//   aiImage("elegant bride in white silk gown", { w: 900, h: 1200, seed: 42 })
//
// Note: first request to a unique URL triggers generation (a few seconds).
// Subsequent requests are served from Pollinations' cache, and once a
// next/image variant is built it's cached by Vercel/Next as well.

export function aiImage(prompt, { w = 900, h = 1200, seed = 1, model = "flux" } = {}) {
  const enc = encodeURIComponent(prompt);
  return `https://image.pollinations.ai/prompt/${enc}?width=${w}&height=${h}&seed=${seed}&nologo=true&model=${model}`;
}
