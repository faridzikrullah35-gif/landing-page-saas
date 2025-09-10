"use client";

import { ReactNode } from "react";
import Header from "@/components/header";
import { useDarkMode } from "@/components/context/DarkModeContext";

function LayoutContent({ children }: { children: ReactNode }) {
  const { darkMode } = useDarkMode();

  return (
    <div
      className="relative min-h-screen w-full text-white bg-cover bg-center transition-colors duration-500"
      style={{
        backgroundImage: darkMode ? "url('/bgf.png')" : "url('/light.png')",
      }}
    >
      {/* overlay biar teks kebaca */}
      <div className="absolute inset-0 bg-black/70 dark:bg-black/50" />

      <div className="relative z-10">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default function AppLayout({ children }: { children: ReactNode }) {
  return <LayoutContent>{children}</LayoutContent>;
}
