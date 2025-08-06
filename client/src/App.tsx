import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Team from "@/pages/Team";
import PracticeAreas from "@/pages/PracticeAreas";
import CustomCursor from "@/components/ui/custom-cursor";
import ScrollProgress from "@/components/ui/scroll-progress";
import AIChatAssistant from "@/components/ui/ai-chat-assistant";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/team" component={Team} />
      <Route path="/practice-areas" component={PracticeAreas} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* UI Enhancements */}
      <CustomCursor />
      <ScrollProgress />
      
      {/* AI Chat Assistant */}
      <AIChatAssistant />
      
      {/* Main Content */}
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
