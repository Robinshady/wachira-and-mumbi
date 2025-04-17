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
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-28 h-28 border-2 border-[var(--gold)] z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-28 h-28 border-2 border-[var(--gold)] z-0"></div>
              
              {/* Accent line */}
              <div className="absolute top-0 left-0 w-1/3 h-1 bg-[var(--gold)] z-20"></div>
              <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-[var(--gold)] z-20"></div>
              
              {/* Main image */}
              <img 
                src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80" 
                alt="Wachira & Mumbi Advocates Office" 
                className="w-full h-auto rounded shadow-xl relative z-10" 
              />
              
              {/* Premium overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--navy)]/20 to-transparent z-10 rounded"></div>
              
              {/* Floating info box */}
              <div className="absolute -bottom-5 -right-5 bg-white p-4 shadow-lg rounded z-20 max-w-[200px]">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-[var(--gold)] mr-2 rounded-full"></div>
                  <h4 className="font-bold text-[var(--navy)] text-sm">Established</h4>
                </div>
                <p className="text-[var(--charcoal)] text-xl font-bold playfair">2005</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-[var(--gold)] uppercase tracking-wider mb-2">About Our Firm</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--navy)] playfair mb-6 leading-tight">
                A Legacy of Legal <span className="relative">
                  Excellence
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--gold)]"></span>
                </span> in Kenya
              </h3>
              <div className="w-20 h-1 bg-[var(--gold)] mb-8 hidden"></div>
            </div>
            <p className="text-[var(--charcoal)] mb-6 leading-relaxed text-lg">
              Established in 2005, Wachira & Mumbi Advocates has grown to become one of Kenya's most respected legal practices. Our distinguished team combines profound local knowledge with international standards of excellence to deliver sophisticated counsel across diverse practice areas.
            </p>
            <p className="text-[var(--charcoal)] mb-8 leading-relaxed text-lg">
              Our advocates are recognized for their exceptional legal acumen, having been educated at Kenya's premier institutions and holding specialized qualifications in various fields of law. We pride ourselves on our ability to navigate complex legal landscapes with strategic thinking, meticulous preparation, and unwavering dedication to our clients' success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="flex items-start p-5 border-l-2 border-[var(--gold)] bg-gray-50 hover:shadow-md transition-shadow duration-300 rounded-r">
                <div className="flex-shrink-0 mr-4 text-[var(--gold)]">
                  <i className="fas fa-balance-scale text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--navy)] mb-2 text-lg">Legal Excellence</h4>
                  <p className="text-[var(--charcoal)] leading-relaxed">Delivering sophisticated and nuanced legal solutions refined through years of dedicated practice</p>
                </div>
              </div>
              
              <div className="flex items-start p-5 border-l-2 border-[var(--gold)] bg-gray-50 hover:shadow-md transition-shadow duration-300 rounded-r">
                <div className="flex-shrink-0 mr-4 text-[var(--gold)]">
                  <i className="fas fa-gavel text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--navy)] mb-2 text-lg">Advocacy Mastery</h4>
                  <p className="text-[var(--charcoal)] leading-relaxed">Formidable representation in Kenya's courts with a track record of landmark victories</p>
                </div>
              </div>
              
              <div className="flex items-start p-5 border-l-2 border-[var(--gold)] bg-gray-50 hover:shadow-md transition-shadow duration-300 rounded-r">
                <div className="flex-shrink-0 mr-4 text-[var(--gold)]">
                  <i className="fas fa-handshake text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--navy)] mb-2 text-lg">Client Partnership</h4>
                  <p className="text-[var(--charcoal)] leading-relaxed">Building enduring relationships through transparent communication and personalized service</p>
                </div>
              </div>
              
              <div className="flex items-start p-5 border-l-2 border-[var(--gold)] bg-gray-50 hover:shadow-md transition-shadow duration-300 rounded-r">
                <div className="flex-shrink-0 mr-4 text-[var(--gold)]">
                  <i className="fas fa-landmark text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--navy)] mb-2 text-lg">Local Authority</h4>
                  <p className="text-[var(--charcoal)] leading-relaxed">Unparalleled understanding of Kenya's legal landscape, regulations, and cultural nuances</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => scrollToSection("services")}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[var(--navy)] text-white rounded overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span className="absolute inset-0 bg-[var(--gold)] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center">
                  <span className="font-semibold uppercase tracking-wider text-sm">Our Services</span>
                  <i className="fas fa-chevron-right ml-3 text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
                </span>
              </button>
              
              <button 
                onClick={() => scrollToSection("contact")}
                className="group relative inline-flex items-center justify-center px-8 py-4 border border-[var(--navy)] text-[var(--navy)] rounded overflow-hidden transition-all duration-300 hover:border-[var(--gold)]"
              >
                <span className="relative flex items-center">
                  <span className="font-semibold uppercase tracking-wider text-sm">Contact Us</span>
                  <i className="fas fa-envelope ml-3 text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
