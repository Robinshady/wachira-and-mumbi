import { motion } from "framer-motion";
import { Link } from "wouter";
import { FaArrowLeft } from "react-icons/fa";

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
  // The original 3 attorneys
  {
    id: 1,
    name: "James Wachira",
    position: "Managing Partner",
    practice: "Corporate Law, Mergers & Acquisitions",
    bio: "With over 25 years of experience, James leads complex corporate transactions and has been recognized for excellence in Kenyan corporate law and cross-border transactions.",
    image: "/images/james-wachira.jpg",
    education: [
      "LL.B, University of Nairobi",
      "Masters in Commercial Law, London School of Economics"
    ],
    accomplishments: [
      "Led legal team in Kenya's largest corporate acquisition (2018)",
      "Named Top 50 Lawyers in Africa by African Legal Review (2020)",
      "Author, 'Corporate Governance in East African Markets'"
    ],
    languages: ["English", "Kiswahili", "French"]
  },
  {
    id: 2,
    name: "Catherine Mumbi",
    position: "Senior Partner",
    practice: "Litigation, Commercial Disputes",
    bio: "A formidable litigator with an exceptional track record in high-stakes commercial disputes and a recognized expert in Kenyan constitutional law.",
    image: "/images/catherine-mumbi.jpg",
    education: [
      "LL.B (Hons), University of Nairobi",
      "Master of Laws, Harvard Law School"
    ],
    accomplishments: [
      "Successfully represented clients in Kenya's Supreme Court",
      "Chairperson, Kenyan Women in Commercial Law Association",
      "Former Judicial Service Commission Member"
    ],
    languages: ["English", "Kiswahili"]
  },
  {
    id: 3,
    name: "Brian Nthei",
    position: "Partner",
    practice: "Real Estate, Finance",
    bio: "Specializing in complex real estate transactions and financing throughout Kenya, Brian brings invaluable expertise from his previous role as legal advisor to major property developers.",
    image: "/images/brian-nthei.jpg",
    education: [
      "LL.B, Strathmore University",
      "Diploma in Property Law, University of Cape Town"
    ],
    accomplishments: [
      "Advised on multi-billion shilling real estate developments in Nairobi",
      "Member, Kenya Real Estate Lawyers Association",
      "Consultant to National Land Commission"
    ],
    languages: ["English", "Kiswahili"]
  },
  // New attorneys
  {
    id: 4,
    name: "Vivian Njeri",
    position: "Partner",
    practice: "Employment Law, Labor Relations",
    bio: "Vivian has built a reputation as one of Kenya's leading employment law specialists, representing both employers and employees in complex workplace litigation and negotiations.",
    image: "/images/team/female-attorney-1.jpg",
    education: [
      "LL.B, University of Nairobi",
      "Postgraduate Diploma in Employment Law, Kenya School of Law"
    ],
    accomplishments: [
      "Successfully resolved over 200 employment disputes through mediation",
      "Developed employment compliance programs for multinational corporations",
      "Guest lecturer on Employment Law at Strathmore University"
    ],
    languages: ["English", "Kiswahili"]
  },
  {
    id: 5,
    name: "George Maina",
    position: "Partner",
    practice: "Corporate Law, Banking & Finance",
    bio: "George specializes in advising banks, financial institutions and corporations on complex transactions, restructurings, and regulatory compliance matters across East Africa.",
    image: "/images/team/male-attorney-1.jpg",
    education: [
      "LL.B, University of Nairobi",
      "MBA, Strathmore Business School"
    ],
    accomplishments: [
      "Led legal team in first Kenyan green bond issuance",
      "Advised on regulatory compliance for major international bank entry into Kenya",
      "Published author on Banking Law reforms in East Africa"
    ],
    languages: ["English", "Kiswahili"]
  },
  {
    id: 6,
    name: "David Kimani",
    position: "Senior Associate",
    practice: "Commercial Litigation, Arbitration",
    bio: "David handles complex commercial disputes both in court and through alternative dispute resolution mechanisms, with particular expertise in construction and infrastructure disputes.",
    image: "/images/team/male-attorney-2.jpg",
    education: [
      "LL.B, Moi University",
      "Diploma in Arbitration, Chartered Institute of Arbitrators"
    ],
    accomplishments: [
      "Successfully represented clients in high-value construction arbitrations",
      "Member of the Chartered Institute of Arbitrators",
      "Certified Mediator, Mediation Training Institute"
    ],
    languages: ["English", "Kiswahili"]
  },
  {
    id: 7,
    name: "Samuel Ochieng",
    position: "Senior Associate",
    practice: "Intellectual Property, Technology",
    bio: "Samuel advises clients on all aspects of intellectual property protection, technology transactions, and data privacy compliance across Kenya and East Africa.",
    image: "/images/team/male-attorney-3.jpg",
    education: [
      "LL.B, University of Nairobi",
      "Master of Laws in IP, Queen Mary University of London"
    ],
    accomplishments: [
      "Registered Patent and Trademark Attorney",
      "Developed IP protection strategies for leading Kenyan startups",
      "Advisor to Kenya Copyright Board"
    ],
    languages: ["English", "Kiswahili", "German"]
  },
  {
    id: 8,
    name: "Paul Otieno",
    position: "Partner",
    practice: "Tax Advisory, Corporate Restructuring",
    bio: "Paul provides strategic tax planning advice to businesses operating across multiple jurisdictions, helping clients navigate complex tax laws while ensuring full compliance.",
    image: "/images/team/male-attorney-4.jpg",
    education: [
      "LL.B, University of Nairobi",
      "Master of Tax Law, University of Pretoria",
      "Certified Public Accountant (CPA-K)"
    ],
    accomplishments: [
      "Former Senior Tax Consultant at Big Four accounting firm",
      "Advised on tax structuring for major cross-border acquisitions",
      "Regular contributor to Tax Journal of East Africa"
    ],
    languages: ["English", "Kiswahili", "Luo"]
  },
  {
    id: 9,
    name: "Grace Akinyi",
    position: "Associate",
    practice: "Family Law, Estate Planning",
    bio: "Grace handles sensitive family law matters including divorce, child custody, and succession planning with a compassionate yet strategic approach that protects clients' interests.",
    image: "/images/team/female-attorney-2.jpg",
    education: [
      "LL.B, Kenyatta University",
      "Diploma in Family Mediation, Kenya School of Law"
    ],
    accomplishments: [
      "Successfully mediated high-net-worth family disputes",
      "Developed innovative child-focused custody arrangements",
      "Volunteer at Family Law Clinic providing pro bono legal assistance"
    ],
    languages: ["English", "Kiswahili", "Luo"]
  },
  {
    id: 10,
    name: "Daniel Njoroge",
    position: "Associate",
    practice: "Environmental Law, Natural Resources",
    bio: "Daniel focuses on environmental compliance, natural resource management, and climate change policy, assisting clients with regulatory approvals and sustainability strategies.",
    image: "/images/team/male-attorney-5.jpg",
    education: [
      "LL.B, University of Nairobi",
      "MSc in Environmental Management, University of London"
    ],
    accomplishments: [
      "Advised on environmental compliance for major infrastructure projects",
      "Published research on climate change legislation in East Africa",
      "Former legal consultant to National Environment Management Authority"
    ],
    languages: ["English", "Kiswahili"]
  },
  {
    id: 11,
    name: "Richard Mwangi",
    position: "Associate",
    practice: "Energy & Infrastructure",
    bio: "Richard specializes in project development and financing in the energy sector, with extensive experience in renewable energy projects throughout Kenya and East Africa.",
    image: "/images/team/male-attorney-6.jpg",
    education: [
      "LL.B, Strathmore University",
      "MSc Energy Economics, University of Dundee"
    ],
    accomplishments: [
      "Advised on financing for major solar power installations in Kenya",
      "Structured joint ventures for oil and gas exploration",
      "Speaker at Africa Energy Forum"
    ],
    languages: ["English", "Kiswahili", "French"]
  },
  {
    id: 12,
    name: "Peter Kamau",
    position: "Associate",
    practice: "Competition Law, Regulatory Compliance",
    bio: "Peter helps clients navigate competition regulations and investigations, with particular focus on merger control, abuse of dominance, and anti-competitive agreements.",
    image: "/images/team/male-attorney-7.jpg",
    education: [
      "LL.B, University of Nairobi",
      "Postgraduate Diploma in Competition Law, King's College London"
    ],
    accomplishments: [
      "Successfully represented clients before Competition Authority of Kenya",
      "Advised on merger clearances for major corporate transactions",
      "Former legal researcher for Competition Authority"
    ],
    languages: ["English", "Kiswahili"]
  },
  {
    id: 13,
    name: "Elijah Kipchirchir",
    position: "Associate",
    practice: "Criminal Defense, White Collar Crime",
    bio: "Elijah represents individuals and corporations in criminal investigations and prosecutions, with a focus on financial crimes, fraud, and regulatory enforcement actions.",
    image: "/images/team/male-attorney-8.jpg",
    education: [
      "LL.B, Moi University",
      "Diploma in Criminal Litigation, Kenya School of Law"
    ],
    accomplishments: [
      "Successfully defended high-profile corruption cases",
      "Former prosecutor with Director of Public Prosecutions",
      "Guest lecturer on White Collar Crime at University of Nairobi"
    ],
    languages: ["English", "Kiswahili", "Kalenjin"]
  },
  {
    id: 14,
    name: "Moses Kimathi",
    position: "Senior Counsel",
    practice: "Constitutional Law, Human Rights",
    bio: "With decades of experience in constitutional litigation, Moses has appeared numerous times before Kenya's Supreme Court and has shaped landmark decisions affecting human rights.",
    image: "/images/team/male-attorney-9.jpg",
    education: [
      "LL.B, University of Nairobi",
      "Master of Human Rights Law, University of Cape Town"
    ],
    accomplishments: [
      "Argued several landmark constitutional cases before Supreme Court",
      "Former Chair of Kenya Law Society Constitutional Committee",
      "Author of 'Constitutional Reform in Kenya: A Historical Perspective'"
    ],
    languages: ["English", "Kiswahili"]
  },
  {
    id: 15,
    name: "Elizabeth Wanjiru",
    position: "Associate",
    practice: "Insurance & Risk Management",
    bio: "Elizabeth advises insurers, reinsurers and corporate policyholders on complex coverage issues, claims management and regulatory compliance in the insurance sector.",
    image: "/images/team/female-attorney-3.jpg",
    education: [
      "LL.B, University of Nairobi",
      "Diploma in Insurance Law, Chartered Insurance Institute"
    ],
    accomplishments: [
      "Handled complex insurance claims in manufacturing and healthcare sectors",
      "Developed insurance compliance frameworks for multinational corporations",
      "Member of Association of Insurance Practitioners of Kenya"
    ],
    languages: ["English", "Kiswahili"]
  },
];

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
    name: "Employment & Labor",
    expertise: ["HR Compliance", "Employment Contracts", "Labor Disputes", "Collective Bargaining"]
  },
  {
    id: 6, 
    name: "Tax Advisory",
    expertise: ["Corporate Tax Planning", "International Tax", "Tax Dispute Resolution", "VAT & Customs"]
  }
];

