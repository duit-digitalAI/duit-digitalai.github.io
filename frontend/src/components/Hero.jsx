import React from "react";

const Hero = ({ openAuthModal }) => (
  <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-10 md:py-16 bg-white">
    <div className="max-w-xl w-full md:w-3/5 text-center md:text-left">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Compare & Save on <span className="text-gray-600">Loans  <span className="text-green-700">In Minutes</span></span>
      </h1>
      <p className="text-base md:text-lg text-gray-600 mb-4">
        Compare offers from India’s top lenders instantly
      </p>
      <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
        <span className="flex items-center gap-2 text-green-600 font-medium">
          <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
          No CIBIL Impact
        </span>
        <span className="flex items-center gap-2 text-green-600 font-medium">
          <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
          Instant Approval
        </span>
        <span className="flex items-center gap-2 text-green-600 font-medium">
          <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
          100% Digital
        </span>
      </div>
      <button
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded transition inline-block w-full sm:w-auto"
        onClick={openAuthModal}
      >
        Find My Best Rate
      </button>
      <div className="flex flex-wrap gap-6 mt-8 justify-center md:justify-start">
        <a href="https://www.adityabirlacapital.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
          <img src="/images/aditya-birla-logo.png" alt="Aditya Birla" className="h-8" />
        </a>
        <a href="https://www.bajajfinserv.in/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
          <img src="/images/bajaj-logo.png" alt="Bajaj Finserv" className="h-8" />
        </a>
        <a href="https://poonawallafincorp.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
          <img src="/images/poonawalla-logo.png" alt="Poonawalla" className="h-8" />
        </a>
        <a href="https://www.infina.co.in/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
          <img src="/images/infinia-logo.png" alt="Infinia" className="h-8" />
        </a>
      </div>
    </div>
    <div className="mt-10 md:mt-0 w-full md:w-2/5 flex justify-center md:justify-end">
      <img src="/images/hero-illustration.png" alt="Hero Illustration" className="w-full max-w-xs md:max-w-md" />
    </div>
  </section>
);

export default Hero;