import { Hero } from "@/components/home/Hero";
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
      <ManifestoStrip />
      <ServicesSnapshot />
      <SectorsGrid />
      <ProcessSection />
      <CloseSection />
    </main>
  );
}
