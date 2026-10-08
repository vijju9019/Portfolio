import { ArrowUp } from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-stone-200/80 dark:border-[#1a1a1e] bg-stone-100/60 dark:bg-[#090a0d] py-14 text-stone-600 dark:text-[#a1a1aa] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-extrabold font-['Poppins'] shadow-md shadow-blue-500/20">
              VP
            </div>
            <div>
              <div className="text-stone-900 dark:text-[#f5f5f7] font-bold text-sm font-['Poppins']">
                Vijay Purandare
              </div>
              <div className="text-xs text-stone-500 dark:text-[#71717a]">
                Building intelligent software, one idea at a time.
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold">
            <Link to="/" className="hover:text-blue-600 dark:hover:text-white transition-colors">Home</Link>
            <Link to="/projects" className="hover:text-blue-600 dark:hover:text-white transition-colors">All Projects</Link>
            <a href="/#skills" className="hover:text-blue-600 dark:hover:text-white transition-colors">Skills</a>
            <a href="/#experience" className="hover:text-blue-600 dark:hover:text-white transition-colors">Experience</a>
            <a href="/#achievements" className="hover:text-blue-600 dark:hover:text-white transition-colors">Awards</a>
            <a href="/#contact" className="hover:text-blue-600 dark:hover:text-white transition-colors">Contact</a>
            <Link to="/resume" className="hover:text-blue-600 dark:hover:text-white transition-colors">Resume</Link>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#121316] hover:bg-stone-50 dark:hover:bg-white/[0.08] text-xs font-mono font-bold text-stone-700 dark:text-white border border-stone-200 dark:border-[#22242a] shadow-sm transition-all cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>

        {/* Bottom Rule: Copyright & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-200/80 dark:border-[#16171d] text-xs text-stone-500 dark:text-[#71717a]">
          <div>
            © 2026 Vijay Purandare. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/vijju9019"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/vijay-purandare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:purandarevijay123@gmail.com"
              className="hover:text-stone-900 dark:hover:text-white transition-colors font-mono"
            >
              purandarevijay123@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
