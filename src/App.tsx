import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Surat from "./pages/Surat";
import Gift from "./pages/Gift";
import Anniversary13 from "./pages/Anniversary13";
import Anniversary14 from "./pages/Anniversary14";
import SeeYou2028 from "./pages/SeeYou2028";
import "./index.css";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/surat" element={<Surat />} />
            <Route path="/surat/anniversary-13" element={<Anniversary13 />} />
            <Route path="/surat/anniversary-14" element={<Anniversary14 />} />
            <Route path="/surat/see-you-2028" element={<SeeYou2028 />} />
            <Route path="/gift" element={<Gift />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
