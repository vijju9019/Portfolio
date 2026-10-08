import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, GitFork, Clock, Code2, Sparkles, Search } from 'lucide-react';
import { Github } from '@/components/Icons';
import { fetchRepositories, fetchUserProfile, sortRepositories, formatDate } from '@/services/github';
import type { GitHubRepo, GitHubUser } from '@/services/github';

const GITHUB_USERNAME = 'vijju9019';

// Language color map
const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#eab308',
  Python: '#3b82f6',
  Java: '#b45309',
  HTML: '#f97316',
  CSS: '#a855f7',
  Shell: '#10b981',
  Dockerfile: '#06b6d4',
};

function LanguageDot({ language }: { language: string | null }) {
  if (!language) return null;
  const color = LANG_COLORS[language] ?? '#71717a';
  return (
    <span className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-[#a1a1aa] font-medium">
      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: color }} />
      {language}
    </span>
  );
}

function RepoCard({ repo }: { repo: GitHubRepo }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col p-6 rounded-2xl border border-stone-200/90 dark:border-[#1f2026] bg-white dark:bg-[#121316] hover:border-stone-300 dark:hover:border-[#2a2c34] hover:-translate-y-1 shadow-sm hover:shadow-lg dark:shadow-none transition-all duration-300 justify-between"
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <h3 className="text-base font-bold text-stone-900 dark:text-white font-['Poppins'] leading-tight break-all">
            {repo.name}
          </h3>
          <div className="flex items-center gap-1.5 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-lg text-stone-400 hover:text-stone-800 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/[0.05]"
              aria-label={`Open ${repo.name} on GitHub`}
            >
              <Github size={15} />
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-lg text-stone-400 hover:text-stone-800 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/[0.05]"
                aria-label={`Live demo for ${repo.name}`}
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        <p className="text-stone-600 dark:text-[#a1a1aa] text-xs leading-relaxed mb-4 line-clamp-3">
          {repo.description ?? 'No public description provided on GitHub.'}
        </p>

        {/* Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {repo.topics.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Meta row */}
      <div className="flex items-center gap-3 pt-3 border-t border-stone-100 dark:border-white/[0.05] text-xs">
        <LanguageDot language={repo.language} />
        {repo.stargazers_count > 0 && (
          <span className="flex items-center gap-1 text-stone-500 dark:text-[#71717a] font-mono">
            <Star size={12} className="text-amber-500" />
            {repo.stargazers_count}
          </span>
        )}
        {repo.forks_count > 0 && (
          <span className="flex items-center gap-1 text-stone-500 dark:text-[#71717a] font-mono">
            <GitFork size={12} className="text-purple-500" />
            {repo.forks_count}
          </span>
        )}
        <span className="flex items-center gap-1 text-stone-400 dark:text-[#71717a] ml-auto font-mono text-[11px]">
          <Clock size={11} />
          {formatDate(repo.pushed_at)}
        </span>
      </div>
    </motion.div>
  );
}

type SortKey = 'updated' | 'stars' | 'forks' | 'name';

