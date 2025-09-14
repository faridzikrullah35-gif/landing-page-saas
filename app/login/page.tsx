"use client";

import AppLayout from "@/components/AppLayout";
import LoginForm from "@/components/sections/LoginForm";
import FadeInSection from "@/components/ui/FadeInSection";

export default function LoginPage() {
  return (
    <AppLayout>
      <main className="pt-24 flex justify-center">
        <FadeInSection immediate>
          <LoginForm />
        </FadeInSection>
      </main>
    </AppLayout>
  );
}
