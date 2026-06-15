"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { SECTORS } from "@/lib/constants";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-tight text-foreground"
          >
            Dandora
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            <Link
              href="/services"
              className="link-underline text-sm text-muted transition-colors hover:text-foreground"
            >
              Services
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setSectorsOpen(true)}
              onMouseLeave={() => setSectorsOpen(false)}
            >
              <button
                type="button"
                className="link-underline flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
                aria-expanded={sectorsOpen}
                aria-haspopup="true"
              >
                Sectors
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${sectorsOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {sectorsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 mt-3 w-56 -translate-x-1/2 rounded-xl border border-border bg-surface p-2 shadow-2xl"
                  >
                    {SECTORS.map((sector) => (
                      <Link
                        key={sector.slug}
                        href={sector.href}
                        className="block rounded-lg px-4 py-3 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
                      >
                        {sector.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className="link-underline text-sm text-muted transition-colors hover:text-foreground"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-foreground transition-transform hover:scale-[1.02]"
            >
              Talk to us
            </Link>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
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
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-xl font-semibold">Dandora</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2 px-6 pt-8">
              <Link
                href="/services"
                className="font-display text-4xl font-medium py-3"
              >
                Services
              </Link>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted">
                Sectors
              </p>
              {SECTORS.map((sector) => (
                <Link
                  key={sector.slug}
                  href={sector.href}
                  className="font-display text-2xl font-medium py-2 text-muted"
                >
                  {sector.name}
                </Link>
              ))}
              <Link
                href="/about"
                className="font-display text-4xl font-medium py-3 mt-4"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="mt-8 inline-flex w-fit rounded-full bg-accent px-8 py-4 text-lg font-medium"
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
