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

/* ── Sector-keyed tailored forms ─────────────────────────────────
 * One engine, many forms. Each growth sector gets a SHORT intake
 * (a few sector-specific fields + a contact step) plus an OPTIONAL
 * deeper follow-up the visitor can choose to continue into after
 * the short intake is already submitted.
 */

export type FormIntro = { title: string; body: string; cta: string };

export type QuestionnaireForm = {
  /** undefined = the generic / default discovery form. */
  sector?: string;
  intro: FormIntro;
  /** Short intake — ends with a `contact` step. */
  short: Step[];
  /** Optional deeper follow-up steps (no contact step). */
  deeper: Step[];
};

const contactStep = (
  id: number,
  eyebrow = "Last thing",
  title = "How should we reach you?",
): Step => ({
  id,
  eyebrow,
  title,
  fields: [
    {
      key: "contact",
      label: "How should we reach you?",
      type: "contact",
      required: true,
    },
  ],
});

/* ── Real Estate ─────────────────────────────────────────────── */
const REAL_ESTATE_FORM: QuestionnaireForm = {
  sector: "Real Estate",
  intro: {
    title: "Tell us about your project — before we ever pitch you anything.",
    body: "A few quick questions about what you're selling and how sales move today. About 2 minutes. No pricing, no sales call.",
    cta: "Begin",
  },
  short: [
    {
      id: 1,
      eyebrow: "Your project",
      title: "First, what are you selling — and who's selling it?",
      fields: [
        {
          key: "reRole",
          label: "Are you a developer or a broker / channel partner?",
          type: "chips",
          options: [
            "Developer / builder",
            "Broker / channel partner",
            "Marketing / sales head",
          ],
          required: true,
        },
        {
          key: "reAssetType",
          label: "What kind of inventory?",
          type: "chips",
          options: [
            "Apartments",
            "Villas / row houses",
            "Plots / land",
            "Commercial",
            "Mixed-use",
          ],
        },
        {
          key: "reLocation",
          label: "Which city / micro-market(s)?",
          type: "text",
          placeholder: "e.g. Kokapet, Hyderabad",
        },
        {
          key: "reInventory",
          label: "Roughly how many units — and how many still unsold?",
          type: "text",
          placeholder: "e.g. 220 units, ~70 unsold",
          helper: "Skippable",
        },
      ],
    },
    {
      id: 2,
      eyebrow: "Buyers & sales motion",
      title: "How are sales moving right now?",
      fields: [
        {
          key: "reBuyerType",
          label: "Who's buying today?",
          type: "chips",
          options: [
            "Mostly end-users",
            "Mostly investors",
            "A mix of both",
            "Not sure yet",
          ],
          required: true,
        },
        {
          key: "rePriceBand",
          label: "Typical ticket size?",
          type: "chips",
          options: [
            "< ₹50L",
            "₹50L–₹1Cr",
            "₹1–2.5Cr",
            "₹2.5–5Cr",
            "₹5Cr+",
          ],
          helper: "Skippable",
        },
        {
          key: "reMotion",
          label: "How do you drive sales today?",
          type: "multichips",
          options: [
            "Channel partners / brokers",
            "Property portals",
            "Social media",
            "Hoardings / print",
            "Referrals",
            "In-house sales team",
            "Performance ads",
          ],
        },
        {
          key: "reTimeline",
          label: "How soon do you need to sell?",
          type: "chips",
          options: [
            "Launching soon",
            "Within 6 months",
            "6–12 months",
            "Ongoing inventory",
          ],
        },
      ],
    },
    contactStep(3),
  ],
  deeper: [
    {
      id: 1,
      eyebrow: "Going deeper",
      title: "A sharper read on what's holding sales back.",
      fields: [
        {
          key: "reDifferentiation",
          label: "What makes this project stand out in its micro-market?",
          type: "textarea",
          helper: "Skippable",
        },
        {
          key: "reAttribution",
          label: "Can you tell which channel drives each real site visit?",
          type: "chips",
          options: ["Clearly", "Roughly", "Not at all"],
        },
        {
          key: "reChannelPartners",
          label: "How organised is your channel-partner network?",
          type: "chips",
          options: ["Strong & active", "Some, disorganised", "Just starting", "None yet"],
        },
        {
          key: "reNRI",
          label: "Are NRI buyers a target segment?",
          type: "chips",
          options: ["Yes — key segment", "Somewhat", "No"],
        },
        {
          key: "reSocialActivity",
          label: "How active is the project's social presence?",
          type: "chips",
          options: ["Daily / weekly", "Occasional", "Mostly dormant"],
        },
      ],
    },
  ],
};

