import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "./icons/BrandIcons";
import Logo from "./Logo";

const sections = {
  House: [
    { label: "Bridal", href: "/collection#bridal" },
    { label: "Occasion", href: "/collection#occasion" },
    { label: "Bespoke process", href: "/bespoke" },
    { label: "Our story", href: "/about" },
  ],
  Visit: [
    { label: "Book a fitting", href: "/appointments" },
    { label: "Find us", href: "/contact" },
    { label: "Hours", href: "/contact#hours" },
  ],
};

const socials = [
  { label: "Instagram · Bridal", handle: "@kamba_bridal",     href: "https://instagram.com/kamba_bridal",  icon: InstagramIcon },
  { label: "Instagram · House",  handle: "@kamba_designs",    href: "https://instagram.com/kamba_designs", icon: InstagramIcon },
  { label: "Facebook",           handle: "/KambaDesigns",     href: "https://facebook.com/KambaDesigns",   icon: FacebookIcon },
  { label: "WhatsApp",           handle: "+260 97 203 5672",  href: "https://wa.me/260972035672",          icon: WhatsAppIcon },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-ivory-100 border-t border-ivory-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Logo size="md" />
          <p className="mt-6 max-w-sm text-sm text-ink-700 leading-relaxed">
            Bridal &amp; occasion luxe, hand-tailored in Lusaka.
            Custom gowns, kitenge formal pieces, and event styling — by Chikondi M. and the Kamba house team.
          </p>
          <ul className="mt-6 space-y-2.5">
            {socials.map(({ label, handle, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-ink-950 hover:text-wine-700 transition group"
                >
                  <span className="grid place-items-center h-9 w-9 rounded-full border border-ink-950/15 group-hover:border-wine-700 transition">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="leading-tight">
                    <span className="block editorial-eyebrow text-ink-500">{label}</span>
                    <span className="block">{handle}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {Object.entries(sections).map(([heading, items]) => (
          <div key={heading} className="lg:col-span-3">
            <h4 className="editorial-eyebrow text-wine-700">{heading}</h4>
            <ul className="mt-5 space-y-3">
              {items.map((i) => (
                <li key={i.label}>
                  <Link href={i.href} className="text-sm text-ink-950 hover:text-wine-700 transition">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-2">
          <h4 className="editorial-eyebrow text-wine-700">Atelier</h4>
          <p className="mt-5 text-sm text-ink-950 not-italic">
            <MapPin className="inline h-3.5 w-3.5 mr-1 -translate-y-0.5" />
            Woodlands, Lusaka<br />
            By appointment
          </p>
          <p className="mt-3 text-sm text-ink-950">
            <Phone className="inline h-3.5 w-3.5 mr-1 -translate-y-0.5" />
            <a href="tel:+260972035672" className="hover:text-wine-700">+260 97 203 5672</a>
          </p>
        </div>
      </div>

      <div className="border-t border-ivory-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-ink-500">
          <p>© {new Date().getFullYear()} Kamba Fashion Designs. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Bridal &amp; occasion luxe — made in Zambia</p>
        </div>
      </div>
    </footer>
  );
}
