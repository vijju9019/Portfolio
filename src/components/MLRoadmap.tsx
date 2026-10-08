import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Sparkles, Filter, Compass } from 'lucide-react';
import { mlRoadmap } from '@/data/skills';

export default function MLRoadmap() {
  const [filter, setFilter] = useState<'all' | 'done' | 'learning' | 'upcoming'>('all');

  const completedCount = mlRoadmap.filter((m) => m.status === 'done').length;
  const inProgressCount = mlRoadmap.filter((m) => m.status === 'learning').length;
  const upcomingCount = mlRoadmap.filter((m) => m.status === 'upcoming').length;
  const totalCount = mlRoadmap.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const filtered = mlRoadmap.filter((item) => {
    if (filter === 'all') return true;
    return item.status === filter;
  });

  return (
    <section id="ml-roadmap" className="relative z-10 py-24 lg:py-32 border-t border-stone-200/80 dark:border-[#1a1a1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Pill Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-6"
        >
          <Compass size={13} />
          <span>ALGORITHMIC FOUNDATIONS & SPECIALIZATION</span>
        </motion.div>

        {/* Heading & Progress Overview */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-[#f5f5f7] font-['Poppins'] mb-3">
              My AI / ML Journey
            </h2>
            <p className="text-stone-600 dark:text-[#a1a1aa] text-base max-w-2xl leading-relaxed">
              A transparent, structured progression tracing my journey from algorithmic foundations to end-to-end production ML pipelines and autonomous LLM agents.
            </p>
          </div>

          {/* Progress Bar Card */}
          <div className="bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] rounded-2xl p-6 min-w-[310px] shadow-sm">
            <div className="flex items-center justify-between text-xs font-mono mb-2.5">
              <span className="text-stone-600 dark:text-[#a1a1aa] font-semibold">Roadmap Mastery</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">{progressPercent}%</span>
            </div>
            <div className="w-full h-2.5 bg-stone-100 dark:bg-[#1a1b22] rounded-full overflow-hidden mb-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${progressPercent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
              />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-stone-500 dark:text-[#71717a]">
              <span>{completedCount} Mastered</span>
              <span>{inProgressCount} Active</span>
              <span>{upcomingCount} Next</span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <div className="flex items-center gap-1.5 text-xs font-mono text-stone-500 dark:text-[#71717a] mr-2">
            <Filter size={13} />
            <span>Filter:</span>
          </div>
          {[
            { id: 'all', label: `All Milestones (${totalCount})` },
            { id: 'done', label: `Mastered (${completedCount})` },
            { id: 'learning', label: `In Progress (${inProgressCount})` },
            { id: 'upcoming', label: `Target Horizons (${upcomingCount})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                filter === tab.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white dark:bg-[#121316] text-stone-600 dark:text-[#a1a1aa] hover:bg-stone-100 dark:hover:bg-white/[0.06] border border-stone-200/90 dark:border-[#1f2026]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Roadmap Cards Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => {
            const isDone = item.status === 'done';
            const isLearning = item.status === 'learning';
            return (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className={`p-5 rounded-2xl border transition-all duration-300 relative ${
                  isDone
                    ? 'bg-white dark:bg-[#121316] border-stone-200/90 dark:border-[#1f2026] hover:border-emerald-500/40 shadow-sm'
                    : isLearning
                    ? 'bg-gradient-to-b from-blue-500/5 to-white dark:to-[#121316] border-blue-500/40 shadow-md shadow-blue-500/5'
                    : 'bg-stone-50/50 dark:bg-[#0f1013] border-stone-200/50 dark:border-[#191a20] opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-stone-400 dark:text-[#52525b]">
                    #{String(item.id).padStart(2, '0')}
                  </span>
                  {isDone && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 size={11} /> Mastered
                    </span>
                  )}
                  {isLearning && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 animate-pulse">
                      <Clock size={11} /> In Progress
                    </span>
                  )}
                  {!isDone && !isLearning && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-stone-100 dark:bg-white/[0.04] text-stone-500 dark:text-[#71717a] border border-stone-200 dark:border-[#222428]">
                      <Sparkles size={11} /> Next
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-stone-900 dark:text-white font-['Poppins'] mb-2 leading-snug">
                  {item.label}
                </h3>
                <p className="text-xs text-stone-600 dark:text-[#a1a1aa] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
