import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FolderGit2, Compass, ExternalLink, FileText, ArrowRight, X } from 'lucide-react';
import { featuredProjects } from '@/data/projects';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Item {
  id: string;
  title: string;
  subtitle: string;
  category: 'Navigation' | 'Projects' | 'Quick Actions' | 'External';
  action: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

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

  const items: Item[] = [
    // Navigation
    {
      id: 'nav-home',
      title: 'Home',
      subtitle: 'Back to top overview',
      category: 'Navigation',
      action: () => {
        navigate('/');
        setTimeout(() => scrollToSection('hero'), 50);
      },
    },
    {
      id: 'nav-about',
      title: 'About Me',
      subtitle: 'Personal background & verified stats',
      category: 'Navigation',
      action: () => {
        navigate('/');
        setTimeout(() => scrollToSection('about'), 50);
      },
    },
    {
      id: 'nav-skills',
      title: 'Technology Stack',
      subtitle: 'Languages, frontend, backend, AI/ML tools',
      category: 'Navigation',
      action: () => {
        navigate('/');
        setTimeout(() => scrollToSection('skills'), 50);
      },
    },
    {
      id: 'nav-projects',
      title: 'Featured Projects',
      subtitle: 'Flagship systems & architectures',
      category: 'Navigation',
      action: () => {
        navigate('/');
        setTimeout(() => scrollToSection('projects'), 50);
      },
    },
    {
      id: 'nav-experience',
      title: 'Work Experience',
      subtitle: 'SDE internship & data science timeline',
      category: 'Navigation',
      action: () => {
        navigate('/');
        setTimeout(() => scrollToSection('experience'), 50);
      },
    },
    {
      id: 'nav-achievements',
      title: 'Recognition & Hackathons',
      subtitle: 'Smart India Hackathon, Qualcomm Snapdragon AI Lab',
      category: 'Navigation',
      action: () => {
        navigate('/');
        setTimeout(() => scrollToSection('achievements'), 50);
      },
    },
    {
      id: 'nav-github',
      title: 'Developer Activity & GitHub',
      subtitle: 'Live repository data & open-source code',
      category: 'Navigation',
      action: () => {
        navigate('/');
        setTimeout(() => scrollToSection('github'), 50);
      },
    },
    {
      id: 'nav-contact',
      title: 'Contact',
      subtitle: "Let's Build Something — Get in touch",
      category: 'Navigation',
      action: () => {
        navigate('/');
        setTimeout(() => scrollToSection('contact'), 50);
      },
    },
    // Projects
    ...featuredProjects.map((p) => ({
      id: `proj-${p.id}`,
      title: p.title,
      subtitle: p.tagline,
      category: 'Projects' as const,
      action: () => navigate(`/projects/${p.slug}`),
    })),
    // Actions & External
    {
      id: 'action-view-resume',
      title: 'View Official Resume',
      subtitle: 'ATS Paper view, modern cards & verified credentials',
      category: 'Quick Actions',
      action: () => navigate('/resume'),
    },
    {
      id: 'action-download-resume',
      title: 'Download Resume PDF',
      subtitle: 'Open official PDF file (Vijay Purandare)',
      category: 'Quick Actions',
      action: () => window.open('/resume.pdf', '_blank'),
    },
    {
      id: 'ext-github',
      title: 'GitHub Profile (@vijju9019)',
      subtitle: 'https://github.com/vijju9019',
      category: 'External',
      action: () => window.open('https://github.com/vijju9019', '_blank'),
    },
    {
      id: 'ext-linkedin',
      title: 'LinkedIn Profile',
      subtitle: 'https://linkedin.com/in/vijay-purandare',
      category: 'External',
      action: () => window.open('https://linkedin.com/in/vijay-purandare', '_blank'),
    },
  ];

  const filtered = items.filter((item) => {
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
        onClose();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl bg-white dark:bg-[#121316] border border-stone-200 dark:border-[#22242c] rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-stone-200 dark:border-[#1f2026] bg-stone-50 dark:bg-[#15161c]">
              <Search size={18} className="text-stone-400 dark:text-[#71717a] mr-3 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search command, project, or section..."
                className="w-full bg-transparent text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-[#52525b] text-sm focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded text-stone-400 hover:text-stone-800 dark:hover:text-white"
                >
                  <X size={14} />
                </button>
              )}
              <kbd className="hidden sm:inline-block ml-2 px-1.5 py-0.5 text-[10px] font-mono text-stone-400 dark:text-[#71717a] bg-stone-200/60 dark:bg-white/[0.05] border border-stone-300 dark:border-[#2a2c34] rounded">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-stone-100 dark:divide-[#1a1b20]">
              {filtered.length === 0 ? (
                <div className="py-10 text-center text-sm text-stone-400 dark:text-[#71717a]">
                  No matching results for "{query}"
                </div>
              ) : (
                filtered.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        item.action();
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-white border border-blue-500/30 font-semibold'
                          : 'text-stone-700 dark:text-[#a1a1aa] hover:bg-stone-100 dark:hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`p-2 rounded-xl shrink-0 ${
                            isSelected
                              ? 'bg-blue-600 text-white'
                              : 'bg-stone-100 dark:bg-white/[0.04] text-stone-500 dark:text-[#71717a]'
                          }`}
                        >
                          {item.category === 'Navigation' && <Compass size={14} />}
                          {item.category === 'Projects' && <FolderGit2 size={14} />}
                          {item.category === 'Quick Actions' && <FileText size={14} />}
                          {item.category === 'External' && <ExternalLink size={14} />}
                        </div>
                        <div className="truncate">
                          <div className={`text-sm ${isSelected ? 'text-blue-900 dark:text-white font-bold' : 'text-stone-800 dark:text-[#e4e4e7]'}`}>
                            {item.title}
                          </div>
                          <div className="text-xs text-stone-400 dark:text-[#71717a] truncate font-normal">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-stone-100 dark:bg-white/[0.04] text-stone-500 dark:text-[#52525b]">
                          {item.category}
                        </span>
                        {isSelected && <ArrowRight size={14} className="text-blue-500" />}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer Navigation Hints */}
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-stone-200 dark:border-[#1f2026] bg-stone-50 dark:bg-[#0c0d10] text-[11px] text-stone-400 dark:text-[#52525b] font-mono">
              <div className="flex items-center gap-3">
                <span>↑↓ navigate</span>
                <span>↵ select</span>
              </div>
              <div>Vijay Purandare Command Suite</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
