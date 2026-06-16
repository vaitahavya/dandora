import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-20">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/55" />
      <Section className="relative py-16 md:py-24">
        <PageHeader eyebrow={eyebrow} title={title} description={description} />
      </Section>
    </section>
  );
}
