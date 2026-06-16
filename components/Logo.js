import Link from "next/link";

// Wordmark: thin serif "KAMBA" with hairline rule above and "Fashion Designs"
// below. Replace with the designer's actual mark when supplied.
export default function Logo({ size = "md" }) {
  const sizeMap = {
    sm: { wordmark: "text-2xl", caption: "text-[8px]", gap: "gap-0.5" },
    md: { wordmark: "text-3xl sm:text-4xl", caption: "text-[10px]", gap: "gap-1" },
    lg: { wordmark: "text-4xl sm:text-5xl", caption: "text-[11px]", gap: "gap-1.5" },
  };
  const s = sizeMap[size] ?? sizeMap.md;
  return (
    <Link href="/" className={`inline-flex flex-col items-center ${s.gap} group`} aria-label="Kamba Fashion Designs, home">
      <span className="hidden sm:block h-px w-12 bg-ink-950/30 group-hover:bg-wine-700 transition-colors" />
      <span className={`font-display font-light tracking-[0.18em] ${s.wordmark} text-ink-950 leading-none`}>
        KAMBA
      </span>
      <span className={`font-sans uppercase tracking-[0.3em] ${s.caption} text-ink-700`}>
        Fashion Designs
      </span>
    </Link>
  );
}
