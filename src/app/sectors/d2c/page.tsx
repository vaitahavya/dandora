import type { Metadata } from "next";
import { GrowthSectorPage } from "@/components/sectors/GrowthSectorPage";
import { D2C } from "@/lib/sectors/d2c";
import { JsonLd, breadcrumbList } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";

const title = "D2C Brand Growth — Launch to ₹100cr";
const description =
  "Break past the growth ceiling. We fix rising CAC, one-time buyers, and ad-only growth with product marketing, content, and funnels that convert.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/sectors/d2c",
});

export default function D2CPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Sectors" },
          { name: "D2C", path: "/sectors/d2c" },
        ])}
      />
      <GrowthSectorPage content={D2C} />
    </>
  );
}
