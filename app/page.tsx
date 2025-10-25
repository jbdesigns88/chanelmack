import { BioSection } from "@/components/BioSection";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { PageFooter } from "@/components/PageFooter";
import { ReelSection } from "@/components/ReelSection";
import { SpotlightSection } from "@/components/SpotlightSection";

export default function Home() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <Hero />
      <main>
        <BioSection />
        <SpotlightSection />
        <ReelSection />
        <ContactSection />
      </main>
      <PageFooter />
    </>
  );
}
