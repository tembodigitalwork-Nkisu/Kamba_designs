import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { localSrc } from "@/lib/images";

const HERO_IMAGE = localSrc("hero");

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-16 sm:pt-14 sm:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="editorial-eyebrow text-wine-700 animate-fadeUp">Bridal &amp; Occasion Luxe · Lusaka</p>
            <h1 className="mt-6 font-display font-light text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95] text-ink-950 animate-fadeUp">
              Made for the moment you{" "}
              <span className="italic font-normal text-wine-700">say yes</span>
              <span className="italic font-normal text-ink-700">, and the ones after.</span>
            </h1>
            <p className="mt-7 max-w-md text-ink-700 leading-relaxed animate-fadeUp">
              Kamba is a Lusaka fashion house led by Chikondi Mwanza. Bridal gowns,
              bridal-shower outfits, kitenge formal pieces, and occasion looks,
              all hand-tailored in Woodlands.
            </p>
            <div className="mt-9 flex flex-wrap gap-4 animate-fadeUp">
              <Link
                href="/appointments"
                className="inline-flex items-center gap-2 bg-ink-950 text-ivory-50 px-6 py-3.5 text-xs tracking-[0.25em] uppercase hover:bg-wine-700 transition"
              >
                Book a fitting <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/collection"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs tracking-[0.25em] uppercase border border-ink-950/20 text-ink-950 hover:border-ink-950 transition"
              >
                See the collection
              </Link>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md border-t border-ivory-200 pt-8">
              {[
                ["10+ yrs", "In practice"],
                ["13K+", "Followers across IG & FB"],
                ["100%", "Made in Zambia"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-3xl font-light text-ink-950">{k}</dt>
                  <dd className="mt-2 editorial-eyebrow text-ink-500 leading-tight">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-ivory-100 -z-10" aria-hidden="true" />
              <div className="absolute -top-4 -left-4 w-1/3 h-1/3 bg-wine-100 -z-10" aria-hidden="true" />
              <Image
                src={HERO_IMAGE}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 bg-ivory-50/90 backdrop-blur px-3 py-1.5 text-[10px] tracking-[0.3em] uppercase">
                Lusaka · 2026 Edit
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
