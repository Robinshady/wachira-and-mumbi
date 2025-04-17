import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[var(--gold)] z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80" 
                alt="Law firm office" 
                className="w-full h-auto rounded shadow-xl relative z-10" 
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-[var(--gold)] z-0"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-[var(--gold)] uppercase tracking-wider mb-2">About Our Firm</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--navy)] playfair mb-2 gold-underline">Excellence in Legal Practice Since 1985</h3>
            </div>
            <p className="text-[var(--charcoal)] mb-6 leading-relaxed">
              Harrison & Associates stands at the pinnacle of legal excellence, offering sophisticated counsel to discerning clients across multiple practice areas. Our firm combines decades of proven expertise with innovative approaches to solve the most complex legal challenges.
            </p>
            <p className="text-[var(--charcoal)] mb-8 leading-relaxed">
              With a team of award-winning attorneys from the nation's top law schools, we deliver exceptional representation characterized by strategic thinking, meticulous preparation, and unwavering commitment to client success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 text-[var(--gold)]">
                  <i className="fas fa-balance-scale text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--navy)] mb-1">Strategic Counsel</h4>
                  <p className="text-sm text-[var(--charcoal)]">Sophisticated legal strategies tailored to your specific needs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 text-[var(--gold)]">
                  <i className="fas fa-gavel text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--navy)] mb-1">Trial Excellence</h4>
                  <p className="text-sm text-[var(--charcoal)]">Formidable courtroom advocacy with exceptional results</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 text-[var(--gold)]">
                  <i className="fas fa-hand-holding-usd text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--navy)] mb-1">Client-Focused</h4>
                  <p className="text-sm text-[var(--charcoal)]">Dedicated personal attention to each client's objectives</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 text-[var(--gold)]">
                  <i className="fas fa-globe text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--navy)] mb-1">Global Reach</h4>
                  <p className="text-sm text-[var(--charcoal)]">International capabilities with local expertise</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection("contact")}
              className="inline-block bg-[var(--navy)] hover:bg-opacity-90 text-white px-8 py-4 rounded text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-md"
            >
              Our Philosophy <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