export default function Team() {
  return (
    <div className="bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-[var(--navy)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/scales-of-justice.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)] via-transparent to-transparent opacity-60"></div>
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
          <Link href="/" className="inline-flex items-center text-[var(--gold)] hover:text-white mb-6 transition-colors">
            <FaArrowLeft className="mr-2" />
            <span>Back to Home</span>
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block mb-4 px-4 py-1 border-l-4 border-[var(--gold)] bg-[rgba(255,255,255,0.1)]">
              <span className="text-[var(--gold)] uppercase text-sm tracking-wider font-semibold">Legal Excellence</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold playfair mb-6">Our Distinguished Legal Team</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl">
              With a collective experience spanning decades across diverse practice areas, our team of legal professionals brings unparalleled expertise and commitment to every case.
            </p>
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-auto mb-4 md:mb-0 md:mr-8 bg-[rgba(255,255,255,0.1)] px-6 py-3 rounded-lg">
                <span className="text-[var(--gold)] text-3xl md:text-4xl font-bold">{attorneys.length}</span>
                <span className="ml-2 text-white text-lg">Attorneys</span>
              </div>
              <div className="w-full md:w-auto mb-4 md:mb-0 md:mr-8 bg-[rgba(255,255,255,0.1)] px-6 py-3 rounded-lg">
                <span className="text-[var(--gold)] text-3xl md:text-4xl font-bold">{practiceAreas.length}</span>
                <span className="ml-2 text-white text-lg">Practice Areas</span>
              </div>
              <div className="w-full md:w-auto bg-[rgba(255,255,255,0.1)] px-6 py-3 rounded-lg">
                <span className="text-[var(--gold)] text-3xl md:text-4xl font-bold">25+</span>
                <span className="ml-2 text-white text-lg">Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Practice Areas Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs md:text-sm font-semibold text-[var(--gold)] uppercase tracking-wider mb-2">Areas of Expertise</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--navy)] playfair mb-6">Our Practice Areas</h3>
            <p className="text-[var(--charcoal)] text-sm md:text-base">
              We offer comprehensive legal services across key practice areas, tailored to meet the diverse needs of individuals, businesses, and organizations throughout Kenya and East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {practiceAreas.map((area) => (
              <motion.div 
                key={area.id}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[var(--gold)] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-5">
                  <div className="h-10 w-10 rounded-full bg-[var(--navy-lighter)] flex items-center justify-center mr-4">
                    <span className="text-[var(--navy)] text-lg font-bold">{area.id}</span>
                  </div>
                  <h4 className="text-xl font-bold text-[var(--navy)] playfair">{area.name}</h4>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-[var(--gold)] to-transparent mb-5"></div>
                <ul className="space-y-2">
                  {area.expertise.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[var(--gold)] mr-3 text-lg">•</span>
                      <span className="text-[var(--charcoal)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs md:text-sm font-semibold text-[var(--gold)] uppercase tracking-wider mb-2">Legal Professionals</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--navy)] playfair mb-6">Meet Our Full Team</h3>
            <p className="text-[var(--charcoal)] text-sm md:text-base">
              Our diverse team combines academic excellence with practical expertise to provide sophisticated legal counsel for your most complex matters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {attorneys.map((attorney, index) => (
              <motion.div
                key={attorney.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl relative transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden z-10">
                  <div className="bg-[var(--gold)] text-white text-xs font-semibold py-1 text-center transform rotate-45 translate-y-7 translate-x-5 shadow-sm w-28">
                    ID: {attorney.id.toString().padStart(2, '0')}
                  </div>
                </div>
                
                <div className="overflow-hidden h-80">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 border-t-2 border-[var(--gold)]">
                  <h4 className="text-xl font-bold text-[var(--navy)] playfair">{attorney.name}</h4>
                  <div className="h-px w-12 bg-[var(--gold)] my-3"></div>
                  <p className="text-[var(--gold)] text-sm font-medium mb-2">{attorney.position}</p>
                  <p className="text-[var(--charcoal)] text-sm mb-4">{attorney.practice}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <details className="group cursor-pointer">
                      <summary className="flex justify-between items-center text-sm font-medium text-[var(--navy)] hover:text-[var(--gold)] transition-colors">
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Attorney Profile
                        </span>
                        <span className="transform group-open:rotate-180 transition-transform duration-200">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="pt-4 text-sm space-y-3">
                        {attorney.education && (
                          <div>
                            <h5 className="font-semibold text-[var(--navy)] flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                              </svg>
                              Education
                            </h5>
                            <ul className="mt-1 list-disc pl-5">
                              {attorney.education.map((edu, i) => (
                                <li key={i} className="text-[var(--charcoal)]">{edu}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {attorney.languages && (
                          <div>
                            <h5 className="font-semibold text-[var(--navy)] flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                              </svg>
                              Languages
                            </h5>
                            <p className="text-[var(--charcoal)]">{attorney.languages.join(', ')}</p>
                          </div>
                        )}
                      </div>
                    </details>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-[var(--navy)] py-20 mt-16 relative"
      >
        <div className="absolute inset-0 bg-[url('/images/scales-of-justice.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--navy)] opacity-70"></div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm p-8 md:p-12 rounded-lg border border-[rgba(255,255,255,0.1)] max-w-4xl mx-auto">
            <div className="inline-block bg-[var(--gold)] text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">Let's Work Together</div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white playfair mb-6">Ready to Work With Our Distinguished Legal Team?</h2>
            
            <p className="text-gray-200 max-w-2xl mx-auto mb-10 text-lg">
              Our team of experienced attorneys is prepared to assist you with any legal challenge or opportunity. 
              Contact us today to schedule a consultation and discover the difference of working with Wachira & Mumbi Advocates.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => window.location.href = "/#contact"}
                className="inline-block bg-[var(--gold)] text-white hover:bg-white hover:text-[var(--navy)] px-8 py-4 rounded text-sm font-semibold uppercase tracking-wider transition-colors duration-300 shadow-md"
              >
                Contact Us Today
              </button>
              
              <button 
                onClick={() => window.location.href = "/"}
                className="inline-block bg-transparent text-white border border-white px-8 py-4 rounded text-sm font-semibold uppercase tracking-wider transition-colors duration-300 hover:bg-white hover:text-[var(--navy)]"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}