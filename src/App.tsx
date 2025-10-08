import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Interactive from "./pages/Interactive";
import Introduction from "./pages/docs/Introduction";
import Installation from "./pages/docs/Installation";
import Configuration from "./pages/docs/Configuration";
import Plugins from "./pages/docs/Plugins";
import QuickStart from "./pages/docs/QuickStart";
import FkThemes from "./pages/docs/FkThemes";
import FkNotes from "./pages/docs/FkNotes";
import FkAI from "./pages/docs/FkAI";
import FkRunner from "./pages/docs/FkRunner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/interactive" element={<Interactive />} />
          <Route path="/docs" element={<Introduction />} />
          <Route path="/docs/installation" element={<Installation />} />
          <Route path="/docs/quick-start" element={<QuickStart />} />
          <Route path="/docs/configuration" element={<Configuration />} />
          <Route path="/docs/plugins" element={<Plugins />} />
          <Route path="/docs/plugins/fkthemes" element={<FkThemes />} />
          <Route path="/docs/plugins/fknotes" element={<FkNotes />} />
          <Route path="/docs/plugins/fkai" element={<FkAI />} />
          <Route path="/docs/plugins/fkrunner" element={<FkRunner />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
