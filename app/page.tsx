"use client";

import AppLayout from "@/components/AppLayout";
import LandingHero from "@/components/ui/LandingHero";
import FeaturesSection from "@/components/ui/FeaturesSection";
import Testimonials from "@/components/ui/Testimonials";
import StatsSection from "@/components/ui/StatsSection";
import FadeInSection from "@/components/ui/FadeInSection";

export default function LandingPage() {
  return (
    <AppLayout>
      <main className="pt-24">
        <FadeInSection>
          <LandingHero darkMode={true} />
        </FadeInSection>
        <FadeInSection>
          <FeaturesSection />
        </FadeInSection>
        <FadeInSection>
          <Testimonials />
        </FadeInSection>
        <FadeInSection>
          <StatsSection />
        </FadeInSection>
      </main>
    </AppLayout>
  );
}
