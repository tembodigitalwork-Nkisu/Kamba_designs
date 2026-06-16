"use client";

import { useState } from "react";
import { WhatsAppIcon } from "./icons/BrandIcons";

const interests = [
  "Bridal gown (bespoke)",
  "Bridal gown (collection)",
  "Bridal-shower outfit",
  "Kitenge / chitenge formal",
  "Birthday / gala outfit",
  "Cocktail / event styling",
  "Just exploring",
];

const venues = ["In atelier, Woodlands", "WhatsApp video", "Travel fitting (advance notice)"];

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    interest: interests[0],
    venue: venues[0],
    eventDate: "",
    visitDate: "",
    notes: "",
  });
  const [error, setError] = useState("");

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const whatsappUrl = () => {
    const text = [
      `Hi Kamba, I'd like to book a consultation.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `For: ${form.interest}`,
      `Format: ${form.venue}`,
      `Event date: ${form.eventDate || "not set"}`,
      `Preferred visit: ${form.visitDate || "open"}`,
      form.notes ? `\nNotes:\n${form.notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    return `https://wa.me/260972035672?text=${encodeURIComponent(text)}`;
  };

  const handleSend = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Add your name and phone number first, then we can open WhatsApp.");
      return;
    }
    setError("");
    window.open(whatsappUrl(), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="bg-ivory-50 border border-ivory-200 p-8 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <Field label="Your name">
        <input type="text" required value={form.name} onChange={update("name")} placeholder="Full name" className={inputClass} />
      </Field>
      <Field label="Phone / WhatsApp">
        <input type="tel" required value={form.phone} onChange={update("phone")} placeholder="+260 …" className={inputClass} />
      </Field>
      <Field label="Event date (if known)">
        <input type="date" value={form.eventDate} onChange={update("eventDate")} className={inputClass} />
      </Field>
      <Field label="Format">
        <select value={form.venue} onChange={update("venue")} className={inputClass}>
          {venues.map((v) => <option key={v} value={v}>{v}</option>)}
        </select>
      </Field>
      <Field label="What you're after" full>
        <select value={form.interest} onChange={update("interest")} className={inputClass}>
          {interests.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </Field>
      <Field label="Preferred visit window" full>
        <input type="text" value={form.visitDate} onChange={update("visitDate")} placeholder="A weekday afternoon, late June…" className={inputClass} />
      </Field>
      <Field label="Anything we should know?" full>
        <textarea rows={5} value={form.notes} onChange={update("notes")} placeholder="The piece in your head, the colour palette, the fabrics you love or hate…" className={`${inputClass} resize-y`} />
      </Field>

      <div className="sm:col-span-2 mt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-ink-500 italic">First consultations are 90 minutes, on the house.</p>
        <button
          type="button"
          onClick={handleSend}
          className="inline-flex items-center gap-2 bg-[#25D366] text-ivory-50 px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-medium hover:opacity-90 transition"
        >
          Send via WhatsApp <WhatsAppIcon className="h-4 w-4" />
        </button>
      </div>
      {error && (
        <p role="alert" className="sm:col-span-2 text-xs text-wine-700">{error}</p>
      )}
    </form>
  );
}

const inputClass =
  "w-full bg-ivory-50 border-b border-ink-950/20 px-0 py-2.5 text-ink-950 placeholder-ink-500 focus:outline-none focus:border-wine-700 transition";

function Field({ label, full, children }) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "sm:col-span-2" : ""}`}>
      <span className="editorial-eyebrow text-ink-500">{label}</span>
      {children}
    </label>
  );
}
