"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "/collection", label: "Collection" },
  { href: "/bespoke", label: "Bespoke" },
  { href: "/about", label: "Atelier" },
  { href: "/appointments", label: "Appointments" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width: 1024px)");
    const handler = (e) => { if (e.matches) setOpen(false); };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  // Shrink the logo into the corner once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); // set correctly if the page loads already scrolled
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-40 bg-ivory-50/85 backdrop-blur border-b border-ivory-200">
      <nav
        className={`mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between transition-[height] duration-300 ease-out ${
          scrolled ? "h-16 sm:h-20" : "h-24 sm:h-28"
        }`}
      >
        <div
          className={`origin-left transition-transform duration-300 ease-out ${
            scrolled ? "scale-[0.7]" : "scale-100"
          }`}
        >
          <Logo size="lg" />
        </div>

        <div className="hidden lg:flex items-center gap-9">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`group relative text-xs font-medium tracking-[0.25em] uppercase transition-colors ${
                  active ? "text-wine-700" : "text-ink-700 hover:text-ink-950"
                }`}
              >
                {l.label}
                {/* one underline for both states: grows on hover, held when active */}
                <span
                  aria-hidden
                  className={`absolute -bottom-2 left-0 right-0 h-px origin-left bg-wine-700 transition-transform duration-300 ease-out ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="/appointments"
            className="ml-2 text-xs font-medium tracking-[0.25em] uppercase border border-wine-700 text-wine-700 px-4 py-2 hover:bg-wine-700 hover:text-ivory-50 transition"
          >
            Book a Fitting
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 text-ink-950"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="lg:hidden px-4 pt-1 pb-4 flex justify-end">
          <div className="w-[min(20rem,calc(100vw-2rem))] origin-top-right rounded-2xl border border-ivory-200 bg-ivory-50/95 backdrop-blur shadow-[0_24px_55px_-26px_rgba(26,20,16,0.45)] p-2 flex flex-col gap-0.5 animate-menuIn">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative w-fit py-2.5 px-2 text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                    active ? "text-wine-700" : "text-ink-950 hover:text-wine-700"
                  }`}
                >
                  {l.label}
                  {/* one underline for both states: grows on hover, held when active */}
                  <span
                    aria-hidden
                    className={`absolute bottom-1 left-2 right-2 h-px origin-left bg-wine-700 transition-transform duration-300 ease-out ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              href="/appointments"
              className="mt-2 mx-1 rounded-xl text-center text-xs tracking-[0.25em] uppercase font-medium border border-wine-700 text-wine-700 px-4 py-3 hover:bg-wine-700 hover:text-ivory-50 transition"
            >
              Book a Fitting
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
