import React, { useState } from "react";

const steps = [
  {
    title: "Share Basic Details",
    desc: "Enter your income, employment details, and loan requirements. Completely secure and private."
  },
  {
    title: "Nivi AI Scoring",
    desc: "Our smart algorithm analyzes your profile and matches you with the best lenders instantly."
  },
  {
    title: "Compare & Choose",
    desc: "View personalized offers with rates, EMIs, and processing fees. Choose what works best for you."
  },
  {
    title: "Get Approved",
    desc: "Submit your application digitally and get approved within 24 hours. Money in your account fast!"
  }
];

const HowItWorks = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <section id="howitworks" className="px-4 md:px-8 py-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">How it Works</h2>
      <p className="mb-8 text-gray-600 text-base md:text-lg text-center">Get the best loan offers in 4 simple steps</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {steps.map((s, i) => {
          const isHovered = hoveredStep === i;
          return (
            <div
              key={i}
              className={`border rounded-2xl p-6 md:p-8 relative bg-white transition-all duration-300 cursor-pointer hover:shadow-lg ${
                isHovered ? "border-yellow-400 bg-yellow-50" : "border-gray-200 hover:border-yellow-300"
              }`}
              onMouseEnter={() => setHoveredStep(i)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <span className={`absolute -top-4 left-4 bg-white border rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                isHovered ? "border-yellow-400 text-yellow-500" : "border-gray-300"
              }`}>
                {i + 1}
              </span>
              <h3 className="text-base md:text-lg font-semibold mb-2 mt-4">{s.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;