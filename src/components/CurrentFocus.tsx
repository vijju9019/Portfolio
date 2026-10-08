import { motion } from 'framer-motion';
import { Hammer, Sparkles, Flame, Terminal } from 'lucide-react';

const FOCUS_ITEMS = [
  {
    title: 'AI-Powered Developer Tools',
    status: 'BUILDING',
    statusColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    dotColor: 'bg-emerald-500',
    description:
      'Refining CloudBase IDE container orchestration and Monaco integration for frictionless on-device code editing with container-level security.',
    tags: ['Docker', 'Monaco', 'Electron', 'TypeScript'],
  },
  {
    title: 'Machine Learning Applications',
    status: 'LEARNING',
    statusColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    dotColor: 'bg-blue-500',
    description:
      'Advancing from classical scikit-learn models toward end-to-end MLOps deployment with MLflow, drift detection, and quantized neural inference.',
    tags: ['MLOps', 'FastAPI', 'scikit-learn', 'Docker'],
  },
  {
    title: 'Autonomous AI Systems',
    status: 'EXPERIMENTING',
    statusColor: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    dotColor: 'bg-purple-500',
    description:
      'Experimenting with multi-agent coordination, CyberWar Red vs Blue adversarial simulation, and structured reasoning loops.',
    tags: ['AI Agents', 'Adversarial RL', 'Python', 'WebSockets'],
  },
];

export default function CurrentFocus() {
  return (
    <section id="focus" className="relative z-10 py-20 lg:py-28 border-t border-stone-200/80 dark:border-[#1a1a1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-2">
              <Flame size={14} className="animate-pulse" />
              <span>LAB EXPERIMENTS & ROADMAP</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-[#f5f5f7] font-['Poppins']">
              Currently Building
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 dark:bg-white/[0.05] border border-stone-200 dark:border-[#22242a] text-xs font-mono text-stone-600 dark:text-[#a1a1aa]">
            <Terminal size={13} />
            <span>Active Sprint Q1-Q2 2026</span>
          </div>
        </div>

        {/* 3 Status Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {FOCUS_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] hover:border-stone-300 dark:hover:border-[#2a2c34] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider border ${item.statusColor}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full animate-ping ${item.dotColor}`} />
                    <span>● {item.status}</span>
                  </span>
                  <Hammer size={15} className="text-stone-400 dark:text-stone-600" />
                </div>

                <h3 className="text-lg font-bold text-stone-900 dark:text-white font-['Poppins'] mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-600 dark:text-[#a1a1aa] text-xs leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-stone-100 dark:border-white/[0.05]">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-stone-100 dark:bg-[#17181d] text-stone-600 dark:text-[#888b94] border border-stone-200/60 dark:border-[#22242b]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
