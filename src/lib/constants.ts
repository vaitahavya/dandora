export const SITE = {
  name: "Dandora",
  tagline: "We're the people in the room with you.",
  url: "https://dandora.com",
  email: "hello@dandora.com",
  phone: "+91 [FILL IN]",
  location: "Hyderabad",
  accent: "#4F46E5",
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
    accent: "#4F46E5",
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
    accent: "#06B6D4",
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
    accent: "#4F46E5",
    motif: "commerce",
    tagline: "The first sale is easy. Product marketing earns the second.",
    problems: [
      "Ad costs climb. Margins thin.",
      "Your product — physical or software — sounds like everything else in the feed.",
      "You're spending on ads before the value is clear.",
    ],
    solutions: [
      {
        title: "Product marketing that sells the value",
        description:
          "Positioning, messaging, and launch plans — for consumer products and software sold direct.",
      },
      {
        title: "Scale without bleeding margin",
        description: "Performance marketing built on the numbers, not guesswork.",
      },
      {
        title: "Convert better",
        description: "Storefronts, landing pages, and product experience tuned for the sale.",
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
    name: "Software & IT Development",
    href: "/sectors/it-software",
    accent: "#06B6D4",
    motif: "code",
    tagline: "One accountable team from wireframe to production — and beyond.",
    problems: [
      "You're juggling vendors for frontend, backend, mobile, and ops.",
      "The roadmap needs full-stack delivery — not another handoff.",
      "Junior-only teams slow decisions. Leadership is missing when it matters.",
    ],
    solutions: [
      {
        title: "Web applications",
        description:
          "Customer portals, SaaS platforms, dashboards, and internal tools — React, Angular, Next.js, Node.js.",
      },
      {
        title: "Mobile apps",
        description:
          "Native and cross-platform apps for iOS and Android — React Native, Swift, Kotlin.",
      },
      {
        title: "Desktop & enterprise",
        description:
          "Cross-platform desktop software plus Microsoft ecosystem — Power Platform, SharePoint, Power BI.",
      },
      {
        title: "Engagement models that fit",
        description:
          "Dedicated product teams, fixed-scope projects, or engineers embedded in yours.",
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
    imageKey: "strategy",
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
    headline: "Products need one accountable team — not a stack of vendors.",
    imageKey: "technology",
    tags: [
      "web applications",
      "mobile apps",
      "desktop software",
      "React · Next.js · Node.js",
      "Java · .NET",
      "Power Platform · SharePoint",
      "React Native · Swift · Kotlin",
    ],
    payoff:
      "We design, build, and ship across web, mobile, and desktop — with senior leadership on every engagement.",
    snapshot: "Design, build, and ship — full stack.",
  },
  {
    number: "03",
    title: "Marketing",
    headline: "The best product in the room still loses to someone louder.",
    imageKey: "marketing",
    tags: [
      "brand",
      "product marketing",
      "content",
      "SEO",
      "performance marketing",
      "video",
      "PR",
      "social",
    ],
    payoff: "Product marketing, content, and performance — built to bring the right people in and keep them.",
    snapshot: "Product marketing that brings people in.",
  },
  {
    number: "04",
    title: "Operations",
    headline: "Growth breaks things.",
    imageKey: "operations",
    tags: [
      "lead generation",
      "project management",
      "outsourcing",
      "CRM support",
    ],
    payoff: "Systems so your team can scale without things falling apart.",
    snapshot: "Scale without breaking.",
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
