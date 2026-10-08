import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Compass } from 'lucide-react';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24 lg:py-32 border-t border-stone-200/80 dark:border-[#1a1a1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Pill Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-6"
        >
          <Compass size={13} />
          <span>CAREER TIMELINE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-[#f5f5f7] font-['Poppins'] mb-16"
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical Timeline Rule */}
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/40 via-purple-500/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-14 sm:pl-16"
              >
                {/* Timeline Node Dot */}
                <div className="absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 border-stone-300 dark:border-[#2a2c34] bg-white dark:bg-[#0c0d10] flex items-center justify-center -translate-x-1/2 shadow-sm">
                  <div className={`w-2.5 h-2.5 rounded-full ${exp.current ? 'bg-emerald-500 animate-pulse' : 'bg-blue-600 dark:bg-blue-400'}`} />
                </div>

                {/* Experience Card */}
                <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] shadow-sm hover:shadow-lg dark:shadow-none hover:border-stone-300 dark:hover:border-[#2a2c34] transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <h3 className="text-xl font-bold text-stone-900 dark:text-white font-['Poppins']">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            Current
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-stone-500 dark:text-[#71717a] border border-stone-200 dark:border-[#22242a] capitalize">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                        <Briefcase size={14} />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-stone-500 dark:text-[#71717a]">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-stone-600 dark:text-[#a1a1aa] text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {exp.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-xs sm:text-sm text-stone-600 dark:text-[#90939f] leading-relaxed">
                        <span className="text-blue-500 font-bold mt-0.5 shrink-0">→</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-stone-100 dark:border-white/[0.05]">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-stone-100 dark:bg-[#17181f] text-stone-700 dark:text-[#a1a1aa] border border-stone-200/60 dark:border-[#22242c]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
