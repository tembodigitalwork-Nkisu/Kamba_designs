import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { aiImage } from "@/lib/aiImage";

const TEASER_IMG = aiImage(
  "close-up of hands sewing white wedding gown silk fabric in atelier workshop, fashion design studio, beading and lace, warm natural light, editorial photography",
  { w: 1100, h: 1300, seed: 31 }
);

export default function BespokeTeaser() {
  return (
    <section className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative aspect-[5/6]">
            <Image
              src={TEASER_IMG}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <p className="editorial-eyebrow text-wine-700">Bespoke</p>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl text-ink-950 font-light leading-[1.05]">
            Designed around <span className="italic">you,</span><br /> stitched by hand.
          </h2>
          <p className="mt-6 text-ink-700 leading-relaxed max-w-lg">
            Most of what we make never enters the collection. A bespoke Kamba gown
            begins with a quiet conversation, becomes a pattern cut to your measurements,
            and leaves the atelier as the only one in the world.
          </p>

          <ol className="mt-10 space-y-5">
            {[
              ["01", "Consultation", "A 90-minute session. We sketch, you talk. No commitment."],
              ["02", "First fabric", "Toile and fittings. The dress takes shape on you, not on a stand."],
              ["03", "Hand-finishing", "Beading, hemming, and final adjustments by our atelier team."],
              ["04", "The reveal", "The dress arrives in its garment bag, ready for the day."],
            ].map(([num, name, blurb]) => (
              <li key={num} className="grid grid-cols-[auto_1fr] gap-5 items-baseline">
                <span className="font-display text-3xl text-wine-700 font-light leading-none">{num}</span>
                <div>
                  <p className="font-medium text-ink-950">{name}</p>
                  <p className="text-sm text-ink-700 mt-1">{blurb}</p>
                </div>
              </li>
            ))}
          </ol>

          <Link
            href="/bespoke"
            className="mt-10 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-medium border-b border-ink-950 pb-1 hover:text-wine-700 hover:border-wine-700 transition"
          >
            How a bespoke gown is made <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
