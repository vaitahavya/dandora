import type { Metadata } from "next";
import { GrowthSectorPage } from "@/components/sectors/GrowthSectorPage";
import { D2C } from "@/lib/sectors/d2c";

export const metadata: Metadata = {
  title: "D2C Growth — Launch to ₹100cr",
  description: D2C.hero.sub,
};

export default function D2CPage() {
  return <GrowthSectorPage content={D2C} />;
}
