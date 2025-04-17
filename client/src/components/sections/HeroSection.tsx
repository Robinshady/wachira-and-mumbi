import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const heroText = ["EXCELLENCE", "INTEGRITY", "JUSTICE"];
  
  // Parallax effect values
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.25], [0, -100]);
  const circleScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.2]);
  
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video background with overlay */}
      <div className="absolute inset-0 z-0">
        {/* This would ideally be a video, but we'll use a gradient animation instead */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)] via-[#0a1526] to-[#060d1a] animate-gradient-slow"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIG9wYWNpdHk9IjAuMDMiPjwvcGF0aD4KPC9zdmc+')] opacity-10"></div>
      </div>
      
      {/* Decorative floating elements */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ scale: circleScale }}
      >
        {/* Large circle */}
        <motion.div 
          className="w-[900px] h-[900px] rounded-full border border-[var(--gold)]/10 absolute -top-[250px] -right-[250px]"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.15,
            rotate: 360 
          }}
          transition={{ 
            opacity: { duration: 2 },
            rotate: { duration: 150, ease: "linear", repeat: Infinity }
          }}
        />
        
        {/* Medium circle */}
        <motion.div 
          className="w-[600px] h-[600px] rounded-full border border-[var(--gold)]/15 absolute top-[20%] -right-[100px]"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.2,
            rotate: -360 
          }}
          transition={{ 
            opacity: { duration: 2, delay: 0.3 },
            rotate: { duration: 120, ease: "linear", repeat: Infinity }
          }}
        />
        
        {/* Small circle */}
        <motion.div 
          className="w-[300px] h-[300px] rounded-full border border-[var(--gold)]/20 absolute top-[40%] right-[20%]"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.25,
            rotate: 360 
          }}
          transition={{ 
            opacity: { duration: 2, delay: 0.6 },
            rotate: { duration: 90, ease: "linear", repeat: Infinity }
          }}
        />
      </motion.div>
      
      {/* Abstract legal shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Scale of justice line art */}
        <motion.svg 
          width="600" 
          height="600" 
          viewBox="0 0 24 24" 
          className="absolute -bottom-[250px] -right-[250px] text-[var(--gold)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 3 }}
        >
          <path d="M12,3C10.73,3 9.6,3.8 9.18,5H3V7H4.95L2,14C1.53,16 3,17 5.5,17C8,17 9.56,16 9,14L6.05,7H9.17C9.5,7.85 10.15,8.5 11,8.83V20H2V22H22V20H13V8.82C13.85,8.5 14.5,7.85 14.82,7H17.95L15,14C14.53,16 16,17 18.5,17C21,17 22.56,16 22,14L19.05,7H21V5H14.83C14.4,3.8 13.27,3 12,3M12,5A1,1 0 0,1 13,6A1,1 0 0,1 12,7A1,1 0 0,1 11,6A1,1 0 0,1 12,5M5.5,10.25L7,14H4L5.5,10.25M18.5,10.25L20,14H17L18.5,10.25Z" />
        </motion.svg>
        
        {/* Gavel line art */}
        <motion.svg 
          width="600" 
          height="600" 
          viewBox="0 0 24 24" 
          className="absolute -top-[300px] -left-[300px] text-[var(--gold)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 3, delay: 0.5 }}
        >
          <path d="M9.1,7.7L11.5,10.1L5.7,15.9L3.3,13.5L9.1,7.7M6.5,5L5,6.5L7.2,8.7L8.7,7.2L6.5,5M13.8,7L15.3,5.5L13.1,3.3L11.6,4.8L13.8,7M21,10L19,12L21,14H17V21H15V14H11L13,12L11,10H15V3H17V10H21Z" />
        </motion.svg>
        
        {/* Law book line art */}
        <motion.svg 
          width="600" 
          height="600" 
          viewBox="0 0 24 24" 
          className="absolute top-[50%] -left-[350px] text-[var(--gold)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 3, delay: 1 }}
        >
          <path d="M12 4C12 2.9 11.1 2 10 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H10C11.1 22 12 21.1 12 20V4M10 20H4V4H10V20M14 4C14 2.9 14.9 2 16 2H20C21.1 2 22 2.9 22 4V20C22 21.1 21.1 22 20 22H16C14.9 22 14 21.1 14 20V4M20 20H16V4H20V20Z" />
        </motion.svg>
      </div>
      
      {/* Light effect - simulating a subtle spotlight */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-[var(--gold)]/5 rounded-full blur-[80px]"></div>
      </div>
      
      {/* Main content with parallax effect */}
      <motion.div 
        className="container mx-auto px-6 py-16 relative z-10 text-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Animated badge */}
        <motion.div
          className="inline-block mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
        >
          <div className="bg-[var(--navy)]/80 border border-[var(--gold)]/20 backdrop-blur-sm py-2 px-4 rounded-full inline-flex items-center">
            <div className="w-2 h-2 rounded-full bg-[var(--gold)] mr-2"></div>
            <span className="text-xs text-white uppercase tracking-widest font-light">Advocates of the High Court</span>
            <div className="w-2 h-2 rounded-full bg-[var(--gold)] ml-2"></div>
          </div>
        </motion.div>
        
        {/* Firm name with dramatic reveal */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl text-white font-light tracking-wide">
            <span className="playfair font-medium">Wachira</span>
            <span className="mx-2 text-[var(--gold)]">&</span>
            <span className="playfair font-medium">Mumbi</span>
          </h2>
        </motion.div>
        
        {/* Animated text rotation */}
        <div className="h-32 mb-8 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentTextIndex}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white playfair"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[var(--gold)]">{heroText[currentTextIndex]}</span>
            </motion.h1>
          </AnimatePresence>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white playfair mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            IN LEGAL PRACTICE
          </motion.h1>
        </div>
        
        {/* Description with staggered reveal */}
        <motion.p 
          className="text-lg md:text-xl text-gray-200 mb-12 font-light max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Kenya's premier legal firm delivering sophisticated solutions with 
          uncompromising dedication to excellence and client success.
        </motion.p>
        
        {/* Call to action buttons with enhanced styling */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <button 
            onClick={() => scrollToSection("contact")}
            className="group bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-[var(--navy)] px-10 py-5 rounded-md text-center text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-xl relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              <span>Schedule Consultation</span>
              <motion.i 
                className="fas fa-arrow-right ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0.5 }}
              ></motion.i>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-45 -translate-x-full group-hover:translate-x-full"></span>
          </button>
          
          <button 
            onClick={() => scrollToSection("about")}
            className="group border border-[var(--gold)]/30 text-white hover:border-[var(--gold)] hover:text-[var(--gold)] px-10 py-5 rounded-md text-center text-sm font-semibold uppercase tracking-wider transition-all duration-300 backdrop-blur-sm"
          >
            <span className="relative z-10 flex items-center justify-center">
              <span>Discover Our Expertise</span>
            </span>
          </button>
        </motion.div>
      </motion.div>
      
      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <button 
          onClick={() => scrollToSection("about")}
          className="w-12 h-12 rounded-full bg-[var(--navy)]/40 backdrop-blur-sm border border-[var(--gold)]/20 flex items-center justify-center text-[var(--gold)] hover:bg-[var(--navy)]/60 transition-colors duration-300"
          aria-label="Scroll to About section"
        >
          <i className="fas fa-chevron-down text-sm"></i>
        </button>
      </motion.div>
      
      {/* Vertical line tracers */}
      <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-[var(--gold)]/10 to-transparent left-1/4 top-0"></div>
      <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-[var(--gold)]/10 to-transparent right-1/4 top-0"></div>
    </section>
  );
}
