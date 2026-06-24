import type { Metadata } from "next";
import { GrowthSectorPage } from "@/components/sectors/GrowthSectorPage";
import { HEALTHCARE } from "@/lib/sectors/healthcare";
import { JsonLd, breadcrumbList } from "@/components/seo/JsonLd";

const title = "Healthcare Marketing — Hospitals & Clinics";
const description =
  "Be found and trusted. Compliance-aware storytelling, respectful patient acquisition, and booking systems for hospitals and clinics in India.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sectors/healthcare" },
  openGraph: { title, description },
};

export default function HealthcarePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Sectors" },
          { name: "Healthcare", path: "/sectors/healthcare" },
        ])}
      />
      <GrowthSectorPage content={HEALTHCARE} />
    </>
  );
}
