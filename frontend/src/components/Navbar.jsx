import React, { useState } from "react";

const Navbar = ({ openAuthModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="https://www.duit.digital" target="_blank" rel="noopener noreferrer">
            <img src="/images/duit-logo.svg" alt="Duit Digital Logo" className="h-[6rem] w-auto" />
          </a>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Nav links (desktop) */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><a href="#whyus" className="hover:text-yellow-500">Why Us</a></li>
          <li><a href="#howitworks" className="hover:text-yellow-500">How it Works</a></li>
          <li><a href="#faqs" className="hover:text-yellow-500">FAQs</a></li>
        </ul>
        <a
          href="https://duitai.in"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-yellow-300"
        >
          Ask Nivi
        </a>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li><a href="#whyus" className="hover:text-yellow-500" onClick={() => setMenuOpen(false)}>Why Us</a></li>
            <li><a href="#howitworks" className="hover:text-yellow-500" onClick={() => setMenuOpen(false)}>How it Works</a></li>
            <li><a href="#faqs" className="hover:text-yellow-500" onClick={() => setMenuOpen(false)}>FAQs</a></li>
          </ul>
          <a
            href="https://duitai.in"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-yellow-300 text-center w-full"
            onClick={() => setMenuOpen(false)}
          >
            Ask Nivi
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
