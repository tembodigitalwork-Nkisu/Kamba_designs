import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { aiImage } from "@/lib/aiImage";

export const metadata = {
  title: "Collection",
  description:
    "Kamba Fashion Designs — bridal gowns and occasion looks. Hand-tailored in Woodlands, Lusaka. Each piece made to measure.",
};

const bridalLooks = [
  {
    name: "Pearl", silhouette: "Slip · Silk satin", fabric: "Silk-satin charmeuse · hand-finished",
    img: aiImage("African bride in minimalist ivory silk satin slip wedding dress, full body editorial fashion photography, soft natural light, clean studio backdrop", { w: 900, h: 1200, seed: 21 }),
  },
  {
    name: "Iris", silhouette: "Mermaid · Hand-cut lace", fabric: "Chantilly lace · pearl-buttoned",
    img: aiImage("African bride in white lace mermaid wedding gown with intricate hand-cut lace details, full body fashion photography, soft natural light, elegant", { w: 900, h: 1200, seed: 22 }),
  },
  {
    name: "Lily", silhouette: "Ball gown · Beaded", fabric: "Silk tulle · 200hr beading",
    img: aiImage("African bride in dramatic beaded silk tulle ball gown wedding dress, full body editorial fashion photography, soft light, elegant", { w: 900, h: 1200, seed: 41 }),
  },
  {
    name: "Imani", silhouette: "A-line · Crepe", fabric: "Silk crepe · clean-line architectural",
    img: aiImage("African bride in minimal A-line silk crepe wedding dress, modern bridal fashion photography, full body, clean architectural lines", { w: 900, h: 1200, seed: 42 }),
  },
  {
    name: "Naledi", silhouette: "Off-shoulder column", fabric: "Mikado silk · structured bodice",
    img: aiImage("African bride in elegant off-shoulder column wedding gown, mikado silk, structured bodice, full body editorial fashion photography", { w: 900, h: 1200, seed: 43 }),
  },
  {
    name: "Aurora", silhouette: "Convertible · Two-piece", fabric: "Silk organza · hand-pleated overskirt",
    img: aiImage("African bride in modern two-piece wedding dress with hand-pleated silk organza overskirt, contemporary bridal photography, full body", { w: 900, h: 1200, seed: 44 }),
  },
];

const occasionLooks = [
  {
    name: "Tasila", silhouette: "Kitenge formal", fabric: "Hand-pieced wax print · structured collar",
    img: aiImage("African woman in elegant chitenge formal dress, vibrant traditional African wax print fabric, structured tailoring, full body fashion editorial, Lusaka Zambia style", { w: 900, h: 1200, seed: 23 }),
  },
  {
    name: "Mwana", silhouette: "Birthday gala gown", fabric: "Jewel-tone satin · cape sleeve",
    img: aiImage("elegant African woman in jewel-tone satin gala gown with cape sleeve, vibrant emerald and gold, full body editorial fashion photography, birthday celebration", { w: 900, h: 1200, seed: 51 }),
  },
  {
    name: "Bupe", silhouette: "Cocktail · Reception", fabric: "Silk crepe · asymmetric drape",
    img: aiImage("African woman in chic cocktail dress with asymmetric silk crepe drape, evening reception look, full body fashion editorial photography", { w: 900, h: 1200, seed: 52 }),
  },
  {
    name: "Lerato", silhouette: "Bridal-shower midi", fabric: "Beaded silk · pearl detail",
    img: aiImage("African woman in elegant beaded silk midi dress with pearl details for bridal shower, soft pastel tone, full body fashion photography", { w: 900, h: 1200, seed: 53 }),
  },
];

export default function CollectionPage() {
  return (
    <main>
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="The Collection · 2026"
            title={<>Bridal &amp; <span className="italic">occasion luxe.</span></>}
            intro="Two lines, one workroom. Bridal — for the day. Occasion — for everything around it. Pricing on request; every piece is made to your measurements."
          />
        </div>
      </section>

      <LookGrid id="bridal" eyebrow="Bridal" title={<>For the day <span className="italic">you say yes.</span></>} looks={bridalLooks} />

      <div className="border-t border-ivory-200" />

      <LookGrid id="occasion" eyebrow="Occasion Luxe" title={<>For the <span className="italic">days around it.</span></>} looks={occasionLooks} />

      <section className="relative py-20 bg-ivory-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <p className="font-display text-3xl sm:text-4xl text-ink-950 font-light leading-snug">
            None of these the right one?<br />
            <span className="italic">Begin a bespoke commission.</span>
          </p>
          <Link
            href="/bespoke"
            className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-medium border border-wine-700 text-wine-700 px-6 py-3.5 hover:bg-wine-700 hover:text-ivory-50 transition"
          >
            Start your design <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function LookGrid({ id, eyebrow, title, looks }) {
  return (
    <section id={id} className="relative py-16 sm:py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex items-baseline justify-between gap-6 flex-wrap">
          <div>
            <p className="editorial-eyebrow text-wine-700">{eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-ink-950 font-light leading-tight">{title}</h2>
          </div>
          <p className="text-sm text-ink-500 italic">All pieces made to measure · Lusaka</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {looks.map((l, i) => (
            <article key={l.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-ivory-100">
                <Image
                  src={l.img}
                  alt={`${l.name} — ${l.silhouette}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.02]"
                />
                <span aria-hidden className="absolute top-4 left-4 bg-ivory-50/90 backdrop-blur px-2.5 py-1 text-[10px] tracking-[0.3em] uppercase text-ink-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl text-ink-950">{l.name}</h3>
                  <span className="text-xs italic text-ink-500">{l.silhouette}</span>
                </div>
                <p className="mt-2 text-xs text-ink-700 leading-relaxed">{l.fabric}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
