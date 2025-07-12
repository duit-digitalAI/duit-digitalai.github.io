import React from "react";

const Footer = () => (
  <footer className="px-4 md:px-8 py-8 bg-white border-t">
    {/* Main footer content */}
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 md:gap-0">
      <div className="flex items-center gap-2 mb-2 md:mb-0">
        <a href="https://www.duit.digital" target="_blank" rel="noopener noreferrer">
          <img src="/images/duit-logo.svg" alt="Duit Digital Logo" className="h-[6rem] w-auto" />
        </a>
        
      </div>
      <div className="flex flex-col sm:flex-row gap-4 md:gap-8 text-gray-700 font-medium mb-2 md:mb-0 text-center md:text-left">
        <a href="/about" className="hover:text-yellow-500 transition-colors">About</a>
        <a href="/careers" className="hover:text-yellow-500 transition-colors">Careers</a>
        <a href="/blog" className="hover:text-yellow-500 transition-colors">Blog</a>
        <a href="/legal" className="hover:text-yellow-500 transition-colors">Legal</a>
        <a href="/contact" className="hover:text-yellow-500 transition-colors">Contact</a>
      </div>
      <div className="flex gap-4 justify-center md:justify-end">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-500 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-500 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-500 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
          </svg>
        </a>
      </div>
    </div>
    {/* Copyright section - centered at bottom */}
    <div className="text-center border-t pt-6">
      <div className="text-gray-500 text-sm">
        © 2025 Duit Digital. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;