import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedProjects from '@/components/FeaturedProjects';
import TechStack from '@/components/TechStack';
import MLRoadmap from '@/components/MLRoadmap';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import GitHubProjects from '@/components/GitHubProjects';
import Services from '@/components/Services';
import CurrentFocus from '@/components/CurrentFocus';
import Contact from '@/components/Contact';
import { getFeaturedProjects } from '@/data/projects';
import { Link } from 'react-router-dom';
import { ArrowRight, FolderGit2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// Section 9: All Projects Preview Banner before What I Build
function AllProjectsPreview() {
  return (
    <section className="relative z-10 py-16 border-t border-stone-200/80 dark:border-[#1a1a1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-mono font-bold tracking-wider mb-3">
              <FolderGit2 size={13} />
              <span>PROJECT DIRECTORY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Poppins'] tracking-tight mb-2">
              Explore All Flagship & Open-Source Repositories
            </h3>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              Browse the complete repository index, filter by domain (AI/ML, Web, Desktop, Backend), and inspect deep architectural case studies.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-stone-900 text-sm font-bold font-['Poppins'] shadow-lg hover:bg-stone-100 hover:scale-105 transition-all cursor-pointer"
            >
              <span>Browse All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <main>
      {/* 1. HERO */}
      <Hero />

      {/* 2. ABOUT */}
      <About />

      {/* 3. SELECTED PROJECTS */}
      <FeaturedProjects projects={featured} />

      {/* 4. TECH STACK */}
      <TechStack />

      {/* 5. AI / ML JOURNEY */}
      <MLRoadmap />

      {/* 6. EXPERIENCE */}
      <Experience />

      {/* 7. ACHIEVEMENTS */}
      <Achievements />

      {/* 8. GITHUB ACTIVITY */}
      <GitHubProjects />

      {/* 9. ALL PROJECTS PREVIEW */}
      <AllProjectsPreview />

      {/* 10. WHAT I BUILD */}
      <Services />

      {/* 11. CURRENTLY BUILDING */}
      <CurrentFocus />

      {/* 12. CONTACT */}
      <Contact />
    </main>
  );
}
