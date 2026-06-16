import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { localSrc } from "@/lib/images";

const looks = [
  { name: "Pearl",  silhouette: "Slip · Silk satin",       category: "Bridal",   img: localSrc("bridalPearl") },
  { name: "Iris",   silhouette: "Mermaid · Hand-cut lace", category: "Bridal",   img: localSrc("bridalIris") },
  { name: "Tasila", silhouette: "Kitenge formal · Custom", category: "Occasion", img: localSrc("occasionTasila") },
];

export default function FeaturedLooks() {
  return (
    <section className="relative py-20 sm:py-28 bg-ivory-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="editorial-eyebrow text-wine-700">The Collection</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-ink-950 font-light leading-[1.05]">
              Three looks <span className="italic">we love right now.</span>
            </h2>
          </div>
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-medium text-wine-700 hover:text-ink-950 transition self-start sm:self-end"
          >
            See full collection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {looks.map((l) => (
            <Link key={l.name} href={`/collection#${l.category.toLowerCase()}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-ivory-200">
                <Image
                  src={l.img}
                  alt={`${l.name}, ${l.silhouette}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.02]"
                />
                <span className="absolute top-4 left-4 bg-ivory-50/90 backdrop-blur px-2.5 py-1 text-[10px] tracking-[0.3em] uppercase text-ink-700">
                  {l.category}
                </span>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl text-ink-950">{l.name}</h3>
                <span className="text-xs text-ink-500 italic">{l.silhouette}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
