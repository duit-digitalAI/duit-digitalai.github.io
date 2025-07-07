import React from "react";

const CTA = ({ openAuthModal }) => (
  <section id="cta" className="px-4 md:px-8 py-16 bg-white text-center">
    <h2 className="text-xl md:text-2xl font-bold mb-6">Ready to Find Your Best Interest Rate?</h2>
    <button
      className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded transition inline-flex items-center gap-2 w-full sm:w-auto justify-center"
      onClick={openAuthModal}
    >
      Find My Best Rate <span>→</span>
    </button>
  </section>
);

export default CTA;