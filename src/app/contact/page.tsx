import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us where your business is stuck. We'll tell you — straight — if we can help.",
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      <Section className="py-24 md:py-32">
        <Reveal>
          <RevealItem>
            <h1 className="font-display text-5xl font-medium tracking-tight md:text-6xl">
              Ready when you are.
            </h1>
          </RevealItem>
          <RevealItem className="mt-6 max-w-2xl">
            <p className="text-lg text-muted">
              Tell us where your business is stuck. We&apos;ll tell you —
              straight — if we can help.
            </p>
          </RevealItem>
        </Reveal>
      </Section>

      <Section className="border-t border-border py-16 md:py-24">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <Reveal>
              <RevealItem>
                <p className="text-muted">
                  Every engagement starts with a survey and a feasibility check.
                  No assumptions.
                </p>
              </RevealItem>
              <RevealItem className="mt-10 space-y-3 text-sm text-muted">
                <p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="link-underline hover:text-foreground"
                  >
                    {SITE.email}
                  </a>
                </p>
                <p>{SITE.phone}</p>
                <p>{SITE.location}</p>
              </RevealItem>
            </Reveal>
          </div>
        </div>
      </Section>
    </main>
  );
}
