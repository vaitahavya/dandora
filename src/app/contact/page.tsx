import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { BrandMark } from "@/components/ui/Logo";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us where your business is stuck. We'll tell you — straight — if we can help.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Ready when you are."
        description="Tell us where your business is stuck. We'll tell you — straight — if we can help."
        image={IMAGES.contact}
        imageAlt="Open conversation at a café table"
      />

      <Section className="pb-20 pt-4 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="surface-card p-6 md:p-8">
              <BrandMark size={28} className="mb-5 opacity-80" />
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <RevealItem>
                <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={IMAGES.manifesto}
                    alt="Dandora team collaborating"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </RevealItem>

              <RevealItem>
                <p className="eyebrow">What happens next</p>
                <p className="prose-muted mt-4 text-sm leading-relaxed md:text-base">
                  Every engagement starts with a survey and a feasibility check.
                  No assumptions — we&apos;ll tell you honestly if we&apos;re the
                  right fit.
                </p>
              </RevealItem>

              <RevealItem className="mt-8 space-y-4">
                <div className="surface-card p-5">
                  <BrandMark size={20} className="mb-3 opacity-80" />
                  <p className="eyebrow">Email</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="focus-ring link-underline mt-2 inline-block text-foreground"
                  >
                    {SITE.email}
                  </a>
                </div>
                <div className="surface-card p-5">
                  <BrandMark size={20} className="mb-3 opacity-80" />
                  <p className="eyebrow">Location</p>
                  <p className="mt-2 text-foreground">{SITE.location}, India</p>
                </div>
              </RevealItem>
            </Reveal>
          </div>
        </div>
      </Section>
    </main>
  );
}
