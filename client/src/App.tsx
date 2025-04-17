import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import CustomCursor from "@/components/ui/custom-cursor";
import ScrollProgress from "@/components/ui/scroll-progress";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
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
      
      {/* Main Content */}
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
