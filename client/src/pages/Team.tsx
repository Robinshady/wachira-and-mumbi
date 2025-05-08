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
            <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl leading-relaxed">
              With a collective experience spanning decades across diverse practice areas, our team of legal professionals brings unparalleled expertise and commitment to every case.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <div className="bg-[rgba(255,255,255,0.1)] px-8 py-4 rounded-lg backdrop-blur-sm border border-[rgba(255,255,255,0.1)]">
                <span className="text-[var(--gold)] text-4xl md:text-5xl font-bold">{attorneys.length}</span>
                <span className="ml-3 text-white text-xl">Attorneys</span>
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] px-8 py-4 rounded-lg backdrop-blur-sm border border-[rgba(255,255,255,0.1)]">
                <span className="text-[var(--gold)] text-4xl md:text-5xl font-bold">{practiceAreas.length}</span>
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
        {/* Practice Areas Section */}
        <motion.section 
          id="practice-areas"
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--navy)] playfair mb-8">Our Practice Areas</h2>
            <div className="h-1.5 w-32 bg-[#d4af37] mx-auto mb-10 rounded-full shadow-sm"></div>
            <p className="text-[var(--charcoal)] text-lg md:text-xl leading-relaxed">
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
                        <span className="text-[var(--charcoal)] text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

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
              <p className="text-[var(--charcoal)] text-lg md:text-xl leading-relaxed">
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
                    <div className="absolute -top-5 left-8 bg-[var(--navy)] text-white px-6 py-2 rounded-md shadow-lg text-sm font-bold">
                      {attorney.practice}
                    </div>
                    
                    <h4 className="text-2xl font-bold text-[var(--navy)] playfair mt-3">{attorney.name}</h4>
                    <div className="h-0.5 w-20 bg-[#d4af37] my-4 rounded-full shadow-sm"></div>
                    
                    <div className="mt-4 space-y-5">
                      <details className="group cursor-pointer">
                        <summary className="flex justify-between items-center text-sm font-medium text-[var(--navy)] hover:text-[var(--gold)] transition-colors py-2 border-b border-gray-100">
                          <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Attorney Profile
                          </span>
                          <span className="transform group-open:rotate-180 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className="pt-4 text-sm space-y-4 px-2">
                          {attorney.education && (
                            <div className="bg-[var(--navy-lighter)] p-4 rounded-lg">
                              <h5 className="font-semibold text-[var(--navy)] flex items-center mb-3">
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
                                    <span className="text-[var(--charcoal)]">{edu}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {attorney.languages && (
                            <div className="bg-[var(--navy-lighter)] p-4 rounded-lg">
                              <h5 className="font-semibold text-[var(--navy)] flex items-center mb-3">
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