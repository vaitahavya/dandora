"use client";

import { MotionConfig } from "framer-motion";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { PageTransition } from "@/components/layout/PageTransition";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { QuestionnaireProvider } from "@/components/questionnaire/QuestionnaireProvider";
import { MetaPixel } from "@/components/analytics/MetaPixel";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <QuestionnaireProvider>
          <MetaPixel />
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Nav />
          <PageTransition>
            <div id="main-content">{children}</div>
          </PageTransition>
          <Footer />
        </QuestionnaireProvider>
      </SmoothScroll>
    </MotionConfig>
  );
}
