import Link from "next/link";
import { Calendar } from "lucide-react";

export default function AppointmentsCTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="bg-ink-950 text-ivory-50 p-10 sm:p-16 relative overflow-hidden">
          <div aria-hidden="true" className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-wine-700/30 blur-3xl" />
          <div className="relative">
            <Calendar className="h-7 w-7 text-gold-500" strokeWidth={1.4} />
            <h2 className="mt-6 font-display text-3xl sm:text-5xl font-light leading-tight">
              Begin with a conversation.
            </h2>
            <p className="mt-5 max-w-lg text-ivory-100/80 leading-relaxed">
              First fittings are 90 minutes, by appointment, and on the house.
              We don't sell from a shop floor — we make to measure, on your timeline.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/appointments"
                className="inline-flex items-center gap-2 bg-gold-500 text-ink-950 px-6 py-3.5 text-xs tracking-[0.25em] uppercase font-medium hover:bg-ivory-50 transition"
              >
                Book a fitting
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-ivory-50/30 text-ivory-50 px-6 py-3.5 text-xs tracking-[0.25em] uppercase font-medium hover:bg-ivory-50/10 transition"
              >
                Visit the atelier
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
