/**
 * The discovery questionnaire — 9 steps, conversational.
 * One required field per step (max). Everything else skippable.
 */

export type FieldType =
  | "text"
  | "textarea"
  | "chips" // single-select pills
  | "multichips" // multi-select pills
  | "cards" // single-select cards
  | "slider"
  | "rank"
  | "contact";

export type Field = {
  key: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: string[];
  required?: boolean;
  helper?: string;
};

export type Step = {
  id: number;
  eyebrow: string;
  title: string;
  fields: Field[];
};

export const INTRO = {
  title: "Let's understand your business — before we ever pitch you anything.",
  body: "About 6 minutes. No sales call, no pricing. You'll leave with clarity either way.",
  cta: "Begin",
} as const;

/** Single-select options for Beat-3 / Step-3 "Which feels closest?" */
export const CLOSEST_OPTIONS = [
  "We have potential but can't scale",
  "Growing slower than expected",
  "We feel stuck",
  "Losing opportunities",
  "Competitors moving faster",
  "Know something must change, unsure what",
] as const;

/** Maps a Beat-3 card id to a Step-3 "closest" answer (pre-fill). */
export const BEAT3_TO_CLOSEST: Record<string, string> = {
  potential: "We have potential but can't scale",
  slow: "Growing slower than expected",
  shifting: "Competitors moving faster",
  stuck: "We feel stuck",
};

export const STEPS: Step[] = [
  {
    id: 1,
    eyebrow: "Your business today",
    title: "First, the basics.",
    fields: [
      {
        key: "bizWhat",
        label: "What does your business do?",
        type: "text",
        placeholder: "One line is plenty",
        required: true,
      },
      {
        key: "bizAge",
        label: "How long have you been running?",
        type: "chips",
        options: ["< 1 yr", "1–3", "3–7", "7+"],
      },
      {
        key: "bizRevenueSource",
        label: "What brings in most of your revenue today?",
        type: "text",
      },
      {
        key: "bizRevenue",
        label: "Roughly, annual revenue?",
        type: "chips",
        options: [
          "Pre-revenue",
          "< ₹50L",
          "₹50L–₹2Cr",
          "₹2Cr–₹10Cr",
          "₹10Cr–₹50Cr",
          "₹50Cr+",
        ],
        helper: "Skippable",
      },
      {
        key: "bizTeam",
        label: "Team size?",
        type: "chips",
        options: ["Just me", "2–10", "11–50", "50+"],
      },
      {
        key: "bizMarkets",
        label: "Main markets you serve?",
        type: "text",
      },
    ],
  },
  {
    id: 2,
    eyebrow: "Your biggest challenge",
    title: "What's really in the way?",
    fields: [
      {
        key: "challenge",
        label: "In one sentence — what's holding growth back right now?",
        type: "textarea",
        required: true,
      },
      {
        key: "challengeAreas",
        label: "Which of these are weighing on you?",
        type: "multichips",
        options: [
          "Lack of leads",
          "Inconsistent sales",
          "Low conversion",
          "Hard to scale",
          "Marketing not working",
          "Pricing / competition pressure",
          "Hiring & team",
          "Operations",
          "Technology limits",
          "Customer retention",
          "Other…",
        ],
      },
    ],
  },
  {
    id: 3,
    eyebrow: "What it's costing you",
    title: "What's the cost of standing still?",
    fields: [
      {
        key: "cost12mo",
        label: "If nothing changes for 12 months, what happens?",
        type: "textarea",
      },
      {
        key: "costNow",
        label: "What's this already costing you — time, money, momentum?",
        type: "textarea",
      },
      {
        key: "closest",
        label: "Which feels closest?",
        type: "cards",
        options: [...CLOSEST_OPTIONS],
      },
    ],
  },
  {
    id: 4,
    eyebrow: "What you've already tried",
    title: "What have you already attempted?",
    fields: [
      {
        key: "tried",
        label: "What have you tried so far?",
        type: "textarea",
      },
      {
        key: "triedWhy",
        label: "Why do you think it didn't fully land?",
        type: "textarea",
        helper: "Skippable",
      },
      {
        key: "pastFrustration",
        label: "Any past frustration with agencies, consultants, or vendors?",
        type: "textarea",
        helper: "Be honest — it helps us",
      },
    ],
  },
  {
    id: 5,
    eyebrow: "Where you want to be",
    title: "Picture it working.",
    fields: [
      {
        key: "vision",
        label: "If everything worked, where's the business in 12–36 months?",
        type: "textarea",
      },
      {
        key: "outcomes",
        label: "Which outcomes matter most?",
        type: "multichips",
        options: [
          "Revenue growth",
          "Profitability",
          "Market position",
          "Better systems",
          "Stronger brand",
          "More qualified leads",
          "Higher conversion",
          "New markets",
          "Operational efficiency",
          "Investor readiness",
          "Exit prep",
        ],
      },
      {
        key: "bestDecision",
        label:
          "Three years from now, what would make you say \u201cthis was one of the best decisions we made\u201d?",
        type: "textarea",
        helper: "Skippable",
      },
    ],
  },
  {
    id: 6,
    eyebrow: "What you have going for you",
    title: "Your unfair advantages.",
    fields: [
      {
        key: "sellsWell",
        label: "Which products / services already sell well?",
        type: "text",
      },
      {
        key: "customersFrom",
        label: "Where do customers come from today?",
        type: "text",
      },
      {
        key: "whyChoose",
        label: "Why do customers choose you over others?",
        type: "textarea",
      },
      {
        key: "leavingMoney",
        label:
          "Where do you think you're leaving money on the table — markets or segments you're not reaching?",
        type: "textarea",
        helper: "Skippable",
      },
      {
        key: "competitors",
        label: "Who are your main competitors?",
        type: "text",
        helper: "Skippable",
      },
    ],
  },
  {
    id: 7,
    eyebrow: "The numbers",
    title: "Let's talk targets.",
    fields: [
      {
        key: "revenueGoal",
        label: "Revenue goal for the next 12 months?",
        type: "chips",
        options: [
          "Hold steady",
          "+10–25%",
          "+25–50%",
          "+50–100%",
          "2–3×",
          "3×+",
        ],
      },
      {
        key: "challengeWorth",
        label:
          "Roughly, what would solving your biggest challenge be worth — in revenue or profit?",
        type: "text",
        helper: "Skippable",
      },
      {
        key: "goalMeaning",
        label: "What would hitting that goal mean for you, personally?",
        type: "textarea",
        helper: "Skippable",
      },
    ],
  },
  {
    id: 8,
    eyebrow: "Why now",
    title: "Why is this the moment?",
    fields: [
      {
        key: "whyNow",
        label: "Why solve this now, rather than later?",
        type: "textarea",
      },
      {
        key: "urgency",
        label: "How urgent is it?",
        type: "slider",
      },
      {
        key: "pushing",
        label: "What's pushing you to look for help at this stage?",
        type: "textarea",
        helper: "Skippable",
      },
    ],
  },
  {
    id: 9,
    eyebrow: "How you decide",
    title: "Last thing — how decisions get made.",
    fields: [
      {
        key: "decisionMakers",
        label: "Who's involved in big growth decisions?",
        type: "chips",
        options: ["Just me", "Me + partner", "Leadership team", "Board"],
      },
      {
        key: "priorities",
        label: "What matters most when choosing a partner?",
        type: "rank",
        options: [
          "Trust",
          "Expertise",
          "Track record",
          "Speed",
          "ROI",
          "Cost",
          "Long-term support",
        ],
      },
      {
        key: "contact",
        label: "How should we reach you?",
        type: "contact",
        required: true,
      },
    ],
  },
];

