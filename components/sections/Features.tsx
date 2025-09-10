"use client";

interface FeaturesProps {
  darkMode?: boolean;
}

export default function Features({ darkMode = true }: FeaturesProps) {
  const items = [
    { title: "Customizable", desc: "Tailor your landing page's look and feel." },
    { title: "Fast Performance", desc: "Built for speed so your customers never wait." },
    { title: "Fully Featured", desc: "Everything you need to launch your page, ready to go." },
    { title: "Instant Results", desc: "Create your perfect landing page in seconds." },
  ];

  return (
    <section id="features" className="relative py-20">
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-10 ${darkMode ? "text-white" : "text-gray-900"}`}>
          Why choose us
        </h2>
        <p className={`text-lg mb-12 ${darkMode ? "text-white/90" : "text-gray-700"}`}>
          Build a Website That Your Customers Love
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl shadow-lg backdrop-blur-sm ${darkMode ? "bg-gray-800/80 text-white" : "bg-white/80 text-gray-900"}`}
            >
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-700"}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
