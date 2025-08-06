import { motion } from "framer-motion";
import { Link } from "wouter";
import { FaArrowLeft } from "react-icons/fa";
import ScrollArrow from "../components/ui/scroll-arrow";

// Define attorney interface
interface Attorney {
  id: number;
  name: string;
  position: string;
  practice: string;
  bio: string;
  image: string;
  education?: string[];
  accomplishments?: string[];
  languages?: string[];
}

// Create expanded attorney data
const attorneys: Attorney[] = [
  // Attorneys in correct order with accurate information
  {
    id: 1,
    name: "DR. KIMANI WACHIRA",
    position: "MANAGING PARTNER",
    practice: "",
    bio: "Dr. Kimani Wachira leads the firm with extensive experience in corporate and commercial law, bringing expertise and strategic guidance to complex legal matters.",
    image: "/images/james-wachira.jpg",
    education: [
      "LLB (HONS.) MOI",
      "PG DIP (LAW) KSL",
      "LL.M (UoN)",
      "PhD- Humanities (UTCSI)"
    ],
    languages: ["English", "Kiswahili"]
  },
  {
    id: 2,
    name: "MUMBI NTHIGA",
    position: "PRINCIPAL PARTNER",
    practice: "",
    bio: "A distinguished litigator with exceptional expertise in complex commercial and civil disputes, providing strategic counsel and representation to clients.",
    image: "/images/catherine-mumbi.jpg",
    education: [
      "LLB (HONS.) CATHOLIC UNIVERSITY OF EAST AFRICA",
      "PG DIP (LAW) KSL"
    ],
    languages: ["English", "Kiswahili"]
  },
  {
    id: 3,
    name: "BRIAN NTHEI",
    position: "SENIOR ASSOCIATE ADVOCATE",
    practice: "",
    bio: "Specializing in real estate transactions and financial matters, Brian brings valuable expertise and dedication to every client case.",
    image: "/images/brian-nthei.jpg",
    education: [
      "LLB (HONS.) CATHOLIC UNIVERSITY OF EAST AFRICA",
      "PG DIP (LAW) KSL"
    ],
    languages: ["English", "Kiswahili"]
  },
  {
    id: 4,
    name: "NDUNG'U KAHURA",
    position: "ASSOCIATE ADVOCATE",
    practice: "",
    bio: "Ndung'u handles complex legal matters with precision and dedication, focusing on achieving the best possible outcomes for clients.",
    image: "/images/team/male-attorney-8.jpg",
    education: [
      "LLB (HONS.) CATHOLIC UNIVERSITY OF EAST AFRICA",
      "PG DIP (LAW) KSL"
    ],
    languages: ["English", "Kiswahili"]
  },
  {
    id: 5,
    name: "ERIC SIMIYU",
    position: "ASSOCIATE ADVOCATE",
    practice: "",
    bio: "Eric's meticulous approach to legal research and strategy helps clients navigate complex legal challenges effectively.",
    image: "/images/team/male-attorney-2.jpg",
    education: [
      "LLB (HONS.) UNIVERSITY OF NAIROBI",
      "PG DIP (LAW) KSL"
    ],
    languages: ["English", "Kiswahili"]
  },
  {
    id: 6,
    name: "MIKE OYUGI",
    position: "LAWYER",
    practice: "",
    bio: "Mike provides thorough legal analysis and strategic guidance on various legal matters, ensuring clients receive comprehensive legal support.",
    image: "/images/team/male-attorney-5.jpg",
    education: [
      "LLB (HONS.) UNIVERSITY OF NAIROBI"
    ],
    languages: ["English", "Kiswahili"]
  },
  {
    id: 7,
    name: "SALMON ACHOLA",
    position: "LITIGATION & CONVEYANCING CLERK",
    practice: "",
    bio: "Salmon provides essential support for litigation cases and conveyancing matters, ensuring smooth procedural processes for clients.",
    image: "/images/team/male-attorney-1.jpg",
    languages: ["English", "Kiswahili"]
  },
  {
    id: 8,
    name: "STELLAMARIS NZOMO",
    position: "OFFICE ADMINISTRATOR",
    practice: "",
    bio: "Stellamaris ensures the efficient operation of the firm, coordinating office functions and serving as a key point of contact for clients.",
    image: "/images/team/female-attorney-1.jpg",
    languages: ["English", "Kiswahili"]
  },
  {
    id: 9,
    name: "JAMES MBUGUA",
    position: "ACCOUNTANT",
    practice: "",
    bio: "James manages the firm's financial operations, ensuring accurate accounting practices and financial reporting.",
    image: "/images/team/male-attorney-4.jpg",
    languages: ["English", "Kiswahili"]
  },
  {
    id: 10,
    name: "KENNEDY NGIGE",
    position: "ACCOUNTANT",
    practice: "",
    bio: "Kennedy provides essential financial expertise, maintaining the firm's compliance with financial regulations and reporting requirements.",
    image: "/images/team/male-attorney-6.jpg",
    languages: ["English", "Kiswahili"]
  },
  {
    id: 11,
    name: "JOYCASTER MUEMA",
    position: "LEGAL RESEARCHER",
    practice: "",
    bio: "Joycaster conducts thorough legal research, supporting the firm's attorneys with comprehensive analysis and case preparation.",
    image: "/images/team/female-attorney-3.jpg",
    languages: ["English", "Kiswahili"]
  },
  {
    id: 12,
    name: "MWANGI MUTHIGA",
    position: "FULL STACK ENGINEER",
    practice: "",
    bio: "Mwangi develops and maintains the firm's technological infrastructure, creating innovative solutions for both internal operations and client services.",
    image: "/images/team/male-attorney-9.jpg",
    education: [
      "BS-CS (Bachelor of Science in Computer Science), International College of Technology, Kanazawa (ICT) Japan",
      "BS-Mechatronics and Robotics Engineering Technology, School of Engineering, Tohoku University, Miyagi, JAPAN"
    ],
    languages: ["English", "Kiswahili", "Japanese"]
  },
  {
    id: 13,
    name: "AMOS RONO",
    position: "DRIVER",
    practice: "",
    bio: "Amos ensures reliable transportation services for the firm, facilitating smooth logistical operations and timely appointments.",
    image: "/images/team/male-attorney-7.jpg",
    languages: ["English", "Kiswahili"]
  },
  {
    id: 14,
    name: "PAMELLA KAMISI",
    position: "OFFICE ASSISTANT",
    practice: "",
    bio: "Pamella provides essential support for the firm's daily operations, contributing to the efficient functioning of the office environment.",
    image: "/images/team/female-attorney-2.jpg",
    languages: ["English", "Kiswahili"]
  }
];



