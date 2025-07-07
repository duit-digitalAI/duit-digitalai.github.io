import React from "react";

const features = [
  { icon: "⚡", title: "AI Powered Recommendations" },
  { icon: "🛡️", title: "Bank Grade Security" },
  { icon: "🔍", title: "Compare & Rank from 20+ Lenders Instantly" }
];

const WhyDuit = () => (
  <section id="whyus" className="px-4 md:px-8 py-16 bg-gray-900 text-white rounded-3xl my-12">
    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Duit?</h2>
    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
      {features.map((f, i) => (
        <div key={i} className="flex flex-col items-center gap-4 flex-1 text-center">
          <span className="text-4xl md:text-5xl">{f.icon}</span>
          <span className="font-semibold text-lg md:text-xl">{f.title}</span>
        </div>
      ))}
    </div>
  </section>
);

export default WhyDuit;