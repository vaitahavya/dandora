import type { Metadata } from "next";
import { GrowthSectorPage } from "@/components/sectors/GrowthSectorPage";
import { HEALTHCARE } from "@/lib/sectors/healthcare";

export const metadata: Metadata = {
  title: "Healthcare Growth — Hospitals, Clinics & Specialty Practices",
  description: HEALTHCARE.hero.sub,
};

export default function HealthcarePage() {
  return <GrowthSectorPage content={HEALTHCARE} />;
}
