import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const heroText = ["DISTINCTION", "EXCELLENCE", "INTEGRITY"];
  
  // Parallax effect values
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const circleScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Line animation values
  const lineScaleY = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3], [0, 1, 0.5]);
  
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroText.length);
    }, 3000);
    
    return () => clearInterval(textInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Dynamic background with parallax effect */}
      <div className="absolute inset-0 z-0">
        {/* Premium gradient background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-[var(--navy)] via-[var(--navy-light)] to-[var(--navy-lighter)]"
          style={{ y: bgY }}
        ></motion.div>
        
        {/* Premium pattern overlay - using SVG for crisp rendering */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgNTBMMzAgMTBNNDAgMzBMMjAgMzAiIHN0cm9rZT0iI2RkYzY5MSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMDUiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>
      </div>
      
      {/* Interactive geometric elements and judiciary symbols */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ scale: circleScale }}
      >
        {/* Premium circular elements */}
        <motion.div 
          className="absolute top-[-20%] right-[-10%] w-[1200px] h-[1200px] opacity-5"
          animate={{ rotate: 360 }}
          transition={{ duration: 180, ease: "linear", repeat: Infinity }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" stroke="url(#circleGradient)" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="url(#circleGradient)" strokeWidth="0.4" fill="none" />
            <circle cx="50" cy="50" r="15" stroke="url(#circleGradient)" strokeWidth="0.3" fill="none" />
          </svg>
        </motion.div>
        
        {/* Hexagon grid element */}
        <motion.div 
          className="absolute top-[20%] left-[-30%] w-[1000px] h-[1000px] opacity-5"
          animate={{ rotate: -360 }}
          transition={{ duration: 200, ease: "linear", repeat: Infinity }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="hexGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M5,0 L10,5 L5,10 L0,5 Z" fill="none" stroke="var(--gold)" strokeWidth="0.2" opacity="0.3" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#hexGrid)" />
          </svg>
        </motion.div>
        
        {/* Judiciary Icons - Scales of Justice */}
        <motion.div 
          className="absolute top-[15%] right-[15%] opacity-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3L3 10H21L12 3Z" stroke="var(--gold)" strokeWidth="0.4" />
            <rect x="11" y="10" width="2" height="11" stroke="var(--gold)" strokeWidth="0.4" />
            <path d="M5 10V15M5 15C5 16.1046 6.34315 17 8 17C9.65685 17 11 16.1046 11 15M5 15L3 21H13L11 15" stroke="var(--gold)" strokeWidth="0.4" />
            <path d="M19 10V15M19 15C19 16.1046 17.6569 17 16 17C14.3431 17 13 16.1046 13 15M19 15L21 21H11L13 15" stroke="var(--gold)" strokeWidth="0.4" />
            <rect x="2" y="21" width="20" height="1" stroke="var(--gold)" strokeWidth="0.4" />
          </svg>
        </motion.div>
        
        {/* Judiciary Icons - Gavel */}
        <motion.div 
          className="absolute bottom-[25%] left-[10%] opacity-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <svg width="180" height="180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 14L19 9L21 11L16 16L14 14Z" stroke="var(--gold)" strokeWidth="0.4" />
            <path d="M14 14L8 20L6 18L12 12L14 14Z" stroke="var(--gold)" strokeWidth="0.4" />
            <path d="M8 20L4 20L4 22L8 22L8 20Z" stroke="var(--gold)" strokeWidth="0.4" />
            <path d="M14 14L12 12L10 10L12 8L14 10L16 12L14 14Z" stroke="var(--gold)" strokeWidth="0.4" />
            <path d="M10 10L5 5L7 3L12 8L10 10Z" stroke="var(--gold)" strokeWidth="0.4" />
          </svg>
        </motion.div>
        
        {/* Judiciary Icons - Law Book */}
        <motion.div 
          className="absolute top-[60%] right-[20%] opacity-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2, delay: 2 }}
        >
          <svg width="150" height="150" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4Z" stroke="var(--gold)" strokeWidth="0.4" />
            <path d="M12 4V20" stroke="var(--gold)" strokeWidth="0.4" />
            <path d="M8 8H6" stroke="var(--gold)" strokeWidth="0.4" />
            <path d="M8 12H6" stroke="var(--gold)" strokeWidth="0.4" />
            <path d="M8 16H6" stroke="var(--gold)" strokeWidth="0.4" />
            <path d="M18 8H16" stroke="var(--gold)" strokeWidth="0.4" />
            <path d="M18 12H16" stroke="var(--gold)" strokeWidth="0.4" />
            <path d="M18 16H16" stroke="var(--gold)" strokeWidth="0.4" />
          </svg>
        </motion.div>
        
        {/* Kenyan Court Seal - Simplified */}
        <motion.div 
          className="absolute top-[40%] left-[22%] opacity-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 2, delay: 2.5 }}
        >
          <svg width="220" height="220" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="var(--gold)" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="50" r="38" stroke="var(--gold)" strokeWidth="0.3" fill="none" />
            <path d="M50 18V82" stroke="var(--gold)" strokeWidth="0.4" />
            <path d="M18 50L82 50" stroke="var(--gold)" strokeWidth="0.4" />
            <circle cx="50" cy="50" r="10" stroke="var(--gold)" strokeWidth="0.4" fill="none" />
            <path d="M39 36L61 64" stroke="var(--gold)" strokeWidth="0.3" />
            <path d="M39 64L61 36" stroke="var(--gold)" strokeWidth="0.3" />
          </svg>
        </motion.div>
      </motion.div>
      
      {/* Light effects - creating depth and dimension */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Light beam from top */}
        <div className="absolute top-0 left-[10%] right-[10%] h-[500px] bg-gradient-to-b from-[var(--gold)]/5 to-transparent opacity-30"></div>
        
        {/* Glow spots */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full radial-pulse-gold opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full radial-pulse-gold opacity-15 animation-delay-1000"></div>
      </div>
      
      {/* Vertical line tracers with scroll-based animation */}
      <motion.div 
        className="absolute h-full w-px bg-gradient-to-b from-transparent via-[var(--gold)]/20 to-transparent left-[15%] top-0 origin-top"
        style={{ scaleY: lineScaleY, opacity: lineOpacity }}
      ></motion.div>
      <motion.div 
        className="absolute h-full w-px bg-gradient-to-b from-transparent via-[var(--gold)]/20 to-transparent right-[15%] top-0 origin-top"
        style={{ scaleY: lineScaleY, opacity: lineOpacity }}
      ></motion.div>
      
      {/* Horizontal accent lines */}
      <motion.div 
        className="absolute w-[80%] h-px bg-gradient-to-r from-transparent via-[var(--gold)]/10 to-transparent top-[20%] left-[10%]"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      ></motion.div>
      <motion.div 
        className="absolute w-[80%] h-px bg-gradient-to-r from-transparent via-[var(--gold)]/10 to-transparent bottom-[20%] left-[10%]"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      ></motion.div>
      
      {/* Main content with parallax effect */}
      <motion.div 
        className="container mx-auto px-4 md:px-6 pt-0 pb-8 md:py-8 relative z-10 text-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Premium badge indicator with dynamic shimmer */}
        <motion.div
          className="inline-block mb-4 md:mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
        >
          <div className="bg-[var(--navy)]/80 border border-[var(--gold)]/20 backdrop-blur-sm py-1.5 px-3 md:py-2 md:px-4 rounded-full inline-flex items-center relative overflow-hidden group">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--gold)] mr-2"></div>
            <span className="text-[10px] md:text-xs text-white uppercase tracking-ultra-wide segoe-light">Advocates of the High Court</span>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--gold)] ml-2"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full -translate-x-full transition-transform duration-1500 ease-in-out"></div>
          </div>
        </motion.div>
        
        {/* Firm name with sophisticated reveal */}
        <motion.div
          className="mb-3 md:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl text-white segoe-regular tracking-tight">
            <span className="segoe-semibold text-gradient-premium">Wachira</span>
            <span className="mx-2 md:mx-3 text-[var(--gold)]">&</span>
            <span className="segoe-semibold text-gradient-premium">Mumbi</span>
          </h2>
        </motion.div>
        
        {/* Premium text animation with dramatic transitions */}
        <div className="h-auto mb-8 md:mb-16 pt-2 md:pt-4 flex flex-col items-center justify-center relative">
          {/* Dynamic line separator */}
          <motion.div 
            className="w-16 md:w-20 h-px bg-[var(--gold)]/30 mb-4 md:mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          
          {/* Animated text rotation with premium transitions */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentTextIndex}
              className="hero-title text-white mb-4 md:mb-8 text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
              transition={{ duration: 0.6 }}
            >
              <span className="dynamic-gradient-text">{heroText[currentTextIndex]}</span>
            </motion.h1>
          </AnimatePresence>
          
          {/* IN LEGAL PRACTICE with enhanced visibility */}
          <motion.div
            className="relative mb-6 md:mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          >
            <div className="px-5 md:px-10 py-4 md:py-6 bg-[var(--navy)]/70 backdrop-blur-md rounded-lg border border-[var(--gold)]/10 shadow-lg">
              <h2 className="segoe-semibold text-2xl md:text-4xl lg:text-5xl text-white tracking-tight">
                IN LEGAL PRACTICE
              </h2>
              
              {/* Decorative lines */}
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent"></div>
              <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent"></div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 border-t border-l border-[var(--gold)]/30 rounded-tl-sm"></div>
              <div className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 border-t border-r border-[var(--gold)]/30 rounded-tr-sm"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 md:w-4 md:h-4 border-b border-l border-[var(--gold)]/30 rounded-bl-sm"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 border-b border-r border-[var(--gold)]/30 rounded-br-sm"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Sophisticated description */}
        <motion.p 
          className="premium-text segoe-light text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed text-sm md:text-base px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Kenya's premier legal firm delivering sophisticated solutions with 
          uncompromising dedication to excellence and client success across East Africa 
          and beyond.
        </motion.p>
        
        {/* Premium CTA section with 3D effect buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {/* Primary CTA button with 3D effect */}
          <button 
            onClick={() => scrollToSection("contact")}
            className="btn-3d bg-[var(--gold)] text-[var(--navy)] px-5 sm:px-8 py-3 sm:py-4 rounded-md text-center segoe-semibold text-xs sm:text-sm uppercase tracking-wider relative overflow-hidden shadow-lg group w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center">
              <span>Schedule Consultation</span>
              <motion.i 
                className="fas fa-arrow-right ml-2 text-xs"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0.5 }}
              ></motion.i>
            </span>
            
            {/* Premium hover effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
          </button>
          
          {/* Secondary CTA with glass effect */}
          <button 
            onClick={() => scrollToSection("about")}
            className="frosted-panel border border-[var(--gold)]/20 text-white hover:border-[var(--gold)]/50 hover:text-[var(--gold)] px-5 sm:px-8 py-3 sm:py-4 rounded-md text-center segoe-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 group w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center">
              <span>Discover Our Expertise</span>
              <i className="fas fa-chevron-right text-xs ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"></i>
            </span>
          </button>
        </motion.div>
        
        {/* Decorative element - divider line with accent */}
        <motion.div
          className="relative flex justify-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent"></div>
          <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--gold)]/30 rounded-full"></div>
        </motion.div>
      </motion.div>
      
      {/* Premium scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        >
          <button 
            onClick={() => scrollToSection("about")}
            className="glass-card w-14 h-14 rounded-full flex items-center justify-center text-[var(--gold)] hover:text-white hover:border-[var(--gold)]/40 transition-colors duration-300 group"
            aria-label="Scroll to About section"
          >
            <motion.i 
              className="fas fa-chevron-down text-sm transition-transform duration-300 group-hover:translate-y-1"
            ></motion.i>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
