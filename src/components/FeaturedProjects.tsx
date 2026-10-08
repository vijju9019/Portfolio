import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ExternalLink,
  ArrowRight,
  Cpu,
  Layers,
  Database,
  Shield,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { Github } from '@/components/Icons';
import type { FeaturedProject } from '@/data/projects';

// CSS-generated visual identities for each project type
function IDEVisual() {
  return (
    <div className="w-full h-48 rounded-xl bg-stone-900 dark:bg-[#0a0a0d] border border-stone-800 dark:border-[#1a1a22] overflow-hidden font-mono text-[10px] shadow-inner">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-stone-800 dark:border-[#1a1a22] bg-stone-950/80 dark:bg-[#0d0d12]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-stone-400 dark:text-[#71717a]">CloudBase IDE — workspace.ts</span>
        <span className="ml-auto text-[9px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
          CONTAINER ISOLATION
        </span>
      </div>
      <div className="flex h-full">
        {/* File tree */}
        <div className="w-28 border-r border-stone-800 dark:border-[#1a1a22] px-2.5 py-2 shrink-0 bg-stone-950/40 text-[9px]">
          <div className="text-stone-500 mb-1.5 font-bold uppercase">Files</div>
          {['src/', ' ├ docker.ts', ' ├ sandbox.ts', ' ├ monaco.tsx', ' └ ws_pty.ts', 'docker-compose.yml'].map((f) => (
            <div key={f} className={`leading-5 ${f.startsWith(' ') ? 'text-stone-300 dark:text-[#a1a1aa] pl-1' : 'text-stone-500 font-semibold'}`}>
              {f}
            </div>
          ))}
        </div>
        {/* Code Editor */}
        <div className="flex-1 px-3 py-2 text-[10px]">
          {[
            { c: '#71717a', t: '// Local-first containerized workspace' },
            { c: '#93c5fd', t: "import { Workspace } from '@cloudbase/core';" },
            { c: '#ffffff', t: '' },
            { c: '#c084fc', t: 'export const instance = new Workspace({' },
            { c: '#4ade80', t: '  isolation: "docker-isolated",' },
            { c: '#4ade80', t: '  privacy: "local-first-zero-leak",' },
            { c: '#f59e0b', t: '  terminalPty: true,' },
            { c: '#c084fc', t: '});' },
          ].map((l, i) => (
            <div key={i} style={{ color: l.c }} className="leading-4 font-mono">
              {l.t || '\u00A0'}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkspaceVisual() {
  return (
    <div className="w-full h-48 rounded-xl bg-stone-900 dark:bg-[#0d0d14] border border-stone-800 dark:border-[#1d1d2b] overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-950 dark:bg-[#0a0a10] border-b border-stone-800 dark:border-[#1a1a28]">
        <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
        <div className="w-2 h-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-stone-400 dark:text-[#52527a] text-[9px] font-mono">GWorkspace Enterprise OS</span>
      </div>
      <div className="relative h-full bg-gradient-to-br from-stone-900 to-indigo-950/30 p-2.5">
        {[
          { x: 5, y: 5, w: 55, h: 32, title: 'Terminal Window' },
          { x: 65, y: 5, w: 30, h: 26, title: 'Virtual Drive' },
          { x: 10, y: 44, w: 45, h: 28, title: 'Editor' },
          { x: 60, y: 38, w: 35, h: 28, title: 'Browser Shell' },
        ].map((win) => (
          <div
            key={win.title}
            style={{
              position: 'absolute',
              left: `${win.x}%`,
              top: `${win.y}%`,
              width: `${win.w}%`,
              height: `${win.h}%`,
            }}
            className="rounded-lg border border-indigo-500/30 bg-stone-900/90 dark:bg-[#121222]/90 shadow-lg overflow-hidden"
          >
            <div className="flex items-center gap-1 px-2 py-0.5 bg-stone-800 dark:bg-[#18182e] border-b border-indigo-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span className="text-[8px] text-stone-300 dark:text-[#a5b4fc] font-mono">{win.title}</span>
            </div>
          </div>
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-stone-950/90 border-t border-indigo-900/40 flex items-center px-3 gap-2">
          {['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'].map((c, i) => (
            <div key={i} style={{ background: c }} className="w-2.5 h-2.5 rounded-sm" />
          ))}
          <span className="ml-auto text-[8px] font-mono text-stone-500">GWorkspace Desktop v2.4</span>
        </div>
      </div>
    </div>
  );
}

function CybersecVisual() {
  return (
    <div className="w-full h-48 rounded-xl bg-stone-900 dark:bg-[#0a0c10] border border-stone-800 dark:border-[#192230] overflow-hidden font-mono text-[9px] p-3 space-y-2">
      <div className="flex items-center justify-between border-b border-stone-800 dark:border-[#1d2636] pb-1.5">
        <div className="flex items-center gap-1.5 text-emerald-400">
          <Shield size={12} />
          <span className="font-bold">CYBERWAR AI DIGITAL TWIN</span>
        </div>
        <span className="text-rose-400 flex items-center gap-1 text-[8px] bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20">
          ● ADVERSARIAL ACTIVE
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="p-2 rounded-lg bg-rose-950/20 border border-rose-900/30 text-rose-300">
          <div className="text-[8px] text-rose-400 uppercase font-bold mb-1">Red Team Agent</div>
          <div>Probe: Nmap SYN Scan</div>
          <div className="text-[8px] text-stone-400">Target: Port 80, 443, 8080</div>
        </div>
        <div className="p-2 rounded-lg bg-emerald-950/20 border border-emerald-900/30 text-emerald-300">
          <div className="text-[8px] text-emerald-400 uppercase font-bold mb-1">Blue Team Agent</div>
          <div>Defend: Dynamic Jail Rule</div>
          <div className="text-[8px] text-stone-400">Fail2Ban Applied: 0.18s</div>
        </div>
      </div>
      <div className="p-2 rounded bg-stone-950 dark:bg-[#07090d] border border-stone-800 text-[9px] text-stone-300 flex items-center justify-between">
        <span className="text-blue-400">Digital Twin Topology:</span>
        <span className="text-emerald-400 font-bold">12 Nodes Protected (Zero Leak)</span>
      </div>
    </div>
  );
}

function AIDesktopVisual() {
  return (
    <div className="w-full h-48 rounded-xl bg-stone-900 dark:bg-[#0a0a0e] border border-stone-800 dark:border-[#1a1a22] overflow-hidden font-mono text-[9px] p-3 space-y-2.5">
      <div className="flex items-center justify-between border-b border-stone-800 pb-1.5">
        <div className="flex items-center gap-1.5 text-purple-400">
          <Cpu size={12} />
          <span className="font-bold">MINDDESK AI — ON-DEVICE NPU</span>
        </div>
        <span className="text-amber-400 text-[8px] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
          SNAPDRAGON LAB TOP 10
        </span>
      </div>
      <div className="space-y-1.5 text-stone-300">
        {[
          { label: 'Screen Context Engine', val: 'Quantized Vision Q4', color: 'text-blue-400' },
          { label: 'Hardware Accelerator', val: 'Qualcomm Snapdragon NPU', color: 'text-purple-400' },
          { label: 'Inference Latency', val: '142ms Local', color: 'text-emerald-400' },
          { label: 'Privacy Guarantee', val: '100% On-Device (No Cloud)', color: 'text-emerald-400' },
        ].map((s) => (
          <div key={s.label} className="flex items-center justify-between text-[10px]">
            <span className="text-stone-400">{s.label}:</span>
            <span className={`font-semibold ${s.color}`}>{s.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DataVisual() {
  return (
    <div className="w-full h-48 rounded-xl bg-stone-900 dark:bg-[#0a0a0d] border border-stone-800 dark:border-[#1a1a22] overflow-hidden font-mono text-[9px] p-3 space-y-2">
      <div className="flex items-center justify-between border-b border-stone-800 pb-1.5 text-emerald-400">
        <div className="flex items-center gap-1.5">
          <Database size={12} />
          <span className="font-bold">THIRANEX ML PIPELINE</span>
        </div>
        <span className="text-stone-400 text-[8px]">4 ENTERPRISE ML PROJECTS</span>
      </div>
      <div className="space-y-1 text-stone-300 text-[10px]">
        <div>✓ Customer Churn Classifier: <span className="text-emerald-400 font-bold">XGBoost ROC 0.91</span></div>
        <div>✓ Automated Data Cleaning: <span className="text-blue-400 font-bold">Scikit-learn Imputer</span></div>
        <div>✓ Retail Sales Forecasting: <span className="text-purple-400 font-bold">Time Series Regression</span></div>
        <div>✓ Exploratory Analytics: <span className="text-amber-400 font-bold">High-Dim Correlation</span></div>
      </div>
    </div>
  );
}

const VISUALS: Record<string, React.ReactNode> = {
  ide: <IDEVisual />,
  workspace: <WorkspaceVisual />,
  cybersec: <CybersecVisual />,
  'ai-desktop': <AIDesktopVisual />,
  data: <DataVisual />,
};

interface FeaturedProjectsProps {
  projects: FeaturedProject[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const flagship = projects.find((p) => p.slug === 'cloudbase-ide') || projects[0];
  const others = projects.filter((p) => p.slug !== flagship?.slug);

  return (
    <section id="projects" className="relative z-10 py-24 lg:py-32 border-t border-stone-200/80 dark:border-[#1a1a1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Pill & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4"
            >
              <Sparkles size={12} />
              <span>SELECTED WORK & CASE STUDIES</span>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-[#f5f5f7] font-['Poppins']">
              Featured Projects
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-stone-600 dark:text-[#a1a1aa] text-sm lg:text-base max-w-md leading-relaxed">
              Some of the systems and products I've built.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-blue-600 dark:text-blue-400 hover:underline shrink-0"
            >
              <span>View All Projects</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* FLAGSHIP PROJECT: CloudBase IDE (Large Visual Hero Card) */}
        {flagship && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#121316] border border-blue-500/30 dark:border-blue-500/20 shadow-xl dark:shadow-none relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 via-purple-500/10 to-transparent rounded-bl-full pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Details (6 cols) */}
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-blue-600 text-white tracking-wider">
                    FLAGSHIP SYSTEM
                  </span>
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-medium">
                    {flagship.category}
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-extrabold text-stone-900 dark:text-white font-['Poppins'] mb-3">
                  {flagship.title}
                </h3>

                <p className="text-stone-600 dark:text-[#a1a1aa] text-sm lg:text-base leading-relaxed mb-6">
                  {flagship.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {flagship.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-stone-100 dark:bg-white/[0.05] text-stone-700 dark:text-[#a1a1aa] border border-stone-200/80 dark:border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to={`/projects/${flagship.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-md shadow-blue-600/25 transition-all cursor-pointer font-['Poppins']"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight size={15} />
                  </Link>

                  <a
                    href={flagship.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-100 dark:bg-white/[0.06] hover:bg-stone-200 dark:hover:bg-white/[0.1] text-stone-800 dark:text-white text-sm font-semibold transition-all border border-stone-200/80 dark:border-[#22242a]"
                  >
                    <Github size={16} />
                    <span>GitHub Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Visual (6 cols) */}
              <div className="lg:col-span-6">
                <IDEVisual />
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Featured Projects Grid (Bento/Card layout) */}
        <div className="grid md:grid-cols-2 gap-8">
          {others.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl p-7 bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] shadow-sm hover:shadow-xl dark:shadow-none hover:border-stone-300 dark:hover:border-[#2a2c34] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Identity */}
                <div className="mb-6 rounded-xl overflow-hidden">
                  {VISUALS[project.visual] || <div className="h-44 bg-stone-900 rounded-xl" />}
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-white/[0.05] text-blue-600 dark:text-blue-400 border border-stone-200/80 dark:border-white/[0.06]">
                    {project.category}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-stone-400 hover:text-stone-800 dark:hover:text-white transition-colors"
                    aria-label={`GitHub for ${project.title}`}
                  >
                    <Github size={16} />
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-stone-900 dark:text-white font-['Poppins'] mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-stone-500 dark:text-[#71717a] mb-4">
                  {project.tagline}
                </p>
                <p className="text-stone-600 dark:text-[#a1a1aa] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-stone-100 dark:bg-[#17181f] text-stone-600 dark:text-[#a1a1aa] border border-stone-200/60 dark:border-[#22242c]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-stone-100 dark:border-[#1a1b20]">
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors font-['Poppins']"
                >
                  <span>Detailed Case Study</span>
                  <ArrowRight size={14} />
                </Link>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-stone-500 hover:text-stone-800 dark:hover:text-[#a1a1aa] flex items-center gap-1"
                >
                  <span>Source Code</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
