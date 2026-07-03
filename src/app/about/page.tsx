import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";
import { BrandMark } from "@/components/ui/Logo";
import { VALUES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { JsonLd, breadcrumbList } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";

const title = "About — The People in the Room With You";
const description =
  "Dandora is a Hyderabad growth and execution partner. We work with founders early, hands-on, and stay until the job is shipped.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About"
        title="We stay in the room."
        description="A growth consulting firm for founders and teams who are ready to move — and want a partner who stays until they do."
        image={IMAGES.manifesto}
        imageAlt="Dandora team at work"
      />

      <Section className="border-t border-border py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <RevealItem className="max-w-3xl space-y-5 prose-muted md:text-lg">
              <BrandMark size={32} className="mb-2 opacity-80" />
              <p>
                Dandora is a growth consulting firm. We work with founders, teams,
                and businesses that are ready to move — and we stay with them until
                they do.
              </p>
              <p>
                We come in early. We ask hard questions. We do the work alongside
                you — not from a distance.
              </p>
            </RevealItem>
          </Reveal>
          <Reveal delay={0.08}>
            <RevealItem>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border lg:aspect-square">
                <Image
                  src={IMAGES.process}
                  alt="Strategy workshop with the Dandora team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </RevealItem>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border py-16 md:py-24">
        <Reveal>
          <RevealItem>
            <p className="eyebrow">What we believe</p>
          </RevealItem>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {VALUES.map((value, i) => (
            <Reveal key={value} delay={i * 0.08}>
              <RevealItem>
                <div className="card-lift surface-card flex min-h-[160px] flex-col justify-end p-7">
                  <BrandMark size={24} className="mb-4 opacity-80" />
                  <p className="font-display text-xl leading-snug md:text-2xl">
                    {value}
                  </p>
                </div>
              </RevealItem>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border py-16 md:py-24">
        <Reveal>
          <RevealItem>
            <LinkButton href="/contact">Talk to us</LinkButton>
          </RevealItem>
        </Reveal>
      </Section>
    </main>
  );
}
