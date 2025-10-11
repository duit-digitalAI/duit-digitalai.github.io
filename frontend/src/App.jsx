import React, { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import WhyDuit from "./components/WhyDuit";
import FAQs from "./components/FAQs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Legal from "./pages/Legal";
import AuthModal from "./components/AuthModal";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";

// AuthModal context
export const AuthModalContext = createContext();
export const useAuthModal = () => useContext(AuthModalContext);

const LogoScrollBar = () => (
  <section className="w-full bg-white py-4 overflow-hidden">
    <div className="flex animate-scroll gap-8 whitespace-nowrap">
      {/* First set of logos */}
      <div className="flex-shrink-0">
        <img src="/images/aditya-birla-logo.png" alt="Aditya Birla" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/bajaj-logo.png" alt="Bajaj Finserv" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/poonawalla-logo.png" alt="Poonawalla" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/infinia-logo.png" alt="Infinia" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/anandrathi.png" alt="Anand Rathi" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/ugro.png" alt="Ugro Capital" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/piramal.png" alt="Piramal" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/smfg.png" alt="SMFG India Credit" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/incred.png" alt="InCred" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/ltfinance.png" alt="L&T Finance" className="h-8" />
      </div>
      </div>
      <div className="flex-shrink-0">
        <img src="/images/dmi-logo.png" alt="DMI" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/zype-logo.svg" alt="Zype" className="h-8" />
      </div>
      {/* Duplicate set for seamless loop */}
      <div className="flex-shrink-0">
        <img src="/images/aditya-birla-logo.png" alt="Aditya Birla" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/bajaj-logo.png" alt="Bajaj Finserv" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/poonawalla-logo.png" alt="Poonawalla" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/infinia-logo.png" alt="Infinia" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/anandrathi.png" alt="Anand Rathi" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/ugro.png" alt="Ugro Capital" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/piramal.png" alt="Piramal" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/smfg.png" alt="SMFG India Credit" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/incred.png" alt="InCred" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/ltfinance.png" alt="L&T Finance" className="h-8" />
      </div>
      </div>
      <div className="flex-shrink-0">
        <img src="/images/dmi-logo.png" alt="DMI" className="h-8" />
      </div>
      <div className="flex-shrink-0">
        <img src="/images/zype-logo.svg" alt="Zype" className="h-8" />
      </div>
    </div>
  </section>
);

// Home page component
const HomePage = ({ openAuthModal }) => (
  <div className="font-sans bg-white">
    <Hero openAuthModal={openAuthModal} />
    <LogoScrollBar />
    <Products openAuthModal={openAuthModal} />
    <HowItWorks />
    <Stats />
    <WhyDuit />
    <FAQs />
    <CTA openAuthModal={openAuthModal} />
  </div>
);

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const openAuthModal = () => setAuthOpen(true);
  const closeAuthModal = () => setAuthOpen(false);

  return (
    <AuthModalContext.Provider value={openAuthModal}>
      <Router>
        <div className="font-sans bg-white">
          <Navbar openAuthModal={openAuthModal} />
          <Routes>
            <Route path="/" element={<HomePage openAuthModal={openAuthModal} />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partners" element={<Partners />} />
          </Routes>
          <Footer />
          <AuthModal open={authOpen} onClose={closeAuthModal} />
          
          {/* Persistent Nivi Avatar - Fixed on right side */}
          <div className="fixed right-6 bottom-6 z-50 md:right-8 md:bottom-8">
            <div className="relative group">
              {/* Main Avatar */}
              <a 
                href="https://nivi.duitai.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block pointer-events-auto"
                style={{ zIndex: 2 }}
              >
                <div className="bg-white rounded-full p-3 shadow-xl border-2 border-yellow-300 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-110">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    N
                  </div>
                </div>
              </a>
              
              {/* Chat Bubble */}
              <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ zIndex: 3 }}>
                <div className="bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
                  Hi, I'm Nivi!
                </div>
                {/* Arrow pointing down */}
                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-yellow-400"></div>
              </div>
              
              {/* Pulse animation ring */}
              <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-20 pointer-events-none" style={{ zIndex: 1 }}></div>
            </div>
          </div>
        </div>
      </Router>
    </AuthModalContext.Provider>
  );
}

export default App;
