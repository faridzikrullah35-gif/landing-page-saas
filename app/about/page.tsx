"use client";

import AppLayout from "@/components/AppLayout";
import About from "@/components/sections/About";
import FadeInSection from "@/components/ui/FadeInSection";

export default function AboutPage() {
  return (
    <AppLayout>
      <main className="pt-24">
        <FadeInSection immediate>
          <About />
        </FadeInSection>
      </main>
    </AppLayout>
  );
}