/* ── D2C ─────────────────────────────────────────────────────── */
const D2C_FORM: QuestionnaireForm = {
  sector: "D2C",
  intro: {
    title: "Tell us about your brand — before we ever pitch you anything.",
    body: "A few quick questions about your category, economics, and channels. About 2 minutes. No pricing, no pitch.",
    cta: "Begin",
  },
  short: [
    {
      id: 1,
      eyebrow: "Your brand & stage",
      title: "First, the shape of the business.",
      fields: [
        {
          key: "d2cCategory",
          label: "What category are you in?",
          type: "text",
          placeholder: "Skincare, food, apparel, supplements…",
          required: true,
        },
        {
          key: "d2cStage",
          label: "Where are you today?",
          type: "chips",
          options: [
            "Pre-launch",
            "Early (< ₹1cr)",
            "Growing (₹1–50cr)",
            "Scaling (₹50cr+)",
          ],
          required: true,
        },
        {
          key: "d2cRevenue",
          label: "Roughly, monthly revenue?",
          type: "chips",
          options: [
            "Pre-revenue",
            "< ₹5L/mo",
            "₹5–25L/mo",
            "₹25L–₹1Cr/mo",
            "₹1Cr+/mo",
          ],
          helper: "Skippable",
        },
        {
          key: "d2cAOV",
          label: "Average order value?",
          type: "chips",
          options: ["< ₹500", "₹500–1,500", "₹1,500–3,000", "₹3,000+"],
          helper: "Skippable",
        },
      ],
    },
    {
      id: 2,
      eyebrow: "Growth signals",
      title: "Where growth is leaking.",
      fields: [
        {
          key: "d2cCAC",
          label: "What's your acquisition cost doing?",
          type: "chips",
          options: ["Rising fast", "Creeping up", "Stable", "Improving", "Not tracking"],
        },
        {
          key: "d2cRepeat",
          label: "Roughly, your repeat-purchase rate?",
          type: "chips",
          options: ["< 10%", "10–25%", "25–40%", "40%+", "Not sure"],
        },
        {
          key: "d2cChannels",
          label: "Where do sales come from today?",
          type: "multichips",
          options: [
            "Own website",
            "Amazon / Flipkart",
            "Quick-commerce",
            "Retail / offline",
            "Meta ads",
            "Google ads",
            "Influencers / creators",
            "Organic / referrals",
          ],
        },
        {
          key: "d2cAdReliance",
          label: "How dependent is growth on paid ads?",
          type: "chips",
          options: ["Almost all paid", "Mostly paid", "Fairly balanced", "Mostly organic"],
        },
      ],
    },
    contactStep(3),
  ],
  deeper: [
    {
      id: 1,
      eyebrow: "Going deeper",
      title: "Let's pinpoint the real ceiling.",
      fields: [
        {
          key: "d2cConstraint",
          label: "Where does growth stall the most?",
          type: "cards",
          options: [
            "Positioning — who we're really for",
            "No clear launch plan",
            "Rising acquisition cost",
            "Weak retention — buy once, vanish",
            "Wasted ad budget we can't trace",
            "We've outgrown our early team",
          ],
        },
        {
          key: "d2cContent",
          label: "How much content are you producing monthly?",
          type: "chips",
          options: ["Almost none", "A few pieces", "8–15 pieces", "15+ pieces"],
        },
        {
          key: "d2cGoal",
          label: "What does the next 12 months need to look like?",
          type: "textarea",
          helper: "Skippable",
        },
      ],
    },
  ],
};

/* ── Healthcare ──────────────────────────────────────────────── */
const HEALTHCARE_FORM: QuestionnaireForm = {
  sector: "Healthcare",
  intro: {
    title: "Tell us about your practice — before we ever pitch you anything.",
    body: "A respectful few questions about your patients and reputation. About 2 minutes. No pricing, no pressure — trust comes first.",
    cta: "Begin",
  },
  short: [
    {
      id: 1,
      eyebrow: "Your practice",
      title: "First, a little about your practice.",
      fields: [
        {
          key: "hcType",
          label: "What kind of practice is it?",
          type: "chips",
          options: [
            "Clinic",
            "Hospital",
            "Specialty practice",
            "Diagnostics / labs",
            "Multi-specialty",
          ],
          required: true,
        },
        {
          key: "hcSpecialty",
          label: "Your specialty or focus area?",
          type: "text",
          placeholder: "e.g. dermatology, fertility, dental",
          helper: "Skippable",
        },
        {
          key: "hcLocations",
          label: "How many locations?",
          type: "chips",
          options: ["Single location", "2–3", "4–10", "10+"],
        },
      ],
    },
    {
      id: 2,
      eyebrow: "Patients & reputation",
      title: "How do patients find you — and what worries you?",
      fields: [
        {
          key: "hcDiscovery",
          label: "How do patients find you today?",
          type: "multichips",
          options: [
            "Referrals / word-of-mouth",
            "Walk-ins / locality",
            "Google / search",
            "Maps & listings",
            "Social media",
            "Insurance / TPA panels",
            "Existing patients",
          ],
        },
        {
          key: "hcConcern",
          label: "Which feels closest to your situation?",
          type: "cards",
          options: [
            "Great care, but patients can't find us",
            "We depend almost entirely on referrals",
            "Our online reputation doesn't match our care",
            "Opening a new location or specialty",
            "Patients don't understand what we offer",
          ],
          required: true,
        },
        {
          key: "hcCompliance",
          label: "How compliance-sensitive is your communication?",
          type: "chips",
          options: [
            "Very — strict guidelines",
            "Moderately",
            "Standard care",
            "Not sure",
          ],
          helper: "We keep everything ethical and claim-free",
        },
      ],
    },
    contactStep(3),
  ],
  deeper: [
    {
      id: 1,
      eyebrow: "Going deeper",
      title: "A careful look at how trust is built today.",
      fields: [
        {
          key: "hcAudience",
          label: "Who are the patients you'd most like to reach?",
          type: "text",
          helper: "Skippable",
        },
        {
          key: "hcReviews",
          label: "How are patient reviews handled today?",
          type: "chips",
          options: ["Actively managed", "Ad hoc", "Not at all"],
        },
        {
          key: "hcGoal",
          label: "What would a responsible step forward look like for you?",
          type: "textarea",
          helper: "Skippable",
        },
      ],
    },
  ],
};

