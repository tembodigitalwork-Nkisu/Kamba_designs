import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { localSrc } from "@/lib/images";

const TEASER_IMG = localSrc("bespokeTeaser");

export default function BespokeTeaser() {
  return (
    <section className="relative py-14 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative aspect-[4/3] sm:aspect-[5/6]">
            <Image
              src={TEASER_IMG}
              alt="Hands sewing a wedding gown in the Kamba atelier"
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

          <Link
            href="/bespoke"
            className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-medium border-b border-ink-950 pb-1 hover:text-wine-700 hover:border-wine-700 transition"
          >
            How a bespoke gown is made <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
