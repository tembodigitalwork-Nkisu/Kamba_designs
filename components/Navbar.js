"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width: 1024px)");
    const handler = (e) => { if (e.matches) setOpen(false); };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-40 bg-ivory-50/85 backdrop-blur border-b border-ivory-200">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-20 flex items-center justify-between">
        <Logo size="sm" />

        <div className="hidden lg:flex items-center gap-9">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`text-xs font-medium tracking-[0.25em] uppercase transition relative ${
                  active ? "text-wine-700" : "text-ink-700 hover:text-ink-950"
                }`}
              >
                {l.label}
                {active && (
                  <span aria-hidden className="absolute -bottom-2 left-0 right-0 h-px bg-wine-700" />
                )}
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
        <div id="mobile-menu" className="lg:hidden px-3 pt-2 pb-4 bg-ivory-50/80 backdrop-blur">
          <div className="rounded-2xl border border-ivory-200 bg-ivory-50 shadow-[0_24px_55px_-26px_rgba(26,20,16,0.45)] px-3 py-4 flex flex-col gap-1 animate-menuIn">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative flex items-center justify-between py-4 pl-5 pr-3 text-sm font-medium tracking-[0.2em] uppercase border-b border-ivory-200 transition-colors duration-300 ${
                    active
                      ? "text-wine-700 bg-ivory-100"
                      : "text-ink-950 hover:text-wine-700 hover:bg-ivory-100"
                  }`}
                >
                  {/* vertical accent — held when active, grows in on hover */}
                  <span
                    aria-hidden
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-[2px] bg-wine-700 transition-all duration-300 ease-out ${
                      active
                        ? "h-7 opacity-100"
                        : "h-0 opacity-0 group-hover:h-7 group-hover:opacity-100"
                    }`}
                  />
                  <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                    {l.label}
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className={`h-4 w-4 text-wine-700 transition-all duration-300 ease-out ${
                      active
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              href="/appointments"
              className="mt-5 text-center text-xs tracking-[0.25em] uppercase font-medium border border-wine-700 text-wine-700 px-4 py-3 hover:bg-wine-700 hover:text-ivory-50 transition"
            >
              Book a Fitting
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
