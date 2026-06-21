import type { Metadata } from "next";
import { GrowthSectorPage } from "@/components/sectors/GrowthSectorPage";
import { REAL_ESTATE } from "@/lib/sectors/real-estate";

export const metadata: Metadata = {
  title: "Real Estate Growth — Developers, Brokers & Channel Partners",
  description: REAL_ESTATE.hero.sub,
};

export default function RealEstatePage() {
  return <GrowthSectorPage content={REAL_ESTATE} />;
}
