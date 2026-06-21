import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { FOOTER } from "@/lib/home";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Logo />
            <p className="mt-4 text-[0.95rem] text-muted">{FOOTER.tagline}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-2 text-[0.875rem] text-muted">
              <a
                href={`mailto:${SITE.email}`}
                className="focus-ring link-underline text-foreground/80"
              >
                {SITE.email}
              </a>
              <span aria-hidden className="text-muted/40">
                ·
              </span>
              <span>{SITE.location}</span>
            </div>
          </div>

          <nav
            className="flex flex-wrap gap-x-5 gap-y-2"
            aria-label="Footer navigation"
          >
            {FOOTER.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="focus-ring link-underline text-[0.875rem] text-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-10 text-xs text-muted/80">
          © {new Date().getFullYear()} {SITE.name} · {SITE.location}
        </p>
      </div>
    </footer>
  );
}
