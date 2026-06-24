import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { BRAND } from "@/lib/brand";
import { SITE } from "@/lib/constants";
import { HERO } from "@/lib/home";
import "lenis/dist/lenis.css";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Growth, engineered.`,
    template: `%s | ${SITE.name}`,
  },
  description: `${HERO.definition} Hyderabad-rooted, we standardise how your business grows — leads, pitch, brand, follow-through — so the next move is repeatable, not accidental.`,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: `${SITE.name} — Growth, engineered.`,
    description: HERO.definition,
    images: [
      {
        url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Dandora growth consulting",
      },
    ],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: BRAND.icon, type: "image/svg+xml" }],
    apple: [{ url: BRAND.icon, type: "image/svg+xml" }],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: SITE.name,
  url: SITE.url,
  description: HERO.definition,
  slogan: HERO.definition,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.location,
    addressCountry: "IN",
  },
  serviceType: [
    "Growth strategy & consulting",
    "Brand, film & content production",
    "Demand generation & funnels",
    "Software & IT development",
  ],
  knowsAbout: [
    "Growth strategy & consulting",
    "Brand, film & content production",
    "Demand generation & funnels",
    "Software & IT development",
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", poppins.variable, "font-sans")}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
