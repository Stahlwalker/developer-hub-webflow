import { ArrowRight, Code, Terminal, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 retro-gradient grid-pattern scanlines">
      {/* Geometric patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-32 w-64 h-64 border-2 border-terminal-cyan"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        ></motion.div>
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 border-2 border-terminal-magenta opacity-50"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        ></motion.div>
      </div>

      {/* Neon glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-48 h-48 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, transparent 70%)' }}
        ></motion.div>
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-64 h-64 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(255, 0, 255, 0.4) 0%, transparent 70%)' }}
        ></motion.div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 border border-terminal-cyan/30 bg-crt-dark/50 backdrop-blur-sm rounded-lg mb-8">
            <Terminal className="w-4 h-4 mr-2 text-terminal-cyan animate-pulse" />
            <span className="text-sm font-mono text-terminal-cyan">v2.0 • REST API</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-display"
        >
          <span className="block text-white">Build with</span>
          <span className="block text-terminal-cyan neon-text animate-glow">Webflow_</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="inline-block terminal-window p-4 sm:p-6 font-mono text-left max-w-2xl w-full mx-4 sm:mx-0">
            <div className="flex items-center gap-2 mb-4 pt-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs text-terminal-cyan/60">webflow-api-v2</span>
            </div>
            <div className="space-y-2 text-xs sm:text-sm overflow-x-auto">
              <div className="flex items-start">
                <span className="text-terminal-green mr-2 flex-shrink-0">$</span>
                <span className="text-gray-300 break-all">curl -X GET https://api.webflow.com/v2/sites</span>
              </div>
              <div className="flex items-start text-terminal-cyan/70">
                <span className="mr-2 flex-shrink-0">→</span>
                <span>200 OK • 15ms • Everything you need to build.</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <button className="group inline-flex items-center px-8 py-4 bg-terminal-cyan hover:bg-terminal-cyan/90 text-crt-darker text-lg font-bold font-mono rounded-lg transition-all hover:shadow-neon-cyan">
            <span>START_BUILDING</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="inline-flex items-center px-8 py-4 border-2 border-terminal-cyan/30 hover:border-terminal-cyan text-terminal-cyan text-lg font-bold font-mono rounded-lg transition-all hover:shadow-neon-cyan">
            <Code className="mr-2 w-5 h-5" />
            <span>VIEW_DOCS</span>
          </button>
        </motion.div>

        {/* Stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <div className="retro-card p-6 hover:scale-105 transition-all">
            <div className="flex items-center justify-center mb-4">
              <Terminal className="w-8 h-8 text-terminal-cyan" />
            </div>
            <div className="text-3xl font-bold font-mono text-terminal-cyan mb-2">REST</div>
            <p className="text-gray-400 text-sm">
              Clean, RESTful APIs with full CRUD operations
            </p>
          </div>

          <div className="retro-card p-6 hover:scale-105 transition-all">
            <div className="flex items-center justify-center mb-4">
              <Database className="w-8 h-8 text-terminal-magenta" />
            </div>
            <div className="text-3xl font-bold font-mono text-terminal-magenta mb-2">CMS</div>
            <p className="text-gray-400 text-sm">
              Powerful CMS API for dynamic content management
            </p>
          </div>

          <div className="retro-card p-6 hover:scale-105 transition-all">
            <div className="flex items-center justify-center mb-4">
              <Code className="w-8 h-8 text-terminal-green" />
            </div>
            <div className="text-3xl font-bold font-mono text-terminal-green mb-2">SDK</div>
            <p className="text-gray-400 text-sm">
              Official SDKs for JavaScript, Python, and more
            </p>
          </div>
        </motion.div>

        {/* ASCII art decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 font-mono text-xs text-terminal-cyan/30 leading-tight"
        >
          <pre>
{`   ╔══════════════════════════════════════════════════════════╗
   ║  DEVELOPER.WEBFLOW.COM                                   ║
   ╚══════════════════════════════════════════════════════════╝`}
          </pre>
        </motion.div>
      </div>
    </div>
  );
}
