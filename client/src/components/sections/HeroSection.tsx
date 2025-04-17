import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen bg-hero-pattern bg-cover bg-center flex items-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)] via-[var(--navy)]/80 to-[var(--navy)]/60"></div>
      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 playfair leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Exceptionally <span className="text-[var(--gold)]">Sophisticated</span> Legal Representation
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-200 mb-10 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Protecting your interests with precision, expertise, and unwavering dedication to achieving optimal results.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button 
              onClick={() => scrollToSection("contact")}
              className="bg-[var(--gold)] hover:bg-opacity-90 text-[var(--navy)] px-8 py-4 rounded text-center text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg"
            >
              Schedule Consultation
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="border border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-4 rounded text-center text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
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
