import Image from "next/image";
import Link from "next/link";
import { Award } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { localSrc } from "@/lib/images";

const FOUNDER_IMG = localSrc("founder");

export const metadata = {
  title: "About / The House",
  description:
    "Kamba Fashion Designs is a Lusaka-based fashion house led by Chikondi Mwanza. Bridal and occasion luxe, hand-tailored in Woodlands.",
};

const awards = [
  { year: "2016", body: "Designer of 2016 (Nominee)", source: "Zambia Fashion Week" },
  { year: "2016", body: "Best Fashion Designer of 2016", source: "Zee Creative Awards" },
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            as="h1"
            eyebrow="The House"
            title={<>Bridal &amp; occasion luxe, <span className="italic">made in Lusaka.</span></>}
            intro="Kamba Fashion Designs is a small fashion house in Woodlands, Lusaka, led by founder, CEO and lead designer Chikondi Mwanza. We design and tailor bridal gowns, bridal-shower outfits, kitenge formal pieces, and occasion looks for clients across Zambia and beyond."
          />
        </div>
      </section>

      <section className="relative pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5]">
              <Image
                src={FOUNDER_IMG}
                alt="Chikondi Mwanza, founder and lead designer, in the Kamba atelier"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 editorial-eyebrow text-ink-500">Chikondi Mwanza, founder &amp; lead designer.</p>
          </div>
          <div className="lg:col-span-7 space-y-6 text-ink-700 leading-relaxed">
            <p className="text-lg">
              Kamba grew out of a tailoring practice that began with a single bridal commission and
              never quite stopped. The brand is led by Chikondi Mwanza, who acts as both CEO and lead
              designer, with a small team of cutters and beaders working out of the Woodlands atelier.
            </p>
            <p>
              The house specialises in two things. Bridal: gowns, bridal-shower outfits, party
              looks for the people standing next to the bride. And occasion luxe: kitenge and
              chitenge formal pieces, birthday-gala outfits, event styling for the toasts and
              receptions and dance floors that come after the aisle.
            </p>
            <p>
              We make in Zambia and we deliver to clients across the country. Most pieces are
              bespoke; some sit ready-to-order. Every garment is tailored, finished, and
              quality-checked in the same workroom by hand.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-px bg-ivory-200 border border-ivory-200">
              {[
                ["Founded by", "Chikondi Mwanza"],
                ["Located in", "Njase Close #4, Woodlands ext., Lusaka"],
                ["Specialism", "Bridal & occasion luxe"],
                ["Made in", "Zambia, by hand"],
              ].map(([k, v]) => (
                <div key={k} className="bg-ivory-50 p-6">
                  <p className="editorial-eyebrow text-wine-700">{k}</p>
                  <p className="mt-2 font-display text-2xl text-ink-950">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-ivory-100 border-y border-ivory-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-baseline justify-between gap-6 mb-10 flex-wrap">
            <div>
              <p className="editorial-eyebrow text-wine-700">Recognition</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink-950 font-light leading-tight">
                Kamba in 2016: <span className="italic">credibility, kept.</span>
              </h2>
            </div>
            <p className="text-sm text-ink-500 max-w-sm italic">
              Awards from a decade ago. We mention them for context, not momentum.
              The current work speaks for itself on Instagram.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-px bg-ivory-200 border border-ivory-200">
            {awards.map((a) => (
              <li key={a.body} className="bg-ivory-50 p-8 flex items-start gap-5">
                <span className="grid place-items-center h-12 w-12 rounded-full border border-wine-700/30 shrink-0">
                  <Award className="h-5 w-5 text-wine-700" strokeWidth={1.4} />
                </span>
                <div>
                  <p className="editorial-eyebrow text-ink-500">{a.year}</p>
                  <p className="mt-2 font-display text-xl text-ink-950 leading-snug">{a.body}</p>
                  <p className="mt-1 text-sm text-ink-700 italic">{a.source}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative py-20 sm:py-28 bg-ink-950 text-ivory-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-snug">
            "We don't sell off the rack. <br />
            <span className="italic">We tailor for the person, the day, the photograph that survives it."</span>
          </p>
          <p className="mt-8 editorial-eyebrow text-gold-300">Chikondi Mwanza · Founder</p>

          <Link
            href="/appointments"
            className="mt-10 inline-flex items-center gap-2 border border-gold-500 text-gold-500 px-6 py-3.5 text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-500 hover:text-ink-950 transition"
          >
            Book a consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
