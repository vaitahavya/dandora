import type { Metadata } from "next";
import { SoftwareEngineeringPage } from "@/components/sectors/SoftwareEngineeringPage";
import { IT_SOFTWARE } from "@/lib/sectors/it-software";

export const metadata: Metadata = {
  title: "Software Product Engineering Partner",
  description: IT_SOFTWARE.hero.sub,
};

export default function ITSoftwarePage() {
  return <SoftwareEngineeringPage />;
}
