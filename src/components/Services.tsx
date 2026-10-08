import { motion } from 'framer-motion';
import {
  Brain,
  Layers,
  Wrench,
  Workflow,
  Cloud,
  Bot,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

const SERVICES = [
  {
    icon: Brain,
    title: 'AI Applications',
    description:
      'Designing on-device and cloud-assisted intelligent software, computer vision tools, and custom neural model integrations that solve real-world operational challenges.',
    accent: 'from-blue-500/20 to-blue-500/0',
    borderHover: 'hover:border-blue-500/50',
    iconBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    tag: 'INTELLIGENCE',
  },
  {
    icon: Layers,
    title: 'Full-Stack Products',
    description:
      'Architecting end-to-end web applications from reactive frontends with modern state management to resilient APIs, caching tiers, and relational databases.',
    accent: 'from-purple-500/20 to-purple-500/0',
    borderHover: 'hover:border-purple-500/50',
    iconBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    tag: 'SYSTEMS',
  },
  {
    icon: Wrench,
    title: 'Developer Tools',
    description:
      'Building productivity environments, browser IDEs, Docker container isolation orchestrators, and CLI instruments that streamline engineer workflows.',
    accent: 'from-amber-500/20 to-amber-500/0',
    borderHover: 'hover:border-amber-500/50',
    iconBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    tag: 'TOOLING',
  },
  {
    icon: Workflow,
    title: 'Automation Systems',
    description:
      'Connecting fragmented APIs, event streams, and automated workflows with n8n, webhooks, and custom Python microservices to eliminate manual overhead.',
    accent: 'from-emerald-500/20 to-emerald-500/0',
    borderHover: 'hover:border-emerald-500/50',
    iconBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    tag: 'PIPELINES',
  },
  {
    icon: Cloud,
    title: 'Cloud Applications',
    description:
      'Engineering distributed virtual desktops, realtime sync systems, Supabase/Firebase architectures, and Dockerized microservices designed for zero-friction scale.',
    accent: 'from-sky-500/20 to-sky-500/0',
    borderHover: 'hover:border-sky-500/50',
    iconBg: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
    tag: 'CLOUD',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description:
      'Constructing goal-oriented autonomous agents with tool-calling capabilities, adversarial Red vs Blue simulation policies, and contextual memory stores.',
    accent: 'from-pink-500/20 to-pink-500/0',
    borderHover: 'hover:border-pink-500/50',
    iconBg: 'bg-pink-500/10 text-pink-600 dark:text-pink-400',
    tag: 'AUTONOMOUS',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 py-24 lg:py-32 border-t border-stone-200/80 dark:border-[#1a1a1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-4"
            >
              <Sparkles size={12} />
              <span>CAPABILITIES & ARCHITECTURES</span>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-[#f5f5f7] font-['Poppins']">
              What I Build
            </h2>
          </div>
          <p className="text-stone-600 dark:text-[#a1a1aa] text-sm lg:text-base max-w-md leading-relaxed">
            From algorithmic machine learning pipelines to interactive desktop platforms and developer tooling.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((serv, index) => {
            const Icon = serv.icon;
            return (
              <motion.div
                key={serv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className={`group relative p-7 rounded-2xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300 ${serv.borderHover} overflow-hidden`}
              >
                {/* Subtle colored accent glow top */}
                <div
                  className={`absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br ${serv.accent} blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500`}
                />

                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl ${serv.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={24} />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-stone-100 dark:bg-white/[0.05] text-stone-500 dark:text-[#71717a] border border-stone-200/60 dark:border-white/[0.05]">
                    {serv.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-stone-900 dark:text-white font-['Poppins'] mb-3 flex items-center justify-between">
                  <span>{serv.title}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-stone-400 group-hover:text-stone-800 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </h3>

                <p className="text-stone-600 dark:text-[#a1a1aa] text-sm leading-relaxed">
                  {serv.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
