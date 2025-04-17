import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types for messages
interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

// Default greeting and suggestions
const GREETING_MESSAGE = "Hello, I'm your legal assistant. How can I help you today?";
const SUGGESTIONS = [
  "What services do you offer?",
  "How can I schedule a consultation?",
  "Tell me about your expertise in corporate law",
  "What are your office hours?",
];

export default function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showInitialPopup, setShowInitialPopup] = useState(true);
  const messageEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Show the chatbot after a small delay when the user lands on the page
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // Add the initial greeting message when chat opens
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: '1',
          text: GREETING_MESSAGE,
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length]);
  
  useEffect(() => {
    // Scroll to bottom of chat when new messages appear
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate AI processing with typing indicator
    setTimeout(() => {
      // Add bot response based on user query
      // In a real app, this would call an API with the OpenAI key
      let botResponse = "Thank you for your query. One of our legal experts will contact you shortly to provide personalized assistance.";
      
      // Simple pattern matching for demo purposes
      if (text.toLowerCase().includes('service')) {
        botResponse = "We offer a wide range of legal services including corporate law, intellectual property, litigation, real estate law, and more. You can find details in our Services section.";
      } else if (text.toLowerCase().includes('consultation') || text.toLowerCase().includes('schedule') || text.toLowerCase().includes('appointment')) {
        botResponse = "You can schedule a consultation by filling out our contact form or clicking the 'Schedule Consultation' button at the top of the page. We'll get back to you promptly.";
      } else if (text.toLowerCase().includes('hour')) {
        botResponse = "Our office hours are Monday to Friday, 8:00 AM to 6:00 PM. We also offer virtual consultations outside these hours by appointment.";
      } else if (text.toLowerCase().includes('corporate') || text.toLowerCase().includes('expertise')) {
        botResponse = "Our firm has extensive expertise in corporate law, with specialized knowledge in mergers and acquisitions, corporate governance, and regulatory compliance specific to East African markets.";
      }
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setShowInitialPopup(false);
    }, 1500);
  };
  
  const handleClose = () => {
    setIsOpen(false);
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };
  
  return (
    <>
      {/* Initial popup that appears when user lands on the page */}
      <AnimatePresence>
        {showInitialPopup && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed right-6 bottom-24 z-50 max-w-xs"
          >
            <div className="bg-white rounded-lg shadow-2xl border border-[var(--gold)]/10 overflow-hidden">
              <div className="bg-gradient-to-r from-[var(--navy)] to-[var(--navy-light)] p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[var(--gold)]/10 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-robot text-[var(--gold)]"></i>
                  </div>
                  <h3 className="text-white text-sm segoe-semibold">Legal Assistant</h3>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-sm segoe-regular text-gray-700 mb-3">
                  Hello! I'm your virtual legal assistant. Would you like help with anything?
                </p>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setIsOpen(true)} 
                    className="flex-1 bg-[var(--navy)] text-white text-sm segoe-regular py-2 rounded hover:bg-[var(--navy-light)] transition-colors"
                  >
                    Chat Now
                  </button>
                  <button 
                    onClick={() => setShowInitialPopup(false)}
                    className="flex-1 border border-gray-300 text-gray-600 text-sm segoe-regular py-2 rounded hover:bg-gray-50 transition-colors"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Chat button that toggles the chat interface */}
      <div className="fixed right-6 bottom-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[var(--gold)] shadow-lg flex items-center justify-center hover:bg-[var(--gold-light)] transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment'} text-[var(--navy)]`}></i>
        </motion.button>
      </div>
      
      {/* Main chat interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed right-6 bottom-24 z-50 w-full max-w-md"
          >
            <div className="bg-white rounded-lg shadow-2xl border border-[var(--gold)]/10 overflow-hidden h-[500px] flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-[var(--navy)] to-[var(--navy-light)] p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[var(--gold)]/10 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-balance-scale text-[var(--gold)]"></i>
                  </div>
                  <div>
                    <h3 className="text-white segoe-semibold">Legal Assistant</h3>
                    <p className="text-white/70 text-xs segoe-light">Wachira & Mumbi Advocates</p>
                  </div>
                </div>
                <button 
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <i className="fas fa-times text-white text-sm"></i>
                </button>
              </div>
              
              {/* Chat messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === 'user'
                            ? 'bg-[var(--navy)] text-white rounded-tr-none'
                            : 'bg-white shadow-sm border border-gray-200 rounded-tl-none'
                        }`}
                      >
                        <p className={`text-sm ${message.sender === 'user' ? 'segoe-regular' : 'segoe-regular'}`}>
                          {message.text}
                        </p>
                        <p className={`text-[10px] ${message.sender === 'user' ? 'text-white/60' : 'text-gray-500'} mt-1 text-right`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messageEndRef} />
                </div>
              </div>
              
              {/* Suggestions */}
              {messages.length < 3 && (
                <div className="p-3 bg-gray-50 border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-2 segoe-light">Suggested questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-xs segoe-regular bg-white border border-gray-200 rounded-full px-3 py-1 hover:border-[var(--gold)]/30 hover:bg-[var(--gold)]/5 transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Input area */}
              <div className="p-3 bg-white border-t border-gray-200">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center"
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your question here..."
                    className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 text-sm segoe-regular focus:outline-none focus:border-[var(--gold)]/40 focus:ring-1 focus:ring-[var(--gold)]/20"
                  />
                  <button
                    type="submit"
                    className="bg-[var(--gold)] text-[var(--navy)] rounded-r-md px-4 py-2 hover:bg-[var(--gold-light)] transition-colors"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}