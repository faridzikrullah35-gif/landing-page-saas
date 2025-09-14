"use client";

interface FeaturesSectionProps {
  darkMode?: boolean;
}

export default function FeaturesSection({ darkMode = true }: FeaturesSectionProps) {
  return (
    <section className="relative py-20 text-white">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Why choose us
        </h2>
        <p
          className={`text-lg mb-12 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Build a Website That Your Customers Love
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Customizable",
              desc: "Tailor your landing page's look and feel.",
            },
            {
              title: "Fast Performance",
              desc: "Built for speed so your customers never wait.",
            },
            {
              title: "Fully Featured",
              desc: "Everything you need to launch your page, ready to go.",
            },
            {
              title: "Instant Results",
              desc: "Create your perfect landing page in seconds.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl shadow-lg backdrop-blur-sm ${
                darkMode ? "bg-gray-800/80" : "bg-white/80"
              }`}
            >
              <h3
                className={`font-semibold text-xl mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={darkMode ? "text-gray-300" : "text-gray-700"}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
