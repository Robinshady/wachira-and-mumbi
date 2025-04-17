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
  image?: string; // Optional now
  imagePlaceholder?: string; // Optional placeholder flag
}

const attorneys: Attorney[] = [
  {
    id: 1,
    name: "James Wachira",
    position: "Managing Partner",
    practice: "Corporate Law, Mergers & Acquisitions",
    bio: "With over 25 years of experience, James leads complex corporate transactions and has been recognized for excellence in Kenyan corporate law and cross-border transactions.",
    imagePlaceholder: "true"
  },
  {
    id: 2,
    name: "Catherine Mumbi",
    position: "Senior Partner",
    practice: "Litigation, Commercial Disputes",
    bio: "A formidable litigator with an exceptional track record in high-stakes commercial disputes and a recognized expert in Kenyan constitutional law.",
    imagePlaceholder: "true"
  },
  {
    id: 3,
    name: "Daniel Kimathi",
    position: "Partner",
    practice: "Real Estate, Finance",
    bio: "Specializing in complex real estate transactions and financing throughout Kenya, Daniel brings invaluable expertise from his previous role as legal advisor to major property developers.",
    imagePlaceholder: "true"
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
    <section id="team" className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-[var(--gold)] uppercase tracking-wider mb-2">Our Attorneys</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--navy)] playfair mb-6">Meet Our Distinguished Team</h3>
          <p className="text-[var(--charcoal)]">
            Our attorneys combine exceptional academic credentials with practical experience, delivering sophisticated legal counsel for our clients' most complex matters.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {attorneys.map((attorney) => (
            <motion.div 
              key={attorney.id}
              className="group relative rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
            >
              <div className="overflow-hidden">
                {/* Always show placeholder since we're replacing all images */}
                <div className="w-full h-96 bg-gradient-to-r from-[var(--navy-lighter)] to-[var(--navy)] flex flex-col items-center justify-center text-white p-6 transition-all duration-500 group-hover:bg-gradient-to-br">
                  <div className="w-24 h-24 rounded-full bg-[var(--gold)]/20 flex items-center justify-center mb-4">
                    <i className="fas fa-user-tie text-[var(--gold)] text-3xl"></i>
                  </div>
                  <h5 className="text-lg font-semibold segoe-semibold mb-2">Coming Soon</h5>
                  <p className="text-sm text-center text-white/70 max-w-xs">Professional headshot will be available shortly</p>
                  <div className="mt-6 animate-pulse">
                    <i className="fas fa-camera text-[var(--gold)] text-xl"></i>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h4 className="text-xl font-bold text-[var(--navy)] playfair">{attorney.name}</h4>
                <p className="text-[var(--gold)] text-sm mb-3">{attorney.position}</p>
                <p className="text-[var(--charcoal)] text-sm">{attorney.practice}</p>
              </div>
              <div className="absolute inset-0 bg-[var(--navy)] bg-opacity-90 opacity-0 transition-opacity duration-300 p-8 flex flex-col justify-end group-hover:opacity-100">
                <h4 className="text-xl font-bold text-white playfair">{attorney.name}</h4>
                <p className="text-[var(--gold)] text-sm mb-4">{attorney.position}</p>
                <p className="text-gray-200 text-sm mb-6">{attorney.bio}</p>
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
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button 
            onClick={() => scrollToSection("contact")}
            className="inline-block border border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white px-8 py-4 rounded text-sm font-semibold uppercase tracking-wider transition-all duration-300"
          >
            View All Attorneys
          </button>
        </motion.div>
      </div>
    </section>
  );
}
