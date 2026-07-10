import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";
import { BrandMark } from "@/components/ui/Logo";
import { SERVICES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { JsonLd, breadcrumbList } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { PortfolioStrip } from "@/components/portfolio/PortfolioStrip";
import { getMarketingPortfolio } from "@/lib/portfolio";

const title = "Services — Strategy, Tech, Marketing & Ops";
const description =
  "Growth strategy, software & IT development, brand and film, demand gen and funnels — one accountable team that plugs in where you need it.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/services",
});

const marketingPortfolio = getMarketingPortfolio(12);

export default function ServicesPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Services"
        title="Strategy. Tech. Marketing. Operations. All of it, if you need it."
        description="Four pillars. One team. We plug in where you need us — and stay until the work is done."
        image={IMAGES.servicesHero}
        imageAlt="Consulting team planning a growth strategy"
      />

      <div className="space-y-0">
        {SERVICES.map((service) => (
          <Section
            key={service.number}
            className="border-t border-border py-16 md:py-20"
          >
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
                <RevealItem className="lg:col-span-5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                    <Image
                      src={IMAGES.services[service.imageKey]}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <BrandMark
                      size={28}
                      className="absolute bottom-4 left-4 opacity-90"
                    />
                  </div>
                </RevealItem>

                <div className="lg:col-span-7">
                  <RevealItem>
                    <BrandMark size={24} className="mb-4 opacity-80" />
                    <span className="eyebrow">
                      {service.number} — {service.title}
                    </span>
                  </RevealItem>
                  <RevealItem className="mt-4">
                    <h2 className="font-display text-2xl leading-snug md:text-3xl">
                      {service.headline}
                    </h2>
                  </RevealItem>
                  {service.tags.length > 0 && (
                    <RevealItem className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </RevealItem>
                  )}
                  <RevealItem className="mt-6 prose-muted max-w-xl">
                    <p>{service.payoff}</p>
                  </RevealItem>
                </div>
              </div>
            </Reveal>

            {service.number === "03" && marketingPortfolio.length > 0 && (
              <PortfolioStrip
                className="mt-16 border-t border-border pt-16"
                title="Design and production from our studio."
                description="Brochures, packaging, campaigns, and brand assets — produced in-house for clients across sectors."
                items={marketingPortfolio}
              />
            )}
          </Section>
        ))}
      </div>

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
