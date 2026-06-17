"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Reveal — a small client island that fades-and-rises its content as it
 * scrolls into view. Wrap any server-rendered block with it.
 *
 *   <Reveal>                       a single block fades up as one unit
 *   <Reveal selector=".group">     each matching child fades up, staggered
 *
 * Content ships in the server HTML (good for SEO / no-JS); GSAP only sets the
 * from-state before paint, so there is no flash. Respects reduced-motion.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className,
  selector,           // when set, descendants matching this stagger in
  y = 28,
  duration = 0.9,
  stagger = 0.12,
  start = "top 85%",
  once = true,
}) {
  const scope = useRef(null);

  useGSAP(
    () => {
      const targets = selector
        ? gsap.utils.toArray(selector, scope.current)
        : [scope.current];
      if (!targets.length) return;

      // Honour the user's motion preference (GSAP runs in JS, so the CSS
      // media query in globals.css does not cover it).
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.from(targets, {
        opacity: 0,
        y,
        duration,
        ease: "power3.out",
        stagger: selector ? stagger : 0,
        scrollTrigger: {
          trigger: scope.current,
          start,
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      });
    },
    { scope }
  );

  return (
    <Tag ref={scope} className={className}>
      {children}
    </Tag>
  );
}
