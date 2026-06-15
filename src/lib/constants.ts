export const SITE = {
  name: "Dandora",
  tagline: "We're the people in the room with you.",
  url: "https://dandora.com",
  email: "hello@dandora.com",
  phone: "+91 [FILL IN]",
  location: "Hyderabad",
  accent: "#2D5A47",
} as const;

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
] as const;

export const SECTORS = [
  {
    slug: "real-estate",
    name: "Real Estate",
    href: "/sectors/real-estate",
    accent: "#C4A574",
    motif: "architecture",
    tagline: "You're not selling square feet. You're selling a decision people make once in a lifetime.",
    problems: [
      "Projects don't sell themselves anymore.",
      "Inventory sits. The wrong leads flood in.",
      "And every brochure looks like the last one.",
    ],
    solutions: [
      {
        title: "Make it a place, not a listing",
        description:
          "Brand films and launch videos that sell the life, not the layout.",
      },
      {
        title: "Reach real end-users",
        description:
          "Marketing that finds buyers, not just browsers and brokers.",
      },
      {
        title: "Turn enquiries into bookings",
        description:
          "Websites + CRM built for how property actually sells.",
      },
      {
        title: "Plan the launch",
        description:
          "Strategy for phasing, positioning, and expansion.",
      },
    ],
    proof:
      "[FILL IN: e.g. Helped a Hyderabad developer lift qualified enquiries by X%.]",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    href: "/sectors/healthcare",
    accent: "#4A8B8B",
    motif: "pulse",
    tagline:
      "Patients decide with their gut, long before they read your credentials.",
    problems: [
      "Trust is hard to earn and easy to lose.",
      "Great care goes unseen.",
      "Patients can't find you — or don't choose you.",
    ],
    solutions: [
      {
        title: "Earn trust before the first visit",
        description: "Brand and reputation that reassure.",
      },
      {
        title: "Acquire patients, respectfully",
        description:
          "Marketing that's clear, compliant, and human.",
      },
      {
        title: "Respect everyone's time",
        description: "Booking, CRM, and automation that just works.",
      },
      {
        title: "Educate, don't sell",
        description:
          "Content that answers the questions patients actually ask.",
      },
    ],
    proof: "[FILL IN]",
  },
  {
    slug: "d2c",
    name: "D2C",
    href: "/sectors/d2c",
    accent: "#D4735C",
    motif: "commerce",
    tagline: "The first sale is easy. The second one is the business.",
    problems: [
      "Ad costs climb. Margins thin.",
      "Loyalty is rare.",
      "And in the feed, you look like everyone else.",
    ],
    solutions: [
      {
        title: "Be worth paying more for",
        description: "Brand that stands out and sticks.",
      },
      {
        title: "Scale without bleeding margin",
        description: "Performance marketing built on the numbers.",
      },
      {
        title: "Convert better",
        description: "Storefronts and tech tuned for the sale.",
      },
      {
        title: "Keep them coming back",
        description: "Retention systems that turn buyers into regulars.",
      },
    ],
    proof: "[FILL IN]",
  },
  {
    slug: "it-software",
    name: "IT & Software",
    href: "/sectors/it-software",
    accent: "#5B7A9D",
    motif: "code",
    tagline: "You built something brilliant. Nobody's heard of it.",
    problems: [
      "Great product. No pipeline.",
      "You can sell the tech, but not the value.",
      "Growth that runs on referrals and luck.",
    ],
    solutions: [
      {
        title: "Make the value obvious",
        description: "Positioning that lands in five seconds.",
      },
      {
        title: "Fill the pipeline",
        description: "B2B demand gen that brings the right buyers.",
      },
      {
        title: "Earn enterprise trust",
        description: "A brand that looks as serious as your product.",
      },
      {
        title: "Scale go-to-market",
        description: "Operations so growth doesn't outrun you.",
      },
    ],
    proof: "[FILL IN]",
  },
] as const;

export const SERVICES = [
  {
    number: "01",
    title: "Strategy",
    headline: "Most businesses don't have a strategy problem. They have a clarity problem.",
    tags: [
      "market entry",
      "growth planning",
      "competitive positioning",
      "franchise expansion",
    ],
    payoff: "You leave knowing exactly what to do next.",
    snapshot: "Clarity on exactly what to do next.",
  },
  {
    number: "02",
    title: "Technology",
    headline: "Bad tech slows everything down.",
    tags: ["websites", "mobile apps", "automation", "AI solutions", "ERP & CRM"],
    payoff:
      "We build what you actually need — connected directly to how your business makes money.",
    snapshot: "Build what your business actually needs.",
  },
  {
    number: "03",
    title: "Marketing",
    headline: "The best product in the room still loses to someone louder.",
    tags: [
      "brand",
      "content",
      "SEO",
      "performance marketing",
      "video",
      "PR",
      "social",
    ],
    payoff: "Built to bring the right people in — and keep them.",
    snapshot: "Bring the right people in. Keep them.",
  },
  {
    number: "04",
    title: "Operations",
    headline: "Growth breaks things.",
    tags: [
      "lead generation",
      "project management",
      "outsourcing",
      "CRM support",
    ],
    payoff: "Systems so your team can scale without things falling apart.",
    snapshot: "Scale without breaking.",
  },
  {
    number: "05",
    title: "Investment Advisory",
    headline:
      "When it's time to grow with capital behind you, the decisions get harder.",
    tags: [],
    payoff: "We help you plan, prioritise, and move with confidence.",
    snapshot: "Grow with capital behind you.",
  },
] as const;

export const VALUES = [
  "Honest over easy.",
  "In it with you.",
  "Outcomes over output.",
] as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "[FILL IN]" },
  { label: "Instagram", href: "[FILL IN]" },
] as const;