export default function Team() {
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
          
          <ScrollArrow color="white" targetId="practice-areas" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block mb-6 px-5 py-2 border-l-4 border-[var(--gold)] bg-[rgba(255,255,255,0.1)]">
              <span className="text-[var(--gold)] uppercase text-sm tracking-wider font-semibold">Excellence in Legal Practice</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold playfair mb-8 leading-tight">Our Distinguished Legal Team</h1>
            <p className="text-xl md:text-2xl text-[var(--gold)] font-medium mb-10 max-w-3xl leading-relaxed">
              With a collective experience spanning decades across diverse practice areas, our team of legal professionals brings unparalleled expertise and commitment to every case.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <div className="bg-[rgba(255,255,255,0.1)] px-8 py-4 rounded-lg backdrop-blur-sm border border-[rgba(255,255,255,0.1)]">
                <span className="text-[var(--gold)] text-4xl md:text-5xl font-bold">{attorneys.length}</span>
                <span className="ml-3 text-white text-xl">Attorneys</span>
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] px-8 py-4 rounded-lg backdrop-blur-sm border border-[rgba(255,255,255,0.1)]">
                <span className="text-[var(--gold)] text-4xl md:text-5xl font-bold">6</span>
                <span className="ml-3 text-white text-xl">Practice Areas</span>
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] px-8 py-4 rounded-lg backdrop-blur-sm border border-[rgba(255,255,255,0.1)]">
                <span className="text-[var(--gold)] text-4xl md:text-5xl font-bold">25+</span>
                <span className="ml-3 text-white text-xl">Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Main Content */}
      <div className="bg-[var(--navy-lighter)] py-24">


        {/* Team Section */}
        <div className="container mx-auto px-4 md:px-6 mt-32 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-white py-12 px-6 md:px-12 rounded-xl shadow-xl border border-gray-100 relative mb-20"
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[var(--navy)] text-white font-bold text-xl px-8 py-5 rounded-lg shadow-lg">
              LEGAL PROFESSIONALS
            </div>
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--navy)] playfair mb-8">Meet Our Distinguished Team</h2>
              <div className="h-1.5 w-32 bg-[#d4af37] mx-auto mb-10 rounded-full shadow-sm"></div>
              <p className="text-[var(--gold)] text-lg md:text-xl font-medium leading-relaxed">
                Our diverse team combines academic excellence with practical expertise to provide sophisticated legal counsel for your most complex matters throughout Kenya and East Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {attorneys.map((attorney, index) => (
                <motion.div
                  key={attorney.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl relative transition-all duration-300 border border-gray-100"
                >
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-[#d4af37] text-white text-xs font-semibold py-2 px-4 rounded-full shadow-lg">
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="font-bold tracking-wider">{attorney.position}</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="overflow-hidden h-[500px]">
                    <div className="w-full h-full relative bg-[#f2f2f2]">
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          src={attorney.image}
                          alt={attorney.name}
                          className="group-hover:scale-105 transition-transform duration-700"
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
                  </div>
                  
                  <div className="p-8 border-t-2 border-[var(--gold)] relative bg-white">
                    <h4 className="text-2xl font-bold text-[var(--navy)] playfair mt-3">{attorney.name}</h4>
                    <div className="h-0.5 w-20 bg-[#d4af37] my-4 rounded-full shadow-sm"></div>
                    
                    <div className="mt-4 space-y-5">
                      <details className="group cursor-pointer">
                        <summary className="flex justify-between items-center text-sm font-medium text-[var(--navy)] hover:text-[var(--gold)] transition-colors py-2 border-b border-gray-100">
                          <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {attorney.position === "MANAGING PARTNER" || attorney.position === "PRINCIPAL PARTNER" || attorney.position === "SENIOR ASSOCIATE ADVOCATE" || attorney.position === "ASSOCIATE ADVOCATE" || attorney.position === "LAWYER" ? "Attorney Profile" : 
                              attorney.position === "LITIGATION & CONVEYANCING CLERK" ? "Clerk Profile" : 
                              attorney.position === "OFFICE ADMINISTRATOR" ? "Administrator Profile" :  
                              attorney.position === "ACCOUNTANT" ? "Accountant Profile" :
                              attorney.position === "LEGAL RESEARCHER" ? "Researcher Profile" :
                              attorney.position === "FULL STACK ENGINEER" ? "Engineer Profile" :
                              attorney.position === "DRIVER" ? "Driver Profile" :
                              attorney.position === "OFFICE ASSISTANT" ? "Staff Profile" : "Team Member Profile"
                            }
                          </span>
                          <span className="transform group-open:rotate-180 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className="pt-4 text-sm space-y-4 px-2">
                          {attorney.education && (
                            <div className="bg-[var(--navy)] p-4 rounded-lg">
                              <h5 className="font-semibold text-white flex items-center mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                                Education
                              </h5>
                              <ul className="mt-1 space-y-2">
                                {attorney.education.map((edu, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="text-[var(--gold)] mr-2 text-lg">•</span>
                                    <span className="text-white">{edu}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {attorney.languages && (
                            <div className="bg-[var(--navy)] p-4 rounded-lg">
                              <h5 className="font-semibold text-white flex items-center mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                </svg>
                                Languages
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {attorney.languages.map((lang, i) => (
                                  <span key={i} className="inline-block bg-white px-3 py-1 rounded-full text-[var(--navy)] text-xs">{lang}</span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </details>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[var(--navy)] py-20 relative mt-16">
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
              Ready to Work With Our Distinguished Legal Team?
            </h2>
            
            <p className="text-gray-200 max-w-2xl mx-auto mb-10 text-lg">
              Our team of experienced attorneys is prepared to assist you with any legal challenge or opportunity. 
              Contact us today to schedule a consultation and discover the difference of working with Wachira & Mumbi Advocates.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => window.location.href = "/#contact"}
                className="inline-block bg-[#d4af37] text-white hover:bg-white hover:text-[var(--navy)] px-10 py-4 rounded text-sm font-bold uppercase tracking-wider transition-colors duration-300 shadow-lg"
              >
                Contact Us Today
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