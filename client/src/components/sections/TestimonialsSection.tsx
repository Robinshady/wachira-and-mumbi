import { motion, useScroll, useTransform, useInView, useSpring, MotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Updated with Kenyan-specific clients and cases
const testimonials = [
  {
    id: 1,
    text: "Wachira & Mumbi's corporate team provided exceptional counsel during our company's expansion across East Africa. Their strategic approach and attention to detail were invaluable in navigating complex regulatory issues across multiple jurisdictions.",
    name: "Dr. James Mwangi",
    title: "CEO, Equity Group Holdings",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    rating: 5,
    featured: true
  },
  {
    id: 2,
    text: "When faced with complex litigation that threatened our business, we turned to Wachira & Mumbi. Their sophisticated strategy and tireless advocacy resulted in a complete victory that protected our operations and reputation in the Kenyan market.",
    name: "Mrs. Sarah Ochieng",
    title: "Managing Director, TransAfrica Logistics",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    rating: 5,
    featured: false
  },
  {
    id: 3,
    text: "The property law expertise at Wachira & Mumbi was instrumental in resolving our long-standing land dispute in Nairobi County. Their knowledge of Kenyan land law and relationships with government agencies made all the difference.",
    name: "Mr. Charles Mutura",
    title: "Director, Savannah Real Estate",
    image: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    rating: 5,
    featured: false
  },
  {
    id: 4,
    text: "Their exceptional understanding of constitutional law secured a landmark ruling that protected our rights. The team's dedication to justice and excellence is unmatched in Kenya's legal landscape.",
    name: "Prof. Njeri Kamau",
    title: "Executive Director, East African Rights Coalition",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    rating: 5,
    featured: true
  },
  {
    id: 5,
    text: "Wachira & Mumbi provided superb counsel on our complex international trade agreements. Their expertise helped us navigate the intricate legal frameworks involved in cross-border commerce within the East African Community.",
    name: "Mr. Timothy Oduor",
    title: "Operations Director, Kenyan Exports Limited",
    image: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    rating: 5,
    featured: false
  }
];

// Stats for achievements counter
const achievements = [
  { label: "Client Satisfaction", value: 97, suffix: "%", icon: "smile" },
  { label: "Cases Won", value: 850, suffix: "+", icon: "trophy" },
  { label: "Years in Practice", value: 25, suffix: "+", icon: "calendar-alt" },
  { label: "Clients Served", value: 2700, suffix: "+", icon: "handshake" },
];

// Function to create animated counter
function Counter({ 
  from = 0, 
  to, 
  duration = 2,
  suffix = "",
  isInView = false
}: { 
  from?: number; 
  to: number; 
  duration?: number;
  suffix?: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * (to - from) + from);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [from, to, duration, isInView]);
  
  return <>{count}{suffix}</>;
}

