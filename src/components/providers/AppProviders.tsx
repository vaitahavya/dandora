"use client";

import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <Nav />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </SmoothScroll>
  );
}
