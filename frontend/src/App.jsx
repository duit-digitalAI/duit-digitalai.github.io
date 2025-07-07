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

// AuthModal context
export const AuthModalContext = createContext();
export const useAuthModal = () => useContext(AuthModalContext);

// Home page component
const HomePage = ({ openAuthModal }) => (
  <div className="font-sans bg-white">
    <Hero openAuthModal={openAuthModal} />
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
          </Routes>
          <Footer />
          <AuthModal open={authOpen} onClose={closeAuthModal} />
        </div>
      </Router>
    </AuthModalContext.Provider>
  );
}

export default App;