import type { Metadata } from "next";
import { GrowthSectorPage } from "@/components/sectors/GrowthSectorPage";
import { EDUCATION } from "@/lib/sectors/education";

export const metadata: Metadata = {
  title: "Education Growth — Schools, Colleges, Coaching & Institutes",
  description: EDUCATION.hero.sub,
};

export default function EducationPage() {
  return <GrowthSectorPage content={EDUCATION} />;
}
