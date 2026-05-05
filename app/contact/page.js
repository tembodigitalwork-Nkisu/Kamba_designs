import { MapPin, Phone, MessageCircle, Instagram, Facebook, Clock } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import LazyMap from "@/components/LazyMap";

export const metadata = {
  title: "Contact / Find Us",
  description:
    "Visit Kamba Fashion Designs in Woodlands, Lusaka — by appointment. WhatsApp +260 97 203 5672. Instagram @kamba_bridal & @kamba_designs. Facebook /KambaDesigns.",
};

const channels = [
  { label: "Atelier",            body: "Woodlands, Lusaka\nBy appointment", icon: MapPin },
  { label: "Phone · primary",    body: "+260 97 203 5672", icon: Phone, href: "tel:+260972035672" },
  { label: "WhatsApp",           body: "+260 97 203 5672", icon: MessageCircle, href: "https://wa.me/260972035672" },
  { label: "Instagram · Bridal", body: "@kamba_bridal", icon: Instagram, href: "https://instagram.com/kamba_bridal" },
  { label: "Instagram · House",  body: "@kamba_designs", icon: Instagram, href: "https://instagram.com/kamba_designs" },
  { label: "Facebook",           body: "/KambaDesigns", icon: Facebook, href: "https://facebook.com/KambaDesigns" },
];

export default function ContactPage() {
  return (
    <main>
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Contact"
            title={<>Find us — <span className="italic">in Woodlands.</span></>}
            intro="The atelier is by appointment. WhatsApp is the fastest route — every order conversation runs through one number."
          />
        </div>
      </section>

      <section className="relative pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="relative aspect-[5/4] border border-ivory-200 overflow-hidden">
              <LazyMap />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kamba+Fashion+Designs+Lusaka"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium text-wine-700 hover:text-ink-950 transition"
            >
              Open in Google Maps →
            </a>
          </div>

          <div className="lg:col-span-5">
            <ul className="space-y-5">
              {channels.map(({ label, body, icon: Icon, href }) => {
                const inner = (
                  <div className="flex gap-5 items-start group">
                    <span className="grid place-items-center h-12 w-12 rounded-full border border-ink-950/15 group-hover:border-wine-700 transition shrink-0">
                      <Icon className="h-5 w-5 text-ink-950 group-hover:text-wine-700 transition" strokeWidth={1.4} />
                    </span>
                    <div>
                      <p className="editorial-eyebrow text-ink-500">{label}</p>
                      <p className="mt-2 text-ink-950 whitespace-pre-line group-hover:text-wine-700 transition">{body}</p>
                    </div>
                  </div>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a>
                    ) : inner}
                  </li>
                );
              })}
            </ul>

            <div id="hours" className="mt-10 border-t border-ivory-200 pt-8">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-wine-700" strokeWidth={1.4} />
                <h3 className="editorial-eyebrow text-wine-700">Atelier hours</h3>
              </div>
              <ul className="mt-5 text-sm text-ink-950 space-y-2">
                <li className="flex justify-between border-b border-ivory-200 pb-2"><span>Monday – Friday</span><span>By appointment</span></li>
                <li className="flex justify-between border-b border-ivory-200 pb-2"><span>Saturday</span><span>By appointment</span></li>
                <li className="flex justify-between border-b border-ivory-200 pb-2 text-ink-500"><span>Sunday</span><span>Closed</span></li>
              </ul>
              <p className="mt-3 text-xs text-ink-500 italic">
                Slots typically open 7 days out. WhatsApp to confirm.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
