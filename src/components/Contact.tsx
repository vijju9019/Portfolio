import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, MapPin, Sparkles, Terminal, Phone } from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailAddress = 'purandarevijay123@gmail.com';
  const phoneNumber = '+91 9019778187';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="relative z-10 py-24 lg:py-32 border-t border-stone-200/80 dark:border-[#1a1a1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Pill Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-6"
        >
          <Sparkles size={13} />
          <span>START A CONVERSATION</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Outreach & Pitch (6 cols) */}
          <div className="lg:col-span-6">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-[#f5f5f7] font-['Poppins'] leading-tight mb-4">
              Let's Build Something.
            </h2>
            <p className="text-stone-600 dark:text-[#a1a1aa] text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
              Have an idea, project, or problem worth solving? Whether you're exploring full-time AI/ML or SDE opportunities, hackathon collaborations, or high-impact technical initiatives — my inbox is open.
            </p>

            {/* Direct Channel Cards */}
            <div className="space-y-3.5 mb-8">
              {/* Copy Email Box */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-stone-400 dark:text-[#71717a] uppercase">DIRECT EMAIL</div>
                    <div className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white font-mono">
                      {emailAddress}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-white/[0.06] hover:bg-stone-200 dark:hover:bg-white/[0.1] text-xs font-mono font-bold text-stone-700 dark:text-white transition-all cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Phone Box */}
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] shadow-sm hover:border-emerald-500/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-stone-400 dark:text-[#71717a] uppercase">DIRECT PHONE</div>
                    <div className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white font-mono">
                      {phoneNumber}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-400">
                  Call / WhatsApp →
                </span>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] shadow-sm">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-stone-400 dark:text-[#71717a] uppercase">BASED IN</div>
                  <div className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white">
                    Bangalore, Karnataka, India - 560068
                  </div>
                </div>
              </div>
            </div>

            {/* Social Outlets */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-blue-600/20"
              >
                <Mail size={15} />
                <span>Email Me</span>
              </a>

              <a
                href="https://github.com/vijju9019"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] hover:border-stone-300 dark:hover:border-[#2a2c34] text-xs sm:text-sm font-semibold text-stone-700 dark:text-[#a1a1aa] hover:text-stone-900 dark:hover:text-white transition-all shadow-sm"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/vijay-purandare"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] hover:border-stone-300 dark:hover:border-[#2a2c34] text-xs sm:text-sm font-semibold text-stone-700 dark:text-[#a1a1aa] hover:text-stone-900 dark:hover:text-white transition-all shadow-sm"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form (6 cols) */}
          <div className="lg:col-span-6 bg-white dark:bg-[#121316] border border-stone-200/90 dark:border-[#1f2026] rounded-3xl p-7 lg:p-9 shadow-xl dark:shadow-none">
            <div className="flex items-center justify-between border-b border-stone-100 dark:border-white/[0.05] pb-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-[#71717a]">
                <Terminal size={14} className="text-blue-500" />
                <span>dispatch_transmission</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                  <Check size={24} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-white font-['Poppins'] mb-2">
                  Message Prepared!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-[#a1a1aa] max-w-sm mx-auto mb-6">
                  Thank you for reaching out. I'll review your transmission and reply to your email promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-stone-100 dark:bg-white/[0.06] text-xs font-mono text-stone-700 dark:text-white hover:bg-stone-200 cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-500 dark:text-[#71717a] mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 dark:bg-[#0a0b0d] border border-stone-200 dark:border-[#1f2026] text-xs sm:text-sm text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-[#444650] focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-stone-500 dark:text-[#71717a] mb-1.5 uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 dark:bg-[#0a0b0d] border border-stone-200 dark:border-[#1f2026] text-xs sm:text-sm text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-[#444650] focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-stone-500 dark:text-[#71717a] mb-1.5 uppercase">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Vijay, I'd like to talk about..."
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 dark:bg-[#0a0b0d] border border-stone-200 dark:border-[#1f2026] text-xs sm:text-sm text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-[#444650] focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold font-['Poppins'] shadow-lg shadow-blue-600/25 transition-all cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
