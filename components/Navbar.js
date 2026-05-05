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
        <div id="mobile-menu" className="lg:hidden border-t border-ivory-200 bg-ivory-50">
          <div className="px-4 py-6 flex flex-col gap-1">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`py-3 px-2 text-sm font-medium tracking-[0.2em] uppercase border-b border-ivory-200 ${
                    active ? "text-wine-700" : "text-ink-950"
                  }`}
                >
                  {l.label}
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
