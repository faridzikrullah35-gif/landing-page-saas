"use client";

interface AboutProps {
  darkMode?: boolean;
}

export default function About({ darkMode = true }: AboutProps) {
  return (
    <section id="about" className="relative py-20">
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
          About Us
        </h2>
        <p className={`text-lg mb-8 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          We are a passionate team dedicated to building the best SaaS tools for startups and businesses worldwide.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {["Mission", "Vision", "Values"].map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl shadow-lg backdrop-blur-sm ${darkMode ? "bg-gray-800/80 text-white" : "bg-white/80 text-gray-900"}`}
            >
              <h3 className="font-semibold text-xl mb-2">{item}</h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
