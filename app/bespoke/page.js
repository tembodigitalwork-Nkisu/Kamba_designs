import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Coffee, Pencil, Scissors, Gift } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { localSrc } from "@/lib/images";

const BESPOKE_IMG = localSrc("bespokeDetail");

export const metadata = {
  title: "Bespoke",
  description:
    "How a bespoke Kamba piece is made — from first conversation to final stitch. Bridal gowns and occasion looks, hand-tailored in Lusaka.",
};

const steps = [
  {
    no: "01",
    name: "The conversation",
    duration: "By appointment",
    blurb:
      "Ninety minutes, in our Woodlands atelier or on WhatsApp video. We sketch, you talk — about the day, the dress, the things you'd like to feel that morning. No commitment, no fee.",
    icon: Coffee,
  },
  {
    no: "02",
    name: "The drawing",
    duration: "Weeks 1 – 4",
    blurb:
      "We sketch by hand and swatch fabrics together — silk satin, lace, kitenge, organza. You'll see two or three concept directions before we choose the one we'll cut.",
    icon: Pencil,
  },
  {
    no: "03",
    name: "The fittings",
    duration: "Weeks 4 – 12",
    blurb:
      "Two to three fittings in our atelier — toile first, final fabric next. Every seam adjusted to your body, every fall pinned in person.",
    icon: Scissors,
  },
  {
    no: "04",
    name: "The reveal",
    duration: "Two weeks before",
    blurb:
      "Final beading, hand-finishing, hemming to your shoes. We bag, label, and hand it over — or deliver in Lusaka, with care.",
    icon: Gift,
  },
];

export default function BespokePage() {
  return (
    <main>
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Bespoke"
            title={<>From a sketch to <span className="italic">your</span> piece — in four steps.</>}
            intro="Whether you want a bridal gown or an occasion look, the process is the same: unhurried, hand-tailored, and made entirely in Lusaka."
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

      <section className="relative py-20 sm:py-28 bg-ivory-100">
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
                ["Pricing", "Bespoke pieces are quoted at consultation. Bridal gowns sit higher; occasion pieces lower. Every quote in writing — in Kwacha — before any cloth is cut."],
                ["Lead time", "Bridal: three to six months is the gentle minimum. Occasion: four to eight weeks for most pieces. Rush surcharge applies under that."],
                ["Delivery", "We deliver across Lusaka and ship nationally. Travel fittings can be arranged for clients outside the city."],
                ["Fabrics", "Silks, laces, satins, and locally-sourced kitenge / chitenge — always your choice, always shown to you in swatch before commitment."],
              ].map(([k, v]) => (
                <div key={k} className="grid sm:grid-cols-[10rem_1fr] gap-2 sm:gap-6 border-b border-ivory-200 pb-7">
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
