import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: 1,
    title: "Corporate & Commercial",
    description: "Sophisticated legal guidance for Kenyan and international businesses on company formations, mergers, acquisitions, compliance with Companies Act, and complex commercial contracts.",
    icon: "landmark",
    highlight: "Expertise in East African Community regulations"
  },
  {
    id: 2,
    title: "Civil Litigation",
    description: "Strategic representation before Kenya's High Court, Court of Appeal, and Supreme Court in complex civil disputes, with a distinguished record of landmark judgments.",
    icon: "gavel",
    highlight: "Distinguished advocates of the High Court"
  },
  {
    id: 3,
    title: "Conveyancing & Property",
    description: "Comprehensive counsel on property acquisitions, disposals, leases, and development projects across Kenya, with expertise in land registration and title verification.",
    icon: "building",
    highlight: "Specialists in Kenyan land law"
  },
  {
    id: 4,
    title: "Family Law & Succession",
    description: "Empathetic yet strategic guidance on divorce, child custody, matrimonial property disputes, and succession planning under both statutory and customary Kenyan law.",
    icon: "users",
    highlight: "Culturally sensitive approach"
  },
  {
    id: 5,
    title: "Employment & Labor",
    description: "Expert counsel on Kenyan employment legislation, workplace policies, collective bargaining agreements, and representation before the Employment and Labour Relations Court.",
    icon: "briefcase",
    highlight: "Advisors to major Kenyan employers"
  },
  {
    id: 6,
    title: "Constitutional & Administrative",
    description: "Representation in constitutional petitions, judicial review applications, and administrative proceedings, protecting fundamental rights and challenging government actions.",
    icon: "balance-scale",
    highlight: "Defenders of constitutional rights"
  }
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-24 bg-[var(--light-gray)]" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div className="mb-8 md:mb-0">
              <h2 className="text-sm font-semibold text-[var(--gold)] uppercase tracking-wider mb-3">Areas of Practice</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] playfair leading-tight relative">
                <span className="relative z-10">
                  Sophisticated
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--gold)]/10 -z-10"></span>
                </span> <br className="hidden md:block" />
                Legal Services
              </h3>
            </div>
            
            <div className="w-full md:w-1/2">
              <p className="text-[var(--charcoal)] text-lg leading-relaxed">
                Our multidisciplinary team delivers expert legal solutions across diverse practice areas relevant to Kenya's legal landscape, combining deep local knowledge with international standards of excellence.
              </p>
            </div>
          </div>
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className="bg-white rounded-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
              variants={itemVariants}
            >
              <div className="relative h-28 bg-gradient-to-r from-[var(--navy)] to-[#162c4e] group-hover:from-[#0a1a2f] group-hover:to-[#1d345b] transition-all duration-300 flex items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--gold)] opacity-70"></div>
                <i className={`fas fa-${service.icon} text-[var(--gold)] text-4xl group-hover:scale-110 transition-transform duration-300`}></i>
                <div className="absolute right-4 bottom-4 bg-[var(--gold)]/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-[var(--gold)] text-xs font-bold">{service.id}</span>
                </div>
              </div>
              
              <div className="p-7 relative">
                {/* Title and Badge */}
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold text-[var(--navy)] playfair">{service.title}</h4>
                  <span className="text-xs px-2 py-1 bg-[var(--gold)]/10 text-[var(--gold)] rounded-full">{service.highlight}</span>
                </div>
                
                {/* Description */}
                <p className="text-[var(--charcoal)] text-sm mb-6 leading-relaxed">{service.description}</p>
                
                {/* Action button */}
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => scrollToSection("contact")}
                    className="group/btn relative text-[var(--navy)] hover:text-[var(--gold)] transition-colors duration-300 text-sm font-semibold flex items-center"
                  >
                    <span>Consult With Us</span>
                    <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"></i>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--gold)] group-hover/btn:w-full transition-all duration-300"></span>
                  </button>
                  
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-[var(--gold)] transition-colors duration-300 cursor-pointer">
                    <i className="fas fa-plus text-xs text-gray-400 hover:text-[var(--gold)] transition-colors duration-300"></i>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
