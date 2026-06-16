import { Quote } from "lucide-react";

// NOTE: this was a fabricated customer quote ("Eloise R. · SS25"). Replaced
// with a brand-voice promise so nothing on the live site invents a client.
// Swap in a real, attributable review once one is available.
export default function Testimonial() {
  return (
    <section className="relative py-14 sm:py-28 bg-ivory-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <Quote className="h-7 w-7 text-wine-700 mx-auto" strokeWidth={1.2} />
        <blockquote className="mt-6 font-display text-2xl sm:text-3xl lg:text-4xl text-ink-950 font-light leading-snug italic">
          "Every gown leaves this atelier made for one person, one day, one
          story. Never rented, never resold, never the same twice."
        </blockquote>
        <figcaption className="mt-8 editorial-eyebrow text-ink-500">
          The Kamba promise
        </figcaption>
      </div>
    </section>
  );
}
