/**
 * Curated, locally-hosted photography (sourced from Pexels — see
 * public/images/CREDITS.md). Premium, editorial tone tuned to the indigo /
 * cyan brand palette. All paths resolve from /public, so no next.config
 * remotePatterns are required.
 */
export const IMAGES = {
  /** About page hero + contact side panel — real people, real collaboration. */
  manifesto: "/images/about/manifesto.jpg",
  /** Contact page hero — an open, in-person conversation. */
  contact: "/images/contact/hero.jpg",
  /** Services page hero. */
  servicesHero: "/images/services/hero.jpg",
  /** About page supporting visual — a working strategy session. */
  process: "/images/about/process.jpg",
  /** Per-pillar service imagery — order matches SERVICES[].imageKey. */
  services: {
    strategy: "/images/services/strategy.jpg",
    technology: "/images/services/technology.jpg",
    marketing: "/images/services/marketing.jpg",
    operations: "/images/services/operations.jpg",
  },
  /** Homepage beat imagery — premium, editorial. */
  home: {
    hero: "/images/home/hero.jpg",
    reframe: "/images/home/reframe.jpg",
    relyProduction: "/images/home/rely-production.jpg",
    relyStrategy: "/images/home/rely-strategy.jpg",
    respond: "/images/home/respond.jpg",
  },
  /** Sector landing-page imagery — hero + in-section band per sector. */
  sectorPages: {
    "real-estate": {
      hero: "/images/sectors/real-estate-hero.jpg",
      band: "/images/sectors/real-estate-band.jpg",
    },
    d2c: {
      hero: "/images/sectors/d2c-hero.jpg",
      band: "/images/sectors/d2c-band.jpg",
    },
    healthcare: {
      hero: "/images/sectors/healthcare-hero.jpg",
      band: "/images/sectors/healthcare-band.jpg",
    },
    education: {
      hero: "/images/sectors/education-hero.jpg",
      band: "/images/sectors/education-band.jpg",
    },
    "it-software": {
      hero: "/images/sectors/it-software-hero.jpg",
      band: "/images/sectors/it-software-band.jpg",
    },
  },
  /** Journal / blog post imagery. */
  journal: {
    housingMarketHero: "/images/journal/housing-market-hero.jpg",
    housingMarketInterior: "/images/journal/housing-market-interior.jpg",
    hyderabadRealEstateJuly2026:
      "/images/journal/hyderabad-real-estate-july-2026.jpg",
    realEstateMarketJuly4: "/images/journal/real-estate-market-july-4.jpg",
    realEstateInventoryJuly5: "/images/journal/real-estate-inventory-july-5.jpg",
    housingMarketResetJuly6: "/images/journal/housing-market-reset-july-6.jpg",
    softwareTrendsJuly2: "/images/journal/software-trends-july-2.jpg",
    softwareDevNewsJuly3: "/images/journal/software-dev-news-july-3.jpg",
    aiCodingBoomJuly4: "/images/journal/ai-coding-boom-july-4.jpg",
    aiCodingNewsJuly5: "/images/journal/ai-coding-news-july-5.jpg",
    aiDevTrendsJuly6: "/images/journal/ai-dev-trends-july-6.jpg",
  },
} as const;

export type ServiceImageKey = keyof typeof IMAGES.services;
