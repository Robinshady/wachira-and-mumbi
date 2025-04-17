import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useState, useRef } from "react";

const services = [
  {
    id: 1,
    title: "Corporate & Commercial",
    description: "Sophisticated legal guidance for Kenyan and international businesses on company formations, mergers, acquisitions, compliance with Companies Act, and complex commercial contracts.",
    icon: "landmark",
    highlight: "Expertise in East African Community regulations",
    stats: [
      { label: "Completed Transactions", value: "320+" },
      { label: "Client Satisfaction", value: "98%" }
    ]
  },
  {
    id: 2,
    title: "Civil Litigation",
    description: "Strategic representation before Kenya's High Court, Court of Appeal, and Supreme Court in complex civil disputes, with a distinguished record of landmark judgments.",
    icon: "gavel",
    highlight: "Distinguished advocates of the High Court",
    stats: [
      { label: "Cases Won", value: "250+" },
      { label: "Success Rate", value: "92%" }
    ]
  },
  {
    id: 3,
    title: "Conveyancing & Property",
    description: "Comprehensive counsel on property acquisitions, disposals, leases, and development projects across Kenya, with expertise in land registration and title verification.",
    icon: "building",
    highlight: "Specialists in Kenyan land law",
    stats: [
      { label: "Properties Handled", value: "570+" },
      { label: "Resolution Rate", value: "99%" }
    ]
  },
  {
    id: 4,
    title: "Family Law & Succession",
    description: "Empathetic yet strategic guidance on divorce, child custody, matrimonial property disputes, and succession planning under both statutory and customary Kenyan law.",
    icon: "users",
    highlight: "Culturally sensitive approach",
    stats: [
      { label: "Families Assisted", value: "400+" },
      { label: "Amicable Settlements", value: "85%" }
    ]
  },
  {
    id: 5,
    title: "Employment & Labor",
    description: "Expert counsel on Kenyan employment legislation, workplace policies, collective bargaining agreements, and representation before the Employment and Labour Relations Court.",
    icon: "briefcase",
    highlight: "Advisors to major Kenyan employers",
    stats: [
      { label: "Disputes Resolved", value: "630+" },
      { label: "Workplaces Improved", value: "95%" }
    ]
  },
  {
    id: 6,
    title: "Constitutional & Administrative",
    description: "Representation in constitutional petitions, judicial review applications, and administrative proceedings, protecting fundamental rights and challenging government actions.",
    icon: "balance-scale",
    highlight: "Defenders of constitutional rights",
    stats: [
      { label: "Rights Protected", value: "180+" },
      { label: "Court Victories", value: "91%" }
    ]
  }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeService, setActiveService] = useState<number | null>(null);
  
  // Parallax scroll effect for decorative elements
  const { scrollYProgress } = useScroll({ 
    target: sectionRef,
    offset: ["start end", "end start"] 
  });
  const decorY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const decorX = useTransform(scrollYProgress, [0, 1], ['-2%', '2%']);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 }
    }
  };

  return (
    <section 
      id="services" 
      className="relative py-32 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden" 
      ref={sectionRef}
    >
      {/* Decorative elements - floating patterns */}
      <motion.div 
        className="absolute top-0 right-0 w-full h-full pointer-events-none z-0 opacity-30"
        style={{ y: decorY }}
      >
        <div className="absolute top-20 right-10 w-64 h-64 border border-[var(--gold)]/10 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 border border-[var(--gold)]/5 rounded-full"></div>
        <motion.div 
          className="absolute top-1/2 left-1/4 w-40 h-40 rounded-lg border border-[var(--gold)]/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </motion.div>
      
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgNTBMMzAgMTBNNDAgMzBMMjAgMzAiIHN0cm9rZT0iI2RkYzY5MSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMDUiPjwvcGF0aD4KPC9zdmc+')] opacity-40 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mx-auto mb-5">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-10 h-px bg-[var(--gold)]"></div>
              <span className="text-sm font-medium text-[var(--gold)] uppercase tracking-widest">Areas of Practice</span>
              <div className="w-10 h-px bg-[var(--gold)]"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--navy)] playfair leading-tight mb-8">
            Sophisticated<br />
            <span className="relative inline-block">
              Legal Expertise
              <motion.span 
                className="absolute -bottom-3 left-0 w-full h-1 bg-[var(--gold)]"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.span>
            </span>
          </h2>
          
          <motion.p 
            className="text-[var(--charcoal)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our multidisciplinary team delivers expert legal solutions across diverse practice areas 
            relevant to Kenya's legal landscape, combining deep local knowledge with international 
            standards of excellence.
          </motion.p>
          
          {/* Decorative separator */}
          <div className="mt-16 relative h-[1px] max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[var(--gold)]"></div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Services Cards - Now with premium hover effects */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl"
              variants={itemVariants}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Service top bar with icon */}
              <div className="relative h-24 bg-gradient-to-r from-[var(--navy)] to-[#162c4e] transition-all duration-500 flex items-center justify-center overflow-hidden group-hover:h-32">
                {/* Animated accent line */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1 bg-[var(--gold)]"
                  animate={{ 
                    opacity: activeService === service.id ? [0.5, 1, 0.5] : 0.5
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: activeService === service.id ? Infinity : 0 
                  }}
                ></motion.div>
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAyMEwyMCAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41Ij48L3BhdGg+Cjwvc3ZnPg==')] opacity-40"></div>
                </div>
                
                {/* Service Icon with Animation */}
                <motion.div 
                  className="relative z-10 w-16 h-16 rounded-full bg-[var(--navy)] border border-[var(--gold)]/20 flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <i className={`fas fa-${service.icon} text-[var(--gold)] text-2xl`}></i>
                </motion.div>
                
                {/* Service ID */}
                <div className="absolute right-4 top-4 bg-[var(--gold)]/10 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="text-[var(--gold)] text-xs font-bold">{service.id}</span>
                </div>
                
                {/* Animated radial gradient on hover */}
                {activeService === service.id && (
                  <motion.div 
                    className="absolute inset-0 bg-radial-pulse"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                  />
                )}
              </div>
              
              {/* Content area */}
              <div className="p-8 relative">
                {/* Premium Service Badge */}
                <div className="absolute -top-3 left-8 px-3 py-1 bg-white shadow-sm border border-gray-100 rounded-full">
                  <span className="text-xs text-[var(--gold)] font-medium">{service.highlight}</span>
                </div>
                
                {/* Title with subtle underline animation */}
                <div className="mb-4 pt-2">
                  <h3 className="text-xl font-bold text-[var(--navy)] playfair relative inline-block">
                    {service.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--gold)]/50 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-[var(--charcoal)] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Stats display - revealed on hover */}
                <motion.div 
                  className="grid grid-cols-2 gap-3 mb-6"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: activeService === service.id ? 1 : 0,
                    height: activeService === service.id ? 'auto' : 0 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.stats.map((stat, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <p className="text-lg font-bold text-[var(--gold)]">{stat.value}</p>
                      <p className="text-xs text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </motion.div>
                
                {/* Action buttons */}
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => scrollToSection("contact")}
                    className="group/btn relative bg-[var(--navy)] text-white hover:bg-[var(--navy)]/90 px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-2 overflow-hidden"
                  >
                    <span className="relative z-10">Consult With Us</span>
                    <span className="relative z-10">
                      <i className="fas fa-arrow-right transition-transform duration-300 group-hover/btn:translate-x-1"></i>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[var(--gold)]/0 via-[var(--gold)]/30 to-[var(--gold)]/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 transform -skew-x-30 -translate-x-full group-hover/btn:translate-x-full"></span>
                  </button>
                  
                  <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[var(--gold)] hover:bg-[var(--gold)]/5 transition-colors duration-300 cursor-pointer">
                    <i className="fas fa-plus text-xs text-gray-400 hover:text-[var(--gold)] transition-colors duration-300"></i>
                  </div>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom Call to Action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-[var(--navy)] font-medium mb-6">
            Need assistance with a legal matter not listed above?
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="group relative inline-flex items-center justify-center px-8 py-3 bg-[var(--gold)]/90 hover:bg-[var(--gold)] text-[var(--navy)] rounded-md overflow-hidden transition-all duration-300 shadow-md"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-black/10"></span>
            <span className="relative flex items-center">
              <span className="mr-2">Contact Our Team</span>
              <i className="fas fa-chevron-right text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
            </span>
          </button>
        </motion.div>
      </div>
      
      {/* Subtle diagonal decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent transform -rotate-2"></div>
    </section>
  );
}
