import type { Metadata } from "next";
import { HeroBeat } from "@/components/home/HeroBeat";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { RealiseBeat } from "@/components/home/RealiseBeat";
import { ResonateBeat } from "@/components/home/ResonateBeat";
import { SectorsBlock } from "@/components/home/SectorsBlock";
import { ReframeBeat } from "@/components/home/ReframeBeat";
import { RelyBeat } from "@/components/home/RelyBeat";
import { FounderNote } from "@/components/home/FounderNote";
import { ClientMarquee } from "@/components/home/ClientMarquee";
import { DeRiskBand } from "@/components/home/DeRiskBand";
import { RespondBeat } from "@/components/home/RespondBeat";
import { buildPageMetadata } from "@/lib/seo";

const title = "Dandora — Growth, Brand & Software Under One Roof";
const description =
  "Dandora is a Hyderabad growth & execution partner. We plan it, build it, and ship it with you — strategy, brand, and software under one roof.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <main>
      <HeroBeat />
      <WhatWeDo />
      <RealiseBeat />
      <ResonateBeat />
      <SectorsBlock />
      <ReframeBeat />
      <RelyBeat />
      <FounderNote />
      <ClientMarquee />
      <DeRiskBand />
      <RespondBeat />
    </main>
  );
}
