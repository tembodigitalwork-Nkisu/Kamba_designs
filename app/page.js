import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import FeaturedLooks from "@/components/FeaturedLooks";
import BespokeTeaser from "@/components/BespokeTeaser";
import Testimonial from "@/components/Testimonial";
import AppointmentsCTA from "@/components/AppointmentsCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <FeaturedLooks />
      <BespokeTeaser />
      <Testimonial />
      <AppointmentsCTA />
    </main>
  );
}
