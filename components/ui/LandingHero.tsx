"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";

interface LandingHeroProps {
  darkMode: boolean;
}

export default function LandingHero({ darkMode }: LandingHeroProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md p-6 flex flex-col space-y-4 text-center z-40 md:hidden">
          <Link href="/features" className="hover:text-orange-500 transition">
            Feature
          </Link>
          <a href="#faq" className="hover:text-orange-500 transition">FAQ</a>
          <a href="#about" className="hover:text-orange-500 transition">About</a>
          <a href="#pricing" className="hover:text-orange-500 transition">Pricing</a>
          <a href="#blog" className="hover:text-orange-500 transition">Blog</a>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-semibold transition">
            Login
          </button>
        </div>
      )}

      {/* HERO */}
      <main className="relative w-full h-screen flex items-center justify-center text-center px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl relative z-10">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-snug sm:leading-tight">
            Modern <span className="text-orange-500">Websites & SaaS</span>{" "}
            for Growing Businesses
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
            Bring your business online in minutes. from bookings to payments, 
            we help startups and SMEs scale faster, smarter, and with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">
            <Button
              text="Get Started Free"
              variant="primary"
              className="px-5 sm:px-6 md:px-8 py-3"
              onClick={() => console.log("Get Started clicked")}
            />

            <Button
              text="Book a Demo"
              variant="secondary"
              className="px-5 sm:px-6 md:px-8 py-3 mt-2 sm:mt-0"
              onClick={() => console.log("Book Demo clicked")}
            />
          </div>
        </div>
      </main>
    </>
  );
}
