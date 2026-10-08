import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Menu, X, Command } from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';
import ThemeToggle from '@/components/ThemeToggle';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home', href: '/#hero' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'skills', label: 'Skills', href: '/#skills' },
  { id: 'projects', label: 'Projects', href: '/#projects' },
  { id: 'experience', label: 'Experience', href: '/#experience' },
  { id: 'achievements', label: 'Achievements', href: '/#achievements' },
  { id: 'github', label: 'GitHub', href: '/#github' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];

interface NavbarProps {
  onCommandPaletteOpen: () => void;
}

export default function Navbar({ onCommandPaletteOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  // Smooth scroll with fixed navbar offset (-70px)
  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Scroll spy & scrolled background detection
  useEffect(() => {
    if (location.pathname !== '/') {
      if (location.pathname.startsWith('/projects')) {
        setActiveSection('projects');
      } else {
        setActiveSection('');
      }
      setScrolled(window.scrollY > 15);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      // Bottom reached -> contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      if (window.scrollY < 120) {
        setActiveSection('hero');
        return;
      }

      const sections = ['contact', 'github', 'achievements', 'experience', 'projects', 'skills', 'about', 'hero'];
      const scrollPos = window.scrollY + 140;

      for (const secId of sections) {
        const el = document.getElementById(secId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(secId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault();
    setMobileOpen(false);

    if (location.pathname === '/') {
      setActiveSection(item.id);
      scrollToSection(item.id);
      window.history.pushState(null, '', item.id === 'hero' ? '/' : `/#${item.id}`);
    } else {
      navigate(item.id === 'hero' ? '/' : `/#${item.id}`);
      setTimeout(() => {
        scrollToSection(item.id);
      }, 100);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
      window.history.pushState(null, '', '/');
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        onCommandPaletteOpen();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [onCommandPaletteOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#faf8f5]/85 dark:bg-[#0c0d10]/85 backdrop-blur-xl border-b border-stone-200/90 dark:border-[#1f2026] shadow-sm dark:shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="/"
              onClick={handleLogoClick}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-black font-['Poppins'] shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                VP
              </div>
              <span className="text-stone-900 dark:text-white font-bold text-sm hidden sm:block font-['Poppins']">
                Vijay Purandare
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-blue-600 dark:text-white bg-blue-500/10 dark:bg-white/[0.08] shadow-sm'
                        : 'text-stone-600 dark:text-[#a1a1aa] hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/[0.04]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Icons & Controls */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle (Dark / Light) */}
              <ThemeToggle />

              {/* Command Palette Button */}
              <button
                onClick={onCommandPaletteOpen}
                className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-stone-100 dark:bg-white/[0.05] border border-stone-200/90 dark:border-[#1f2026] text-stone-500 dark:text-[#71717a] hover:text-stone-900 dark:hover:text-white text-xs font-mono transition-all cursor-pointer"
                title="Search / Command Palette (Ctrl+K)"
              >
                <Command size={12} />
                <span>K</span>
              </button>

              <a
                href="https://github.com/vijju9019"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-stone-600 dark:text-[#a1a1aa] hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/[0.06] transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={17} />
              </a>

              <Link
                to="/resume"
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold font-['Poppins'] shadow-sm shadow-blue-500/20 transition-all cursor-pointer"
              >
                <FileText size={13} />
                <span>Resume</span>
              </Link>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-xl text-stone-600 dark:text-[#a1a1aa] hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/[0.06] transition-all"
                aria-label="Toggle Navigation Menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Animated Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#faf8f5] dark:bg-[#111216] border-l border-stone-200 dark:border-[#1f2026] lg:hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between p-4 border-b border-stone-200 dark:border-[#1f2026]">
                  <span className="text-stone-900 dark:text-white font-bold text-sm font-['Poppins']">
                    Navigation
                  </span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 dark:hover:text-white"
                  >
                    <X size={18} />
                  </button>
                </div>
                <nav className="p-4 flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item)}
                        className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          isActive
                            ? 'text-blue-600 dark:text-white bg-blue-500/10 dark:bg-white/[0.08] font-bold'
                            : 'text-stone-600 dark:text-[#a1a1aa] hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/[0.05]'
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Drawer Bottom */}
              <div className="p-4 border-t border-stone-200 dark:border-[#1f2026] space-y-2">
                <a
                  href="https://github.com/vijju9019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-stone-700 dark:text-[#a1a1aa] hover:bg-stone-100 dark:hover:bg-white/[0.05] text-xs font-semibold"
                >
                  <Github size={15} />
                  <span>GitHub (@vijju9019)</span>
                </a>
                <Link
                  to="/resume"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 text-xs font-semibold"
                >
                  <FileText size={15} />
                  <span>View Official Resume</span>
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-stone-600 dark:text-[#a1a1aa] hover:bg-stone-100 dark:hover:bg-white/[0.05] text-xs font-semibold"
                >
                  <FileText size={15} />
                  <span>Download Resume PDF (123 KB)</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
