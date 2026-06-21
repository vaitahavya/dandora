/**
 * Homepage copy — the 6-beat flow:
 * Recognise → Realise → Resonate → Reframe → Rely → Respond
 */

export const HERO = {
  eyebrow: "DANDORA",
  h1: "Wherever you are today — there's a next step towards growth.",
  sub: "Stuck, scaling, or quietly comfortable — your business has a next move. The only question is whether you make it on purpose, or wait until the market makes it for you.",
  primary: "Start the conversation",
  ghost: "See if this is for you",
  micro: "Growth, engineered.",
} as const;

export const REALISE = {
  eyebrow: "A QUIET TRUTH",
  h2: "Doing well is not the same as being safe.",
  body: "The businesses that struggle most are rarely the ones already failing. They're the ones that were comfortable the longest — running well, year after year — until the ground quietly shifted underneath them. The market doesn't warn you. It just moves.",
  leadIn: "So ask yourself, honestly:",
  questions: [
    "If my best client left tomorrow, how exposed would I be?",
    "When did I last change how we grow — not just work harder at the same thing?",
    "Who is quietly doing what I do, cheaper or faster, right now?",
    "If I had to scale 3× this year, what would break first?",
    "Am I building a business — or just running one?",
  ],
  closer: "Growth isn't a reaction to trouble. It's a decision you make before you need it.",
} as const;

export const RESONATE = {
  h2: "Which one sounds like you?",
  sub: "Pick the closest. There's no wrong answer — only a starting point.",
  cards: [
    {
      id: "potential",
      headline: "We have potential, but we can't scale.",
      sub: "The demand is there. The system isn't.",
    },
    {
      id: "slow",
      headline: "We're growing — just slower than we should be.",
      sub: "Something is leaking. We can't see where.",
    },
    {
      id: "shifting",
      headline: "We're doing fine. But I can feel the ground shifting.",
      sub: "Comfortable today. Unsure about tomorrow.",
    },
    {
      id: "stuck",
      headline: "We feel stuck — and we're not sure what to change.",
      sub: "We know something needs to move. We don't know what.",
    },
  ],
  cta: "Good. Let's go deeper",
} as const;

export const SECTORS = {
  eyebrow: "WHO WE WORK WITH",
  h2: "Find your world. We'll show you the next step in it.",
  cards: [
    {
      id: "real-estate",
      name: "Real Estate",
      line: "Sell the last of your inventory — to buyers who'll live there, not just investors. Films, funnels, and visibility that move projects.",
      href: "/sectors/real-estate",
    },
    {
      id: "d2c",
      name: "D2C Brands",
      line: "Break past the ₹50cr ceiling. We fix rising CAC, one-time buyers, and ad-only growth — and we make the content, not just the deck.",
      href: "/sectors/d2c",
    },
    {
      id: "it-software",
      name: "Software & IT Development",
      line: "Need it built? Senior-led teams that design, build, and ship — web, mobile, desktop, enterprise. From one feature to a full product.",
      href: "/sectors/it-software",
      tag: "Engineering",
    },
    {
      id: "healthcare",
      name: "Healthcare",
      line: "Let your care be found — and trusted. Honest, compliance-aware storytelling and a steady flow of the right patients.",
      href: "/sectors/healthcare",
    },
    {
      id: "education",
      name: "Education",
      line: "Make every admissions cycle predictable. Campus films, parent-trust content, and a presence that works year-round.",
      href: "/sectors/education",
    },
  ],
} as const;

export const REFRAME = {
  eyebrow: "THE PART MOST PEOPLE MISS",
  h2: "Every company you admire did something deliberate to grow.",
  body: "They didn't get lucky. They built systems — for how they sell, market, and deliver — so growth stopped depending on heroics and started depending on a process. That's our work. We don't just run campaigns or shoot films. We standardise how your business grows — leads, pitch, brand, follow-through — so the next step is repeatable, not accidental.",
  pillars: [
    {
      id: "see",
      label: "See it",
      line: "We map where your growth actually leaks.",
      emphasis: false,
    },
    {
      id: "standardise",
      label: "Standardise it",
      line: "We turn good months into a repeatable system.",
      emphasis: true,
    },
    {
      id: "scale",
      label: "Scale it",
      line: "We build the brand and engine to grow on purpose.",
      emphasis: false,
    },
  ],
} as const;

export const RELY = {
  h2: "Why founders bring us in.",
  body: "Dandora brings two things under one roof that usually live apart: a decade of high-end production and storytelling, and hard business-development and growth strategy. So your brand doesn't just look good — it moves inventory, books leads, and closes. Hyderabad-rooted. Built for real estate, D2C, and technology businesses that are done guessing.",
  proof: [
    "10+ years in production",
    "Full-stack growth consulting",
    "Real Estate",
    "D2C",
    "IT & Software",
  ],
} as const;

export const RESPOND = {
  h2: "Let's understand your business — before we ever pitch you anything.",
  sub: "No sales call. No pricing. Just a structured conversation about where you are and where you want to be.",
  buttonA: "I know my biggest challenge",
  buttonB: "Help me figure it out",
  reassurance:
    "About 6 minutes · Everything stays between us · You'll leave with clarity even if we never work together.",
} as const;

export const DERISK = {
  eyebrow: "NO BIG LEAP REQUIRED",
  h2: "The next step is smaller than you think.",
  body: "We don't start with a retainer or a big pitch. We start with one small, specific move that proves the point — a focused growth audit, a single brand film, one funnel fixed, one feature shipped. You see real value before anything bigger is discussed.",
  closer: "Prove it small. Then scale what works.",
} as const;

export const FOOTER = {
  tagline: "Dandora — Growth, engineered.",
  links: [
    { label: "Real Estate", href: "/sectors/real-estate" },
    { label: "D2C", href: "/sectors/d2c" },
    { label: "IT & Software", href: "/sectors/it-software" },
    { label: "Privacy", href: "/privacy" },
  ],
} as const;
