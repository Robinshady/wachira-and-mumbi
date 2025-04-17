import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";

// Case result items
const caseResults = [
  {
    id: 1,
    title: "Historic Company Law Victory",
    result: "91.5M Ksh",
    description: "Landmark judgment in Kenyan commercial law establishing new precedents for corporate liability and director responsibility",
    category: "Corporate",
    tags: ["Commercial Litigation", "Corporate Law", "Precedent Setting"]
  },
  {
    id: 2,
    title: "Constitutional Rights Case",
    result: "Landmark Ruling",
    description: "Successfully defended fundamental rights in a high-profile constitutional petition challenging unconstitutional legislative provisions",
    category: "Constitutional",
    tags: ["Human Rights", "Constitutional Law", "Supreme Court"]
  },
  {
    id: 3,
    title: "Complex Property Dispute",
    result: "2.3B Ksh",
    description: "Resolved a decade-long land ownership dispute involving multiple government entities and private developers in Nairobi",
    category: "Property",
    tags: ["Land Law", "Government", "Dispute Resolution"]
  },
  {
    id: 4,
    title: "High-Profile Divorce Settlement",
    result: "Confidential",
    description: "Negotiated an amicable settlement in a complex matrimonial property dispute involving high-net-worth individuals",
    category: "Family",
    tags: ["Family Law", "Negotiation", "High Net Worth"]
  }
];