const FILTER_TAGS = [
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

export default function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [profile, setProfile] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState<SortKey>('updated');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    Promise.all([fetchUserProfile(GITHUB_USERNAME), fetchRepositories(GITHUB_USERNAME)])
      .then(([user, reps]) => {
        setProfile(user);
        setRepos(sortRepositories(reps));
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const matchesCategory = (repo: GitHubRepo, cat: string): boolean => {
    if (cat === 'All') return true;
    const name = repo.name.toLowerCase();
    const desc = (repo.description ?? '').toLowerCase();
    const topics = (repo.topics ?? []).map((t) => t.toLowerCase());
    const lang = (repo.language ?? '').toLowerCase();

    if (cat === 'Python') return lang === 'python' || topics.includes('python');
    if (cat === 'JavaScript') return lang === 'javascript' || topics.includes('javascript');
    if (cat === 'TypeScript') return lang === 'typescript' || topics.includes('typescript');

    if (cat === 'AI/ML') {
      return (
        lang === 'python' ||
        topics.some((t) => t.includes('ai') || t.includes('ml') || t.includes('learning')) ||
        desc.includes('ai') ||
        desc.includes('learning') ||
        desc.includes('model') ||
        desc.includes('data')
      );
    }
    if (cat === 'Desktop') {
      return (
        topics.some((t) => t.includes('electron') || t.includes('desktop')) ||
        desc.includes('electron') ||
        desc.includes('desktop')
      );
    }
    if (cat === 'Web') {
      return (
        ['typescript', 'javascript', 'html', 'css'].includes(lang) ||
        topics.some((t) => t.includes('react') || t.includes('web') || t.includes('vite'))
      );
    }
    if (cat === 'Backend') {
      return (
        desc.includes('backend') ||
        desc.includes('api') ||
        desc.includes('fastapi') ||
        desc.includes('express') ||
        topics.some((t) => t.includes('backend') || t.includes('api'))
      );
    }
    if (cat === 'Frontend') {
      return (
        desc.includes('frontend') ||
        desc.includes('ui') ||
        desc.includes('react') ||
        topics.some((t) => t.includes('frontend') || t.includes('react'))
      );
    }

    return true;
  };

  const filtered = repos
    .filter((r) => {
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        r.name.toLowerCase().includes(q) ||
        (r.description ?? '').toLowerCase().includes(q) ||
        (r.topics ?? []).some((t) => t.includes(q));

      const matchesCat = matchesCategory(r, filter);
      return matchesSearch && matchesCat;
    })
    .sort((a, b) => {
      switch (sort) {
        case 'stars':
          return b.stargazers_count - a.stargazers_count;
        case 'forks':
          return b.forks_count - a.forks_count;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'updated':
        default:
          return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
      }
    });

  const displayed = showAll ? filtered : filtered.slice(0, 8);

  return (
    <section id="github" className="relative z-10 py-24 lg:py-32 border-t border-stone-200/80 dark:border-[#1a1a1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Pill Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-6"
        >
          <Code2 size={13} />
          <span>LIVE SOURCE CODE & REPOSITORIES</span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-[#f5f5f7] font-['Poppins'] mb-3">
              Developer Activity
            </h2>
            <p className="text-stone-600 dark:text-[#a1a1aa] text-base max-w-xl">
              Public repositories synchronized live from GitHub. Real commits, real source code, zero fabricated statistics.
            </p>
          </div>

          {profile && (
            <div className="flex items-center gap-6 p-4 rounded-2xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] shadow-sm shrink-0">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-stone-900 dark:text-white font-['Poppins']">
                  {profile.public_repos}
                </div>
                <div className="text-stone-400 dark:text-[#71717a] text-[11px] font-mono">Public Repos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-stone-900 dark:text-white font-['Poppins']">
                  {profile.followers}
                </div>
                <div className="text-stone-400 dark:text-[#71717a] text-[11px] font-mono">Followers</div>
              </div>
              <a
                href="https://github.com/vijju9019"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold font-mono transition-all shadow-md shadow-blue-600/20"
              >
                <Github size={14} />
                <span>@vijju9019</span>
              </a>
            </div>
          )}
        </motion.div>

        {/* Search, Filter Pills & Sort Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Filter repositories by name or topic..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200/90 dark:border-[#1f2026] bg-white dark:bg-[#121316] text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-[#52525b] text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-stone-400 dark:text-[#71717a] shrink-0">Sort:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="px-3 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] text-stone-700 dark:text-[#a1a1aa] focus:outline-none focus:border-blue-500 shadow-sm cursor-pointer"
            >
              <option value="updated">Recently Updated</option>
              <option value="stars">Most Stars</option>
              <option value="forks">Most Forked</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTER_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filter === tag
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-[#121316] text-stone-600 dark:text-[#a1a1aa] hover:bg-stone-100 dark:hover:bg-white/[0.05] border border-stone-200/80 dark:border-[#1f2026]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-48 rounded-2xl border border-stone-200 dark:border-[#1f2026] bg-stone-100 dark:bg-[#121316] animate-pulse"
              />
            ))}
          </div>
        )}

        {/* Error Notification */}
        {error && (
          <div className="p-6 rounded-2xl border border-rose-300 dark:border-rose-900/40 bg-rose-50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-400 text-sm">
            {error}
          </div>
        )}

        {/* Active Repositories Grid */}
        {!loading && !error && (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              {displayed.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="py-16 text-center text-stone-400 dark:text-[#71717a] bg-white dark:bg-[#121316] border border-stone-200 dark:border-[#1f2026] rounded-2xl">
                No public repositories matched your filter.
              </div>
            )}

            {filtered.length > 8 && (
              <div className="text-center pt-4">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-2.5 rounded-xl border border-stone-300 dark:border-[#2a2c34] bg-white dark:bg-[#121316] hover:bg-stone-50 dark:hover:bg-white/[0.06] text-stone-800 dark:text-white text-xs font-bold font-mono transition-all shadow-sm cursor-pointer"
                >
                  {showAll ? 'Show Fewer Repositories' : `Display All ${filtered.length} Repositories`}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
