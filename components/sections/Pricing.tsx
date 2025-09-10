"use client";

import Button from "@/components/Button";

interface PricingProps {
  darkMode?: boolean;
}

export default function Pricing({ darkMode = true }: PricingProps) {
  const plans = [
    { name: "Starter", price: "Free", features: ["Basic features", "Community support"] },
    { name: "Pro", price: "$19/mo", features: ["All Starter features", "Priority support", "Analytics"] },
    { name: "Enterprise", price: "$99/mo", features: ["Everything in Pro", "Dedicated account manager"] },
  ];

  return (
    <section id="pricing" className="relative py-20">
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 ${darkMode ? "text-white" : "text-gray-900"}`}>
          Pricing Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl shadow-lg backdrop-blur-sm ${darkMode ? "bg-gray-800/80 text-white" : "bg-white/80 text-gray-900"}`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-3xl font-extrabold mb-4 ${darkMode ? "text-orange-400" : "text-orange-600"}`}>
                {plan.price}
              </p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feat, i) => (
                  <li key={i} className={darkMode ? "text-gray-300" : "text-gray-700"}>
                    ✅ {feat}
                  </li>
                ))}
              </ul>

                <Button
                  text="Choose Plan"
                  variant="primary"
                  className="px-4 py-2 block mx-auto mt-4"
                />
                
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
