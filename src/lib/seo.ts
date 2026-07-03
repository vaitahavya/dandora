import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const DEFAULT_OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${SITE.name} — Growth, engineered.`,
} as const;

export const EDUCONNECT_OG_IMAGE = {
  url: "/products/educonnect/opengraph-image",
  width: 1200,
  height: 630,
  alt: "EduConnect — Smart school management · a dandora.online product",
} as const;

type OgImage = { url: string; width?: number; height?: number; alt?: string };

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  /** Skip the root layout title template (home, product pages). */
  absoluteTitle?: boolean;
  openGraphType?: "website" | "article";
  openGraphImage?: OgImage;
  publishedTime?: string;
  authors?: string[];
};

function toOgImage(image: OgImage) {
  return {
    url: image.url,
    width: image.width ?? 1200,
    height: image.height ?? 630,
    alt: image.alt ?? DEFAULT_OG_IMAGE.alt,
  };
}

/**
 * Consistent per-page metadata: title, description, canonical, Open Graph,
 * and Twitter Cards — including og:image on every route.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  openGraphType = "website",
  openGraphImage = DEFAULT_OG_IMAGE,
  publishedTime,
  authors,
}: PageMetadataOptions): Metadata {
  const image = toOgImage(openGraphImage);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: openGraphType,
      url: path,
      title,
      description,
      images: [image],
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

/** Shared site-wide Open Graph / Twitter defaults for the root layout. */
export function siteWideSocialMetadata(
  title: string,
  description: string,
): Pick<Metadata, "openGraph" | "twitter"> {
  const image = toOgImage(DEFAULT_OG_IMAGE);

  return {
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: SITE.name,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
