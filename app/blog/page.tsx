"use client";

import AppLayout from "@/components/AppLayout";
import Blog from "@/components/sections/Blog";
import FadeInSection from "@/components/ui/FadeInSection";

export default function BlogPage() {
  return (
    <AppLayout>
      <main className="pt-24">
        <FadeInSection immediate>
          <Blog />
        </FadeInSection>
      </main>
    </AppLayout>
  );
}
