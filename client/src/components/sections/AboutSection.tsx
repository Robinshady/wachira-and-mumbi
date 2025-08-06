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
    <section id="about" className="py-16 md:py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mx-2 md:mx-0 mt-6 mb-10 md:mt-0 md:mb-0">
              {/* Decorative elements - hidden on smallest screens */}
              <div className="absolute -top-4 md:-top-6 -left-4 md:-left-6 w-20 md:w-28 h-20 md:h-28 border-2 border-[var(--gold)] z-0 hidden sm:block"></div>
              <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-20 md:w-28 h-20 md:h-28 border-2 border-[var(--gold)] z-0 hidden sm:block"></div>
              
              {/* Accent line */}
              <div className="absolute top-0 left-0 w-1/3 h-1 bg-[var(--gold)] z-20"></div>
              <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-[var(--gold)] z-20"></div>
              
              {/* Team Image */}
              <div 
                className="w-full rounded shadow-xl relative z-10 overflow-hidden aspect-[16/9]" 
                style={{
                  backgroundImage: `url('/images/optimized/team-image-high-quality.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              
              {/* No need for premium overlay as it's built into the placeholder */}
              
              {/* Floating info box - smaller on mobile */}
              <div className="absolute -bottom-3 md:-bottom-5 -right-3 md:-right-5 bg-white p-3 md:p-4 shadow-lg rounded z-20 max-w-[150px] md:max-w-[200px]">
                <div className="flex items-center mb-1 md:mb-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-[var(--gold)] mr-2 rounded-full"></div>
                  <h4 className="font-bold text-[var(--navy)] text-xs md:text-sm">Established</h4>
                </div>
                <p className="text-[var(--charcoal)] text-lg md:text-xl font-bold playfair">2017</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-6 md:mb-8">
              <h2 className="text-xs md:text-sm font-semibold text-[var(--gold)] uppercase tracking-wider mb-2">About Our Firm</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--navy)] playfair mb-4 md:mb-6 leading-tight">
                A Legacy of Legal <span className="relative">
                  Excellence
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--gold)]"></span>
                </span> in Kenya
              </h3>
              <div className="w-20 h-1 bg-[var(--gold)] mb-8 hidden"></div>
            </div>
            <p className="text-[var(--charcoal)] mb-5 leading-relaxed text-base md:text-lg">
              Established in 2017, Wachira & Mumbi Advocates has grown to become one of Kenya's most respected legal practices. Our distinguished team combines profound local knowledge with international standards of excellence to deliver sophisticated counsel across diverse practice areas.
            </p>
            <p className="text-[var(--charcoal)] mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
              Our advocates are recognized for their exceptional legal acumen, having been educated at Kenya's premier institutions and holding specialized qualifications in various fields of law. We pride ourselves on our ability to navigate complex legal landscapes with strategic thinking, meticulous preparation, and unwavering dedication to our clients' success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-10">
              <div className="flex items-start p-4 md:p-5 border-l-2 border-[var(--gold)] bg-gray-50 hover:shadow-md transition-shadow duration-300 rounded-r">
                <div className="flex-shrink-0 mr-3 md:mr-4 text-[var(--gold)]">
                  <i className="fas fa-balance-scale text-xl md:text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--navy)] mb-1 md:mb-2 text-base md:text-lg">Legal Excellence</h4>
                  <p className="text-[var(--charcoal)] leading-relaxed text-sm md:text-base">Delivering sophisticated and nuanced legal solutions refined through years of dedicated practice</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 md:p-5 border-l-2 border-[var(--gold)] bg-gray-50 hover:shadow-md transition-shadow duration-300 rounded-r">
                <div className="flex-shrink-0 mr-3 md:mr-4 text-[var(--gold)]">
                  <i className="fas fa-gavel text-xl md:text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--navy)] mb-1 md:mb-2 text-base md:text-lg">Advocacy Mastery</h4>
                  <p className="text-[var(--charcoal)] leading-relaxed text-sm md:text-base">Formidable representation in Kenya's courts with a track record of landmark victories</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 md:p-5 border-l-2 border-[var(--gold)] bg-gray-50 hover:shadow-md transition-shadow duration-300 rounded-r">
                <div className="flex-shrink-0 mr-3 md:mr-4 text-[var(--gold)]">
                  <i className="fas fa-handshake text-xl md:text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--navy)] mb-1 md:mb-2 text-base md:text-lg">Client Partnership</h4>
                  <p className="text-[var(--charcoal)] leading-relaxed text-sm md:text-base">Building enduring relationships through transparent communication and personalized service</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 md:p-5 border-l-2 border-[var(--gold)] bg-gray-50 hover:shadow-md transition-shadow duration-300 rounded-r">
                <div className="flex-shrink-0 mr-3 md:mr-4 text-[var(--gold)]">
                  <i className="fas fa-landmark text-xl md:text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--navy)] mb-1 md:mb-2 text-base md:text-lg">Local Authority</h4>
                  <p className="text-[var(--charcoal)] leading-relaxed text-sm md:text-base">Unparalleled understanding of Kenya's legal landscape, regulations, and cultural nuances</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
              <button 
                onClick={() => scrollToSection("services")}
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[var(--navy)] text-white rounded overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span className="absolute inset-0 bg-[var(--gold)] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center">
                  <span className="font-semibold uppercase tracking-wider text-xs sm:text-sm">Our Services</span>
                  <i className="fas fa-chevron-right ml-2 sm:ml-3 text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
                </span>
              </button>
              
              <button 
                onClick={() => scrollToSection("contact")}
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-[var(--navy)] text-[var(--navy)] rounded overflow-hidden transition-all duration-300 hover:border-[var(--gold)]"
              >
                <span className="relative flex items-center">
                  <span className="font-semibold uppercase tracking-wider text-xs sm:text-sm">Contact Us</span>
                  <i className="fas fa-envelope ml-2 sm:ml-3 text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
