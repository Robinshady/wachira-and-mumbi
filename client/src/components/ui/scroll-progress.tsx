import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add event listener to check scroll position
    const handleScroll = () => {
      // Show scroll indicator after scrolling down a bit
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-8 right-8 z-40 flex items-center">
      {/* Progress indicator */}
      <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm shadow-lg">
        <motion.div
          className="absolute inset-1 bg-gradient-to-r from-[var(--gold)] to-[var(--gold)]/80 rounded-full origin-center"
          style={{
            pathLength: scrollYProgress,
            rotate: 270,
            scale: scrollYProgress,
            opacity: scrollYProgress 
          }}
        />
        <button 
          onClick={scrollToTop} 
          className="absolute inset-0 flex items-center justify-center rounded-full hover:bg-[var(--navy)]/5 transition-colors"
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up text-[var(--gold)] text-sm"></i>
        </button>
      </div>
      
      {/* Text indicator */}
      <motion.div 
        className="bg-white/5 text-[var(--gold)] py-2 px-4 rounded-full backdrop-blur-md border border-white/10 shadow-lg font-light text-sm tracking-wide"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span style={{ opacity: scrollYProgress }}>
          Scroll Progress
        </motion.span>
      </motion.div>
    </div>
  );
}