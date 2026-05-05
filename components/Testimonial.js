import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="relative py-20 sm:py-28 bg-ivory-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <Quote className="h-7 w-7 text-wine-700 mx-auto" strokeWidth={1.2} />
        <blockquote className="mt-6 font-display text-2xl sm:text-3xl lg:text-4xl text-ink-950 font-light leading-snug italic">
          "I didn't want a wedding dress. I wanted{" "}
          <span className="not-italic font-normal">my</span> dress.
          Kamba made it, and I'll keep it forever."
        </blockquote>
        <figcaption className="mt-8 editorial-eyebrow text-ink-500">
          — Eloise R. · Bride · SS25
        </figcaption>
      </div>
    </section>
  );
}
