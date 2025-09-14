"use client";

import { useState } from "react";
import Button from "@/components/Button";  

interface BlogProps {
  darkMode?: boolean;
}

export default function Blog({ darkMode = true }: BlogProps) {
  const posts = [
    { title: "How to Scale Your SaaS", date: "Aug 2025", desc: "Tips and strategies to grow your SaaS effectively. Full content goes here for the expanded view..." },
    { title: "Top 10 Startup Mistakes", date: "Jul 2025", desc: "Learn from common mistakes to avoid them. Full content goes here..." },
    { title: "Future of SaaS in 2030", date: "Jun 2025", desc: "Predictions and trends shaping SaaS. Full content goes here..." },
  ];

  // state array untuk track expanded per post
  const [expanded, setExpanded] = useState<boolean[]>(posts.map(() => false));

  const toggleExpand = (idx: number) => {
    setExpanded(prev => {
      const newState = [...prev];
      newState[idx] = !newState[idx];
      return newState;
    });
  };

  return (
    <section id="blog" className="relative py-20">
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 ${darkMode ? "text-white" : "text-gray-900"}`}>
          Latest Blog Posts
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 
                          ${darkMode ? "bg-gray-800/80 text-white" : "bg-white/80 text-gray-900"}
                          ${expanded[idx] ? "md:col-span-3" : ""}`}
            >
              <h3 className="font-semibold text-xl mb-2">{post.title}</h3>
              <p className={`text-sm mb-2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{post.date}</p>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mb-4`}>
                {expanded[idx] ? post.desc : post.desc.slice(0, 60) + "..."}
              </p>

              <Button
                text={expanded[idx] ? "Show Less" : "Read More"}
                variant="primary"
                className="px-4 py-2 block mx-auto mt-4"
                onClick={() => toggleExpand(idx)}
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
