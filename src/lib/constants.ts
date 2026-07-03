export const SITE = {
  name: "Dandora",
  tagline: "We're the people in the room with you.",
  url: "https://www.dandora.online",
  email: "dandora.online@gmail.com",
  phone: "+91 40 4521 6780",
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
    tagline: "Your inventory isn't the problem. Its silence is.",
    problems: [
      "90,000+ homes unsold across Hyderabad — the market didn't stop, it shifted to end-users.",
      "70% of buyers begin online. If they can't find your project there, you never make the shortlist.",
      "Leads rented from brokers, one by one — with no demand engine of your own.",
    ],
    solutions: [
      {
        title: "Position",
        description:
          "Find the one true story of each project — and the exact buyer it's for.",
      },
      {
        title: "Produce",
        description:
          "Cinematic project films, builder-brand films and scroll-stopping social.",
      },
      {
        title: "Publish",
        description:
          "A website and social presence that turn online searches into site visits.",
      },
      {
        title: "Convert",
        description:
          "A trusted brand that brings end-users to you — off the broker meter.",
      },
    ],
    proof:
      "A West Hyderabad developer saw 3.2× qualified site visits in 90 days after a cinematic project film replaced brochure-led marketing.",
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
    proof:
      "A multi-specialty Hyderabad clinic doubled first-appointment bookings within four months of trust-led films and a frictionless online booking flow.",
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
    proof:
      "A D2C wellness brand cut cost-per-acquisition by 38% after product marketing sharpened the value story before performance spend scaled.",
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
    proof:
      "A B2B SaaS team shipped a React Native app and customer portal in one 14-week engagement — one accountable team, no vendor handoffs.",
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
  { label: "LinkedIn", href: "https://www.linkedin.com/company/dandora-online" },
  { label: "Instagram", href: "https://www.instagram.com/dandora.online" },
] as const;
