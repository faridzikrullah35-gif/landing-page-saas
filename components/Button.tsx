"use client";
import React from "react";
import { useDarkMode } from "@/components/context/DarkModeContext";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({ text, onClick, className = "", type = "button" }: ButtonProps) {
  const { darkMode } = useDarkMode(); // ambil dari context langsung

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-5 py-2 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 block mx-auto
        ${darkMode 
          ? "bg-orange-500/90 hover:bg-orange-600/95 shadow-orange-400/40" 
          : "bg-gradient-to-r from-pink-500/80 via-purple-500/80 to-indigo-500/80 hover:from-pink-600/90 hover:via-purple-600/90 hover:to-indigo-600/90 shadow-purple-500/30 backdrop-blur-md"
        }
        ${className}
      `}
    >
      {text}
    </button>
  );
}
