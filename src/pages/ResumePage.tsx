import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Download,
  Printer,
  Copy,
  Check,
  ExternalLink,
  ArrowLeft,
  FileText,
  Eye,
  Sparkles,
  Briefcase,
  GraduationCap,
  Code2,
  Trophy,
  Award,
  Layers,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';
import { resumeData } from '@/data/resume';

type ViewMode = 'paper' | 'interactive' | 'pdf';

export default function ResumePage() {
  const [viewMode, setViewMode] = useState<ViewMode>('paper');
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const md = `# ${resumeData.name}
${resumeData.location} - ${resumeData.pincode} | ${resumeData.phone}
${resumeData.email} | LinkedIn: ${resumeData.linkedin} | GitHub: ${resumeData.github}

## SUMMARY
${resumeData.summary}

## EDUCATION
${resumeData.education
  .map(
    (e) =>
      `### ${e.degree}, ${e.institution} (${e.period})${e.grade ? ` | ${e.grade}` : ''}${
        e.coursework ? `\nCoursework: ${e.coursework.join(', ')}` : ''
      }`
  )
  .join('\n\n')}

## TECHNICAL SKILLS
${resumeData.technicalSkills.map((s) => `- **${s.category}**: ${s.skills.join(', ')}`).join('\n')}

## SOFT SKILLS
${resumeData.softSkills.join(' | ')}

## WORK EXPERIENCE
${resumeData.workExperience
  .map(
    (w) =>
      `### ${w.role} | ${w.company} (${w.duration})\n${w.bullets.map((b) => `- ${b}`).join('\n')}`
  )
  .join('\n\n')}

## PROJECTS
${resumeData.projects
  .map(
    (p) =>
      `### ${p.title} [${p.technologies.join(', ')}]\n${p.description}`
  )
  .join('\n\n')}

## ACHIEVEMENTS
${resumeData.achievements.map((a) => `- ${a}`).join('\n')}

