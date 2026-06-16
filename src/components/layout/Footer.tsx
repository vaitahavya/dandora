"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { SECTORS, SERVICES, SITE, SOCIAL_LINKS } from "@/lib/constants";

const validSocials = SOCIAL_LINKS.filter((s) => s.href.startsWith("http"));

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-8 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo />
            <p className="prose-muted mt-3 max-w-xs text-sm leading-relaxed">
              {SITE.tagline}
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="focus-ring link-underline mt-5 inline-block text-sm text-foreground/85"
            >
              {SITE.email}
            </a>
          </div>

          <div className="lg:col-span-2">
            <h3 className="eyebrow">Services</h3>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((service) => (
                <li key={service.number}>
                  <Link
                    href="/services"
                    className="focus-ring link-underline text-sm text-foreground/75 hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow">Sectors</h3>
            <ul className="mt-4 space-y-2">
              {SECTORS.map((sector) => (
                <li key={sector.slug}>
                  <Link
                    href={sector.href}
                    className="focus-ring link-underline text-sm text-foreground/75 hover:text-foreground"
                  >
                    {sector.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="eyebrow">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="focus-ring link-underline text-sm text-foreground/75 hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="focus-ring link-underline text-sm text-foreground/75 hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {SITE.name} · {SITE.location}
          </p>

          <div className="flex items-center gap-5">
            {validSocials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="focus-ring link-underline text-xs text-muted hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </a>
            ))}
            <button
              type="button"
              onClick={scrollToTop}
              className="focus-ring flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-foreground/25 hover:text-foreground"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
