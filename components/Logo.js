import Link from "next/link";
import Image from "next/image";

// The real KAMBA wordmark (the designer's actual mark, from the brand kit).
// It's black line-art on a white ground, so we render it with
// `mix-blend-mode: multiply`: on the site's cream chrome the white box melts
// away and only the strokes remain — no white rectangle, no re-tracing.
// Kept lockup: hairline rule above + "Fashion Designs" caption below.
export default function Logo({ size = "md" }) {
  const sizeMap = {
    sm: { w: 92, rule: "w-9", caption: "text-[8px]", gap: "gap-1" },
    md: { w: 132, rule: "w-12", caption: "text-[10px]", gap: "gap-1.5" },
    lg: { w: 168, rule: "w-14", caption: "text-[11px]", gap: "gap-2" },
  };
  const s = sizeMap[size] ?? sizeMap.md;
  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-center ${s.gap} group`}
      aria-label="Kamba Fashion Designs, home"
    >
      <span
        aria-hidden
        className={`hidden sm:block h-px ${s.rule} bg-ink-950/30 group-hover:bg-wine-700 transition-colors`}
      />
      <Image
        src="/brand/kamba-wordmark.jpg"
        alt="KAMBA"
        width={623}
        height={263}
        priority
        sizes={`${s.w}px`}
        style={{ width: s.w, height: "auto", mixBlendMode: "multiply" }}
      />
      <span
        className={`font-sans uppercase tracking-[0.3em] ${s.caption} text-ink-700`}
      >
        Fashion Designs
      </span>
    </Link>
  );
}
