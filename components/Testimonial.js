import { Quote } from "lucide-react";

// A real, attributable quote: Chikondi's own words to a bridal-shower
// client, lightly tidied from Kamba's social posts. This replaces the
// earlier brand-voice placeholder, nothing here is an invented client.
export default function Testimonial() {
  return (
    <section className="relative py-14 sm:py-28 bg-ivory-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <Quote className="h-7 w-7 text-wine-700 mx-auto" strokeWidth={1.2} />
        <blockquote className="mt-6 font-display text-2xl sm:text-3xl lg:text-4xl text-ink-950 font-light leading-snug italic">
          "Thank you for allowing me to design this gown for your bridal
          shower. You trusted me, and I appreciate it from the bottom of
          my heart."
        </blockquote>
        <figcaption className="mt-8 editorial-eyebrow text-ink-500">
          Chikondi Mwanza · to a Kamba bride
        </figcaption>
      </div>
    </section>
  );
}
