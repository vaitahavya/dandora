import type { Metadata } from "next";
import { EduConnectPage } from "@/components/products/EduConnectPage";
import { JsonLd, breadcrumbList } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";

const title = "EduConnect — School ERP & Parent App";
const description =
  "EduConnect is Dandora's school ERP and parent-communication app — attendance, fees, academics, and engagement in one system. CBSE & State board ready.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/products/educonnect" },
  openGraph: { title, description },
};

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EduConnect",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description,
  url: `${SITE.url}/products/educonnect`,
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
};

export default function EduConnectProductPage() {
  return (
    <>
      <JsonLd data={softwareApplicationJsonLd} />
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Products" },
          { name: "EduConnect", path: "/products/educonnect" },
        ])}
      />
      <EduConnectPage />
    </>
  );
}
