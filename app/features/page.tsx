"use client";

import AppLayout from "@/components/AppLayout";
import Features from "@/components/sections/Features";
import FadeInSection from "@/components/ui/FadeInSection";

export default function FeaturesPage() {
  return (
    <AppLayout>
      <main className="pt-24">
        <FadeInSection immediate>
          <Features />
        </FadeInSection>
      </main>
    </AppLayout>
  );
}
