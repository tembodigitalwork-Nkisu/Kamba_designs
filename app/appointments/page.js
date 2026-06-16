import { CheckCircle2, Info } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata = {
  title: "Appointments",
  description:
    "Book a private consultation at Kamba Fashion Designs. K300 secures the slot, waived if you commit to a piece on the day. By appointment in Woodlands, Lusaka.",
};

const what = [
  "An unhurried in-atelier conversation",
  "Sketches and fabric swatches in front of you",
  "A clear written quote, starting prices in Kwacha",
  "No pressure to commit on the day",
];

const policy = [
  ["K300", "Consultation fee. Secures your slot. Waived in full if you commit to a piece on the day."],
  ["60%", "Deposit to begin work on a confirmed order. The 40% balance settles before the gown leaves the atelier."],
  ["3 to 6 mo", "Lead time for most pieces. Express orders possible (full upfront payment) when the calendar allows."],
  ["Custom", "Every piece made for one client. We don't hire out, rent, or resell."],
];

export default function AppointmentsPage() {
  return (
    <main>
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            as="h1"
            eyebrow="Appointments"
            title={<>Begin with a <span className="italic">conversation.</span></>}
            intro="Tell us a little about you, the day, and the piece in your head. We'll come back within 24 hours with two or three times that suit."
          />
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-4">
            <h3 className="editorial-eyebrow text-wine-700">What to expect</h3>
            <ul className="mt-6 space-y-4">
              {what.map((w) => (
                <li key={w} className="flex gap-3 items-start text-ink-700">
                  <CheckCircle2 className="h-4 w-4 text-wine-700 mt-1 shrink-0" strokeWidth={1.6} />
                  <span>{w}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 border border-ivory-200 bg-ivory-50 p-6">
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4 text-wine-700" strokeWidth={1.6} />
                <p className="editorial-eyebrow text-wine-700">Booking & deposits</p>
              </div>
              <dl className="mt-5 space-y-4">
                {policy.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[4.5rem_1fr] gap-3 items-baseline border-b border-ivory-200 pb-4 last:border-0 last:pb-0">
                    <dt className="font-display text-xl text-ink-950 leading-none">{k}</dt>
                    <dd className="text-xs text-ink-700 leading-relaxed">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-8 border-t border-ivory-200 pt-6">
              <p className="editorial-eyebrow text-ink-500">Atelier hours</p>
              <ul className="mt-3 text-sm text-ink-950 space-y-1">
                <li className="flex justify-between"><span>Mon to Sat</span><span>By appointment</span></li>
                <li className="flex justify-between text-ink-500"><span>Sunday</span><span>Closed</span></li>
              </ul>
              <p className="mt-3 text-xs text-ink-500 italic">
                Slots open about a week out. WhatsApp the date, time and your full name to confirm.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <AppointmentForm />
            <p className="mt-4 text-xs text-ink-500 italic">
              Submissions open WhatsApp directly to +260 97 203 5672. Chikondi or her team
              will confirm a slot within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
