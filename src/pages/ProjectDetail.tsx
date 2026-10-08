import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Cpu,
  Layers,
  CheckCircle2,
  Wrench,
  AlertTriangle,
  Lightbulb,
  Sparkles,
} from 'lucide-react';
import { Github } from '@/components/Icons';
import { getProjectBySlug, featuredProjects } from '@/data/projects';

const IMAGE_MAP: Record<string, string> = {
  'cloudbase-ide': '/images/cloudbase-ide.jpg',
  'gworkspace-enterprise': '/images/cloudbase-ide.jpg',
  'minddesk-ai': '/images/minddesk-ai.jpg',
  'thiranex-data-science': '/images/data-science.jpg',
  'cyberwar-ai': '/images/cloudbase-ide.jpg',
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <main className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold font-['Poppins'] text-stone-900 dark:text-white mb-4">
          Project Not Located
        </h1>
        <p className="text-stone-600 dark:text-[#a1a1aa] mb-6">
          The requested case study could not be found.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-md shadow-blue-500/20"
        >
          <ArrowLeft size={16} />
          Return to Projects Index
        </Link>
      </main>
    );
  }

  const currentIndex = featuredProjects.findIndex((p) => p.slug === project.slug);
  const nextProject = featuredProjects[(currentIndex + 1) % featuredProjects.length];
  const prevProject =
    featuredProjects[(currentIndex - 1 + featuredProjects.length) % featuredProjects.length];
  const imageSrc = IMAGE_MAP[project.slug];

  return (
    <article className="min-h-screen pt-24 pb-28 relative z-10">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-stone-600 dark:text-[#a1a1aa] hover:text-stone-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span>All Projects</span>
          </Link>
          <span className="text-xs font-mono text-stone-400 dark:text-[#71717a] uppercase font-bold">
            Case Study • {project.category}
          </span>
        </div>

        {/* Hero Header */}
        <motion.header
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4">
            <Sparkles size={12} />
            <span>{project.category}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 dark:text-[#f5f5f7] font-['Poppins'] mb-4 leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-stone-600 dark:text-[#a1a1aa] font-medium leading-relaxed max-w-3xl mb-8">
            {project.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-md shadow-blue-600/25 transition-all font-['Poppins']"
            >
              <Github size={16} />
              <span>Explore GitHub Repository</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-[#15161b] hover:bg-stone-50 dark:hover:bg-[#1a1b22] text-stone-900 dark:text-white border border-stone-200 dark:border-[#22242a] text-sm font-bold shadow-sm transition-all"
              >
                <ExternalLink size={16} />
                <span>Launch Live Demo</span>
              </a>
            )}
          </div>
        </motion.header>

        {/* Hero Visual Banner */}
        {imageSrc && (
          <div className="rounded-3xl overflow-hidden border border-stone-200/90 dark:border-[#1f2026] bg-stone-100 dark:bg-[#0c0d10] mb-14 shadow-xl">
            <img
              src={imageSrc}
              alt={`${project.title} Architecture Preview`}
              className="w-full max-h-[460px] object-cover object-top opacity-95 hover:opacity-100 transition-opacity"
            />
            <div className="p-3.5 bg-white dark:bg-[#111216] border-t border-stone-200 dark:border-[#1f2026] text-[11px] font-mono text-stone-500 dark:text-[#71717a] flex items-center justify-between">
              <span>SYSTEM ARCHITECTURE DIAGRAM & INTERACTION REPLAY</span>
              <span>VERIFIED PRODUCTION CODE</span>
            </div>
          </div>
        )}

        {/* Detailed Sections (1 to 8) */}
        <div className="space-y-10">
          {/* 1. Problem Space */}
          <section className="bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] rounded-3xl p-7 lg:p-9 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3">
              <AlertTriangle size={14} />
              <span>01. The Problem Space</span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900 dark:text-white font-['Poppins'] mb-4">
              Context, Vulnerability & Motivation
            </h2>
            <p className="text-sm lg:text-base text-stone-600 dark:text-[#a1a1aa] leading-relaxed">
              {project.problem}
            </p>
          </section>

          {/* 2. Solution */}
          <section className="bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] rounded-3xl p-7 lg:p-9 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
              <Lightbulb size={14} />
              <span>02. The Engineered Solution</span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900 dark:text-white font-['Poppins'] mb-4">
              Product Concept & Implementation Strategy
            </h2>
            <p className="text-sm lg:text-base text-stone-600 dark:text-[#a1a1aa] leading-relaxed">
              {project.solution}
            </p>
          </section>

          {/* 3. Architecture */}
          <section className="bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] rounded-3xl p-7 lg:p-9 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-3">
              <Layers size={14} />
              <span>03. System Architecture</span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900 dark:text-white font-['Poppins'] mb-4">
              Technical Design & Data Flow
            </h2>
            <div className="p-5 rounded-2xl bg-stone-50 dark:bg-[#0a0a0d] border border-stone-200 dark:border-[#1f2026] font-mono text-xs sm:text-sm text-stone-700 dark:text-[#a1a1aa] leading-relaxed">
              {project.architecture}
            </div>
          </section>

          {/* 4. Technologies Rationale */}
          <section className="bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] rounded-3xl p-7 lg:p-9 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">
              <Cpu size={14} />
              <span>04. Technology Decisions</span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900 dark:text-white font-['Poppins'] mb-6">
              Stack Rationale & Architectural Tradeoffs
            </h2>
            <div className="grid sm:grid-cols-2 gap-3.5">
              {project.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="p-4 rounded-2xl bg-stone-50 dark:bg-[#0a0a0d] border border-stone-200 dark:border-[#1a1b22] flex flex-col justify-between"
                >
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400 font-mono mb-1.5">
                    {tech.name}
                  </span>
                  <span className="text-xs text-stone-600 dark:text-[#a1a1aa] leading-relaxed">
                    {tech.reason}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Core Capabilities */}
          <section className="bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] rounded-3xl p-7 lg:p-9 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
              <CheckCircle2 size={14} />
              <span>05. Core Capabilities</span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900 dark:text-white font-['Poppins'] mb-6">
              Key Functional Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-stone-50 dark:bg-white/[0.02] border border-stone-200/80 dark:border-[#1a1b22]"
                >
                  <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-stone-700 dark:text-[#a1a1aa] leading-snug font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Challenges */}
          <section className="bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] rounded-3xl p-7 lg:p-9 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest mb-3">
              <Wrench size={14} />
              <span>06. Engineering Hurdles</span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900 dark:text-white font-['Poppins'] mb-6">
              Critical Challenges Overcome
            </h2>
            <div className="space-y-3">
              {project.challenges.map((chal, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-stone-50 dark:bg-[#0a0a0d] border border-stone-200 dark:border-[#1a1b22] flex items-start gap-3 text-xs sm:text-sm text-stone-600 dark:text-[#a1a1aa] leading-relaxed"
                >
                  <span className="text-rose-500 font-mono font-bold shrink-0">
                    HURDLE #{i + 1}
                  </span>
                  <span>{chal}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 7 & 8. Results & Future */}
          <div className="grid sm:grid-cols-2 gap-6">
            <section className="bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] rounded-3xl p-7 shadow-sm">
              <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-2">
                07. Verified Outcomes
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-white font-['Poppins'] mb-3">
                Measurable Impact
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-600 dark:text-[#a1a1aa]">
                {project.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] rounded-3xl p-7 shadow-sm">
              <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
                08. Next Milestones
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-white font-['Poppins'] mb-3">
                Future Roadmap
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-600 dark:text-[#a1a1aa]">
                {project.future.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Footer Navigation: Prev / Next */}
        <div className="mt-16 pt-8 border-t border-stone-200/80 dark:border-[#1f2026] flex items-center justify-between">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="flex flex-col items-start text-left group"
          >
            <span className="text-[11px] font-mono text-stone-400 dark:text-[#71717a] font-bold">PREVIOUS STUDY</span>
            <span className="text-sm font-bold text-stone-700 dark:text-[#a1a1aa] group-hover:text-blue-600 dark:group-hover:text-white transition-colors font-['Poppins']">
              ← {prevProject.title}
            </span>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="flex flex-col items-end text-right group"
          >
            <span className="text-[11px] font-mono text-stone-400 dark:text-[#71717a] font-bold">NEXT STUDY</span>
            <span className="text-sm font-bold text-stone-700 dark:text-[#a1a1aa] group-hover:text-blue-600 dark:group-hover:text-white transition-colors font-['Poppins']">
              {nextProject.title} →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
