"use client";

interface StatsSectionProps {
  darkMode?: boolean;
}

export default function StatsSection({ darkMode = true }: StatsSectionProps) {
  return (
    <section className="relative py-20 text-white">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8 text-center">
        {[
          { value: "24/7", label: "Support" },
          { value: "120+", label: "Customers" },
          { value: "90", label: "Cities" },
          { value: "99.9%", label: "Uptime" },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl shadow-lg backdrop-blur-sm ${
              darkMode ? "bg-gray-800/80" : "bg-white/80"
            }`}
          >
            <h3
              className={`text-4xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {item.value}
            </h3>
            <p
              className={darkMode ? "text-gray-300" : "text-gray-700"}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}