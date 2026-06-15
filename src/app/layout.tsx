import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Growth Consulting`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "A growth consulting firm for businesses ready to move. Strategy, technology, marketing, operations, and investment advisory — we're the people in the room with you.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: `${SITE.name} — Growth Consulting`,
    description:
      "We're not a vendor. We're the people in the room with you.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  description: SITE.tagline,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.location,
    addressCountry: "IN",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} h-full`}>
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
