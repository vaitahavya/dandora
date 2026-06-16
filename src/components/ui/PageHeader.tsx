import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1
        className={`font-display text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-6xl ${eyebrow ? "mt-4" : ""}`}
      >
        {title}
      </h1>
      {description && (
        <p className="prose-muted mt-6 max-w-2xl text-base md:text-lg">
          {description}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}
