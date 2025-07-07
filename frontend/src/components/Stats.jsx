import React from "react";

const stats = [
  { value: "10,000+", label: "Happy Customers" },
  { value: "₹500Cr+", label: "Loans Disbursed" },
  { value: "8.99%", label: "Interest Rate" },
  { value: "95%", label: "Approval Rate" }
];

const Stats = () => (
  <section className="px-4 md:px-8 py-12 bg-white flex flex-wrap justify-center gap-8 md:gap-12 border-b">
    {stats.map((s, i) => (
      <div key={i} className="w-1/2 md:w-1/4 text-center mb-6 md:mb-0">
        <div className="text-2xl md:text-3xl font-bold text-yellow-500">{s.value}</div>
        <div className="text-gray-700 font-medium text-base md:text-lg">{s.label}</div>
      </div>
    ))}
  </section>
);

export default Stats;