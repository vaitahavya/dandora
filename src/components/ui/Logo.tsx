import Image from "next/image";
import Link from "next/link";

const LOGO = {
  icon: "/logo-icon.svg",
  primary: "/logo-primary.svg",
} as const;

type LogoProps = {
  variant?: "primary" | "icon";
  className?: string;
};

export function Logo({ variant = "primary", className = "" }: LogoProps) {
  const isPrimary = variant === "primary";

  return (
    <Link
      href="/"
      className={`focus-ring inline-flex items-center ${className}`}
      aria-label="Dandora home"
    >
      <Image
        src={isPrimary ? LOGO.primary : LOGO.icon}
        alt="Dandora"
        width={isPrimary ? 200 : 32}
        height={isPrimary ? 40 : 32}
        className={`shrink-0 ${isPrimary ? "h-8 w-auto md:h-9" : "h-8 w-8"}`}
        priority
      />
    </Link>
  );
}

export function BrandMark({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={LOGO.icon}
      alt=""
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      aria-hidden
    />
  );
}
