
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Surat from './pages/Surat';
import Gift from './pages/Gift';
import Anniversary13 from './pages/Anniversary13';
import './index.css';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <div className="min-h-screen romantic-gradient">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/surat" element={<Surat />} />
            <Route path="/surat/anniversary-13" element={<Anniversary13 />} />
            <Route path="/gift" element={<Gift />} />
          </Routes>
        </div>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
