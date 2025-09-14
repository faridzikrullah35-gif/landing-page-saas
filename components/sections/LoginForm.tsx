"use client";

import Button from "@/components/Button";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password, "Remember:", remember);
  };

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      {/* Login Card */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-black/10 backdrop-blur-md border border-white/10 rounded-md p-8 w-96 max-w-full text-white"
        autoComplete="off"
      >
        <h2 className="text-center text-lg font-semibold mb-8">Login</h2>

        {/* Email */}
        <label htmlFor="email" className="block text-sm mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent border-b border-white/40 text-white placeholder-white/40 focus:outline-none focus:border-orange-400 mb-6 py-1"
        />

        {/* Password */}
        <label htmlFor="password" className="block text-sm mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-transparent border-b border-white/40 text-white placeholder-white/40 focus:outline-none focus:border-orange-400 mb-4 py-1"
        />

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between text-xs mb-6">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-4 h-4 text-orange-500 bg-transparent border border-white/40 rounded focus:ring-0"
            />
            <span>Remember me</span>
          </label>
          <a href="#" className="text-white/70 hover:text-white underline">
            Forgot Password
          </a>
        </div>

        {/* Button */}
        <Button 
        text="Login" 
        type="submit" 
        className="w-full" 
        variant="primary" 
        />
      </form>
    </div>
  );
}
