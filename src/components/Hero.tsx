import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  Download,
  FileText,
  Terminal,
  Cpu,
  GitBranch,
  BrainCircuit,
  Code2,
  Database,
  Zap,
  Shield,
  Sparkles,
} from 'lucide-react';
import { Github } from '@/components/Icons';

const ROLES = [
  'AI/ML Engineer',
  'Software Developer',
  'Full-Stack Developer',
  'AI Builder',
];

function useTypewriter(words: string[], speed = 75) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    if (waiting) {
      const t = setTimeout(() => setWaiting(false), 1700);
      return () => clearTimeout(t);
    }
    const word = words[wordIdx];
    if (!deleting && charIdx < word.length) {
      const t = setTimeout(() => {
        setDisplayed(word.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    }
    if (!deleting && charIdx === word.length) {
      setWaiting(true);
      setDeleting(true);
      return;
    }
    if (deleting && charIdx > 0) {
      const t = setTimeout(() => {
        setDisplayed(word.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, speed / 2);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }
  }, [charIdx, deleting, waiting, wordIdx, words, speed]);

  return displayed;
}

// AI Engineer's Workspace Device Mockup
function WorkspaceDevice() {
  const [activeTab, setActiveTab] = useState<'ide' | 'npu' | 'security'>('ide');
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: false }));

  useEffect(() => {
    const t = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-lg lg:max-w-xl mx-auto"
    >
      {/* Decorative Glow Blob behind workspace */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/15 rounded-3xl blur-2xl -z-10 opacity-70" />

      {/* Main Laptop / Device Mockup Shell */}
      <div className="rounded-2xl border border-stone-200/90 dark:border-[#20222a] bg-white/95 dark:bg-[#111216]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Device Chrome / Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-stone-200/80 dark:border-[#1c1e24] bg-stone-100/80 dark:bg-[#0c0d10]/90">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-[11px] font-mono text-stone-500 dark:text-[#71717a]">
              vijay@workspace:~/projects
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-stone-500 dark:text-[#71717a]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>NPU: ACTIVE</span>
            <span className="hidden sm:inline">| {time}</span>
          </div>
        </div>

        {/* Tab Navigator */}
        <div className="flex items-center border-b border-stone-200/80 dark:border-[#1c1e24] px-3 bg-stone-50/60 dark:bg-[#0e0f12]/60 text-xs font-mono">
          <button
            onClick={() => setActiveTab('ide')}
            className={`flex items-center gap-2 px-3 py-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'ide'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400 font-bold bg-white/80 dark:bg-white/[0.04]'
                : 'border-transparent text-stone-500 dark:text-[#71717a] hover:text-stone-800 dark:hover:text-white'
            }`}
          >
            <Code2 size={13} />
            <span>CloudBase-IDE.tsx</span>
          </button>
          <button
            onClick={() => setActiveTab('npu')}
            className={`flex items-center gap-2 px-3 py-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'npu'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400 font-bold bg-white/80 dark:bg-white/[0.04]'
                : 'border-transparent text-stone-500 dark:text-[#71717a] hover:text-stone-800 dark:hover:text-white'
            }`}
          >
            <BrainCircuit size={13} />
            <span>MindDesk-NPU.py</span>
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`flex items-center gap-2 px-3 py-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'security'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold bg-white/80 dark:bg-white/[0.04]'
                : 'border-transparent text-stone-500 dark:text-[#71717a] hover:text-stone-800 dark:hover:text-white'
            }`}
          >
            <Shield size={13} />
            <span>CyberWar-Twin.ts</span>
          </button>
        </div>

        {/* Interactive Workspace Body */}
        <div className="p-4 space-y-3 font-mono text-xs">
          {activeTab === 'ide' && (
            <div className="space-y-2 rounded-xl bg-stone-100/80 dark:bg-[#090a0d] p-3.5 border border-stone-200/80 dark:border-[#17181f]">
              <div className="flex items-center justify-between text-[10px] text-stone-500 dark:text-[#71717a] border-b border-stone-200 dark:border-[#1a1b22] pb-1.5">
                <span>DOCKER WORKSPACE RUNTIME</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">● ISOLATED</span>
              </div>
              <div className="space-y-1 text-[11px] leading-relaxed">
                <div><span className="text-purple-600 dark:text-purple-400">const</span> workspace = <span className="text-blue-600 dark:text-blue-400">await</span> docker.create({`{`}</div>
                <div className="pl-4 text-stone-600 dark:text-[#9498a4]">image: <span className="text-emerald-600 dark:text-emerald-400">"cloudbase:linux-node20"</span>,</div>
                <div className="pl-4 text-stone-600 dark:text-[#9498a4]">isolationLevel: <span className="text-emerald-600 dark:text-emerald-400">"container-sandboxed"</span>,</div>
                <div className="pl-4 text-stone-600 dark:text-[#9498a4]">monacoEditor: <span className="text-amber-600 dark:text-amber-400">true</span>,</div>
                <div className="pl-4 text-stone-600 dark:text-[#9498a4]">terminalStreaming: <span className="text-amber-600 dark:text-amber-400">"websocket://localhost:5001"</span></div>
                <div>{`}`});</div>
              </div>
            </div>
          )}

          {activeTab === 'npu' && (
            <div className="space-y-2 rounded-xl bg-stone-100/80 dark:bg-[#090a0d] p-3.5 border border-stone-200/80 dark:border-[#17181f]">
              <div className="flex items-center justify-between text-[10px] text-stone-500 dark:text-[#71717a] border-b border-stone-200 dark:border-[#1a1b22] pb-1.5">
                <span>QUALCOMM SNAPDRAGON NPU ACCELERATOR</span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold">● 142ms LATENCY</span>
              </div>
              <div className="space-y-1 text-[11px] leading-relaxed">
                <div><span className="text-purple-600 dark:text-purple-400">class</span> <span className="text-amber-600 dark:text-amber-400">MindDeskIntelligence</span>:</div>
                <div className="pl-4">engine = snapdragon.load_npu_context(</div>
                <div className="pl-8 text-stone-600 dark:text-[#9498a4]">model=<span className="text-emerald-600 dark:text-emerald-400">"quantized_vision_q4"</span>,</div>
                <div className="pl-8 text-stone-600 dark:text-[#9498a4]">privacy_mode=<span className="text-emerald-600 dark:text-emerald-400">"zero_cloud_leak"</span></div>
                <div className="pl-4">)</div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-2 rounded-xl bg-stone-100/80 dark:bg-[#090a0d] p-3.5 border border-stone-200/80 dark:border-[#17181f]">
              <div className="flex items-center justify-between text-[10px] text-stone-500 dark:text-[#71717a] border-b border-stone-200 dark:border-[#1a1b22] pb-1.5">
                <span>CYBERWAR ADVERSARIAL TWIN</span>
                <span className="text-rose-500 font-semibold">● ATTACK DEFENSE AGENTS</span>
              </div>
              <div className="space-y-1 text-[11px] leading-relaxed">
                <div><span className="text-rose-500">redTeam</span>.simulateIntrusion({`{ target: "port-8080" }`});</div>
                <div><span className="text-blue-500">blueTeam</span>.synthesizeDefense({`{ rule: "fail2ban-jail" }`});</div>
                <div className="text-emerald-600 dark:text-emerald-400">✓ Digital twin network node state updated</div>
              </div>
            </div>
          )}

          {/* Real-time Telemetry & GitHub Strip */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-lg bg-stone-100/80 dark:bg-[#090a0d] border border-stone-200/70 dark:border-[#17181f]">
              <div className="text-[9px] text-stone-500 dark:text-[#71717a]">GITHUB REPOS</div>
              <div className="text-sm font-bold text-stone-900 dark:text-white flex items-center gap-1">
                <GitBranch size={12} className="text-blue-500" />
                <span>13+ Live</span>
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-100/80 dark:bg-[#090a0d] border border-stone-200/70 dark:border-[#17181f]">
              <div className="text-[9px] text-stone-500 dark:text-[#71717a]">SYSTEM CORE</div>
              <div className="text-sm font-bold text-stone-900 dark:text-white flex items-center gap-1">
                <Cpu size={12} className="text-purple-500" />
                <span>NPU + ML</span>
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-100/80 dark:bg-[#090a0d] border border-stone-200/70 dark:border-[#17181f]">
              <div className="text-[9px] text-stone-500 dark:text-[#71717a]">HONORS</div>
              <div className="text-sm font-bold text-stone-900 dark:text-white flex items-center gap-1">
                <Zap size={12} className="text-amber-500" />
                <span>Top 10 Final</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Accent Badges (CvDaw Colorful Aesthetic) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute -top-5 -right-3 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 text-xs font-mono font-semibold flex items-center gap-1.5"
      >
        <Sparkles size={12} />
        <span>Snapdragon AI Lab Top 10</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-5 -left-3 px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#16171d] border border-stone-200 dark:border-[#252832] shadow-xl text-stone-800 dark:text-[#e4e4e7] text-xs font-mono font-semibold flex items-center gap-1.5"
      >
        <Shield size={12} className="text-emerald-500" />
        <span>Local-First Cloud IDE</span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const role = useTypewriter(ROLES, 80);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-20 pb-16 lg:py-28 overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Decorative CvDaw Shapes & Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-500/10 dark:bg-purple-600/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/3 w-60 h-60 rounded-full bg-pink-500/5 blur-3xl pointer-events-none -z-10" />

      {/* Subtle Dot Pattern Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage:
            'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Text & Personal Statement (7 cols) */}
          <div className="lg:col-span-7">
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider">
                AI • SOFTWARE • INNOVATION
              </span>
            </motion.div>

            {/* Large Heading (Poppins Bold) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-stone-900 dark:text-[#f5f5f7] font-['Poppins'] leading-[1.08] mb-6"
            >
              Building{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Intelligent Software
              </span>{' '}
              for the Real World.
            </motion.h1>

            {/* Dynamic Typewriter Role */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-center gap-2.5 mb-6 text-sm font-mono"
            >
              <span className="text-stone-400 dark:text-[#71717a]">ROLE:</span>
              <span className="px-3 py-1 rounded-lg bg-stone-200/70 dark:bg-white/[0.06] text-blue-600 dark:text-blue-400 font-semibold border border-stone-300/60 dark:border-white/[0.08]">
                {role}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="text-stone-600 dark:text-[#a1a1aa] text-base lg:text-lg leading-relaxed max-w-xl mb-9"
            >
              I'm Vijay Purandare, a Computer Science engineer and developer focused on AI, machine learning, full-stack development, and developer tools.
            </motion.p>

            {/* Action Buttons (CvDaw Vibrant CTA) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3.5 mb-10"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all cursor-pointer font-['Poppins']"
              >
                <span>View My Work</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-[#15161b] hover:bg-stone-50 dark:hover:bg-[#1a1b22] text-stone-800 dark:text-white border border-stone-200 dark:border-[#22242c] text-sm font-semibold shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Mail size={15} className="text-blue-500" />
                <span>Let's Connect</span>
              </button>

              <Link
                to="/resume"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-100 dark:bg-white/[0.04] hover:bg-stone-200 dark:hover:bg-white/[0.08] text-stone-700 dark:text-[#a1a1aa] hover:text-stone-900 dark:hover:text-white text-sm font-semibold transition-all cursor-pointer border border-stone-200/60 dark:border-transparent font-['Poppins']"
              >
                <FileText size={15} />
                <span>Resume</span>
              </Link>
            </motion.div>

            {/* Quick Profile Strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500 dark:text-[#71717a] pt-6 border-t border-stone-200/80 dark:border-[#1a1a1e]">
              <a
                href="https://github.com/vijju9019"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-stone-700 dark:text-[#a1a1aa] hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                <Github size={15} />
                <span>github.com/vijju9019</span>
              </a>
              <span>•</span>
              <span>Bengaluru, India</span>
              <span>•</span>
              <span>B.E. CSE</span>
            </div>
          </div>

          {/* Right Column: AI Engineer's Workspace (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <WorkspaceDevice />
          </div>
        </div>
      </div>
    </section>
  );
}