// Testimony Card Component with Rating Stars
const TestimonialCard = ({ 
  testimonial, 
  index, 
  active, 
  setActive 
}: { 
  testimonial: typeof testimonials[0]; 
  index: number; 
  active: number;
  setActive: (index: number) => void;
}) => {
  const isActive = active === index;
  
  return (
    <motion.div 
      className={`testimonial-card glass-card ${isActive ? 'ring-1 ring-[var(--gold)]/30' : ''} overflow-hidden`}
      initial={{ opacity: 0.5, y: 30 }}
      animate={{ 
        opacity: isActive ? 1 : 0.7, 
        y: 0,
        scale: isActive ? 1 : 0.97,
      }}
      transition={{ duration: 0.5 }}
      onClick={() => setActive(index)}
    >
      <div className="relative p-8 pb-6">
        {/* Gold quote mark at top */}
        <div className="absolute top-4 right-4 text-[var(--gold)]/20">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
          </svg>
        </div>
        
        {/* Rating stars */}
        <div className="flex mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        {/* Testimonial content */}
        <p className="text-white/90 font-light leading-relaxed mb-8 italic relative">
          {testimonial.text}
        </p>
        
        <div className="flex items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-[var(--gold)]/20">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <h5 className="font-semibold text-white">{testimonial.name}</h5>
            <p className="text-[var(--gold)] text-sm">{testimonial.title}</p>
          </div>
        </div>
        
        {/* Featured badge */}
        {testimonial.featured && (
          <div className="absolute top-0 left-0 bg-[var(--gold)] text-[var(--navy)] text-xs font-semibold py-1 px-3 transform rotate-0 translate-y-0 -translate-x-6 transform-gpu">
            Featured
          </div>
        )}
        
        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent"></div>
      </div>
    </motion.div>
  );
};

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Auto-advance testimonials
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isInView]);

  // Move to next testimonial
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  // Move to previous testimonial
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-[var(--navy)] to-[var(--navy-light)]"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgNTBMMzAgMTBNNDAgMzBMMjAgMzAiIHN0cm9rZT0iI2RkYzY5MSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMDUiPjwvcGF0aD4KPC9zdmc+')] opacity-40"></div>
        
        {/* Floating circles */}
        <motion.div 
          className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full border border-[var(--gold)]/10 opacity-50"
          style={{ y: y1 }}
        ></motion.div>
        <motion.div 
          className="absolute top-[60%] left-[10%] w-40 h-40 rounded-full border border-[var(--gold)]/5 opacity-30"
          style={{ y: y2 }}
        ></motion.div>
        
        {/* Slowly rotating square */}
        <motion.div 
          className="absolute bottom-[20%] right-[20%] w-80 h-80 rounded-3xl border border-[var(--gold)]/5 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, ease: "linear", repeat: Infinity }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-5">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-px bg-[var(--gold)]"></div>
              <span className="text-sm font-medium text-[var(--gold)] uppercase tracking-widest">Client Success</span>
              <div className="w-12 h-px bg-[var(--gold)]"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white playfair leading-tight mb-6">
            <span className="text-gradient-premium animated-float inline-block">Exceptional</span> Client <br />
            Experience
          </h2>
          
          <motion.p 
            className="text-white/80 text-lg md:text-xl font-light"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our clients' success stories reflect our commitment to excellence and our relentless pursuit
            of the best possible outcomes across Kenya's legal landscape.
          </motion.p>
          
          {/* Decorative separator */}
          <div className="mt-12 relative h-[1px] max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[var(--navy)] border border-[var(--gold)]/30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[var(--gold)]"></div>
            </div>
          </div>
        </motion.div>
        
        {/* Achievement counters */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-5 xl:gap-8 mb-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-lg py-6 px-4 text-center group hover:bg-white/5 transition-colors duration-300"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-[var(--gold)]/20 transition-colors duration-300">
                <i className={`fas fa-${item.icon} text-[var(--gold)]`}></i>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                <Counter 
                  from={0} 
                  to={item.value} 
                  duration={2.5}
                  suffix={item.suffix} 
                  isInView={isInView}
                />
              </h3>
              <p className="text-white/60 text-sm">{item.label}</p>
              
              {/* Hover animation line */}
              <div className="w-0 h-0.5 bg-[var(--gold)]/30 mx-auto mt-4 group-hover:w-16 transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Testimonials carousel */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-10">
            <motion.h3 
              className="text-2xl font-bold text-white playfair"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              Client Testimonials
            </motion.h3>
            
            <motion.div 
              className="flex space-x-2"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Navigation buttons */}
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-[var(--gold)]/30 transition-colors duration-300 focus:outline-none"
              >
                <i className="fas fa-chevron-left text-white/70 text-xs"></i>
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-[var(--gold)]/30 transition-colors duration-300 focus:outline-none"
              >
                <i className="fas fa-chevron-right text-white/70 text-xs"></i>
              </button>
            </motion.div>
          </div>
          
          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
                active={activeTestimonial}
                setActive={setActiveTestimonial}
              />
            ))}
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? 'bg-[var(--gold)] w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* CTA section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl text-white mb-6 font-light">
            Join our satisfied clients and experience the <br className="hidden md:block" />
            <span className="text-[var(--gold)] font-semibold">Wachira & Mumbi Advocates</span> difference.
          </h3>
          <a 
            href="#contact" 
            className="group inline-flex items-center px-8 py-4 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[var(--navy)] rounded-md text-sm font-semibold uppercase tracking-wider transition-all duration-300 relative overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
            <span className="relative flex items-center">
              <span className="mr-2">Arrange a Consultation</span>
              <i className="fas fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
            </span>
          </a>
        </motion.div>
      </div>
      
      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent"></div>
    </section>
  );
}
