import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "Not found" };

export default function NotFound() {
  return (
    <main className="min-h-[70vh] grid place-items-center py-24">
      <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
        <p className="editorial-eyebrow text-wine-700">404</p>
        <h1 className="mt-6 font-display text-5xl sm:text-6xl text-ink-950 font-light leading-[1.05]">
          That thread <span className="italic">isn't here.</span>
        </h1>
        <p className="mt-6 text-ink-700 leading-relaxed">
          The page you came looking for has been altered, retired, or never quite stitched together.
          Find your way back below.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-ink-950 text-ivory-50 px-6 py-3.5 text-xs tracking-[0.25em] uppercase font-medium hover:bg-wine-700 transition"
          >
            <ArrowLeft className="h-4 w-4" /> Return home
          </Link>
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 border border-ink-950/20 px-6 py-3.5 text-xs tracking-[0.25em] uppercase font-medium hover:border-ink-950 transition"
          >
            See the collection
          </Link>
        </div>
      </div>
    </main>
  );
}