export default function ParallaxSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeCase, setActiveCase] = useState<number>(1);
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({ 
    target: sectionRef,
    offset: ["start end", "end start"] 
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  
  const opacitySection = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // Counters for statistics
  const counters = [
    { label: "Years of Excellence", value: "25+", icon: "star" },
    { label: "Cases Won", value: "850+", icon: "trophy" },
    { label: "Satisfied Clients", value: "2,700+", icon: "users" },
    { label: "Legal Professionals", value: "45", icon: "balance-scale" }
  ];

  return (
    <section 
      id="results"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ opacity: opacitySection }}
      >
        {/* Fixed Background */}
        <div className="absolute inset-0 bg-[var(--navy)] bg-opacity-90"></div>
        
        {/* Background Texture - Scrolls Slowly */}
        <motion.div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwTDYwIDYwTTYwIDBMMCAzMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4wMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-50"
          style={{ y: y1 }}
        ></motion.div>
        
        {/* Law-themed subtle pattern elements that scroll at different speeds */}
        <motion.div 
          className="absolute top-[10%] left-[5%] w-96 h-96 opacity-5"
          style={{ y: y2 }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path d="M12,3C10.73,3 9.6,3.8 9.18,5H3V7H4.95L2,14C1.53,16 3,17 5.5,17C8,17 9.56,16 9,14L6.05,7H9.17C9.5,7.85 10.15,8.5 11,8.83V20H2V22H22V20H13V8.82C13.85,8.5 14.5,7.85 14.82,7H17.95L15,14C14.53,16 16,17 18.5,17C21,17 22.56,16 22,14L19.05,7H21V5H14.83C14.4,3.8 13.27,3 12,3M12,5A1,1 0 0,1 13,6A1,1 0 0,1 12,7A1,1 0 0,1 11,6A1,1 0 0,1 12,5M5.5,10.25L7,14H4L5.5,10.25M18.5,10.25L20,14H17L18.5,10.25Z" fill="currentColor" />
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-[20%] right-[10%] w-80 h-80 opacity-5"
          style={{ y: y3 }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path d="M12 4C12 2.9 11.1 2 10 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H10C11.1 22 12 21.1 12 20V4M10 20H4V4H10V20M14 4C14 2.9 14.9 2 16 2H20C21.1 2 22 2.9 22 4V20C22 21.1 21.1 22 20 22H16C14.9 22 14 21.1 14 20V4M20 20H16V4H20V20Z" fill="currentColor" />
          </svg>
        </motion.div>
        
        {/* Light Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[var(--gold)]/5 rounded-full blur-[100px] rotate-12"></div>
          <div className="absolute -bottom-48 right-1/3 w-[300px] h-[300px] bg-[var(--gold)]/5 rounded-full blur-[80px]"></div>
        </div>
      </motion.div>

      {/* Content Container */}
      <div className="container mx-auto px-6 z-10 py-24">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-5">
            <motion.div 
              className="flex items-center justify-center space-x-2"
              initial={{ opacity: 0, width: 0 }}
              animate={isInView ? { opacity: 1, width: "auto" } : { opacity: 0, width: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="w-12 h-px bg-[var(--gold)]"></div>
              <span className="text-sm font-semibold text-[var(--gold)] uppercase tracking-widest">Our Track Record</span>
              <div className="w-12 h-px bg-[var(--gold)]"></div>
            </motion.div>
          </div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 playfair leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Exceptional <span className="text-[var(--gold)]">Results</span><br />
            <span className="text-3xl md:text-4xl lg:text-5xl font-light">Through Legal Excellence</span>
          </motion.h2>
          
          <motion.p 
            className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our commitment to uncompromising excellence has yielded extraordinary outcomes 
            across diverse practice areas, establishing our reputation as Kenya's premier legal advocates.
          </motion.p>
        </motion.div>
        
        {/* Statistics Counters */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 mb-24"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 relative group hover:bg-white/10 transition-colors duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    duration: 0.5
                  }
                }
              }}
            >
              <div className="absolute -top-4 -right-2 w-12 h-12 bg-[var(--navy)] border border-[var(--gold)]/20 rounded-full flex items-center justify-center shadow-lg">
                <i className={`fas fa-${counter.icon} text-[var(--gold)] text-lg`}></i>
              </div>
              
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    delay: 0.1 + index * 0.1,
                    duration: 0.8
                  }
                } : { opacity: 0, scale: 0.5 }}
              >
                {counter.value}
              </motion.h3>
              
              <p className="text-sm text-gray-400">{counter.label}</p>
              
              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[var(--gold)]/50 to-[var(--gold)]/0 group-hover:w-full transition-all duration-700 ease-out"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Interactive Case Results */}
        <motion.div 
          className="bg-[var(--navy)]/50 backdrop-blur-sm rounded-xl border border-white/5 p-8 shadow-2xl overflow-hidden relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {/* Background subtle pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwTDIwIDIwTTIwIDBMMCAxMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-50"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Case Results Navigation */}
            <div className="w-full md:w-1/3">
              <h3 className="text-lg text-white font-semibold mb-6 flex items-center">
                <span className="w-6 h-6 rounded-full bg-[var(--gold)]/10 flex items-center justify-center mr-2">
                  <i className="fas fa-gavel text-[var(--gold)] text-xs"></i>
                </span>
                Notable Case Results
              </h3>
              
              <div className="space-y-3">
                {caseResults.map((caseItem) => (
                  <button
                    key={caseItem.id}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeCase === caseItem.id 
                        ? 'bg-[var(--gold)]/10 border-l-4 border-[var(--gold)]' 
                        : 'bg-white/5 hover:bg-white/10 border-l-4 border-transparent'
                    }`}
                    onClick={() => setActiveCase(caseItem.id)}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className={`font-medium ${
                        activeCase === caseItem.id ? 'text-[var(--gold)]' : 'text-white'
                      }`}>
                        {caseItem.title}
                      </h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        activeCase === caseItem.id 
                          ? 'bg-[var(--gold)]/20 text-[var(--gold)]' 
                          : 'bg-white/10 text-gray-300'
                      }`}>
                        {caseItem.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1 line-clamp-1">
                      {caseItem.description.substring(0, 50)}...
                    </p>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Case Detail View */}
            {caseResults.map((caseItem) => (
              <motion.div 
                key={caseItem.id}
                className={`w-full md:w-2/3 bg-white/5 rounded-lg p-8 relative overflow-hidden ${
                  activeCase === caseItem.id ? 'block' : 'hidden'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="px-3 py-1 bg-[var(--gold)]/10 rounded-full">
                        <span className="text-xs text-[var(--gold)] font-medium">{caseItem.category} Case</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[var(--gold)]/50"></div>
                      <div className="text-xs text-gray-400">Case #{caseItem.id}</div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 playfair">{caseItem.title}</h3>
                  </div>
                  
                  <div className="mt-4 md:mt-0 bg-[var(--navy)] border border-[var(--gold)]/10 rounded-lg px-5 py-3 text-center md:text-right">
                    <div className="text-sm text-gray-400 mb-1">Case Value/Result</div>
                    <div className="text-2xl font-bold text-[var(--gold)]">{caseItem.result}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {caseItem.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {caseItem.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Call-to-action */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="group relative inline-flex items-center overflow-hidden rounded-md bg-[var(--gold)]/90 px-6 py-3 text-[var(--navy)] transition duration-300 ease-out hover:bg-[var(--gold)]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                    <span className="relative flex items-center font-medium">
                      <span className="mr-2">Discuss Your Case</span>
                      <i className="fas fa-arrow-right text-xs"></i>
                    </span>
                  </button>
                  
                  <div className="hidden md:flex items-center space-x-3">
                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors duration-300">
                      <i className="fas fa-share-alt text-xs text-gray-400"></i>
                    </button>
                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors duration-300">
                      <i className="fas fa-download text-xs text-gray-400"></i>
                    </button>
                  </div>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute transform rotate-45 bg-[var(--gold)]/10 text-[var(--gold)] font-medium py-1 text-xs top-5 right-[-35px] w-[170px] text-center">
                    Success Story
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Bottom Call-to-action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p className="text-white font-light text-lg mb-6">
            Let our proven track record work for you
          </p>
          <motion.button 
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--gold)] to-[var(--gold)]/90 text-[var(--navy)] rounded-md text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg overflow-hidden group relative"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            <span className="relative flex items-center">
              <span className="mr-2">Schedule a Consultation</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </span>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Vertical line decorations */}
      <div className="absolute h-full w-px bottom-0 left-[15%] bg-gradient-to-b from-transparent via-[var(--gold)]/10 to-transparent opacity-50"></div>
      <div className="absolute h-full w-px bottom-0 right-[15%] bg-gradient-to-b from-transparent via-[var(--gold)]/10 to-transparent opacity-50"></div>
    </section>
  );
}
