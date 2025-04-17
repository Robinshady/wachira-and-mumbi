import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header className={`fixed w-full top-0 z-40 transition-all duration-300 bg-[var(--navy)] bg-opacity-95 ${scrolled ? 'py-2 shadow-lg' : 'py-4'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-white text-2xl font-bold flex items-center">
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="playfair font-semibold mr-1 text-2xl md:text-3xl">Wachira</span>
                  <span className="text-[var(--gold)] mx-1 text-xl md:text-2xl">&</span>
                  <span className="playfair font-semibold ml-1 text-2xl md:text-3xl">Mumbi</span>
                </div>
                <span className="text-[var(--gold)] text-xs md:text-sm tracking-widest uppercase font-light">Advocates of the High Court</span>
              </div>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-white focus:outline-none" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="nav-link text-white hover:text-[var(--gold)] transition-colors duration-300 text-sm font-medium uppercase tracking-wider">Home</button>
            <button onClick={() => scrollToSection("about")} className="nav-link text-white hover:text-[var(--gold)] transition-colors duration-300 text-sm font-medium uppercase tracking-wider">About</button>
            <button onClick={() => scrollToSection("services")} className="nav-link text-white hover:text-[var(--gold)] transition-colors duration-300 text-sm font-medium uppercase tracking-wider">Services</button>
            <button onClick={() => scrollToSection("team")} className="nav-link text-white hover:text-[var(--gold)] transition-colors duration-300 text-sm font-medium uppercase tracking-wider">Our Team</button>
            <button onClick={() => scrollToSection("results")} className="nav-link text-white hover:text-[var(--gold)] transition-colors duration-300 text-sm font-medium uppercase tracking-wider">Results</button>
            <button onClick={() => scrollToSection("contact")} className="bg-[var(--gold)] hover:bg-opacity-90 text-[var(--navy)] px-5 py-2.5 rounded text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-md">Contact Us</button>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 right-0 top-full bg-[var(--navy)] bg-opacity-95 shadow-lg border-t border-gray-800 z-50"
            >
              <motion.div 
                className="flex flex-col py-4 px-6 space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1 }}
              >
                <button onClick={() => scrollToSection("home")} className="text-white hover:text-[var(--gold)] transition-colors duration-300 py-2 text-sm font-medium uppercase tracking-wider text-left">Home</button>
                <button onClick={() => scrollToSection("about")} className="text-white hover:text-[var(--gold)] transition-colors duration-300 py-2 text-sm font-medium uppercase tracking-wider text-left">About</button>
                <button onClick={() => scrollToSection("services")} className="text-white hover:text-[var(--gold)] transition-colors duration-300 py-2 text-sm font-medium uppercase tracking-wider text-left">Services</button>
                <button onClick={() => scrollToSection("team")} className="text-white hover:text-[var(--gold)] transition-colors duration-300 py-2 text-sm font-medium uppercase tracking-wider text-left">Our Team</button>
                <button onClick={() => scrollToSection("results")} className="text-white hover:text-[var(--gold)] transition-colors duration-300 py-2 text-sm font-medium uppercase tracking-wider text-left">Results</button>
                <button onClick={() => scrollToSection("contact")} className="bg-[var(--gold)] hover:bg-opacity-90 text-[var(--navy)] px-5 py-2.5 rounded text-center text-sm font-semibold uppercase tracking-wider transition-all duration-300">Contact Us</button>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
