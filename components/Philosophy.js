import { Scissors, Sparkles, MapPin } from "lucide-react";

const pillars = [
  {
    title: "Hand-tailored in Lusaka",
    desc: "Every gown and occasion piece is cut, stitched, and finished in our Woodlands workroom, never sent out, never assembled by line.",
    icon: Scissors,
  },
  {
    title: "Bridal & occasion both",
    desc: "Wedding gowns, bridal-shower outfits, kitenge formal pieces, birthday looks, event styling. One design house for the day and the days around it.",
    icon: Sparkles,
  },
  {
    title: "Made-in-Zambia, by hand",
    desc: "From fabric sourcing to last stitch, the work stays local. Materials chosen by Chikondi, fittings by appointment in our atelier.",
    icon: MapPin,
  },
];

export default function Philosophy() {
  return (
    <section className="relative py-14 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="editorial-eyebrow text-wine-700">The House</p>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl text-ink-950 font-light leading-tight">
            A fashion house. <span className="italic">Not a label.</span>
          </h2>
          <p className="mt-6 text-ink-700 leading-relaxed">
            Kamba is led by Chikondi Mwanza, founder, CEO, and lead designer.
            The work is bridal first, occasion-luxe second, and unhurried by design.
          </p>
        </div>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-ivory-200">
          {pillars.map(({ title, desc, icon: Icon }) => (
            <article key={title} className="bg-ivory-50 p-8 sm:p-10">
              <Icon className="h-6 w-6 text-wine-700" strokeWidth={1.4} />
              <h3 className="mt-6 font-display text-2xl text-ink-950">{title}</h3>
              <p className="mt-3 text-sm text-ink-700 leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
