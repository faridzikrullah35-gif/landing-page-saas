"use client";
import React from "react";
import { useDarkMode } from "@/components/context/DarkModeContext";
import { Loader2 } from "lucide-react";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
}

export default function Button({
  text,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
  disabled = false,
  loading = false,
}: ButtonProps) {
  const { darkMode } = useDarkMode();

  // Base style
  const base =
    "cursor-pointer px-5 py-2 rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 transform";

  // Variants
  const variants = {
    primary: darkMode
      ? "bg-orange-500/90 hover:bg-orange-600/95 shadow-orange-400/40 text-white"
      : "bg-gradient-to-r from-pink-500/80 via-purple-500/80 to-indigo-500/80 hover:from-pink-600/90 hover:via-purple-600/90 hover:to-indigo-600/90 shadow-purple-500/30 backdrop-blur-md text-white",
    secondary: darkMode
      ? "bg-gray-700 hover:bg-gray-600 text-white"
      : "bg-gray-200 hover:bg-gray-300 text-gray-900",
  };

  // Hover animation (pop forward)
  const hoverEffect =
    "hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 active:translate-y-0";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${base} 
        ${variants[variant]} 
        ${hoverEffect}
        ${disabled || loading ? "opacity-60 cursor-not-allowed" : ""} 
        ${className}
      `}
    >
      {loading && <Loader2 className="h-5 w-5 animate-spin" />}
      {text}
    </button>
  );
}