## CERTIFICATIONS
${resumeData.certifications.map((c) => `- ${c.name} (${c.issuer})`).join('\n')}
`;

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 print:p-0 print:pt-0 print:bg-white text-stone-900 dark:text-[#f4f4f5]">
      {/* Top Controls Toolbar (Hidden on Print) */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 mb-8 print:hidden">
        {/* Back Link & Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span>BACK TO PORTFOLIO</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold border border-blue-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>OFFICIAL RESUME • VIJAY PURANDARE</span>
          </div>
        </div>

        {/* Action Bar Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-4 rounded-3xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] shadow-sm">
          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-stone-100 dark:bg-[#181920] border border-stone-200/60 dark:border-white/[0.04]">
            <button
              onClick={() => setViewMode('paper')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'paper'
                  ? 'bg-white dark:bg-white/10 text-stone-900 dark:text-white shadow-sm'
                  : 'text-stone-500 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              <FileText size={13} />
              <span>ATS Paper View</span>
            </button>
            <button
              onClick={() => setViewMode('interactive')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'interactive'
                  ? 'bg-white dark:bg-white/10 text-stone-900 dark:text-white shadow-sm'
                  : 'text-stone-500 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              <Sparkles size={13} />
              <span>Modern Cards</span>
            </button>
            <button
              onClick={() => setViewMode('pdf')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'pdf'
                  ? 'bg-white dark:bg-white/10 text-stone-900 dark:text-white shadow-sm'
                  : 'text-stone-500 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              <Eye size={13} />
              <span>PDF Embed</span>
            </button>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 dark:bg-white/[0.05] hover:bg-stone-200 dark:hover:bg-white/[0.08] text-xs font-mono font-semibold text-stone-700 dark:text-[#d4d4d8] transition-all cursor-pointer"
              title="Copy resume text formatted in Markdown"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied MD!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy Markdown</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 dark:bg-white/[0.05] hover:bg-stone-200 dark:hover:bg-white/[0.08] text-xs font-mono font-semibold text-stone-700 dark:text-[#d4d4d8] transition-all cursor-pointer"
              title="Print resume or Save as PDF"
            >
              <Printer size={14} />
              <span>Print</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 dark:bg-white/[0.05] hover:bg-stone-200 dark:hover:bg-white/[0.08] text-xs font-mono font-semibold text-stone-700 dark:text-[#d4d4d8] transition-all cursor-pointer"
              title="Open raw PDF file in new browser tab"
            >
              <ExternalLink size={14} />
              <span>Open PDF</span>
            </a>

            <a
              href="/resume.pdf"
              download="Vijay_Purandare_Resume.pdf"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold font-['Poppins'] shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 print:max-w-none print:px-0">
        {/* ============================================================== */}
        {/* VIEW 1: ATS PAPER VIEW (Exact copy of the 1-page paper resume) */}
        {/* ============================================================== */}
        {viewMode === 'paper' && (
          <motion.article
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 md:p-16 rounded-3xl bg-white text-stone-900 border border-stone-200/90 shadow-xl font-serif dark:bg-stone-50 dark:text-stone-900 print:border-none print:shadow-none print:p-0 print:rounded-none"
            style={{
              fontFamily: '"Times New Roman", Times, Georgia, serif',
            }}
          >
            {/* Header */}
            <header className="text-center pb-4 mb-4 border-b border-stone-400">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-normal uppercase text-stone-900 mb-1">
                {resumeData.name}
              </h1>
              <div className="text-xs sm:text-sm text-stone-700 space-x-2">
                <span>{resumeData.location} - {resumeData.pincode}</span>
                <span>|</span>
                <a href={`tel:${resumeData.phone}`} className="hover:underline">{resumeData.phone}</a>
              </div>
              <div className="text-xs sm:text-sm text-stone-700 space-x-2 mt-1">
                <a href={`mailto:${resumeData.email}`} className="text-blue-800 hover:underline">
                  {resumeData.email}
                </a>
                <span>|</span>
                <a
                  href={resumeData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 hover:underline"
                >
                  LinkedIn
                </a>
                <span>|</span>
                <a
                  href={resumeData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </header>

            {/* Summary */}
            <section className="mb-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-400 pb-0.5 mb-1.5">
                Summary
              </h2>
              <p className="text-xs sm:text-[13px] leading-relaxed text-justify text-stone-800">
                {resumeData.summary}
              </p>
            </section>

            {/* Education */}
            <section className="mb-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-400 pb-0.5 mb-1.5">
                Education
              </h2>
              <div className="space-y-2 text-xs sm:text-[13px]">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-stone-900">
                      <span>{edu.degree}, {edu.institution}</span>
                      <span className="font-normal text-stone-700 shrink-0">{edu.period}</span>
                    </div>
                    <div className="text-stone-700">
                      {edu.grade && <span className="font-semibold">{edu.grade}</span>}
                      {edu.coursework && (
                        <span> | Coursework: {edu.coursework.join(', ')}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-400 pb-0.5 mb-1.5">
                Technical Skills
              </h2>
              <div className="space-y-1 text-xs sm:text-[13px] text-stone-800">
                {resumeData.technicalSkills.map((cat, idx) => (
                  <div key={idx}>
                    <span className="font-bold text-stone-900">{cat.category}: </span>
                    <span>{cat.skills.join(', ')}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Soft Skills */}
            <section className="mb-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-400 pb-0.5 mb-1.5">
                Soft Skills
              </h2>
              <p className="text-xs sm:text-[13px] text-stone-800 leading-relaxed">
                {resumeData.softSkills.join(' | ')}
              </p>
            </section>

            {/* Work Experience */}
            <section className="mb-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-400 pb-0.5 mb-1.5">
                Work Experience
              </h2>
              <div className="space-y-3">
                {resumeData.workExperience.map((work, idx) => (
                  <div key={idx} className="text-xs sm:text-[13px]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-stone-900">
                      <span>
                        {work.role} <span className="font-normal">|</span> {work.company}
                      </span>
                      <span className="font-normal text-stone-700">{work.duration}</span>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-0.5 mt-1 text-stone-800">
                      {work.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="mb-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-400 pb-0.5 mb-1.5">
                Projects
              </h2>
              <div className="space-y-3">
                {resumeData.projects.map((proj, idx) => (
                  <div key={idx} className="text-xs sm:text-[13px]">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <span className="font-bold text-stone-900">{proj.title}</span>
                      <span className="text-[11px] sm:text-xs italic text-stone-600">
                        {proj.technologies.join(', ')}
                      </span>
                    </div>
                    <p className="text-stone-800 mt-0.5 leading-relaxed text-justify">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section className="mb-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-400 pb-0.5 mb-1.5">
                Achievements
              </h2>
              <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs sm:text-[13px] text-stone-800">
                {resumeData.achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            </section>

            {/* Certifications */}
            <section className="mb-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-400 pb-0.5 mb-1.5">
                Certifications
              </h2>
              <div className="text-xs sm:text-[13px] text-stone-800">
                {resumeData.certifications.map((cert, idx) => (
                  <span key={idx}>
                    {cert.name}
                    {cert.issuer && ` – ${cert.issuer}`}
                    {idx < resumeData.certifications.length - 1 && ' | '}
                  </span>
                ))}
              </div>
            </section>
          </motion.article>
        )}

        {/* ============================================================== */}
        {/* VIEW 2: MODERN INTERACTIVE CARDS VIEW                          */}
        {/* ============================================================== */}
        {viewMode === 'interactive' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Header Hero Card */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-black font-['Poppins'] text-stone-900 dark:text-white mb-2">
                    {resumeData.name}
                  </h1>
                  <p className="text-stone-600 dark:text-[#a1a1aa] font-medium text-sm sm:text-base">
                    AI/ML Engineer • Full-Stack Developer • Software Architect
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500 dark:text-[#71717a] mt-4">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-blue-500" />
                      {resumeData.location} - {resumeData.pincode}
                    </span>
                    <a
                      href={`tel:${resumeData.phone}`}
                      className="flex items-center gap-1.5 hover:text-stone-900 dark:hover:text-white transition-colors"
                    >
                      <Phone size={13} className="text-emerald-500" />
                      {resumeData.phone}
                    </a>
                    <a
                      href={`mailto:${resumeData.email}`}
                      className="flex items-center gap-1.5 hover:text-stone-900 dark:hover:text-white transition-colors"
                    >
                      <Mail size={13} className="text-purple-500" />
                      {resumeData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={resumeData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-stone-100 dark:bg-white/[0.05] hover:bg-stone-200 dark:hover:bg-white/[0.1] text-stone-700 dark:text-[#d4d4d8] transition-all"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={resumeData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-stone-100 dark:bg-white/[0.05] hover:bg-stone-200 dark:hover:bg-white/[0.1] text-blue-600 dark:text-blue-400 transition-all"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>

              {/* Summary Statement */}
              <div className="mt-6 pt-6 border-t border-stone-200 dark:border-[#1f2026]">
                <p className="text-stone-600 dark:text-[#a1a1aa] text-xs sm:text-sm leading-relaxed">
                  {resumeData.summary}
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] shadow-sm">
              <div className="flex items-center gap-2.5 mb-6 text-stone-900 dark:text-white">
                <Briefcase size={20} className="text-blue-500" />
                <h2 className="text-xl font-bold font-['Poppins']">Work Experience</h2>
              </div>
              <div className="space-y-6">
                {resumeData.workExperience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-stone-50 dark:bg-white/[0.02] border border-stone-200/80 dark:border-[#1c1e24]"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                      <div>
                        <h3 className="text-base font-bold text-stone-900 dark:text-white font-['Poppins']">
                          {exp.role}
                        </h3>
                        <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                          {exp.company}
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold w-fit">
                        {exp.duration}
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-stone-600 dark:text-[#a1a1aa]">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Showcase */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] shadow-sm">
              <div className="flex items-center gap-2.5 mb-6 text-stone-900 dark:text-white">
                <Code2 size={20} className="text-purple-500" />
                <h2 className="text-xl font-bold font-['Poppins']">Verified Projects</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {resumeData.projects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-stone-50 dark:bg-white/[0.02] border border-stone-200/80 dark:border-[#1c1e24] flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-sm font-bold text-stone-900 dark:text-white font-['Poppins'] mb-2">
                        {proj.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {proj.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-lg bg-stone-200/70 dark:bg-white/[0.05] text-[10px] font-mono text-stone-700 dark:text-[#d4d4d8]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-stone-600 dark:text-[#a1a1aa] leading-relaxed">
                        {proj.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Categorized */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] shadow-sm">
              <div className="flex items-center gap-2.5 mb-6 text-stone-900 dark:text-white">
                <Layers size={20} className="text-emerald-500" />
                <h2 className="text-xl font-bold font-['Poppins']">Technical Competencies</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {resumeData.technicalSkills.map((cat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-stone-50 dark:bg-white/[0.02] border border-stone-200/80 dark:border-[#1c1e24]"
                  >
                    <div className="text-xs font-mono font-bold text-stone-400 dark:text-[#71717a] uppercase mb-2">
                      {cat.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-xl bg-white dark:bg-white/[0.06] border border-stone-200/90 dark:border-white/[0.08] text-xs font-medium text-stone-800 dark:text-white shadow-2xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Soft Skills Two-Column */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Education */}
              <div className="p-8 rounded-3xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] shadow-sm">
                <div className="flex items-center gap-2.5 mb-6 text-stone-900 dark:text-white">
                  <GraduationCap size={20} className="text-amber-500" />
                  <h2 className="text-xl font-bold font-['Poppins']">Education</h2>
                </div>
                <div className="space-y-4">
                  {resumeData.education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-stone-50 dark:bg-white/[0.02] border border-stone-200/80 dark:border-[#1c1e24]"
                    >
                      <div className="flex items-center justify-between text-xs font-mono text-stone-400 dark:text-[#71717a] mb-1">
                        <span>{edu.period}</span>
                        {edu.grade && (
                          <span className="font-bold text-emerald-600 dark:text-emerald-400">
                            {edu.grade}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <div className="text-xs text-stone-500 dark:text-[#a1a1aa]">
                        {edu.institution}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements & Certifications */}
              <div className="p-8 rounded-3xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2.5 mb-4 text-stone-900 dark:text-white">
                    <Trophy size={20} className="text-yellow-500" />
                    <h2 className="text-xl font-bold font-['Poppins']">Honors & Hackathons</h2>
                  </div>
                  <ul className="space-y-2 text-xs text-stone-700 dark:text-[#d4d4d8]">
                    {resumeData.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-yellow-500 font-bold">★</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-stone-200 dark:border-[#1f2026]">
                  <div className="flex items-center gap-2.5 mb-3 text-stone-900 dark:text-white">
                    <Award size={18} className="text-blue-500" />
                    <h3 className="text-sm font-bold font-['Poppins']">Certifications</h3>
                  </div>
                  <div className="space-y-2 text-xs text-stone-600 dark:text-[#a1a1aa]">
                    {resumeData.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="font-semibold text-stone-800 dark:text-white">
                          {cert.name}
                        </span>
                        <span className="text-[11px] font-mono text-stone-400">{cert.issuer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ============================================================== */}
        {/* VIEW 3: PDF EMBED VIEWER                                       */}
        {/* ============================================================== */}
        {viewMode === 'pdf' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl overflow-hidden bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] shadow-xl p-2 sm:p-4"
          >
            <div className="flex items-center justify-between p-3 border-b border-stone-200 dark:border-[#1f2026] text-xs font-mono text-stone-500 dark:text-[#71717a]">
              <span>PDF PREVIEW • 123 KB</span>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span>Full Screen</span>
                <ExternalLink size={12} />
              </a>
            </div>
            <div className="w-full h-[900px] bg-stone-100 dark:bg-[#0c0d10] rounded-2xl overflow-hidden mt-3">
              <object
                data="/resume.pdf"
                type="application/pdf"
                className="w-full h-full"
              >
                <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                  <FileText size={48} className="text-stone-400 mb-3" />
                  <p className="text-stone-700 dark:text-stone-300 font-semibold mb-4">
                    Your browser does not support inline PDF viewing.
                  </p>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs"
                  >
                    Open PDF in New Tab
                  </a>
                </div>
              </object>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
