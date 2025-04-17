import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const caseResults = [
  {
    id: 1,
    title: "Corporate Acquisition",
    value: "$1.2B Deal",
    description: "Successfully represented a Fortune 500 company in a complex cross-border acquisition, navigating regulatory hurdles across three jurisdictions."
  },
  {
    id: 2,
    title: "Commercial Litigation",
    value: "$85M Victory",
    description: "Secured a landmark verdict for our client in a high-stakes intellectual property dispute after a six-week federal court trial."
  },
  {
    id: 3,
    title: "Real Estate Development",
    value: "$450M Project",
    description: "Structured and negotiated all aspects of a mixed-use development project, including complex financing, tax incentives, and regulatory compliance."
  }
];

const testimonials = [
  {
    id: 1,
    text: "Harrison & Associates provided exceptional counsel during our company's merger. Their strategic approach and attention to detail were invaluable in navigating complex regulatory issues and ensuring a smooth transaction.",
    name: "Robert Thornton",
    title: "CEO, Thornton Industries",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 2,
    text: "When faced with a bet-the-company litigation, we turned to Harrison & Associates. Their litigation team's sophisticated strategy and tireless advocacy resulted in a complete victory that protected our business and reputation.",
    name: "Sarah Jenkins",
    title: "CFO, Innovate Solutions",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  }
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="results" className="py-24 bg-[var(--navy)]" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-[var(--gold)] uppercase tracking-wider mb-2">Client Success</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white playfair mb-6">Exceptional Results & Testimonials</h3>
          <p className="text-gray-300">
            Our clients' success stories and testimonials reflect our commitment to excellence and achieving optimal outcomes.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-12">
              <h4 className="text-xl font-bold text-white playfair mb-6">Recent Case Results</h4>
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {caseResults.map((result) => (
                  <motion.div 
                    key={result.id}
                    className="bg-white/5 p-6 rounded-lg"
                    variants={itemVariants}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h5 className="font-semibold text-[var(--gold)]">{result.title}</h5>
                      <span className="text-xs bg-[var(--gold)] text-[var(--navy)] py-1 px-2 rounded-full">{result.value}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{result.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-bold text-white playfair mb-6">Client Testimonials</h4>
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {testimonials.map((testimonial) => (
                <motion.div 
                  key={testimonial.id}
                  className="testimonial-card bg-white/5 p-8 rounded-lg relative"
                  variants={itemVariants}
                >
                  <p className="text-gray-300 italic mb-6">{testimonial.text}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-[var(--gold)]">{testimonial.name}</h5>
                      <p className="text-gray-400 text-xs">{testimonial.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
