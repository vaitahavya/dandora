import type { Metadata } from "next";
import { GrowthSectorPage } from "@/components/sectors/GrowthSectorPage";
import { REAL_ESTATE } from "@/lib/sectors/real-estate";
import { JsonLd, breadcrumbList } from "@/components/seo/JsonLd";

const title = "Real Estate Marketing & Growth, Hyderabad";
const description =
  "Sell the last of your inventory to end-users. Cinematic project films, demand funnels, and visibility that turn online searches into site visits.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sectors/real-estate" },
  openGraph: { title, description },
};

export default function RealEstatePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Sectors" },
          { name: "Real Estate", path: "/sectors/real-estate" },
        ])}
      />
      <GrowthSectorPage content={REAL_ESTATE} />
    </>
  );
}
