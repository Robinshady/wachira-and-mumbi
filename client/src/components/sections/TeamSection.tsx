import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Define the attorney interface
interface Attorney {
  id: number;
  name: string;
  position: string;
  practice: string;
  bio: string;
  image: string;
}

const attorneys: Attorney[] = [
  {
    id: 1,
    name: "James Wachira",
    position: "Managing Partner",
    practice: "Corporate Law, Mergers & Acquisitions",
    bio: "With over 25 years of experience, James leads complex corporate transactions and has been recognized for excellence in Kenyan corporate law and cross-border transactions.",
    image: "/images/james-wachira.jpg"
  },
  {
    id: 2,
    name: "Catherine Mumbi",
    position: "Senior Partner",
    practice: "Litigation, Commercial Disputes",
    bio: "A formidable litigator with an exceptional track record in high-stakes commercial disputes and a recognized expert in Kenyan constitutional law.",
    image: "/images/catherine-mumbi.jpg"
  },
  {
    id: 3,
    name: "Brian Nthei",
    position: "Partner",
    practice: "Real Estate, Finance",
    bio: "Specializing in complex real estate transactions and financing throughout Kenya, Brian brings invaluable expertise from his previous role as legal advisor to major property developers.",
    image: "/images/brian-nthei.jpg"
  }
];

export default function TeamSection() {
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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="team" className="py-16 md:py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs md:text-sm font-semibold text-[var(--gold)] uppercase tracking-wider mb-2">Our Attorneys</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--navy)] playfair mb-4 md:mb-6">Meet Our Distinguished Team</h3>
          <p className="text-[var(--charcoal)] text-sm md:text-base">
            Our attorneys combine exceptional academic credentials with practical experience, delivering sophisticated legal counsel for our clients' most complex matters.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {attorneys.map((attorney) => (
            <motion.div 
              key={attorney.id}
              className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="overflow-hidden">
                <div className="w-full bg-white flex items-center justify-center" style={{ height: "550px" }}>
                  <img 
                    src={attorney.image} 
                    alt={attorney.name} 
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      maxWidth: "100%",
                      maxHeight: "100%"
                    }}
                  />
                </div>
              </div>
              <div className="p-4 md:p-6 bg-white">
                <h4 className="text-lg md:text-xl font-bold text-[var(--navy)] playfair">{attorney.name}</h4>
                <p className="text-[var(--gold)] text-xs md:text-sm mb-2 md:mb-3">{attorney.position}</p>
                <p className="text-[var(--charcoal)] text-xs md:text-sm">{attorney.practice}</p>
              </div>
              <div className="absolute inset-0 bg-[var(--navy)] bg-opacity-90 opacity-0 transition-opacity duration-300 p-4 sm:p-6 md:p-8 flex flex-col justify-end group-hover:opacity-100">
                <h4 className="text-lg md:text-xl font-bold text-white playfair">{attorney.name}</h4>
                <p className="text-[var(--gold)] text-xs md:text-sm mb-2 md:mb-4">{attorney.position}</p>
                <p className="text-gray-200 text-xs md:text-sm mb-4 md:mb-6">{attorney.bio}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-white hover:text-[var(--gold)] transition-colors duration-300">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-white hover:text-[var(--gold)] transition-colors duration-300">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button 
            onClick={() => scrollToSection("contact")}
            className="inline-block border border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white px-6 py-3 sm:px-8 sm:py-4 rounded text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300"
          >
            View All Attorneys
          </button>
        </motion.div>
      </div>
    </section>
  );
}