export const TOTAL_STEPS = STEPS.length;

export type Answers = Record<string, unknown>;

/**
 * Generate 2–3 reflected observations from the answers for the end screen.
 * Always returns at least one, with sensible fallbacks.
 */
export function reflectObservations(answers: Answers): string[] {
  const out: string[] = [];
  const areas = (answers.challengeAreas as string[]) ?? [];
  const outcomes = (answers.outcomes as string[]) ?? [];
  const urgency = Number(answers.urgency ?? 0);
  const closest = answers.closest as string | undefined;

  if (areas.includes("Lack of leads")) {
    out.push(
      "Leads aren't arriving predictably — that's usually a system gap, not an effort gap.",
    );
  }
  if (areas.includes("Hard to scale") || closest?.includes("can't scale")) {
    out.push(
      "You have demand the current setup can't absorb — the opportunity is in the operating model, not the market.",
    );
  }
  if (
    areas.includes("Marketing not working") ||
    areas.includes("Low conversion")
  ) {
    out.push(
      "The story may be reaching people but not moving them — a positioning problem dressed as a marketing one.",
    );
  }
  if (areas.includes("Pricing / competition pressure")) {
    out.push(
      "Competing on price signals an unclear value story — there's room to win on differentiation instead.",
    );
  }
  if (outcomes.includes("Stronger brand") && outcomes.includes("More qualified leads")) {
    out.push(
      "You want brand and pipeline together — that's exactly where production and growth strategy compound.",
    );
  }
  if (urgency >= 8) {
    out.push(
      "This is urgent for you — which means the cost of a slow, generic approach is real. Speed with focus matters here.",
    );
  }

  // Fallbacks so the end screen is never empty.
  const fallbacks = [
    "You're already thinking in systems, not quick fixes — that's the right starting point.",
    "There's a clear next step here, and it's more about sequencing than scrambling.",
    "The biggest opportunity is likely closer to what you already do well than you think.",
  ];
  let fi = 0;
  while (out.length < 2 && fi < fallbacks.length) {
    out.push(fallbacks[fi++]);
  }

  return out.slice(0, 3);
}
