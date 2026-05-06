import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Coffee, Pencil, Scissors, Gift } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { localSrc } from "@/lib/images";

const BESPOKE_IMG = localSrc("bespokeDetail");

export const metadata = {
  title: "Bespoke",
  description:
    "How a bespoke Kamba piece is made — from first conversation to final stitch. Bridal gowns and occasion looks, hand-tailored in Lusaka. Starting prices from K1,500.",
};

const steps = [
  {
    no: "01",
    name: "The conversation",
    duration: "By appointment · K300 consultation",
    blurb:
      "Ninety minutes in our Woodlands atelier or on WhatsApp video. We sketch, you talk — about the day, the dress, the things you'd like to feel that morning. K300 secures your slot; waived if you commit to a piece on the day.",
    icon: Coffee,
  },
  {
    no: "02",
    name: "The drawing",
    duration: "After 60% deposit",
    blurb:
      "Once you've chosen, a 60% deposit unlocks the work. We sketch by hand and source the fabrics — silk satin, lace, kitenge, organza. Materials are always supplied by the atelier; that's how we keep quality consistent.",
    icon: Pencil,
  },
  {
    no: "03",
    name: "The fittings",
    duration: "Across 3 – 6 months",
    blurb:
      "Two to three fittings in the atelier — toile first, final fabric next. Every seam adjusted on your body, every fall pinned in person. Final 40% balance settles before the gown leaves the workroom.",
    icon: Scissors,
  },
  {
    no: "04",
    name: "The reveal",
    duration: "Final week",
    blurb:
      "Hand-beading, hemming to your shoes, finishing. We bag, label, and hand the piece over — or deliver across Lusaka, with care.",
    icon: Gift,
  },
];

const startingPrices = [
  { piece: "Bridal robes / veils",                from: 1500 },
  { piece: "Occasional dresses",                  from: 3500 },
  { piece: "Civil wedding",                       from: 4000 },
  { piece: "Wedding reception",                   from: 7500 },
  { piece: "Wedding gowns / Bridal-shower gowns", from: 10500 },
  { piece: "2-in-1 Wedding gowns",                from: 15500 },
];

export default function BespokePage() {
  return (
    <main>
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Bespoke"
            title={<>From a sketch to <span className="italic">your</span> piece — in four steps.</>}
            intro="Every Kamba gown is custom-made for one bride — never rented, never resold. The process is unhurried on purpose: most pieces take three to six months."
          />
        </div>
      </section>

      <section className="relative pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-px bg-ivory-200 border border-ivory-200">
          {steps.map(({ no, name, duration, blurb, icon: Icon }) => (
            <article key={no} className="bg-ivory-50 p-10 sm:p-12">
              <div className="flex items-start gap-6">
                <span className="font-display text-5xl text-wine-700 font-light leading-none">{no}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-ink-950" strokeWidth={1.4} />
                    <p className="editorial-eyebrow text-ink-500">{duration}</p>
                  </div>
                  <h3 className="mt-3 font-display text-3xl text-ink-950">{name}</h3>
                  <p className="mt-4 text-ink-700 leading-relaxed">{blurb}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative py-20 sm:py-28 bg-ivory-100 border-y border-ivory-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-10">
            <div className="lg:col-span-7">
              <p className="editorial-eyebrow text-wine-700">Starting prices</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-ink-950 font-light leading-[1.05]">
                Honest numbers, <span className="italic">in Kwacha.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-sm text-ink-700 leading-relaxed">
              Materials included. These are <em>starting</em> figures — final
              quote depends on fabric choice, beading, embroidery, and the
              complexity of the design. You'll see the full quote in writing
              before any cloth is cut.
            </p>
          </div>

          <ul className="bg-ivory-50 border border-ivory-200 divide-y divide-ivory-200">
            {startingPrices.map((row) => (
              <li key={row.piece} className="flex items-baseline justify-between gap-6 px-6 sm:px-10 py-5">
                <span className="font-display text-xl sm:text-2xl text-ink-950">{row.piece}</span>
                <span className="font-display text-2xl sm:text-3xl text-wine-700 whitespace-nowrap">
                  from K{row.from.toLocaleString("en-ZM")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5]">
              <Image
                src={BESPOKE_IMG}
                alt=""
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="editorial-eyebrow text-wine-700">A few notes</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-ink-950 font-light leading-tight">
              Honest answers <span className="italic">before you ask.</span>
            </h2>
            <dl className="mt-10 space-y-7">
              {[
                ["Custom only", "Every gown is made for one bride. We don't hire out, rent, or resell — and we don't reuse patterns between clients."],
                ["Lead time", "Three to six months from deposit to final fitting. Express orders are possible (full upfront payment) when the calendar allows."],
                ["Deposits & payment", "60% deposit secures your order; the 40% balance settles before the gown leaves the atelier. Express orders settle in full upfront. No refunds once the work begins."],
                ["Materials", "We source every fabric, lining, bead, and trim. Keeps the quality consistent end-to-end."],
                ["Consultation", "K300 secures the appointment slot. Waived in full if you commit to a piece on the day."],
                ["Delivery", "Across Lusaka, with care. National shipping arranged on request."],
              ].map(([k, v]) => (
                <div key={k} className="grid sm:grid-cols-[11rem_1fr] gap-2 sm:gap-6 border-b border-ivory-200 pb-7">
                  <dt className="editorial-eyebrow text-ink-500 pt-1">{k}</dt>
                  <dd className="text-ink-950 leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/appointments"
              className="mt-10 inline-flex items-center gap-2 bg-ink-950 text-ivory-50 px-6 py-3.5 text-xs tracking-[0.25em] uppercase font-medium hover:bg-wine-700 transition"
            >
              Begin with a consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
