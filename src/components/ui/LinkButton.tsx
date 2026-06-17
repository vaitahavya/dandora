import Link from "next/link";
import { ArrowRight } from "lucide-react";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
}: LinkButtonProps) {
  const base =
    "focus-ring inline-flex items-center justify-center gap-2 text-sm transition-all duration-300 group";

  const variants = {
    primary:
      "rounded-full bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-hover",
    secondary:
      "rounded-full border border-border bg-surface px-6 py-3 font-medium text-foreground shadow-sm hover:border-accent/25 hover:bg-accent-muted",
    ghost: "font-semibold text-accent link-underline py-1 hover:text-accent-hover",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
