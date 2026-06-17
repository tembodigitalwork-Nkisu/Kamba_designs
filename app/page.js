import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import FeaturedLooks from "@/components/FeaturedLooks";
import BespokeTeaser from "@/components/BespokeTeaser";
import Testimonial from "@/components/Testimonial";
import AppointmentsCTA from "@/components/AppointmentsCTA";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <main>
      {/* Hero stays static — it holds the LCP image, so we don't fade it. */}
      <Hero />

      <Reveal><Philosophy /></Reveal>

      {/* FeaturedLooks reveals its own header + staggers its cards internally. */}
      <FeaturedLooks />

      <Reveal><BespokeTeaser /></Reveal>
      <Reveal><Testimonial /></Reveal>
      <Reveal><AppointmentsCTA /></Reveal>
    </main>
  );
}
