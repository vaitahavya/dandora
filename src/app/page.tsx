import { HeroBeat } from "@/components/home/HeroBeat";
import { RealiseBeat } from "@/components/home/RealiseBeat";
import { ResonateBeat } from "@/components/home/ResonateBeat";
import { SectorsBlock } from "@/components/home/SectorsBlock";
import { ReframeBeat } from "@/components/home/ReframeBeat";
import { RelyBeat } from "@/components/home/RelyBeat";
import { DeRiskBand } from "@/components/home/DeRiskBand";
import { RespondBeat } from "@/components/home/RespondBeat";

export default function HomePage() {
  return (
    <main>
      <HeroBeat />
      <RealiseBeat />
      <ResonateBeat />
      <SectorsBlock />
      <ReframeBeat />
      <RelyBeat />
      <DeRiskBand />
      <RespondBeat />
    </main>
  );
}
