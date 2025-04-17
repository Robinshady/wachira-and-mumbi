import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: 1,
    title: "Corporate Law",
    description: "Comprehensive counsel for businesses of all sizes, from formation and governance to complex transactions and regulatory compliance.",
    icon: "landmark"
  },
  {
    id: 2,
    title: "Litigation",
    description: "Strategic representation in complex disputes across state and federal courts, with a track record of landmark victories.",
    icon: "gavel"
  },
  {
    id: 3,
    title: "Real Estate",
    description: "Full-service legal support for acquisitions, development, leasing, financing, and complex real estate transactions.",
    icon: "building"
  },
  {
    id: 4,
    title: "Estate Planning",
    description: "Sophisticated wealth preservation strategies, trusts, and succession planning for high-net-worth individuals and families.",
    icon: "hands-helping"
  },
  {
    id: 5,
    title: "Tax Law",
    description: "Strategic tax planning, compliance, and controversy resolution for businesses and high-net-worth individuals.",
    icon: "chart-line"
  },
  {
    id: 6,
    title: "Intellectual Property",
    description: "Comprehensive protection and enforcement of patents, trademarks, copyrights, and trade secrets in competitive markets.",
    icon: "balance-scale"
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
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-[var(--gold)] uppercase tracking-wider mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--navy)] playfair mb-6">Comprehensive Legal Services</h3>
          <p className="text-[var(--charcoal)]">
            Our multidisciplinary team delivers sophisticated legal solutions across a wide range of practice areas, combining deep industry knowledge with technical excellence.
          </p>
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
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              variants={itemVariants}
            >
              <div className="h-24 bg-[var(--navy)] flex items-center justify-center">
                <i className={`fas fa-${service.icon} text-[var(--gold)] text-4xl`}></i>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[var(--navy)] mb-3 playfair">{service.title}</h4>
                <p className="text-[var(--charcoal)] text-sm mb-4">{service.description}</p>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-[var(--gold)] hover:text-[var(--navy)] transition-colors duration-300 text-sm font-semibold flex items-center"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
