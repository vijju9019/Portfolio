import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowLeft, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { Github } from '@/components/Icons';
import { featuredProjects } from '@/data/projects';
import GitHubProjects from '@/components/GitHubProjects';

const CATEGORIES = [
  'All',
  'AI/ML',
  'Web',
  'Desktop',
  'Backend',
  'Frontend',
  'Python',
  'JavaScript',
  'TypeScript',
];

export default function ProjectsPage() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [search, setSearch] = useState('');

  const filteredFeatured = featuredProjects.filter((p) => {
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));

    if (selectedCat === 'All') return matchesSearch;

    const tags = p.tags.map((t) => t.toLowerCase());
    const title = p.title.toLowerCase();
    const desc = p.description.toLowerCase();

    if (selectedCat === 'Python') return tags.includes('python') && matchesSearch;
    if (selectedCat === 'JavaScript') return (tags.includes('javascript') || tags.includes('js')) && matchesSearch;
    if (selectedCat === 'TypeScript') return tags.includes('typescript') && matchesSearch;
    if (selectedCat === 'AI/ML') return (p.category.includes('AI') || p.category.includes('Learning') || tags.includes('ai') || tags.includes('machine learning')) && matchesSearch;
    if (selectedCat === 'Desktop') return (tags.includes('electron') || p.category.includes('Cloud Platform') || p.category.includes('Developer Tools')) && matchesSearch;
    if (selectedCat === 'Web') return (tags.includes('react') || tags.includes('typescript')) && matchesSearch;
    if (selectedCat === 'Backend') return (tags.includes('node.js') || tags.includes('fastapi') || tags.includes('docker')) && matchesSearch;
    if (selectedCat === 'Frontend') return (tags.includes('react') || tags.includes('tailwind')) && matchesSearch;

    return matchesSearch;
  });

  return (
    <main className="min-h-screen pt-24 pb-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-stone-600 dark:text-[#a1a1aa] hover:text-stone-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Return to Homepage</span>
          </Link>
        </div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4">
            <Sparkles size={13} />
            <span>ARCHITECTURE & CODE DIRECTORY</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-[#f5f5f7] font-['Poppins'] mb-3">
            All My Projects
          </h1>
          <p className="text-base text-stone-600 dark:text-[#a1a1aa] max-w-2xl leading-relaxed">
            In-depth case studies, production systems, developer tools, and open-source GitHub repositories built by Vijay Purandare.
          </p>
        </motion.div>

        {/* Filter Pills & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200/80 dark:border-[#1f2026]">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-[#121316] text-stone-600 dark:text-[#a1a1aa] hover:text-stone-900 dark:hover:text-white border border-stone-200/80 dark:border-[#1f2026]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by keyword or tech..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] text-xs text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-[#52525b] focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Flagship Architectures List */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-stone-900 dark:text-white font-['Poppins']">
              Flagship Case Studies
            </h2>
            <span className="text-xs font-mono text-stone-400 dark:text-[#71717a]">
              Showing {filteredFeatured.length} of {featuredProjects.length}
            </span>
          </div>

          {filteredFeatured.length === 0 ? (
            <div className="py-16 text-center text-stone-500 dark:text-[#71717a] bg-white dark:bg-[#121316] border border-stone-200 dark:border-[#1f2026] rounded-3xl">
              No flagship projects matched the selected filter.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredFeatured.map((project) => (
                <article
                  key={project.id}
                  className="rounded-3xl border border-stone-200/90 dark:border-[#1f2026] bg-white dark:bg-[#121316] p-7 sm:p-8 hover:border-stone-300 dark:hover:border-[#2a2c34] shadow-sm hover:shadow-xl dark:shadow-none transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        {project.category}
                      </span>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-400 hover:text-stone-900 dark:hover:text-white p-1"
                        aria-label={`GitHub for ${project.title}`}
                      >
                        <Github size={16} />
                      </a>
                    </div>

                    <h3 className="text-2xl font-bold text-stone-900 dark:text-white font-['Poppins'] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-[#71717a] font-mono mb-4">
                      {project.tagline}
                    </p>
                    <p className="text-sm text-stone-600 dark:text-[#a1a1aa] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-stone-100 dark:bg-[#17181f] border border-stone-200/80 dark:border-[#22242c] text-stone-700 dark:text-[#a1a1aa]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-stone-100 dark:border-[#1a1b20]">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline font-['Poppins']"
                    >
                      <span>Read Deep-Dive Case Study</span>
                      <ArrowRight size={14} />
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-stone-500 hover:text-stone-800 dark:hover:text-white flex items-center gap-1"
                    >
                      <span>Repository</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Live GitHub Projects Section */}
        <div className="pt-8 border-t border-stone-200/80 dark:border-[#1f2026]">
          <GitHubProjects />
        </div>
      </div>
    </main>
  );
}
