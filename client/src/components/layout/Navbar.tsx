import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style on scroll
      setScrolled(window.scrollY > 100);
      
      // Determine which section is currently in view
      const sections = ["home", "about", "services", "team", "results", "contact"];
      const viewportHeight = window.innerHeight;
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if section is in viewport
          if (rect.top <= viewportHeight * 0.5 && rect.bottom >= viewportHeight * 0.3) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header className={`fixed w-full top-0 z-40 transition-all duration-500 backdrop-blur-sm ${
      scrolled 
        ? 'py-2 bg-[var(--navy)]/95 shadow-lg border-b border-[var(--gold)]/10' 
        : 'py-4 bg-[var(--navy)]/80'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white text-2xl font-bold flex items-center group">
            <div className="mr-3 relative">
              <div className="w-10 h-10 rounded-sm border border-[var(--gold)]/30 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[var(--gold)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-[var(--gold)] font-bold playfair text-xl">W</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="playfair font-semibold mr-1 text-2xl md:text-3xl">Wachira</span>
                <span className="text-[var(--gold)] mx-1 text-xl md:text-2xl">&</span>
                <span className="playfair font-semibold ml-1 text-2xl md:text-3xl">Mumbi</span>
              </div>
              <span className="text-[var(--gold)] text-xs md:text-sm tracking-widest uppercase font-light">Advocates of the High Court</span>
            </div>
          </Link>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="w-10 h-10 rounded-full flex items-center justify-center text-white focus:outline-none border border-[var(--gold)]/20 hover:border-[var(--gold)]/50 transition-colors duration-300" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-sm`}></i>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex bg-[var(--navy)]/30 backdrop-blur-md p-1 rounded-full border border-white/5 mr-4">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "services", label: "Services" },
                { id: "team", label: "Team" },
                { id: "results", label: "Results" }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className={`relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 rounded-full ${
                    activeSection === item.id
                      ? 'text-[var(--navy)] bg-[var(--gold)]' 
                      : 'text-white hover:text-[var(--gold)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => scrollToSection("contact")}
              className="group relative overflow-hidden bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-[var(--navy)] px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center"
            >
              <span className="mr-2">Contact Us</span>
              <span className="w-5 h-5 rounded-full bg-[var(--navy)]/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <i className="fas fa-arrow-right text-xs"></i>
              </span>
            </button>
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
              className="absolute left-0 right-0 top-full bg-[var(--navy)]/95 backdrop-blur-md shadow-lg border-t border-[var(--gold)]/10 z-50"
            >
              <motion.div 
                className="container mx-auto py-8 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  {/* Navigation Menu */}
                  <div>
                    <h3 className="text-[var(--gold)] text-xs font-medium uppercase tracking-widest mb-4">Navigation</h3>
                    <div className="space-y-3">
                      {[
                        { id: "home", label: "Home", icon: "home" },
                        { id: "about", label: "About Us", icon: "building" },
                        { id: "services", label: "Our Services", icon: "balance-scale" },
                        { id: "team", label: "Our Team", icon: "users" },
                        { id: "results", label: "Our Results", icon: "trophy" },
                      ].map((item) => (
                        <button 
                          key={item.id} 
                          onClick={() => scrollToSection(item.id)} 
                          className={`w-full flex items-center space-x-3 py-2 px-3 rounded-md transition-all duration-300 text-left ${
                            activeSection === item.id
                              ? 'bg-[var(--gold)]/10 text-[var(--gold)]' 
                              : 'text-white hover:bg-white/5 hover:text-[var(--gold)]'
                          }`}
                        >
                          <i className={`fas fa-${item.icon} w-5 h-5 flex items-center justify-center`}></i>
                          <span className="text-sm font-medium">{item.label}</span>
                          {activeSection === item.id && (
                            <motion.span 
                              className="ml-auto text-xs"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <i className="fas fa-circle text-[3px]"></i>
                            </motion.span>
                          )}
                        </button>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <button 
                        onClick={() => scrollToSection("contact")}
                        className="w-full flex items-center justify-center space-x-2 bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-[var(--navy)] px-5 py-3 rounded-md text-sm font-semibold uppercase tracking-wider transition-all duration-300"
                      >
                        <i className="fas fa-envelope text-xs"></i>
                        <span>Contact Us</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Contact Quick Info - Show on mobile too */}
                  <div className="mt-8 md:mt-0">
                    <h3 className="text-[var(--gold)] text-xs font-medium uppercase tracking-widest mb-4">Contact Information</h3>
                    
                    <div className="space-y-4 text-gray-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)] mr-3">
                          <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Nairobi Office</p>
                          <p className="text-xs mt-1">ACK Garden House, Floor 2, Wing C.,<br />1st Ngong Avenue - Off Ngong Road</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)] mr-3">
                          <i className="fas fa-phone-alt"></i>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Call Us</p>
                          <p className="text-xs mt-1">0741 647 831</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)] mr-3">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Email Us</p>
                          <p className="text-xs mt-1">info@wachiramumbilaw.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
