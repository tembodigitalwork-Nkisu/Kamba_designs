"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Parallax — drifts an image slowly as the page scrolls, for depth.
 *
 * Wrap a `next/image` with `fill` (or any absolutely-filled child):
 *
 *   <div className="relative aspect-[4/5]">
 *     <Parallax className="absolute inset-0">
 *       <Image src={...} alt="" fill className="object-cover" />
 *     </Parallax>
 *   </div>
 *
 * The inner layer is intentionally taller than the frame, so the drift never
 * exposes an edge. Movement is scrubbed to the scrollbar (ease "none").
 * Skipped entirely under prefers-reduced-motion — the image just sits centred.
 */
export default function Parallax({ children, className = "", amount = 12 }) {
  const scope = useRef(null);
  const inner = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        inner.current,
        { yPercent: -amount },
        {
          yPercent: amount,
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope }
  );

  return (
    <div ref={scope} className={`relative overflow-hidden ${className}`}>
      {/* Oversized layer: 140% tall, centred, so ±12% drift stays covered. */}
      <div
        ref={inner}
        className="absolute inset-x-0 will-change-transform"
        style={{ top: "-20%", height: "140%" }}
      >
        {children}
      </div>
    </div>
  );
}
