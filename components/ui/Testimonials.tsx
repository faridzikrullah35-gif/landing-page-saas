"use client";

interface TestimonialsProps {
  darkMode?: boolean;
}

export default function Testimonials({ darkMode = true }: TestimonialsProps) {
  return (
    <section className="relative py-20 text-white">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-12 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          People Love Using SaaSify
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "Excellent customer service, highly recommend!",
              name: "Melissa Smith",
              title: "Marketing Manager",
            },
            {
              quote: "Saved us a lot of time and energy.",
              name: "Jake Johnson",
              title: "Business Owner",
            },
            {
              quote: "Huge difference in our workflow, very efficient.",
              name: "Sarah Williams",
              title: "CEO of Acme Inc.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl shadow-lg backdrop-blur-sm ${
                darkMode ? "bg-gray-800/80" : "bg-white/80"
              }`}
            >
              <p
                className={`mb-4 italic ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                “{item.quote}”
              </p>
              <span
                className={`font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {item.name}
              </span>
              <br />
              <span
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
