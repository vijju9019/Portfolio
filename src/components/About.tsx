import { motion, type Variants } from 'framer-motion';
import {
  BrainCircuit,
  Layers,
  Wrench,
  Sparkles,
  GraduationCap,
  MapPin,
  Target,
  Compass,
  Code2,
  FolderGit2,
  Trophy,
} from 'lucide-react';

const CARDS = [
  {
    icon: BrainCircuit,
    title: 'AI / ML Engineering',
    description: 'Developing intelligent systems, on-device AI models, LLM agent workflows, and data pipelines.',
    color: 'from-blue-500/10 to-blue-500/0',
    border: 'border-blue-500/20 hover:border-blue-500/50',
    iconColor: 'text-blue-600 dark:text-blue-400 bg-blue-500/10',
  },
  {
    icon: Layers,
    title: 'Full-Stack Development',
    description: 'Engineering responsive, type-safe web applications from React frontends to Node.js/FastAPI APIs.',
    color: 'from-purple-500/10 to-purple-500/0',
    border: 'border-purple-500/20 hover:border-purple-500/50',
    iconColor: 'text-purple-600 dark:text-purple-400 bg-purple-500/10',
  },
  {
    icon: Wrench,
    title: 'Developer Tools',
    description: 'Creating local-first environments, browser IDEs, and container tooling that boost developer velocity.',
    color: 'from-amber-500/10 to-amber-500/0',
    border: 'border-amber-500/20 hover:border-amber-500/50',
    iconColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/10',
  },
  {
    icon: Sparkles,
    title: 'Innovation & Products',
    description: 'Translating real-world problems into working hackathon prototypes and production-ready code.',
    color: 'from-emerald-500/10 to-emerald-500/0',
    border: 'border-emerald-500/20 hover:border-emerald-500/50',
    iconColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 lg:py-32 border-t border-stone-200/80 dark:border-[#1a1a1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Pill Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-6"
        >
          <Compass size={13} />
          <span>BACKGROUND & PROFILE</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Personal Introduction & Details (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-[#f5f5f7] font-['Poppins'] leading-tight mb-6">
              About Me
            </h2>

            <div className="space-y-4 text-stone-600 dark:text-[#a1a1aa] text-base leading-relaxed mb-8">
              <p className="text-lg text-stone-800 dark:text-[#d4d4d8] font-medium">
                I'm Vijay Purandare, a Computer Science engineer and developer focused on AI, machine learning, full-stack development, and developer tools.
              </p>
              <p>
                I thrive on building complete systems — taking complex algorithmic ideas from mathematical foundations all the way to container-isolated desktop environments and interactive web interfaces.
              </p>
              <p>
                Whether building local-first cloud development environments like <strong>CloudBase IDE</strong>, autonomous cyber digital twin defenses like <strong>CyberWar AI</strong>, or on-device NPU intelligence with <strong>MindDesk AI</strong>, my work is driven by pragmatic engineering, measurable latency, and clean user experience.
              </p>
            </div>

            {/* Quick Profile Bio Grid */}
            <div className="grid sm:grid-cols-2 gap-3 p-5 rounded-2xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] shadow-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-stone-400 dark:text-[#71717a] uppercase">Education</div>
                  <div className="text-xs font-semibold text-stone-800 dark:text-white leading-snug">
                    B.E. Computer Science (CGPA: 8.2/10.0)
                  </div>
                  <div className="text-[11px] text-stone-500 dark:text-[#a1a1aa]">Cambridge Institute of Technology (2025–2028)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-stone-400 dark:text-[#71717a] uppercase">Location</div>
                  <div className="text-xs font-semibold text-stone-800 dark:text-white leading-snug">
                    Bangalore, Karnataka, India
                  </div>
                  <div className="text-[11px] text-stone-500 dark:text-[#a1a1aa]">Available for Global Roles</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                  <Target size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-stone-400 dark:text-[#71717a] uppercase">Primary Focus</div>
                  <div className="text-xs font-semibold text-stone-800 dark:text-white leading-snug">
                    AI/ML Systems & Full-Stack Tooling
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                  <Sparkles size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-stone-400 dark:text-[#71717a] uppercase">Current Interests</div>
                  <div className="text-xs font-semibold text-stone-800 dark:text-white leading-snug">
                    On-Device NPU AI, LLM Agents & MLOps
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Personal Stats & Recognition (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="text-xs font-mono uppercase tracking-widest text-stone-400 dark:text-[#71717a] mb-2">
              Verified Metrics & Trajectory
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Public Repositories', value: '13+', sub: 'on GitHub (@vijju9019)', icon: FolderGit2, color: 'text-blue-500' },
                { label: 'Core Languages', value: '6+', sub: 'Python, TS, JS, Java...', icon: Code2, color: 'text-purple-500' },
                { label: 'Hackathons', value: '6+', sub: 'SIH, Amazon, GDG...', icon: Trophy, color: 'text-amber-500' },
                { label: 'Recognition', value: 'Top 10', sub: 'Snapdragon AI Lab & SIH', icon: Sparkles, color: 'text-emerald-500' },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="p-5 rounded-2xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] shadow-sm hover:border-stone-300 dark:hover:border-[#2a2c34] transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-extrabold text-stone-900 dark:text-white font-['Poppins']">
                        {stat.value}
                      </span>
                      <Icon size={18} className={stat.color} />
                    </div>
                    <div className="text-xs font-bold text-stone-800 dark:text-[#e4e4e7] mb-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-stone-500 dark:text-[#71717a]">
                      {stat.sub}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quote banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent border border-blue-500/20 text-stone-800 dark:text-[#e4e4e7]">
              <div className="text-xs font-mono text-blue-600 dark:text-blue-400 mb-1 font-semibold uppercase">
                Core Philosophy
              </div>
              <p className="text-xs italic leading-relaxed text-stone-600 dark:text-[#a1a1aa]">
                "Building Intelligent Software for the Real World — bridging machine learning algorithms with performant, user-centric developer products."
              </p>
            </div>
          </motion.div>
        </div>

        {/* 4 Feature Focus Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {CARDS.map(({ icon: Icon, title, description, border, iconColor }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] ${border} shadow-sm transition-all duration-300`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${iconColor}`}>
                <Icon size={20} />
              </div>
              <h3 className="text-base font-bold text-stone-900 dark:text-white font-['Poppins'] mb-2">
                {title}
              </h3>
              <p className="text-stone-600 dark:text-[#a1a1aa] text-xs leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
