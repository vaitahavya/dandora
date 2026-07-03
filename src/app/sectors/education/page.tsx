import type { Metadata } from "next";
import { GrowthSectorPage } from "@/components/sectors/GrowthSectorPage";
import { EDUCATION } from "@/lib/sectors/education";
import { JsonLd, breadcrumbList } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";

const title = "Education Marketing — Schools & Institutes";
const description =
  "Make every admissions cycle predictable. Campus films, parent-trust content, and a year-round presence for schools, colleges, and coaching.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/sectors/education",
});

export default function EducationPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Sectors" },
          { name: "Education", path: "/sectors/education" },
        ])}
      />
      <GrowthSectorPage content={EDUCATION} />
    </>
  );
}
