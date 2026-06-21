/**
 * Software Engineering capabilities page content.
 * Distinct from the growth sectors — its CTA is a "scope your build" intake,
 * NOT the 9-step growth questionnaire.
 */
export const IT_SOFTWARE = {
  hero: {
    eyebrow: "SOFTWARE PRODUCT ENGINEERING PARTNER",
    h1: "Need it built? One senior-led team takes it from first wireframe to production — and beyond.",
    sub: "Web, mobile, desktop, and enterprise software — designed, engineered, and supported by one accountable team. No vendor juggling.",
    primaryCta: "Tell us what you're building",
    ghostCta: "See how we work",
  },
  stats: [
    { figure: "30+ yrs", label: "founder leadership" },
    { figure: "15 yrs", label: "combined team experience" },
    { figure: "US + global", label: "clients" },
  ],
  intro: {
    eyebrow: "ONE PARTNER FOR YOUR ENTIRE PRODUCT",
    h2: "One partner for your entire product.",
    body: "dandora.online is a full-stack software studio. We pair seasoned technical leadership with a versatile engineering team to take products from wireframe to production — without juggling multiple vendors.",
  },
  pillars: [
    {
      title: "Leadership that de-risks delivery",
      body: "Three decades of hands-on IT leadership on every engagement.",
    },
    {
      title: "Full-stack, end to end",
      body: "Frontend, backend, mobile, data, and DevOps under one roof.",
    },
    {
      title: "Built for global collaboration",
      body: "Transparent delivery aligned to US and worldwide time zones.",
    },
  ],
  whatWeBuild: {
    eyebrow: "WHAT WE BUILD",
    items: [
      {
        title: "Web applications",
        desc: "Customer portals, SaaS platforms, dashboards, internal tools.",
        tech: ["React", "Angular", "Next.js", "Node.js"],
      },
      {
        title: "Mobile apps",
        desc: "Native and cross-platform for iOS and Android.",
        tech: ["React Native", "Swift", "Kotlin"],
      },
      {
        title: "Desktop software",
        desc: "Cross-platform apps for demanding workflows.",
        tech: ["Windows", "macOS", "Linux"],
      },
      {
        title: "Enterprise & Microsoft",
        desc: "Low-code, intranet, and analytics.",
        tech: ["Power Platform", "SharePoint", "SPFx", "Power BI"],
      },
    ],
  },
  techStack: {
    eyebrow: "TECHNOLOGY STACK",
    groups: [
      { label: "Frontend", items: ["React", "Angular", "Next.js"] },
      { label: "Backend", items: ["Java", ".NET", "Node.js", "NestJS"] },
      { label: "Mobile", items: ["React Native", "Swift", "Kotlin"] },
      {
        label: "Microsoft & Low-Code",
        items: ["Power Apps", "Power Pages", "Power BI", "SharePoint", "SPFx"],
      },
      { label: "Data", items: ["SQL", "PostgreSQL", "MongoDB"] },
    ],
  },
  whyChooseUs: {
    eyebrow: "WHY TEAMS CHOOSE US",
    items: [
      {
        title: "Senior on every engagement",
        detail:
          "decisions guided by 30 years of leadership, not handed to juniors.",
      },
      {
        title: "One accountable team",
        detail: "end-to-end ownership, no vendor juggling.",
      },
      { title: "Microsoft + modern JS in one shop" },
      { title: "Aligned to your hours" },
      {
        title: "Outcome-driven",
        detail: "we optimise for shipped, reliable software — not billed hours.",
      },
      {
        title: "Scales with you",
        detail: "spin a dedicated team up or down.",
      },
    ],
  },
  howWeDeliver: {
    eyebrow: "HOW WE DELIVER",
    steps: [
      {
        number: "1",
        title: "Discover",
        body: "goals, users, constraints; define scope.",
      },
      {
        number: "2",
        title: "Design",
        body: "architecture, UX, a delivery plan you sign off.",
      },
      {
        number: "3",
        title: "Build",
        body: "iterative development with regular working demos.",
      },
      {
        number: "4",
        title: "Launch",
        body: "testing, hardening, a confident production release.",
      },
      {
        number: "5",
        title: "Support",
        body: "monitoring, enhancements, a partner who stays.",
      },
    ],
  },
  engagementModels: {
    eyebrow: "ENGAGEMENT MODELS",
    items: [
      {
        title: "Dedicated team",
        body: "a cross-functional squad embedded in your roadmap, scaling as you grow.",
        best: "Best for ongoing product development.",
      },
      {
        title: "Project-based",
        body: "fixed scope, clear milestones, defined budget, design to launch.",
        best: "Best for a well-defined deliverable.",
      },
      {
        title: "Staff augmentation",
        body: "skilled engineers who plug into your existing team and tools.",
        best: "Best for adding capacity fast.",
      },
    ],
  },
  deRisk:
    "You don't have to commit to a full product team. Start with one feature, one milestone, or one audit of your existing codebase — we scope it with you and start fast.",
  cta: {
    eyebrow: "LET'S BUILD WHAT'S NEXT",
    h2: "Tell us what you're building.",
    sub: "From a single feature to a full product team — we'll scope it with you and start fast.",
    primaryCta: "Start your build",
  },
} as const;
