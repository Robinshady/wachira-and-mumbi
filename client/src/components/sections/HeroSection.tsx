import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen bg-hero-pattern bg-cover bg-center flex items-center relative overflow-hidden">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/95 via-[var(--navy)]/80 to-[var(--navy)]/60"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <motion.div 
          className="w-[800px] h-[800px] rounded-full border-[30px] border-[var(--gold)] absolute -top-[400px] -right-[400px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div 
          className="w-[600px] h-[600px] rounded-full border-[20px] border-[var(--gold)] absolute top-[30%] -right-[200px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
      </div>
      
      {/* Scales of justice icon (subtle overlay) */}
      <motion.div 
        className="absolute bottom-0 -right-20 opacity-5 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <svg width="600" height="600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,3C10.73,3 9.6,3.8 9.18,5H3V7H4.95L2,14C1.53,16 3,17 5.5,17C8,17 9.56,16 9,14L6.05,7H9.17C9.5,7.85 10.15,8.5 11,8.83V20H2V22H22V20H13V8.82C13.85,8.5 14.5,7.85 14.82,7H17.95L15,14C14.53,16 16,17 18.5,17C21,17 22.56,16 22,14L19.05,7H21V5H14.83C14.4,3.8 13.27,3 12,3M12,5A1,1 0 0,1 13,6A1,1 0 0,1 12,7A1,1 0 0,1 11,6A1,1 0 0,1 12,5M5.5,10.25L7,14H4L5.5,10.25M18.5,10.25L20,14H17L18.5,10.25Z" />
        </svg>
      </motion.div>
      
      {/* Main content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-4 inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <div className="bg-[var(--gold)] h-1 w-20 mb-2"></div>
            <div className="bg-[var(--gold)] h-1 w-10"></div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 playfair leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-[var(--gold)]">Excellence</span> in Legal<br />
            Representation
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-200 mb-10 font-light max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Wachira & Mumbi Advocates delivers unparalleled legal expertise with precision 
            and dedication. Our distinguished team provides sophisticated solutions for complex 
            legal challenges across Kenya.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button 
              onClick={() => scrollToSection("contact")}
              className="group bg-[var(--gold)] hover:bg-opacity-90 text-[var(--navy)] px-8 py-4 rounded text-center text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg relative overflow-hidden"
            >
              <span className="relative z-10">Schedule Consultation</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>
            
            <button 
              onClick={() => scrollToSection("about")}
              className="group border border-white text-white hover:border-[var(--gold)] hover:text-[var(--gold)] px-8 py-4 rounded text-center text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              <span>Discover Our Expertise</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <button 
          onClick={() => scrollToSection("about")}
          className="text-[var(--gold)]"
          aria-label="Scroll to About section"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </button>
      </motion.div>
    </section>
  );
}
