import type { IMAGES } from "@/lib/images";

export type SectorPageImageKey = keyof typeof IMAGES.sectorPages;

export type CostingItem = {
  /** Optional stage/segment label shown above the quote (e.g. "Early-stage"). */
  stage?: string;
  /** The pain, in the customer's own words. */
  pain: string;
  /** The concrete next move we'd make. */
  nextStep: string;
};

/**
 * Shared content shape for the four growth-sector pages
 * (Real Estate, D2C, Healthcare, Education). Rendered by GrowthSectorPage.
 */
export type GrowthSectorContent = {
  slug: string;
  /** Label used to tag the questionnaire enquiry (e.g. "Real Estate"). */
  sectorLabel: string;
  /** Key into IMAGES.sectorPages. */
  imageKey: SectorPageImageKey;
  hero: {
    eyebrow: string;
    h1: string;
    sub: string;
    primaryCta: string;
    ghostCta: string;
  };
  costing: {
    eyebrow: string;
    items: CostingItem[];
  };
  /** Real Estate only — distinct brokers sub-block. */
  costingExtra?: {
    label: string;
    items: CostingItem[];
  };
  capabilities: {
    eyebrow: string;
    items: string[];
    /** Optional compliance / context note rendered under the pills. */
    note?: string;
  };
  howWeWork: {
    eyebrow: string;
    body: string;
  };
  cta: {
    h2: string;
    sub?: string;
    buttonA: string;
    buttonB: string;
  };
};
