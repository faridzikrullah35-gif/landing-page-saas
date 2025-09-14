"use client";
import React from "react";
import Link from "next/link";
import { useDarkMode } from "@/components/context/DarkModeContext";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = "" }: NavLinkProps) {
  const { darkMode } = useDarkMode();

  return (
    <Link
      href={href}
      className={`
        text-sm font-medium transition
        ${darkMode 
          ? "text-white hover:text-orange-400"
          : "text-white hover:text-white/80"}
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
