import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema } from "@shared/schema";
import type { ContactFormData } from "@shared/schema";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      privacy: false
    }
  });
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Success!",
        description: "Thank you for your inquiry. We will contact you shortly.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[var(--light-gray)]" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs md:text-sm font-semibold text-[var(--gold)] uppercase tracking-wider mb-2">Get In Touch</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--navy)] playfair mb-4 md:mb-6">Schedule a Consultation</h3>
          <p className="text-[var(--charcoal)] text-sm md:text-base">
            Our team is ready to provide the sophisticated legal counsel your matter deserves. Contact us to discuss how we can help achieve your objectives.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form 
              className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-lg" 
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-[var(--charcoal)] mb-1 sm:mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all duration-300 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Your first name" 
                    {...register("firstName")}
                  />
                  {errors.firstName && <p className="mt-1 text-red-500 text-xs">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-[var(--charcoal)] mb-1 sm:mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all duration-300 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Your last name" 
                    {...register("lastName")}
                  />
                  {errors.lastName && <p className="mt-1 text-red-500 text-xs">{errors.lastName.message}</p>}
                </div>
              </div>
              
              <div className="mb-4 sm:mb-6">
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-[var(--charcoal)] mb-1 sm:mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your email address" 
                  {...register("email")}
                />
                {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>}
              </div>
              
              <div className="mb-4 sm:mb-6">
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-[var(--charcoal)] mb-1 sm:mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all duration-300 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your phone number" 
                  {...register("phone")}
                />
                {errors.phone && <p className="mt-1 text-red-500 text-xs">{errors.phone.message}</p>}
              </div>
              
              <div className="mb-4 sm:mb-6">
                <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-[var(--charcoal)] mb-1 sm:mb-2">Service of Interest</label>
                <select 
                  id="service" 
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all duration-300 ${errors.service ? 'border-red-500' : 'border-gray-300'}`}
                  {...register("service")}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="corporate">Corporate Law</option>
                  <option value="litigation">Litigation</option>
                  <option value="realestate">Real Estate</option>
                  <option value="estateplanning">Estate Planning</option>
                  <option value="tax">Tax Law</option>
                  <option value="ip">Intellectual Property</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && <p className="mt-1 text-red-500 text-xs">{errors.service.message}</p>}
              </div>
              
              <div className="mb-4 sm:mb-6">
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-[var(--charcoal)] mb-1 sm:mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all duration-300 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Please briefly describe your legal matter"
                  {...register("message")}
                ></textarea>
                {errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>}
              </div>
              
              <div className="mb-4 sm:mb-6">
                <label className="inline-flex items-start sm:items-center">
                  <input 
                    type="checkbox" 
                    className={`form-checkbox rounded focus:ring-[var(--gold)] h-4 w-4 sm:h-5 sm:w-5 mt-0.5 sm:mt-0 ${errors.privacy ? 'border-red-500' : ''}`}
                    {...register("privacy")}
                  />
                  <span className="ml-2 text-xs sm:text-sm text-[var(--charcoal)]">
                    I agree to the <a href="#" className="text-[var(--gold)] hover:underline">privacy policy</a> and consent to being contacted regarding my inquiry.
                  </span>
                </label>
                {errors.privacy && <p className="mt-1 text-red-500 text-xs">{errors.privacy.message}</p>}
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[var(--gold)] hover:bg-opacity-90 text-[var(--navy)] px-6 sm:px-8 py-3 sm:py-4 rounded text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-md disabled:bg-opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="h-full flex flex-col">
              <div className="bg-[var(--navy)] p-5 sm:p-6 md:p-8 rounded-lg shadow-lg mb-4 sm:mb-6 flex-grow">
                <h4 className="text-lg md:text-xl font-bold text-white playfair mb-4 md:mb-6">Contact Information</h4>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 md:mr-4 text-[var(--gold)]">
                      <i className="fas fa-map-marker-alt text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-sm md:text-base mb-0.5 md:mb-1">Main Office</h5>
                      <p className="text-xs md:text-sm text-gray-300">ACK Garden House, Floor 2, Wing C.,<br />1st Ngong Avenue - Off Ngong Road,<br />Community Upperhill.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 md:mr-4 text-[var(--gold)]">
                      <i className="fas fa-phone-alt text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-sm md:text-base mb-0.5 md:mb-1">Phone</h5>
                      <p className="text-xs md:text-sm text-gray-300">0741 647 831</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 md:mr-4 text-[var(--gold)]">
                      <i className="fas fa-envelope text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-sm md:text-base mb-0.5 md:mb-1">Email</h5>
                      <p className="text-xs md:text-sm text-gray-300">info@wachiramumbilaw.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 md:mr-4 text-[var(--gold)]">
                      <i className="fas fa-clock text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-sm md:text-base mb-0.5 md:mb-1">Hours</h5>
                      <p className="text-xs md:text-sm text-gray-300">Monday - Friday: 8:00 AM - 5:00 PM<br />Weekend: By appointment only</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 md:mt-8">
                  <h5 className="font-bold text-white text-sm md:text-base mb-3 md:mb-4">Connect With Us</h5>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-[var(--gold)] transition-colors duration-300">
                      <i className="fab fa-linkedin-in text-lg md:text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-[var(--gold)] transition-colors duration-300">
                      <i className="fab fa-twitter text-lg md:text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-[var(--gold)] transition-colors duration-300">
                      <i className="fab fa-facebook-f text-lg md:text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div 
                className="rounded-lg overflow-hidden shadow-lg h-56 sm:h-64 lg:h-80 relative" 
                style={{
                  backgroundImage: `url('/images/optimized/team-uniform-high-quality.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--navy)]/90 to-transparent p-4 z-10">
                  <h5 className="text-base sm:text-lg font-semibold text-white">Our Dedicated Team</h5>
                  <p className="text-xs sm:text-sm text-[var(--gold)]">Excellence in Legal Practice</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
