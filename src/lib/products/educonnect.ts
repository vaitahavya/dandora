/**
 * EduConnect product page copy — written in Dandora's voice and structured as
 * the 6-beat narrative flow:
 * Recognise → Realise → Resonate → Reframe → Rely → Respond
 *
 * EduConnect is Dandora's own school ERP + parent-communication platform.
 * It keeps its product name, on the Dandora theme, marked as
 * "a dandora.online product".
 */

export type ResonateCard = {
  id: string;
  headline: string;
  sub: string;
};

export type ModuleGroup = {
  id: string;
  label: string;
  items: string[];
};

/** A single step in the guided feature walkthrough. */
export type WalkStep = {
  id: string;
  /** Two-digit ordinal shown as the step badge, e.g. "01". */
  number: string;
  eyebrow: string;
  title: string;
  body: string;
  /** Short outcome bullets — the benefit, in plain words. */
  points: string[];
  /** Which themed mockup to render alongside this step. */
  mock:
    | "attendance"
    | "announcements"
    | "report"
    | "fees"
    | "phone";
};

export type AudienceCard = {
  id: string;
  role: string;
  line: string;
};

export const EDUCONNECT = {
  product: {
    name: "EduConnect",
    tag: "a dandora.online product",
  },

  /** 1 · RECOGNISE — the hero. Name the daily reality, for management. */
  hero: {
    eyebrow: "SCHOOL ERP · PARENT COMMUNICATION",
    h1: "Your school runs on a dozen tools that don't talk to each other.",
    sub: "Registers in one place. Fees in a spreadsheet. Notices in a WhatsApp group — and the management chasing all of it. EduConnect pulls it into one connected platform: clear oversight for you, less daily firefighting, and the parent trust that fills next year's classrooms.",
    primaryCta: "Book a demo",
    ghostCta: "See how it works",
    trust: "Built for Indian schools · CBSE & State board ready",
  },

  /** 2 · REALISE — the quiet, dark band. The hidden cost, on management's desk. */
  realise: {
    eyebrow: "A QUIET TRUTH",
    h2: "Disconnected systems cost more than you think.",
    body: "It rarely shows up as a single failure. It shows up as ten minutes lost every morning to a paper register. A circular half the parents never saw. A fee query that takes three calls to settle. None of it looks urgent — until it lands back on the management's desk as the day's firefighting.",
    leadIn: "Quietly, every week, it's costing you:",
    costs: [
      "Teaching time lost to manual registers and follow-ups.",
      "Parent trust slipping — they only hear from you when something's wrong.",
      "No single source of truth, so management has no clean view to act on.",
      "Days lost to chasing, reconciling, and re-entering the same numbers.",
    ],
    closer: "Running a school shouldn't mean firefighting it. Management deserves a clear view.",
  },

  /** 3 · RESONATE — selectable pain-state cards. */
  resonate: {
    eyebrow: "FIND YOUR SCHOOL",
    h2: "Which one sounds like your school?",
    sub: "Pick the closest. It's where EduConnect starts earning its place.",
    cards: [
      {
        id: "registers",
        headline: "We run on registers and WhatsApp groups.",
        sub: "It works — until someone needs last term's records.",
      },
      {
        id: "fees",
        headline: "Fees are a spreadsheet at month-end.",
        sub: "Reconciling who paid what eats days we don't have.",
      },
      {
        id: "silence",
        headline: "Parents only hear from us when something's wrong.",
        sub: "No daily rhythm of trust — just the occasional alarm.",
      },
      {
        id: "silos",
        headline: "We have tools that don't talk to each other.",
        sub: "Attendance here, marks there, notices somewhere else.",
      },
    ] as ResonateCard[],
  },

  /** 4 · REFRAME — the deliberate system + guided walkthrough. */
  reframe: {
    eyebrow: "ONE CONNECTED PLATFORM",
    h2: "Not more tools. One system that finally fits together.",
    body: "EduConnect is built as a single ecosystem — five module groups that share the same data, so attendance feeds the parent app, fees feed the receipt, and a notice reaches every parent the moment you post it. No re-entry. No reconciliation. No gaps.",
    modules: [
      {
        id: "core",
        label: "Core",
        items: [
          "Student management",
          "Teacher management",
          "Class management",
          "Parent accounts",
        ],
      },
      {
        id: "communication",
        label: "Communication",
        items: ["Announcements", "Notices", "Event updates", "Read receipts"],
      },
      {
        id: "academic",
        label: "Academic",
        items: [
          "Attendance",
          "Timetable",
          "Assignments & diary",
          "Marks & report cards",
        ],
      },
      {
        id: "financial",
        label: "Financial",
        items: [
          "Fee structures",
          "Payment records",
          "Receipts",
          "Student-wise tracking",
        ],
      },
      {
        id: "engagement",
        label: "Engagement",
        items: [
          "Events calendar",
          "Photo gallery",
          "Activity feed",
          "School branding",
        ],
      },
    ] as ModuleGroup[],
    /** Customisation — EduConnect is shaped around each school, not vice versa. */
    customisation: {
      eyebrow: "SHAPED AROUND YOU",
      h2: "Not one-size-fits-all. Fitted to your school.",
      body: "Every school runs its own way — its own workflows, its fee logic, its board, its identity. We adapt EduConnect to match: your processes, your branding, your CBSE or State board requirements. You don't bend the school to fit the software. We shape the software around the school.",
      points: [
        "Configured to your workflows and processes",
        "Your branding, your school's identity",
        "CBSE or State board requirements, built in",
      ],
    },
    /** Extensibility — ready add-on apps that switch on as the school needs them. */
    extend: {
      eyebrow: "BEYOND THE CORE",
      h2: "Ready to extend, the day you need it.",
      sub: "The core platform covers the everyday. These add-on modules are ready now — switch them on as your school grows.",
      addons: [
        {
          id: "franchise",
          icon: "franchise",
          name: "Franchise operations",
          line: "For multi-branch and franchise school groups — run every campus under one system with central oversight and branch-level control.",
        },
        {
          id: "transport",
          icon: "transport",
          name: "Transport management",
          line: "Routes, vehicles, stops, and pickup/drop — with live parent visibility into exactly where the school bus is.",
        },
        {
          id: "canteen",
          icon: "canteen",
          name: "Canteen & food management",
          line: "Meal plans, daily menus, and cashless prepaid canteen handling — one less queue, one less cash worry.",
        },
      ],
      closer: "Customisable and extensible — the platform grows the way your school does.",
    },
    walkthrough: {
      eyebrow: "A GUIDED TOUR",
      h2: "Walk through a day in the platform.",
      sub: "Scroll down — see exactly how EduConnect works, one connected step at a time.",
      steps: [
        {
          id: "attendance",
          number: "01",
          eyebrow: "Smart Attendance",
          title: "Mark the register once. Everything downstream just knows.",
          body: "Teachers take class-wise attendance in seconds, with full history kept automatically. The moment a child is marked absent, the platform alerts the parent — no separate message to send.",
          points: [
            "Class-wise daily marking with complete history",
            "Instant absence alerts to the parent's phone",
            "Accountability across every class, no paper trail",
          ],
          mock: "attendance",
        },
        {
          id: "communication",
          number: "02",
          eyebrow: "Parent Communication",
          title: "Post once. Every parent sees it — and you know they did.",
          body: "Announcements, notices, and event updates reach every parent through the app, with read receipts so nothing quietly slips through. The daily rhythm that builds trust, instead of the occasional alarm.",
          points: [
            "Announcements, notices & events in one feed",
            "Read receipts show exactly who's seen what",
            "Push notifications, not buried group chats",
          ],
          mock: "announcements",
        },
        {
          id: "academics",
          number: "03",
          eyebrow: "Academics & Report Cards",
          title: "Timetable, assignments, marks — one academic record per child.",
          body: "Homework and the daily diary go out through the same platform. Marks roll up into clean report cards parents can open any time — CBSE and State board formats, ready to share.",
          points: [
            "Timetable, assignments & diary in the parent's hand",
            "Marks that compile straight into report cards",
            "CBSE & State board ready, no reformatting",
          ],
          mock: "report",
        },
        {
          id: "fees",
          number: "04",
          eyebrow: "Fees & Receipts",
          title: "Fee structures, payment records, and receipts — reconciled for you.",
          body: "Define fee structures once. Every payment is tracked student-wise and turned into a receipt instantly. Month-end stops being a spreadsheet marathon — it's already done.",
          points: [
            "Student-wise fee tracking, always current",
            "Receipts generated the moment a payment lands",
            "No month-end reconciliation scramble",
          ],
          mock: "fees",
        },
        {
          id: "parent-app",
          number: "05",
          eyebrow: "The Parent Mobile App",
          title: "And every bit of it fits in a parent's pocket.",
          body: "Attendance, announcements, assignments, report cards, fees, and events — the whole school, in one calm app a parent actually opens. That's where disconnected tools finally become one connected experience.",
          points: [
            "Attendance, marks, fees & events in one place",
            "Real-time updates the moment they happen",
            "A connection that builds trust, every day",
          ],
          mock: "phone",
        },
      ] as WalkStep[],
    },
  },

  /**
   * REFRAME → RELY bridge — the payoff. Two things change when a school
   * brings EduConnect in. Operational efficiency is the visible win; revenue
   * growth is the deliberate throughline (Dandora is a growth company).
   */
  outcomes: {
    eyebrow: "WHY IT MATTERS TO MANAGEMENT",
    h2: "Bring us in, and two things shift.",
    sub: "EduConnect isn't just admin software. It makes management's life easier day to day — and it quietly grows the school.",
    pillars: [
      {
        id: "efficiency",
        accent: "indigo" as const,
        label: "An easier management life",
        line: "Less manual work, fewer errors, and one clear view you can actually run the school from — at a lower running cost. More oversight, less firefighting.",
        points: [
          {
            k: "Accuracy",
            v: "One source of truth — attendance, marks, and fees stop drifting out of sync.",
          },
          {
            k: "Transparency",
            v: "A clear view management can trust, settling questions before they become calls.",
          },
          {
            k: "Cost-cutting",
            v: "Hours of manual reconciliation and chasing taken off your team's plate.",
          },
        ],
      },
      {
        id: "revenue",
        accent: "cyan" as const,
        label: "Revenue growth",
        line: "The quiet engine. Transparency and daily communication build parent trust — and trust is what fills next year's classrooms.",
        points: [
          {
            k: "Parent trust",
            v: "A school that communicates every day feels close, dependable, worth staying with.",
          },
          {
            k: "Retention",
            v: "Confident parents re-enrol — and the families who stay are your steadiest revenue.",
          },
          {
            k: "Admissions",
            v: "Trusted parents refer. A reputation for transparency makes every admissions cycle easier.",
          },
        ],
      },
    ],
    closer: "Easier to run today. Growing more predictably tomorrow.",
  },

  /** 5 · RELY — who it's for. Management leads; teachers & parents follow. */
  rely: {
    eyebrow: "WRITTEN FOR MANAGEMENT",
    h2: "Built for the people running the school — and everyone they serve.",
    audiences: [
      {
        id: "management",
        role: "Management & leadership",
        line: "The reason it exists. One clear view across every campus — oversight, control, and the peace of mind that the school is running well without you chasing it.",
      },
      {
        id: "teachers",
        role: "Teachers",
        line: "Attendance, assignments, and schedules without the busywork — so more of the day goes to actually teaching, and less to paperwork management has to track.",
      },
      {
        id: "parents",
        role: "Parents",
        line: "Real-time visibility into their child's day — attendance, marks, fees, and events — and a school that feels close, not distant.",
      },
    ] as AudienceCard[],
    credibility: {
      label: "BUILT & SHIPPED BY DANDORA",
      body: "EduConnect isn't a side experiment. It's a real product we designed, built, and run — proof that dandora.online ships software that holds up in the field, not just slide decks.",
      stats: [
        { figure: "1 app", label: "Management, staff & parents" },
        { figure: "End-to-end", label: "Admissions to report cards" },
      ],
    },
  },

  /** 6 · RESPOND — the final CTA band, addressed to management. */
  respond: {
    eyebrow: "SEE IT FOR YOURSELF",
    h2: "See how much easier the school runs.",
    sub: "A short, no-pressure walkthrough on your terms. We'll show management exactly where the daily firefighting drops away — and where the parent trust that drives retention and admissions starts to build.",
    primaryCta: "Book a demo",
    reassurance: "Built for Indian schools · CBSE & State board ready · No obligation",
  },
} as const;
