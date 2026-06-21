import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/brand";

type LogoProps = {
  variant?: "primary" | "icon";
  /** When true, use the reversed (light) wordmark for dark backgrounds. */
  onDark?: boolean;
  className?: string;
};

export function Logo({
  variant = "primary",
  onDark = false,
  className = "",
}: LogoProps) {
  const isPrimary = variant === "primary";
  const src = isPrimary
    ? onDark
      ? BRAND.reversed
      : BRAND.primary
    : BRAND.icon;

  return (
    <Link
      href="/"
      className={`focus-ring inline-flex items-center ${className}`}
      aria-label="Dandora home"
    >
      <Image
        src={src}
        alt="Dandora"
        width={isPrimary ? 220 : 40}
        height={isPrimary ? 44 : 40}
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
      src={BRAND.icon}
      alt=""
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      aria-hidden
    />
  );
}
