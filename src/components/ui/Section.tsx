import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  bleed?: boolean;
};

export function Section({
  children,
  className = "",
  id,
  bleed = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${bleed ? "" : "mx-auto max-w-7xl px-6 lg:px-10"} ${className}`}
    >
      {children}
    </section>
  );
}
