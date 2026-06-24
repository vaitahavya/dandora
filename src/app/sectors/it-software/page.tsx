import type { Metadata } from "next";
import { SoftwareEngineeringPage } from "@/components/sectors/SoftwareEngineeringPage";
import { JsonLd, breadcrumbList } from "@/components/seo/JsonLd";

const title = "Software Development Partner — Web, Mobile, Apps";
const description =
  "One senior-led team from wireframe to production. Web apps, mobile, desktop, and enterprise software — React, Next.js, Node, React Native.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sectors/it-software" },
  openGraph: { title, description },
};

export default function ITSoftwarePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Sectors" },
          { name: "Software & IT Development", path: "/sectors/it-software" },
        ])}
      />
      <SoftwareEngineeringPage />
    </>
  );
}
