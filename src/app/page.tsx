import { Hero } from "@/components/home/Hero";
import { MarketHighlights } from "@/components/home/MarketHighlights";
import {
  ManifestoStrip,
  ServicesSnapshot,
  SectorsGrid,
  ProcessSection,
  CloseSection,
} from "@/components/home/HomeSections";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <MarketHighlights />
      <ManifestoStrip />
      <ServicesSnapshot />
      <SectorsGrid />
      <ProcessSection />
      <CloseSection />
    </main>
  );
}
