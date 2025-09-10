"use client";

interface FAQProps {
  darkMode?: boolean;
}

export default function FAQ({ darkMode = true }: FAQProps) {
  const faqs = [
    { q: "How does the free trial work?", a: "You get full access to all features for 14 days." },
    { q: "Can I cancel anytime?", a: "Yes, there are no contracts or hidden fees." },
    { q: "Do you offer customer support?", a: "We provide 24/7 chat and email support." },
  ];

  return (
    <section id="faq" className="relative py-20">
      <div className="relative max-w-4xl mx-auto px-6">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-10 text-center ${darkMode ? "text-white" : "text-gray-900"}`}>
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl backdrop-blur-sm shadow-md ${darkMode ? "bg-gray-800/80 text-white" : "bg-white/80 text-gray-900"}`}
            >
              <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-700"}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
