import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundCanvas from '@/components/BackgroundCanvas';
import CustomCursor from '@/components/CustomCursor';
import CommandPalette from '@/components/CommandPalette';
import Home from '@/pages/Home';
import ProjectsPage from '@/pages/ProjectsPage';
import ProjectDetail from '@/pages/ProjectDetail';
import ResumePage from '@/pages/ResumePage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -70;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <CustomCursor />

        <div className="min-h-screen bg-[#faf8f5] dark:bg-[#0c0d10] text-stone-900 dark:text-[#f4f4f5] relative selection:bg-blue-600/25 selection:text-blue-900 dark:selection:text-white transition-colors duration-200">
          {/* Ambient theme-adaptive background */}
          <BackgroundCanvas />

          {/* Sticky top navigation */}
          <Navbar onCommandPaletteOpen={() => setCommandPaletteOpen(true)} />

          {/* Page Routing */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>

          {/* Global Footer */}
          <Footer />

          {/* Command Palette Modal (Ctrl + K) */}
          <CommandPalette
            isOpen={commandPaletteOpen}
            onClose={() => setCommandPaletteOpen(false)}
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
