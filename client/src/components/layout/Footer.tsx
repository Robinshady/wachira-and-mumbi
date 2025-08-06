import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/newsletter", { email });
      
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "There was an error subscribing to the newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <footer className="bg-[var(--charcoal)] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-white text-2xl font-bold flex items-start mb-6">
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="playfair font-semibold mr-1 text-2xl">Wachira</span>
                  <span className="text-[var(--gold)] mx-1 text-xl">&</span>
                  <span className="playfair font-semibold ml-1 text-2xl">Mumbi</span>
                </div>
                <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-light">Advocates</span>
              </div>
            </a>
            <div className="space-y-2 mt-4">
              <div className="flex items-center">
                <i className="fas fa-phone-alt text-[var(--gold)] mr-3 w-5 text-center"></i>
                <p className="text-gray-300 text-sm">0741 647 831</p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-[var(--gold)] mr-3 w-5 text-center"></i>
                <p className="text-gray-300 text-sm">info@wachiramumbilaw.com</p>
              </div>
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-[var(--gold)] mr-3 w-5 text-center mt-1"></i>
                <p className="text-gray-300 text-sm">ACK Garden House, Floor 2, Wing C.,<br/>1st Ngong Avenue - Off Ngong Road,<br/>Community Upperhill.</p>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[var(--gold)] text-white flex items-center justify-center transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[var(--gold)] text-white flex items-center justify-center transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[var(--gold)] text-white flex items-center justify-center transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-[var(--gold)] font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection("home")} className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors duration-300">Home</button></li>
                <li><button onClick={() => scrollToSection("about")} className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors duration-300">About</button></li>
                <li><button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors duration-300">Services</button></li>
                <li><button onClick={() => scrollToSection("team")} className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors duration-300">Our Team</button></li>
                <li><button onClick={() => scrollToSection("results")} className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors duration-300">Results</button></li>
                <li><button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors duration-300">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-[var(--gold)] font-semibold mb-4">Practice Areas</h5>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors duration-300">Corporate & Commercial</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors duration-300">Civil Litigation</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors duration-300">Conveyancing & Property</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors duration-300">Employment Law</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors duration-300">Constitutional Law</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors duration-300">Family Law & Succession</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h5 className="text-[var(--gold)] font-semibold mb-4">Newsletter</h5>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to our newsletter for legal insights and firm updates.
              </p>
              <form className="flex" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 bg-gray-700 text-white text-sm rounded-l outline-none flex-grow" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <button 
                  type="submit" 
                  className="bg-[var(--gold)] text-[var(--navy)] px-4 py-2 rounded-r text-sm font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:bg-opacity-50"
                  disabled={isSubmitting}
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            Wachira and Mumbi Advocates© 2024. All Rights Reserved
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
