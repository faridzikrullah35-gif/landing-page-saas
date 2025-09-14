"use client";

import { Menu, X, SunIcon, MoonIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useDarkMode } from "@/components/context/DarkModeContext";
import Button from "@/components/Button";
import NavLink from "@/components/NavLink";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  // Variants buat animasi
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.3, ease: "easeInOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 
        bg-black/30 dark:bg-black/40 
        backdrop-blur-xl border-b border-white/10 
        shadow-lg shadow-black/20 z-50"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/header.png"
              alt="SaaSify Logo"
              width={32}
              height={32}
              priority
            />
            <h1 className="text-base sm:text-lg md:text-xl font-bold tracking-wide">
              SaaSify
            </h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            <NavLink href="/product">product</NavLink>
            <NavLink href="/features">Feature</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/blog">Blog</NavLink>
          </ul>

          {/* Controls */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Dark Mode Toggle */}
            <button
              aria-label="Toggle dark mode"
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-white/10 transition"
            >
              {darkMode ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>

            {/* Login Button */}
            <Link href="/login">
              <Button
                text="Login"
                onClick={() => console.log("Login clicked")}
              />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="fixed top-16 left-0 w-full bg-black/50 backdrop-blur-md 
                      p-6 flex flex-col space-y-4 text-center z-40 md:hidden"
          >
            {["product", "features", "faq", "about", "pricing", "blog"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05, ease: "easeOut" }}
              >
                <Link href={`/${item}`} className="hover:text-orange-500 transition">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
