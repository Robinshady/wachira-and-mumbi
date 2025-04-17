import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiRequest } from '@/lib/queryClient';

// Types for messages
interface Message {
  id: string;
  content: string;
  role: 'assistant' | 'user';
  timestamp: Date;
  loading?: boolean;
  citations?: string[];
}

// Default greeting and suggestions
const GREETING_MESSAGE = "Jambo! I'm your professional legal assistant from Wachira & Mumbi Advocates, specializing in Kenyan law. I can answer questions about Kenyan legal matters, help with understanding legal procedures, or provide information about our firm's services.\n\nHow may I assist you today?";
const SUGGESTIONS = [
  "What are the key features of Kenyan corporate law?",
  "How do I register a business in Kenya?",
  "What is the process for appealing a case in the Kenyan court system?",
  "What rights do tenants have under Kenyan law?",
  "How does Kenyan family law handle divorce proceedings?",
];

export default function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showInitialPopup, setShowInitialPopup] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
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
          content: GREETING_MESSAGE,
          role: 'assistant',
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length]);
  
  useEffect(() => {
    // Scroll to bottom of chat when new messages appear
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Add keyboard support for escaping fullscreen mode with ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
      
      // Focus the input field when "/" key is pressed and chat is open
      if (e.key === '/' && isOpen && !isTyping && 
          // Don't focus if user is already typing in an input field
          document.activeElement?.tagName !== 'INPUT' && 
          document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault(); // Prevent the "/" character from being typed
        inputRef.current?.focus();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, isOpen, isTyping]);
  
  // Focus input when chat opens or when fullscreen mode changes
  useEffect(() => {
    if (isOpen && !isTyping) {
      // Small timeout to ensure DOM is ready
      const focusTimer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      
      return () => clearTimeout(focusTimer);
    }
  }, [isOpen, isFullscreen, isTyping]);
  
  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim() || isTyping) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: text,
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setShowInitialPopup(false);
    
    // Add typing indicator
    setIsTyping(true);
    
    try {
      // Prepare chat history for the API call - skip the initial greeting
      const chatHistory = messages
        .filter((msg, index) => index !== 0 || msg.role !== 'assistant') // Skip initial greeting
        .map(msg => ({
          role: msg.role,
          content: msg.content,
        }));
      
      // Call our backend API with Perplexity integration
      const response = await apiRequest(
        'POST',
        '/api/chat',
        {
          message: text,
          chatHistory,
        }
      );
      
      // Parse the response and add bot response
      const responseData = await response.json();
      
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          content: responseData.data.text,
          role: 'assistant',
          timestamp: new Date(),
          citations: responseData.data.citations,
        },
      ]);
    } catch (error) {
      console.error('Error getting response from AI assistant:', error);
      
      // Add error message
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          content: "I'm sorry, I encountered an issue processing your request. Please try again later or contact our team directly.",
          role: 'assistant',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
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
      
      {/* Chat button that toggles the chat interface (hidden when in fullscreen) - Moved to left side */}
      {!isFullscreen && (
        <div className="fixed left-6 bottom-6 z-50">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 rounded-full bg-[var(--gold)] shadow-lg flex items-center justify-center hover:bg-[var(--gold-light)] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment'} text-[var(--navy)] text-xl`}></i>
          </motion.button>
        </div>
      )}
      
      {/* Main chat interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`fixed z-50 ${
              isFullscreen 
                ? 'inset-0 m-0'
                : 'left-6 bottom-24 w-full max-w-lg'
            }`}
          >
            <div className={`bg-white shadow-2xl border border-[var(--gold)]/10 overflow-hidden flex flex-col ${
              isFullscreen
                ? 'h-full rounded-none'
                : 'h-[600px] rounded-lg'
            }`}>
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
                <div className="flex items-center space-x-2">
                  {/* Fullscreen toggle button */}
                  <button 
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                  >
                    <i className={`fas ${isFullscreen ? 'fa-compress-alt' : 'fa-expand-alt'} text-white text-sm`}></i>
                  </button>
                  
                  {/* Close button */}
                  <button 
                    onClick={handleClose}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <i className="fas fa-times text-white text-sm"></i>
                  </button>
                </div>
              </div>
              
              {/* Chat messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50 relative">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.role === 'user'
                            ? 'bg-[var(--navy)] text-white rounded-tr-none'
                            : 'bg-white shadow-sm border border-gray-200 rounded-tl-none'
                        }`}
                      >
                        <p className={`text-base leading-relaxed ${message.role === 'user' ? 'segoe-regular text-white' : 'segoe-regular'}`}>
                          {message.content}
                        </p>
                        
                        {/* Citations if available */}
                        {message.citations && message.citations.length > 0 && (
                          <div className="mt-2 pt-2 border-t border-gray-100">
                            <p className="text-xs text-gray-500 mb-1">Sources:</p>
                            <ul className="text-xs text-blue-600">
                              {message.citations.slice(0, 3).map((citation, index) => (
                                <li key={index} className="truncate">
                                  <a 
                                    href={citation} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                  >
                                    {citation.replace(/^https?:\/\//, '').split('/')[0]}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <p className={`text-[10px] ${message.role === 'user' ? 'text-white/60' : 'text-gray-500'} mt-1 text-right`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white shadow-sm border border-gray-200 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></div>
                          <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse delay-150"></div>
                          <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse delay-300"></div>
                        </div>
                      </div>
                    </div>
                  )}
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
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your question here... (or press '/' to focus)"
                    disabled={isTyping}
                    className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 text-sm segoe-regular focus:outline-none focus:border-[var(--gold)]/40 focus:ring-1 focus:ring-[var(--gold)]/20 disabled:bg-gray-50 disabled:text-gray-400"
                  />
                  <button
                    type="submit"
                    disabled={isTyping || !inputValue.trim()}
                    className="bg-[var(--gold)] text-[var(--navy)] rounded-r-md px-4 py-2 hover:bg-[var(--gold-light)] transition-colors disabled:bg-gray-200 disabled:text-gray-400"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
                {isTyping && (
                  <p className="text-xs text-gray-500 mt-1 text-center italic">
                    Assistant is typing...
                  </p>
                )}
                
                {/* Keyboard shortcut hint (only in fullscreen mode) */}
                {isFullscreen && !isTyping && (
                  <p className="text-xs text-gray-400 mt-1 text-center">
                    Press <kbd className="px-1 py-0.5 bg-gray-100 border border-gray-300 rounded text-gray-500 font-mono text-[10px]">ESC</kbd> to exit fullscreen or <kbd className="px-1 py-0.5 bg-gray-100 border border-gray-300 rounded text-gray-500 font-mono text-[10px]">/</kbd> to focus input
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}