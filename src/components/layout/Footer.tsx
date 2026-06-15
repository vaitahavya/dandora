"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { SECTORS, SERVICES, SITE, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-2xl font-semibold">
              {SITE.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((service) => (
                <li key={service.number}>
                  <Link
                    href="/services"
                    className="link-underline text-sm text-foreground/80 hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted">
              Sectors
            </h3>
            <ul className="mt-4 space-y-2">
              {SECTORS.map((sector) => (
                <li key={sector.slug}>
                  <Link
                    href={sector.href}
                    className="link-underline text-sm text-foreground/80 hover:text-foreground"
                  >
                    {sector.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="link-underline text-sm text-foreground/80 hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="link-underline text-sm text-foreground/80 hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-muted">
            <a
              href={`mailto:${SITE.email}`}
              className="link-underline hover:text-foreground"
            >
              {SITE.email}
            </a>
            <span className="mx-2">·</span>
            <span>{SITE.phone}</span>
            <span className="mx-2">·</span>
            <span>{SITE.location}</span>
          </div>

          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="link-underline text-sm text-muted hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </a>
            ))}
            <button
              type="button"
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-foreground/30 hover:text-foreground"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted">
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
    </footer>
  );
}
