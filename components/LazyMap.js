"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30765.934912157936!2d28.32120541083983!3d-15.444477499999989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408db8ffb7981f%3A0x7a9bcf3284778e75!2sKamba%20Fashion%20Designs!5e0!3m2!1sen!2szm!4v1778020183856!5m2!1sen!2szm";

// Lazy-load the Google Maps iframe behind a click. The atelier page is
// long; most visitors only want the address text. Loading ~500 KB of map
// JS for everyone is wasteful — we hold it back behind a single tap.
export default function LazyMap() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={MAP_SRC}
        title="Kamba Fashion Designs — Lusaka, Zambia"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label="Load interactive map of Kamba Fashion Designs"
      className="absolute inset-0 w-full h-full grid place-items-center bg-ivory-100 hover:bg-ivory-200/60 transition group"
    >
      <div className="flex flex-col items-center gap-3 text-center px-4">
        <span className="grid place-items-center h-14 w-14 rounded-full border border-ink-950/15 group-hover:border-wine-700 transition">
          <MapPin className="h-6 w-6 text-wine-700" strokeWidth={1.4} />
        </span>
        <div>
          <p className="font-display text-xl text-ink-950">Find us on the map</p>
          <p className="mt-1 text-xs text-ink-500 tracking-[0.18em] uppercase">Tap to load</p>
        </div>
      </div>
    </button>
  );
}
