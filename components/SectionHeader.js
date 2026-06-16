export default function SectionHeader({ eyebrow, title, intro, align = "center", as: Heading = "h2" }) {
  const alignment = align === "left" ? "text-left max-w-2xl" : "text-center max-w-2xl mx-auto";
  return (
    <div className={alignment}>
      {eyebrow && <p className="editorial-eyebrow text-wine-700">{eyebrow}</p>}
      <Heading className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-light text-ink-950 leading-[1.05]">
        {title}
      </Heading>
      {intro && <p className="mt-5 text-ink-700 leading-relaxed">{intro}</p>}
    </div>
  );
}
