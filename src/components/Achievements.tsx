import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Award, Sparkles } from 'lucide-react';
import { achievements, certifications } from '@/data/achievements';
import type { Achievement } from '@/data/achievements';

const ICON_MAP = {
  trophy: Trophy,
  medal: Medal,
  star: Star,
  award: Award,
};

const TYPE_STYLES = {
  winner: {
    badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    dot: 'bg-amber-500',
    border: 'hover:border-amber-500/40',
  },
  finalist: {
    badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    dot: 'bg-blue-500',
    border: 'hover:border-blue-500/40',
  },
  participant: {
    badge: 'bg-stone-200/70 dark:bg-white/[0.06] text-stone-600 dark:text-[#a1a1aa] border-stone-300 dark:border-white/[0.08]',
    dot: 'bg-stone-400 dark:bg-[#71717a]',
    border: 'hover:border-stone-400 dark:hover:border-stone-600',
  },
  recognition: {
    badge: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    dot: 'bg-purple-500',
    border: 'hover:border-purple-500/40',
  },
};

export default function Achievements() {
  const topHonors = achievements.filter((a) => a.type === 'winner' || a.type === 'finalist');

  return (
    <section id="achievements" className="relative z-10 py-24 lg:py-32 border-t border-stone-200/80 dark:border-[#1a1a1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Pill Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-6"
        >
          <Trophy size={13} />
          <span>HONORS & HACKATHONS</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-[#f5f5f7] font-['Poppins'] mb-3">
            Recognition & Awards
          </h2>
          <p className="text-stone-600 dark:text-[#a1a1aa] text-base max-w-xl">
            National hackathon grand finales, innovation challenges, and technology competitions.
          </p>
        </motion.div>

        {/* Top Recognition Highlights Banner (CvDaw Colorful Feel) */}
        {topHonors.length > 0 && (
          <div className="mb-10 p-6 lg:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-purple-500/10 border border-amber-500/20 dark:border-amber-500/20">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-4">
              <Sparkles size={14} />
              <span>Marquee National Recognitions</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {topHonors.slice(0, 3).map((a) => (
                <div key={a.id} className="p-4 rounded-2xl bg-white/80 dark:bg-[#121316]/80 border border-stone-200/80 dark:border-white/[0.08] shadow-sm">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <Award size={18} className="text-amber-500 shrink-0" />
                    <span className="text-sm font-bold text-stone-900 dark:text-white font-['Poppins'] leading-tight">
                      {a.title}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 pl-7">
                    {a.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Achievement Cards Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {achievements.map((ach, i) => {
            const Icon = ICON_MAP[ach.icon];
            const styles = TYPE_STYLES[ach.type];
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className={`p-6 rounded-2xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] ${styles.border} shadow-sm transition-all duration-300 flex items-start gap-4`}
              >
                <div className="p-3 rounded-xl bg-stone-100 dark:bg-white/[0.05] border border-stone-200/80 dark:border-white/[0.05] shrink-0 text-stone-700 dark:text-[#d4d4d8]">
                  <Icon size={20} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-base font-bold text-stone-900 dark:text-white font-['Poppins'] leading-tight">
                      {ach.title}
                    </h3>
                    <span className="text-stone-400 dark:text-[#71717a] text-xs font-mono font-bold shrink-0">
                      {ach.year}
                    </span>
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border mb-2.5 ${styles.badge}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
                    <span>{ach.subtitle}</span>
                  </div>

                  <p className="text-stone-600 dark:text-[#a1a1aa] text-xs leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Row */}
        <div className="p-6 lg:p-8 rounded-3xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-6">
            <Award size={16} />
            <span>Official Technical Certifications</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-stone-50 dark:bg-white/[0.03] border border-stone-200/80 dark:border-[#1c1e24] flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                    {cert.issuer}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white font-['Poppins'] leading-snug">
                    {cert.title}
                  </h4>
                </div>
                <div className="text-[11px] font-mono text-stone-400 dark:text-[#71717a] mt-3">
                  Verified Credential • {cert.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
