import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '@/data/skills';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const active = skillCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="skills" className="relative z-10 py-24 lg:py-32 border-t border-stone-200/80 dark:border-[#1a1a1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Pill Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-6"
        >
          <Wrench size={13} />
          <span>CORE CAPABILITIES</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-[#f5f5f7] font-['Poppins'] mb-3">
              Technology Stack
            </h2>
            <p className="text-stone-600 dark:text-[#a1a1aa] text-base max-w-xl">
              Real tools and frameworks used across production code, hackathons, and research pipelines. No fabricated proficiency meters.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-[#71717a]">
            <CheckCircle2 size={14} className="text-emerald-500" />
            <span>Interactive Tooltips Enabled</span>
          </div>
        </motion.div>

        {/* Category Navigation Pills (CvDaw Style) */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105'
                  : 'bg-white dark:bg-[#121316] text-stone-600 dark:text-[#a1a1aa] hover:bg-stone-100 dark:hover:bg-white/[0.06] hover:text-stone-900 dark:hover:text-white border border-stone-200/90 dark:border-[#1f2026]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 mb-14"
        >
          {active.skills.map((skill) => (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className={`p-4 rounded-2xl border transition-all duration-200 cursor-default flex flex-col items-center justify-center text-center min-h-[92px] ${
                  hoveredSkill === skill.name
                    ? 'border-blue-500/50 bg-gradient-to-b from-blue-500/10 to-transparent shadow-lg shadow-blue-500/10'
                    : 'border-stone-200/90 dark:border-[#1f2026] bg-white dark:bg-[#121316] hover:border-stone-300 dark:hover:border-[#2a2c34] shadow-sm'
                }`}
              >
                <div className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white font-['Poppins'] leading-tight mb-1">
                  {skill.name}
                </div>
                <span className="text-[10px] font-mono text-stone-400 dark:text-[#71717a]">
                  Verified
                </span>
              </motion.div>

              {/* Tooltip */}
              {hoveredSkill === skill.name && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 z-30 w-56 p-3 rounded-xl border border-stone-200 dark:border-[#2a2c34] bg-white dark:bg-[#181920] shadow-xl text-left pointer-events-none"
                >
                  <div className="text-[11px] font-bold text-blue-600 dark:text-blue-400 font-mono mb-1">
                    {skill.name}
                  </div>
                  <p className="text-stone-600 dark:text-[#a1a1aa] text-xs leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1.5 w-3 h-3 border-r border-b border-stone-200 dark:border-[#2a2c34] bg-white dark:bg-[#181920] rotate-45" />
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* All Technologies Compact Cloud */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono text-stone-400 dark:text-[#71717a] uppercase tracking-wider mb-4">
            <Sparkles size={13} className="text-amber-500" />
            <span>Complete Engineering Index</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillCategories.flatMap((c) => c.skills).map((s) => (
              <span
                key={`all-${s.name}`}
                className="px-3 py-1 rounded-lg border border-stone-200 dark:border-[#1f2026] bg-stone-50 dark:bg-white/[0.03] text-stone-600 dark:text-[#888b94] text-xs font-mono hover:text-stone-900 dark:hover:text-white hover:border-blue-400 transition-colors cursor-default"
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
