import React, { useState } from "react";

const faqs = [
  {
    question: "How much will checking offers affect my credit score?",
    answer: "Only a soft pull—no impact on your CIBIL score until you apply."
  },
  {
    question: "Which lenders do you work with?",
    answer: "We partner with NBFCs, including ABFL, Poonawalla, Infina Finance, Anand Rathi and Bajaj."
  },
  {
    question: "Can I apply if I'm self-employed?",
    answer: "Yes—simply upload your ITR and bank statements, and our AI will evaluate your profile."
  },
  {
    question: "What documents do I need?",
    answer: "No documents required, completely digital process with lending partners"
  }
];

const FAQs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="faqs" className="px-4 md:px-8 py-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">FAQs</h2>
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 bg-white cursor-pointer"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="min-h-[80px] flex items-center">
              {hoveredIndex === i ? (
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">{faq.answer}</p>
              ) : (
                <h3 className="text-base md:text-lg font-semibold text-gray-800">{faq.question}</h3>
              )}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-yellow-500 font-medium text-sm md:text-base">
                {hoveredIndex === i ? "Hover to see question" : "Hover to see answer"}
              </span>
              <span className="text-yellow-500">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
