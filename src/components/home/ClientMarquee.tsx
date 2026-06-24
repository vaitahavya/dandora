"use client";

import { useSyncExternalStore } from "react";
import { CLIENTS, type Client } from "@/lib/clients";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribePrefersReduced(callback: () => void) {
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

/**
 * Hydration-safe reduced-motion check. The server snapshot is always `false`,
 * so the first client render matches the server (animated), then re-renders to
 * the real value — no hydration mismatch and no setState-in-effect.
 */
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribePrefersReduced,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

function ClientCell({ client }: { client: Client }) {
  return (
    <li className="group/cell flex shrink-0 items-center justify-center">
      {client.logo ? (
        // Local logos with varying aspect ratios — a plain <img> keeps it simple.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={client.logo}
          alt={client.name}
          loading="lazy"
          decoding="async"
          className="h-9 w-auto max-w-[180px] object-contain opacity-60 grayscale transition duration-300 ease-out group-hover/cell:opacity-100 group-hover/cell:grayscale-0 md:h-10"
        />
      ) : (
        <span className="whitespace-nowrap text-[1.0625rem] font-medium text-muted transition-colors duration-300 ease-out group-hover/cell:text-foreground md:text-lg">
          {client.name}
        </span>
      )}
    </li>
  );
}

function CellList({ ariaHidden = false }: { ariaHidden?: boolean }) {
  // Internal gap plus an equal trailing gap (pr-*) makes each copy a self-contained
  // "period", so the two copies tile seamlessly under translateX(-50%).
  return (
    <ul
      className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16"
      aria-hidden={ariaHidden || undefined}
    >
      {CLIENTS.map((client) => (
        <ClientCell key={client.name} client={client} />
      ))}
    </ul>
  );
}

export function ClientMarquee() {
  const isStatic = usePrefersReducedMotion();

  return (
    <section className="bg-background py-[clamp(56px,8vh,96px)]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal>
          <RevealItem className="mx-auto max-w-[640px] text-center">
            <p className="eyebrow">Trusted by</p>
            <p className="body-base mt-3 text-muted">
              Teams across energy, defence, banking, real estate, and beyond.
            </p>
          </RevealItem>
        </Reveal>
      </div>

      <div className="mt-12">
        {isStatic ? (
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
              {CLIENTS.map((client) => (
                <ClientCell key={client.name} client={client} />
              ))}
            </ul>
          </div>
        ) : (
          <div
            className="group relative overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div className="marquee-track flex w-max items-center group-hover:[animation-play-state:paused]">
              <CellList />
              <CellList ariaHidden />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
