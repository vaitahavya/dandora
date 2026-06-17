"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { SECTORS } from "@/lib/constants";

function navLinkClass(active: boolean) {
  return `link-underline focus-ring rounded-sm text-sm transition-colors ${
    active
      ? "font-semibold text-accent"
      : "font-medium text-muted hover:text-foreground"
  }`;
}

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServices = pathname === "/services";
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";
  const isSector = pathname.startsWith("/sectors/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSectorsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSectorsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-surface/95 shadow-sm backdrop-blur-md"
            : "bg-surface/70 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
        }`}
      >
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8"
          aria-label="Main navigation"
        >
          <Logo />

          <div className="hidden items-center gap-8 lg:flex">
            <Link href="/services" className={navLinkClass(isServices)}>
              Services
            </Link>

            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setSectorsOpen(true)}
              onMouseLeave={() => setSectorsOpen(false)}
            >
              <button
                type="button"
                id="sectors-trigger"
                aria-expanded={sectorsOpen}
                aria-haspopup="true"
                aria-controls="sectors-menu"
                onClick={() => setSectorsOpen((v) => !v)}
                className={`focus-ring flex items-center gap-1 rounded-sm ${navLinkClass(isSector)}`}
              >
                Sectors
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${sectorsOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {sectorsOpen && (
                  <motion.div
                    id="sectors-menu"
                    role="menu"
                    aria-labelledby="sectors-trigger"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 mt-2 w-52 -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-surface p-1.5 shadow-lg"
                  >
                    {SECTORS.map((sector) => (
                      <Link
                        key={sector.slug}
                        role="menuitem"
                        href={sector.href}
                        className={`focus-ring block rounded-lg px-3.5 py-2.5 text-sm transition-colors ${
                          pathname === sector.href
                            ? "bg-accent/10 font-semibold text-accent"
                            : "font-medium text-muted hover:bg-surface-elevated hover:text-foreground"
                        }`}
                      >
                        {sector.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className={navLinkClass(isAbout)}>
              About
            </Link>

            <Link
              href="/contact"
              className={`focus-ring rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                isContact
                  ? "bg-accent-hover text-white"
                  : "bg-accent text-white hover:bg-accent-hover"
              }`}
            >
              Talk to us
            </Link>
          </div>

          <button
            type="button"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-background lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Logo />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-col px-5 pt-6">
              <Link href="/services" className="font-display border-b border-border py-4 text-3xl">
                Services
              </Link>
              <p className="eyebrow mt-6 mb-2">Sectors</p>
              {SECTORS.map((sector) => (
                <Link
                  key={sector.slug}
                  href={sector.href}
                  className="font-display py-2.5 text-xl text-muted"
                >
                  {sector.name}
                </Link>
              ))}
              <Link href="/about" className="font-display mt-4 border-t border-border py-4 text-3xl">
                About
              </Link>
              <Link
                href="/contact"
                className="focus-ring mt-8 inline-flex w-fit rounded-full bg-accent px-7 py-3.5 text-base font-medium text-white hover:bg-accent-hover"
              >
                Talk to us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
