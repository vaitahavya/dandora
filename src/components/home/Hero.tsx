import Image from "next/image";
import { LinkButton } from "@/components/ui/LinkButton";
import { BrandMark } from "@/components/ui/Logo";
import { HERO_COPY } from "@/lib/copy";
import { IMAGES } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-surface">
      <Image
        src={IMAGES.hero}
        alt="Consulting team collaborating in a bright modern workspace"
        fill
        priority
        className="object-cover object-center opacity-90"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-white/30" />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-5 pb-20 pt-28 md:px-8 md:pb-24">
        <div className="flex items-center gap-3">
          <BrandMark size={36} className="opacity-95" />
          <p className="eyebrow">{HERO_COPY.eyebrow}</p>
        </div>

        <h1 className="font-display mt-5 max-w-4xl text-[2.35rem] font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.75rem]">
          {HERO_COPY.headline.before}
          <em className="highlight-word not-italic">
            {HERO_COPY.headline.highlight}
          </em>
          {HERO_COPY.headline.after}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
          {HERO_COPY.subhead}
        </p>
        <p className="prose-muted mt-3 max-w-lg text-sm md:text-base">
          {HERO_COPY.support}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <LinkButton href="/contact">Talk to us</LinkButton>
          <LinkButton href="/services" variant="secondary">
            Our services
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
