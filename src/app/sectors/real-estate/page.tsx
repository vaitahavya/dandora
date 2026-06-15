import type { Metadata } from "next";
import { SectorTemplate } from "@/components/sectors/SectorTemplate";
import { SECTORS } from "@/lib/constants";

const sector = SECTORS.find((s) => s.slug === "real-estate")!;

export const metadata: Metadata = {
  title: `Growth Consulting for ${sector.name}`,
  description: sector.tagline,
};

export default function RealEstatePage() {
  return <SectorTemplate sector={sector} />;
}
