import type { Metadata } from "next";
import "./globals.css";
import { DarkModeProvider } from "@/components/context/DarkModeContext";

export const metadata: Metadata = {
  title: "SaaSify",
  description: "Landing page SaaS",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
