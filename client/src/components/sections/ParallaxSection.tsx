import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="py-32 parallax bg-parallax-bg"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 playfair">
            Unwavering Commitment to Excellence
          </h2>
          <p className="text-xl text-gray-200 mb-10 font-light">
            Our firm's success is measured by our clients' success. We approach each matter with intellectual rigor, creativity, and determination.
          </p>
          <motion.button 
            onClick={() => scrollToSection("contact")}
            className="inline-block bg-[var(--gold)] hover:bg-opacity-90 text-[var(--navy)] px-8 py-4 rounded text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
