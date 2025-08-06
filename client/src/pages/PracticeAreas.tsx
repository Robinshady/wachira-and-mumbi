import { motion } from "framer-motion";
import { Link } from "wouter";
import { FaArrowLeft } from "react-icons/fa";

// Practice areas with their expertise descriptions
const practiceAreas = [
  {
    id: 1,
    name: "Corporate & Commercial",
    expertise: ["Mergers & Acquisitions", "Corporate Governance", "Joint Ventures", "Commercial Contracts"]
  },
  {
    id: 2,
    name: "Litigation & Dispute Resolution",
    expertise: ["Commercial Litigation", "Arbitration", "Mediation", "Constitutional Law"]
  },
  {
    id: 3,
    name: "Real Estate & Finance",
    expertise: ["Property Transactions", "Project Finance", "Banking Regulations", "Securities Law"]
  },
  {
    id: 4,
    name: "Intellectual Property",
    expertise: ["Trademark Protection", "Patent Registration", "Copyright Law", "IP Licensing"]
  },
  {
    id: 5,
    name: "Employment & Labour",
    expertise: ["HR Compliance", "Employment Contracts", "Labour Disputes", "Collective Bargaining"]
  },
  {
    id: 6, 
    name: "Tax Advisory",
    expertise: ["Corporate Tax Planning", "International Tax", "Tax Dispute Resolution", "VAT & Customs"]
  }
];

export default function PracticeAreas() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[var(--navy)] text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('/images/scales-of-justice.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)] via-[rgba(30,45,75,0.85)] to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
          <Link href="/" className="inline-flex items-center text-[var(--gold)] hover:text-white mb-8 transition-colors">
            <FaArrowLeft className="mr-2" />
            <span>Back to Home</span>
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block mb-6 px-5 py-2 border-l-4 border-[var(--gold)] bg-[rgba(255,255,255,0.1)]">
              <span className="text-[var(--gold)] uppercase text-sm tracking-wider font-semibold">Legal Expertise</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold playfair mb-8 leading-tight">Our Practice Areas</h1>
            <p className="text-xl md:text-2xl text-[var(--gold)] font-medium mb-10 max-w-3xl leading-relaxed">
              Comprehensive legal solutions across diverse practice areas, tailored to meet the unique needs of our clients throughout Kenya and East Africa.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <div className="bg-[rgba(255,255,255,0.1)] px-8 py-4 rounded-lg backdrop-blur-sm border border-[rgba(255,255,255,0.1)]">
                <span className="text-[var(--gold)] text-4xl md:text-5xl font-bold">{practiceAreas.length}</span>
                <span className="ml-3 text-white text-xl">Practice Areas</span>
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] px-8 py-4 rounded-lg backdrop-blur-sm border border-[rgba(255,255,255,0.1)]">
                <span className="text-[var(--gold)] text-4xl md:text-5xl font-bold">8+</span>
                <span className="ml-3 text-white text-xl">Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Content */}
      <div className="bg-[var(--navy-lighter)] py-24">
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-4 md:px-6"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-5 py-2 bg-[var(--navy)] text-[#d4af37] rounded-full text-xs font-semibold uppercase tracking-wider mb-5 border border-[#d4af37] shadow-md">
              <span className="font-bold">Expertise & Knowledge</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--navy)] playfair mb-8">Legal Services We Offer</h2>
            <div className="h-1.5 w-32 bg-[#d4af37] mx-auto mb-10 rounded-full shadow-sm"></div>
            <p className="text-[var(--gold)] text-lg md:text-xl font-medium leading-relaxed">
              We offer comprehensive legal services across key practice areas, tailored to meet the diverse needs of individuals, businesses, and organizations throughout Kenya and East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {practiceAreas.map((area) => (
              <motion.div 
                key={area.id}
                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300"
              >
                <div className="h-16 bg-[var(--navy)] relative">
                  <div className="absolute -bottom-8 left-8 h-16 w-16 rounded-full bg-[var(--gold)] flex items-center justify-center text-white shadow-lg">
                    <span className="text-2xl font-bold">{area.id}</span>
                  </div>
                </div>
                
                <div className="pt-12 px-8 pb-8">
                  <h4 className="text-2xl font-bold text-[var(--navy)] playfair mb-5">{area.name}</h4>
                  <div className="h-px w-full bg-gradient-to-r from-[var(--gold)] to-transparent mb-6"></div>
                  <ul className="space-y-3">
                    {area.expertise.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-[var(--navy-lighter)] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--navy)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[var(--gold)] text-base font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Call to Action */}
      <div className="bg-[var(--navy)] py-20 relative">
        <div className="absolute inset-0 bg-[url('/images/scales-of-justice.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--navy)] opacity-70"></div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm p-8 md:p-12 rounded-lg border border-[rgba(255,255,255,0.1)] max-w-4xl mx-auto"
          >
            <div className="inline-block px-6 py-2 bg-[#d4af37] text-white rounded-full text-xs font-semibold uppercase tracking-wider mb-6 shadow-lg">
              <span className="font-bold tracking-wider">Let's Work Together</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white playfair mb-6">
              Need Legal Assistance in Any of These Areas?
            </h2>
            
            <p className="text-gray-200 max-w-2xl mx-auto mb-10 text-lg">
              Our experienced legal team is ready to provide expert guidance and representation across all our practice areas. 
              Contact us today to discuss your legal needs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => window.location.href = "/#contact"}
                className="inline-block bg-[#d4af37] text-white hover:bg-white hover:text-[var(--navy)] px-10 py-4 rounded text-sm font-bold uppercase tracking-wider transition-colors duration-300 shadow-lg"
              >
                Schedule Consultation
              </button>
              
              <button 
                onClick={() => window.location.href = "/"}
                className="inline-block bg-transparent text-white border-2 border-white px-10 py-4 rounded text-sm font-bold uppercase tracking-wider transition-colors duration-300 hover:bg-white hover:text-[var(--navy)] shadow-lg"
              >
                Return to Home
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}