import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import CustomCursor from "@/components/ui/custom-cursor";
import ScrollProgress from "@/components/ui/scroll-progress";
import AIChatAssistant from "@/components/ui/ai-chat-assistant";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showChat, setShowChat] = useState(false);
  const [chatMinimized, setChatMinimized] = useState(true);
  
  // Delayed show of chat button for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChat(true);
    }, 3500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* UI Enhancements */}
      <CustomCursor />
      <ScrollProgress />
      
      {/* Main Content */}
      <Router />
      <Toaster />
      
      {/* Premium AI Legal Assistant */}
      {showChat && (
        <div className={`fixed ${chatMinimized ? 'bottom-6 right-6' : 'bottom-0 right-0 sm:bottom-6 sm:right-6'} z-50 transition-all duration-500 ease-in-out`}>
          {chatMinimized ? (
            <button 
              onClick={() => setChatMinimized(false)}
              className="bg-[var(--navy)] hover:bg-[var(--navy-light)] text-white rounded-full p-4 shadow-xl flex items-center justify-center group overflow-hidden border border-[var(--gold)]/20"
              aria-label="Open Legal Assistant"
            >
              <div className="relative flex items-center">
                <i className="fas fa-balance-scale text-[var(--gold)] text-xl mr-0 group-hover:mr-2 transition-all duration-300"></i>
                <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[150px] transition-all duration-500 ease-in-out text-white text-sm">Legal Assistant</span>
              </div>
            </button>
          ) : (
            <div className="w-full sm:w-96 h-[500px] bg-white rounded-t-lg sm:rounded-lg shadow-2xl flex flex-col overflow-hidden border border-[var(--gold)]/10">
              <AIChatAssistant onMinimize={() => setChatMinimized(true)} />
            </div>
          )}
        </div>
      )}
    </QueryClientProvider>
  );
}

export default App;
