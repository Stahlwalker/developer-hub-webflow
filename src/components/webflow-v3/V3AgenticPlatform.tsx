import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Platform {
  name: string;
  imgSrc: string;
  accent: string;
  bg: string;
  border: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  delay: number;
  duration: number;
}

const platforms: Platform[] = [
  {
    name: 'Claude',
    imgSrc: '/images/Claude_icon.png',
    accent: '#D97757',
    bg: '#1E1310',
    border: '#3D2218',
    top: '12%',
    left: '8%',
    delay: 0,
    duration: 5.4,
  },
  {
    name: 'Postman',
    imgSrc: '/images/Postman-second.png',
    accent: '#FF6C37',
    bg: '#1E1009',
    border: '#3D2008',
    bottom: '12%',
    left: '8%',
    delay: 0.6,
    duration: 6.1,
  },
  {
    name: 'Cursor',
    imgSrc: '/images/cursor-ai.png',
    accent: '#A78BFA',
    bg: '#14122A',
    border: '#201E44',
    top: '12%',
    right: '8%',
    delay: 0.3,
    duration: 6.4,
  },
  {
    name: 'Windsurf',
    imgSrc: '/images/Windsurf-white-symbol.png',
    accent: '#5B9CF6',
    bg: '#0E1826',
    border: '#152840',
    bottom: '12%',
    right: '8%',
    delay: 0.9,
    duration: 5.9,
  },
];

function FloatingBadge({ platform }: { platform: Platform }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: platform.delay * 0.35, duration: 0.45 }}
      className="absolute"
      style={{ top: platform.top, bottom: platform.bottom, left: platform.left, right: platform.right }}
    >
      <div
        className="animate-float w-16 h-16 rounded-2xl border flex items-center justify-center flex-col gap-1.5 shadow-xl shadow-black/50"
        style={{
          background: platform.bg,
          borderColor: platform.border,
          animationDuration: `${platform.duration}s`,
          animationDelay: `${platform.delay}s`,
        }}
      >
        <img
          src={platform.imgSrc}
          alt={platform.name}
          width={28}
          height={28}
          className="object-contain"
          style={{ width: 28, height: 28 }}
        />
        <span
          className="text-[9px] font-semibold font-wf-body leading-none tracking-wide uppercase"
          style={{ color: `${platform.accent}99` }}
        >
          {platform.name}
        </span>
      </div>
    </motion.div>
  );
}

export function V3AgenticPlatform() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-wfb-black overflow-hidden">
      {/* Ambient blue glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 65%, rgba(20, 110, 245, 0.14) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* ── Text ── */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-semibold font-wf-body tracking-widest text-wfb-blue uppercase mb-3 sm:mb-4"
          >
            AI Agents
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-wf-heading font-semibold text-white mb-4 sm:mb-6 tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 5.5vw, 3.75rem)', lineHeight: 1.04 }}
          >
            Build with agents that<br className="hidden sm:block" /> understand Webflow
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-base sm:text-lg text-wfb-gray-400 font-wf-body max-w-2xl mx-auto"
            style={{ lineHeight: 1.65 }}
          >
            Connect your AI agent to Webflow's MCP. Manage CMS content, update site settings,
            and trigger deployments from Claude, Cursor, Postman, or any MCP-compatible client.
          </motion.p>

          <motion.a
            href="https://developers.webflow.com/data/docs/ai-tools"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22 }}
            className="inline-flex items-center gap-1.5 mt-6 sm:mt-8 text-sm font-semibold font-wf-heading text-wfb-blue hover:text-wfb-blue/80 transition-colors group"
          >
            View MCP docs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* ── Floating visual — desktop ── */}
        <div className="hidden md:block relative mx-auto" style={{ height: 300, maxWidth: 680 }}>
          {/* Connector lines — matched to 2×2 badge positions */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.12 }}
          >
            <line x1="50%" y1="50%" x2="15%" y2="25%" stroke="white" strokeWidth="1" strokeDasharray="4 6" />
            <line x1="50%" y1="50%" x2="15%" y2="75%" stroke="white" strokeWidth="1" strokeDasharray="4 6" />
            <line x1="50%" y1="50%" x2="85%" y2="25%" stroke="white" strokeWidth="1" strokeDasharray="4 6" />
            <line x1="50%" y1="50%" x2="85%" y2="75%" stroke="white" strokeWidth="1" strokeDasharray="4 6" />
          </svg>

          {/* Central Webflow MCP badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-wfb-gray-700 bg-wfb-gray-900 shadow-2xl shadow-black/60">
              <img src="/logos/Mark_Logo_Blue.png" alt="Webflow" width={32} height={32} className="object-contain" />
              <div>
                <p className="text-white font-semibold font-wf-heading text-base leading-tight">
                  Webflow MCP
                </p>
                <p className="text-wfb-gray-500 font-wf-body text-xs leading-tight mt-0.5">
                  Model Context Protocol
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating platform badges */}
          {platforms.map((platform) => (
            <FloatingBadge key={platform.name} platform={platform} />
          ))}
        </div>

        {/* ── Mobile/tablet layout ── */}
        <div className="md:hidden flex flex-col items-center gap-6">
          {/* 2×2 platform grid */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-[280px]">
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl border"
                style={{ background: platform.bg, borderColor: platform.border }}
              >
                <img src={platform.imgSrc} alt={platform.name} width={20} height={20} className="object-contain flex-shrink-0" style={{ width: 20, height: 20 }} />
                <span className="text-sm font-semibold font-wf-body truncate" style={{ color: `${platform.accent}cc` }}>
                  {platform.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Connector */}
          <div className="w-px h-6 bg-wfb-gray-700" />

          {/* Webflow MCP badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-wfb-gray-700 bg-wfb-gray-900 shadow-xl shadow-black/60"
          >
            <img src="/logos/Mark_Logo_Blue.png" alt="Webflow" width={28} height={28} className="object-contain" />
            <div>
              <p className="text-white font-semibold font-wf-heading text-sm leading-tight">Webflow MCP</p>
              <p className="text-wfb-gray-500 font-wf-body text-xs leading-tight mt-0.5">Model Context Protocol</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