/* ── Education ───────────────────────────────────────────────── */
const EDUCATION_FORM: QuestionnaireForm = {
  sector: "Education",
  intro: {
    title: "Tell us about your institution — before we ever pitch you anything.",
    body: "A few quick questions about your admissions and reach. About 2 minutes. No pricing, no sales call.",
    cta: "Begin",
  },
  short: [
    {
      id: 1,
      eyebrow: "Your institution",
      title: "First, a little about your institution.",
      fields: [
        {
          key: "eduType",
          label: "What kind of institution is it?",
          type: "chips",
          options: [
            "School",
            "College / university",
            "Coaching / test-prep",
            "EdTech",
            "Pre-school / play-school",
          ],
          required: true,
        },
        {
          key: "eduGeography",
          label: "Which city / area do you draw students from?",
          type: "text",
          placeholder: "e.g. West Hyderabad",
        },
        {
          key: "eduSeats",
          label: "Roughly how many seats per admissions cycle?",
          type: "text",
          placeholder: "e.g. 240 seats",
          helper: "Skippable",
        },
      ],
    },
    {
      id: 2,
      eyebrow: "Admissions today",
      title: "How do admissions work right now?",
      fields: [
        {
          key: "eduCycle",
          label: "Where are you in the admissions cycle?",
          type: "chips",
          options: [
            "Admissions open now",
            "Starts in < 3 months",
            "Mid-cycle",
            "Year-round / rolling",
          ],
        },
        {
          key: "eduChannels",
          label: "How do families discover you today?",
          type: "multichips",
          options: [
            "Word-of-mouth / referrals",
            "Hoardings / print",
            "Google / search",
            "Social media",
            "Education fairs / events",
            "Counsellors / agents",
            "Walk-ins",
          ],
        },
        {
          key: "eduGap",
          label: "Which feels closest to your situation?",
          type: "cards",
          options: [
            "Great results, but our reputation isn't loud enough",
            "Admissions are unpredictable every cycle",
            "Weaker competitors out-market us",
            "Launching a new program or campus",
            "Enquiries come in but don't convert",
          ],
          required: true,
        },
      ],
    },
    contactStep(3),
  ],
  deeper: [
    {
      id: 1,
      eyebrow: "Going deeper",
      title: "Closing the gap between interest and enrolment.",
      fields: [
        {
          key: "eduConversion",
          label: "What happens to an enquiry today?",
          type: "chips",
          options: ["Tracked & followed up", "Followed up ad hoc", "Often slips away"],
        },
        {
          key: "eduDifferentiator",
          label: "Why do families choose you over the alternative?",
          type: "textarea",
          helper: "Skippable",
        },
        {
          key: "eduTimeline",
          label: "When do you want to see results?",
          type: "chips",
          options: ["This cycle", "Next cycle", "Building long-term"],
        },
      ],
    },
  ],
};

/** The generic discovery form — fallback for the homepage / general CTAs. */
export const DEFAULT_FORM: QuestionnaireForm = {
  sector: undefined,
  intro: { ...INTRO },
  short: STEPS,
  deeper: [],
};

/** sector label → tailored form. */
export const SECTOR_FORMS: Record<string, QuestionnaireForm> = {
  "Real Estate": REAL_ESTATE_FORM,
  D2C: D2C_FORM,
  Healthcare: HEALTHCARE_FORM,
  Education: EDUCATION_FORM,
};

/** Resolve the right form for a sector, falling back to the generic form. */
export function getForm(sector?: string): QuestionnaireForm {
  if (sector && SECTOR_FORMS[sector]) return SECTOR_FORMS[sector];
  return DEFAULT_FORM;
}

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
