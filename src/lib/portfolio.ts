export type PortfolioCategory = "brand" | "packaging" | "print" | "digital";

export type PortfolioSector =
  | "real-estate"
  | "d2c"
  | "it-software"
  | "general";

export type PortfolioItem = {
  id: string;
  client: string;
  title: string;
  category: PortfolioCategory;
  sector: PortfolioSector;
  src: string;
  alt: string;
  /** Used for masonry card proportions. */
  aspect: "portrait" | "landscape" | "square";
  featured?: boolean;
};

export const PORTFOLIO_CATEGORIES: {
  id: PortfolioCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "brand", label: "Brand" },
  { id: "packaging", label: "Packaging" },
  { id: "print", label: "Print" },
  { id: "digital", label: "Digital & OOH" },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "andhraaroma-adcreative",
    client: "Andhra Aroma",
    title: "Ad creative",
    category: "digital",
    sector: "d2c",
    src: "/images/portfolio/andhraaroma-adcreative.jpg",
    alt: "Andhra Aroma social and digital ad creative by Dandora",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "arkala-billboard",
    client: "Arkala",
    title: "Billboard",
    category: "digital",
    sector: "real-estate",
    src: "/images/portfolio/arkala-billboard.jpg",
    alt: "Arkala real estate billboard campaign by Dandora",
    aspect: "portrait",
    featured: true,
  },
  {
    id: "arkala-origin-brochure",
    client: "Arkala",
    title: "Origin brochure",
    category: "print",
    sector: "real-estate",
    src: "/images/portfolio/arkala-origin-brochure.jpg",
    alt: "Arkala Origin project brochure design by Dandora",
    aspect: "landscape",
  },
  {
    id: "dwc-brochure-mockup",
    client: "DWC",
    title: "Brochure mockup",
    category: "print",
    sector: "general",
    src: "/images/portfolio/dwc-brochure-mockup.jpg",
    alt: "DWC brochure mockup designed by Dandora",
    aspect: "landscape",
  },
  {
    id: "dwc-business-card",
    client: "DWC",
    title: "Business card",
    category: "print",
    sector: "general",
    src: "/images/portfolio/dwc-business-card.jpg",
    alt: "DWC business card design by Dandora",
    aspect: "landscape",
  },
  {
    id: "dwc-stall-infographic",
    client: "DWC",
    title: "Stall infographic",
    category: "print",
    sector: "general",
    src: "/images/portfolio/dwc-stall-infographic.jpg",
    alt: "DWC exhibition stall infographic by Dandora",
    aspect: "portrait",
  },
  {
    id: "eruvaka-logo",
    client: "Eruvaka",
    title: "Logo",
    category: "brand",
    sector: "d2c",
    src: "/images/portfolio/eruvaka-logo.png",
    alt: "Eruvaka brand logo designed by Dandora",
    aspect: "square",
  },
  {
    id: "eruvaka-packaging",
    client: "Eruvaka",
    title: "Packaging",
    category: "packaging",
    sector: "d2c",
    src: "/images/portfolio/eruvaka-packaging.jpg",
    alt: "Eruvaka product packaging design by Dandora",
    aspect: "square",
  },
  {
    id: "foodonfarm-packaging",
    client: "FoodOnFarm",
    title: "Packaging",
    category: "packaging",
    sector: "d2c",
    src: "/images/portfolio/foodonfarm-packaging.jpg",
    alt: "FoodOnFarm product packaging design by Dandora",
    aspect: "square",
    featured: true,
  },
  {
    id: "indpro-flyer",
    client: "Indpro",
    title: "Flyer",
    category: "print",
    sector: "d2c",
    src: "/images/portfolio/indpro-flyer.jpg",
    alt: "Indpro promotional flyer design by Dandora",
    aspect: "portrait",
  },
  {
    id: "indpro-logo",
    client: "Indpro",
    title: "Logo",
    category: "brand",
    sector: "d2c",
    src: "/images/portfolio/indpro-logo.png",
    alt: "Indpro brand logo designed by Dandora",
    aspect: "square",
  },
  {
    id: "indpro-packaging",
    client: "Indpro",
    title: "Packaging",
    category: "packaging",
    sector: "d2c",
    src: "/images/portfolio/indpro-packaging.jpg",
    alt: "Indpro product packaging design by Dandora",
    aspect: "square",
  },
  {
    id: "kasp-interiors-logo",
    client: "KASP Interiors",
    title: "Logo",
    category: "brand",
    sector: "general",
    src: "/images/portfolio/kasp-interiors-logo.png",
    alt: "KASP Interiors logo designed by Dandora",
    aspect: "square",
  },
  {
    id: "kspa-group-logo",
    client: "KSPA Group",
    title: "Logo",
    category: "brand",
    sector: "general",
    src: "/images/portfolio/kspa-group-logo.png",
    alt: "KSPA Group logo designed by Dandora",
    aspect: "square",
  },
  {
    id: "navrangdhaba-brochure",
    client: "Navrang Dhaba",
    title: "Brochure",
    category: "print",
    sector: "d2c",
    src: "/images/portfolio/navrangdhaba-brochure.jpg",
    alt: "Navrang Dhaba brochure design by Dandora",
    aspect: "landscape",
  },
  {
    id: "navrangdhaba-logo",
    client: "Navrang Dhaba",
    title: "Logo",
    category: "brand",
    sector: "d2c",
    src: "/images/portfolio/navrangdhaba-logo.png",
    alt: "Navrang Dhaba logo designed by Dandora",
    aspect: "square",
  },
  {
    id: "navrangdhaba-menu",
    client: "Navrang Dhaba",
    title: "Menu",
    category: "print",
    sector: "d2c",
    src: "/images/portfolio/navrangdhaba-menu.jpg",
    alt: "Navrang Dhaba menu design by Dandora",
    aspect: "portrait",
  },
  {
    id: "pcr-logo",
    client: "PCR",
    title: "Logo",
    category: "brand",
    sector: "real-estate",
    src: "/images/portfolio/pcr-logo.png",
    alt: "PCR real estate logo designed by Dandora",
    aspect: "square",
  },
  {
    id: "pcr-openplots-adcreative",
    client: "PCR",
    title: "Open plots ad creative",
    category: "digital",
    sector: "real-estate",
    src: "/images/portfolio/pcr-openplots-adcreative.jpg",
    alt: "PCR Open Plots digital ad creative by Dandora",
    aspect: "landscape",
  },
  {
    id: "pcr-prestige-adcreative",
    client: "PCR",
    title: "Prestige ad creative",
    category: "digital",
    sector: "real-estate",
    src: "/images/portfolio/pcr-prestige-adcreative.jpg",
    alt: "PCR Prestige digital ad creative by Dandora",
    aspect: "landscape",
  },
  {
    id: "richone-villas-logo",
    client: "RichOne Villas",
    title: "Logo",
    category: "brand",
    sector: "real-estate",
    src: "/images/portfolio/richone-villas-logo.png",
    alt: "RichOne Villas logo designed by Dandora",
    aspect: "square",
  },
  {
    id: "sumadhura-brochure",
    client: "Sumadhura",
    title: "Project brochure",
    category: "print",
    sector: "real-estate",
    src: "/images/portfolio/sumadhura-brochure.jpg",
    alt: "Sumadhura real estate project brochure by Dandora",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "sumadhura-business-card",
    client: "Sumadhura",
    title: "Business card",
    category: "print",
    sector: "real-estate",
    src: "/images/portfolio/sumadhura-business-card.jpg",
    alt: "Sumadhura business card design by Dandora",
    aspect: "landscape",
  },
  {
    id: "sumadhura-gifting-adcreative",
    client: "Sumadhura",
    title: "Gifting ad creative",
    category: "digital",
    sector: "real-estate",
    src: "/images/portfolio/sumadhura-gifting-adcreative.jpg",
    alt: "Sumadhura festive gifting ad creative by Dandora",
    aspect: "landscape",
  },
  {
    id: "sumadhura-mango-pickle-packaging",
    client: "Sumadhura",
    title: "Mango pickle packaging",
    category: "packaging",
    sector: "d2c",
    src: "/images/portfolio/sumadhura-mango-pickle-packaging.jpg",
    alt: "Sumadhura mango pickle packaging design by Dandora",
    aspect: "square",
  },
  {
    id: "swacham-logo",
    client: "Swacham",
    title: "Logo",
    category: "brand",
    sector: "d2c",
    src: "/images/portfolio/swacham-logo.png",
    alt: "Swacham brand logo designed by Dandora",
    aspect: "square",
  },
  {
    id: "swacham-water-bottle-label",
    client: "Swacham",
    title: "Water bottle label",
    category: "packaging",
    sector: "d2c",
    src: "/images/portfolio/swacham-water-bottle-label.jpg",
    alt: "Swacham water bottle label design by Dandora",
    aspect: "portrait",
  },
  {
    id: "tdh-boondhi-packaging",
    client: "TDH Boondhi",
    title: "Packaging",
    category: "packaging",
    sector: "d2c",
    src: "/images/portfolio/tdh-boondhi-packaging.jpg",
    alt: "TDH Boondhi product packaging design by Dandora",
    aspect: "square",
  },
  {
    id: "verlon-business-card",
    client: "Verlon",
    title: "Business card",
    category: "print",
    sector: "general",
    src: "/images/portfolio/verlon-business-card.jpg",
    alt: "Verlon business card design by Dandora",
    aspect: "landscape",
  },
  {
    id: "verlon-logo",
    client: "Verlon",
    title: "Logo",
    category: "brand",
    sector: "general",
    src: "/images/portfolio/verlon-logo.png",
    alt: "Verlon brand logo designed by Dandora",
    aspect: "square",
  },
  {
    id: "vlux-adcreative-eagle",
    client: "Vlux",
    title: "Eagle ad creative",
    category: "digital",
    sector: "it-software",
    src: "/images/portfolio/vlux-adcreative-eagle.jpg",
    alt: "Vlux digital ad creative by Dandora",
    aspect: "landscape",
  },
  {
    id: "vlux-brochure",
    client: "Vlux",
    title: "Brochure",
    category: "print",
    sector: "it-software",
    src: "/images/portfolio/vlux-brochure.jpg",
    alt: "Vlux company brochure design by Dandora",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "vlux-letterhead",
    client: "Vlux",
    title: "Letterhead",
    category: "print",
    sector: "it-software",
    src: "/images/portfolio/vlux-letterhead.jpg",
    alt: "Vlux letterhead stationery design by Dandora",
    aspect: "landscape",
  },
  {
    id: "xlnt-brochure",
    client: "Xlnt",
    title: "Brochure",
    category: "print",
    sector: "general",
    src: "/images/portfolio/xlnt-brochure.jpg",
    alt: "Xlnt brochure design by Dandora",
    aspect: "landscape",
  },
  {
    id: "zerotouch-adcreative",
    client: "ZeroTouch",
    title: "Ad creative",
    category: "digital",
    sector: "it-software",
    src: "/images/portfolio/zerotouch-adcreative.jpg",
    alt: "ZeroTouch software ad creative by Dandora",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "zerotouch-packaging-box",
    client: "ZeroTouch",
    title: "Packaging box",
    category: "packaging",
    sector: "it-software",
    src: "/images/portfolio/zerotouch-packaging-box.jpg",
    alt: "ZeroTouch product packaging box design by Dandora",
    aspect: "square",
  },
];

const ASPECT_CLASS = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
} as const;

export function portfolioAspectClass(aspect: PortfolioItem["aspect"]) {
  return ASPECT_CLASS[aspect];
}

export function getFeaturedPortfolio(): PortfolioItem[] {
  return PORTFOLIO_ITEMS.filter((item) => item.featured);
}

export function getPortfolioBySector(
  slug: string,
  limit = 9,
): PortfolioItem[] {
  return PORTFOLIO_ITEMS.filter((item) => item.sector === slug).slice(
    0,
    limit,
  );
}

export function getPortfolioByCategory(
  category: PortfolioCategory | "all",
): PortfolioItem[] {
  if (category === "all") return PORTFOLIO_ITEMS;
  return PORTFOLIO_ITEMS.filter((item) => item.category === category);
}

export function getMarketingPortfolio(limit?: number): PortfolioItem[] {
  const items = PORTFOLIO_ITEMS.filter((item) => item.category !== "brand");
  return limit ? items.slice(0, limit) : items;
}
