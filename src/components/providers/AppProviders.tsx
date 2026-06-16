"use client";

import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <Nav />
      <PageTransition>
        <div id="main-content">{children}</div>
      </PageTransition>
      <Footer />
    </SmoothScroll>
  );
}
