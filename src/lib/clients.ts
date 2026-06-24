export type Client = {
  name: string;
  category: string;
  /** Public path to a verified logo (e.g. `/clients/bpcl.svg`). Omitted when no clean logo exists — the marquee renders the name as text. */
  logo?: string;
};

/**
 * Homepage trust wall. Most recognizable enterprise / PSU / government names
 * lead the order, followed by the rest. Small/local clients without a clean,
 * verifiable logo intentionally omit `logo` and fall back to a text cell.
 */
export const CLIENTS: Client[] = [
  {
    name: "Bharat Petroleum",
    category: "Energy / PSU",
    logo: "/clients/bpcl.svg",
  },
  {
    name: "Hindustan Petroleum",
    category: "Energy / PSU",
    logo: "/clients/hpcl.svg",
  },
  {
    name: "Indian Navy",
    category: "Government / Defence",
    logo: "/clients/indian-navy.svg",
  },
  {
    name: "Kotak Mahindra Bank",
    category: "Banking / Finance",
    logo: "/clients/kotak-mahindra-bank.svg",
  },
  {
    name: "WTC Pune",
    category: "Commercial Real Estate",
  },
  {
    name: "K Raheja Corp",
    category: "Real Estate",
    logo: "/clients/k-raheja-corp.svg",
  },
  {
    name: "Navaratna Estates",
    category: "Real Estate",
  },
  {
    name: "Saket Builders & Developers",
    category: "Real Estate",
  },
  {
    name: "Skin Connect",
    category: "Healthcare",
  },
  {
    name: "Morandi Lifestyle",
    category: "D2C / Lifestyle",
  },
  {
    name: "Matrushri Publishers",
    category: "Publishing",
  },
  {
    name: "Watermelon Software Solutions",
    category: "Software",
  },
];
