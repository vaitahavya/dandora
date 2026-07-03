"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { SECTORS } from "@/lib/home";
import { useQuestionnaire } from "@/components/questionnaire/QuestionnaireProvider";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [heroDark, setHeroDark] = useState(false);
  const { open } = useQuestionnaire();
  const sectorsRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect whether the page's hero is dark (so the nav is transparent over a
  // dark surface) and flip the logo + controls to their light variants.
  useEffect(() => {
    const check = () =>
      setHeroDark(!!document.querySelector('[data-hero-dark="true"]'));
    // Run after the new route's DOM has painted.
    const raf = requestAnimationFrame(check);
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  // The nav floats over a dark hero only while transparent (top, no mobile panel).
  const onDark = heroDark && !scrolled && !mobileOpen;

  // Close menus on outside click / Escape.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        sectorsRef.current &&
        !sectorsRef.current.contains(e.target as Node)
      ) {
        setSectorsOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSectorsOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-border bg-surface/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 md:px-8"
        aria-label="Main navigation"
      >
        <Logo onDark={onDark} />

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          <div ref={sectorsRef} className="relative">
            <button
              type="button"
              onClick={() => setSectorsOpen((v) => !v)}
              aria-expanded={sectorsOpen}
              aria-haspopup="true"
              className={`focus-ring inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium transition-colors md:text-base ${
                onDark
                  ? "text-white hover:bg-white/10"
                  : "text-foreground hover:bg-foreground/5"
              }`}
            >
              Sectors
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  sectorsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {sectorsOpen && (
              <div className="absolute right-0 mt-2 w-[340px] overflow-hidden rounded-2xl border border-border bg-surface/95 p-2 shadow-[var(--shadow-glass)] backdrop-blur-xl">
                {SECTORS.cards.map((sector) => (
                  <Link
                    key={sector.id}
                    href={sector.href}
                    onClick={() => setSectorsOpen(false)}
                    className="focus-ring group block rounded-xl px-3 py-2.5 transition-colors hover:bg-foreground/5"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[0.95rem] font-semibold text-foreground">
                        {sector.name}
                      </span>
                      {"tag" in sector && sector.tag && (
                        <span className="rounded-full border border-accent-secondary/40 px-1.5 py-0.5 text-[0.65rem] font-semibold tracking-wide text-accent-secondary">
                          {sector.tag}
                        </span>
                      )}
                    </span>
                    <span className="mt-0.5 line-clamp-1 block text-xs text-muted">
                      {sector.line}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/journal"
            className={`focus-ring rounded-full px-4 py-2.5 text-sm font-medium transition-colors md:text-base ${
              onDark
                ? "text-white hover:bg-white/10"
                : "text-foreground hover:bg-foreground/5"
            }`}
          >
            Journal
          </Link>

          <button
            type="button"
            onClick={() => open()}
            className={`btn px-5 py-2.5 text-sm md:text-base ${
              onDark ? "btn-ghost-dark" : "btn-ghost"
            }`}
          >
            Start the conversation
          </button>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className={`focus-ring flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${
            onDark
              ? "border-white/30 text-white"
              : "border-border text-foreground"
          }`}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-surface/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto max-w-[1200px] px-5 py-4">
            <p className="eyebrow">Sectors</p>
            <div className="mt-3 space-y-1">
              {SECTORS.cards.map((sector) => (
                <Link
                  key={sector.id}
                  href={sector.href}
                  onClick={() => setMobileOpen(false)}
                  className="focus-ring flex items-center gap-2 rounded-xl px-3 py-3 transition-colors hover:bg-foreground/5"
                >
                  <span className="text-[1rem] font-semibold text-foreground">
                    {sector.name}
                  </span>
                  {"tag" in sector && sector.tag && (
                    <span className="rounded-full border border-accent-secondary/40 px-1.5 py-0.5 text-[0.65rem] font-semibold tracking-wide text-accent-secondary">
                      {sector.tag}
                    </span>
                  )}
                </Link>
              ))}
            </div>
            <Link
              href="/journal"
              onClick={() => setMobileOpen(false)}
              className="focus-ring mt-4 block rounded-xl px-3 py-3 text-[1rem] font-semibold text-foreground transition-colors hover:bg-foreground/5"
            >
              Journal
            </Link>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                open();
              }}
              className="btn btn-primary mt-4 w-full"
            >
              Start the conversation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
