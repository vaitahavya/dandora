import Link from "next/link";
import { ArrowRight } from "lucide-react";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
}: LinkButtonProps) {
  const base =
    "inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group";
  const variants = {
    primary:
      "rounded-full bg-accent px-6 py-3 text-foreground hover:scale-[1.02]",
    ghost: "text-foreground link-underline py-1",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      {variant === "ghost" && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
      {variant === "primary" && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </Link>
  );
}
