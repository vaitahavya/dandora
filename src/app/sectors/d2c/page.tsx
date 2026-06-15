import type { Metadata } from "next";
import { SectorTemplate } from "@/components/sectors/SectorTemplate";
import { SECTORS } from "@/lib/constants";

const sector = SECTORS.find((s) => s.slug === "d2c")!;

export const metadata: Metadata = {
  title: `Growth Consulting for ${sector.name}`,
  description: sector.tagline,
};

export default function D2CPage() {
  return <SectorTemplate sector={sector} />;
}
