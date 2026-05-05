import { CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata = {
  title: "Appointments",
  description:
    "Book a private consultation at Kamba Fashion Designs. First fittings are 90 minutes, by appointment, with no obligation.",
};

const what = [
  "An unhurried 90-minute conversation",
  "Sketches and fabric swatches in front of you",
  "A clear sense of cost, lead time, and process",
  "No pressure to commit on the day",
];

export default function AppointmentsPage() {
  return (
    <main>
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Appointments"
            title={<>Begin with a <span className="italic">conversation.</span></>}
            intro="Tell us a little about you, the day, and the dress in your head. We'll come back within 24 hours with two or three times that suit."
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

            <div className="mt-10 border-t border-ivory-200 pt-6">
              <p className="editorial-eyebrow text-ink-500">Atelier hours</p>
              <ul className="mt-3 text-sm text-ink-950 space-y-1">
                <li className="flex justify-between"><span>Tue – Fri</span><span>10:00 – 18:00</span></li>
                <li className="flex justify-between"><span>Sat</span><span>10:00 – 16:00</span></li>
                <li className="flex justify-between text-ink-500"><span>Sun – Mon</span><span>By request</span></li>
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <AppointmentForm />
            <p className="mt-4 text-xs text-ink-500 italic">
              Submissions open WhatsApp directly to +260 97 203 5672 — Chikondi or her team
              will confirm a slot within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
