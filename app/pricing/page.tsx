"use client";

import AppLayout from "@/components/AppLayout";
import Pricing from "@/components/sections/Pricing";
import FadeInSection from "@/components/ui/FadeInSection";

export default function PricingPage() {
  return (
    <AppLayout>
      <main className="pt-24">
        <FadeInSection immediate>
          <Pricing />
        </FadeInSection>
      </main>
    </AppLayout>
  );
}
