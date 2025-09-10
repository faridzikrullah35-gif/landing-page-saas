"use client";

import AppLayout from "@/components/AppLayout";
import FAQ from "@/components/sections/FAQ";
import FadeInSection from "@/components/ui/FadeInSection";

export default function FAQPage() {
  return (
    <AppLayout>
      <main className="pt-24">
        <FadeInSection immediate>
          <FAQ />
        </FadeInSection>
      </main>
    </AppLayout>
  );
}
