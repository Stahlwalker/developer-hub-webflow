import { useState } from 'react';
import { ArrowRight, Code, Terminal, Database, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const INSTALL_CMD = 'npm install -g @webflow/webflow-cli';

export function V3Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(INSTALL_CMD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[140px] bg-white">
      {/* Subtle monochromatic background — single blue accent circle, no gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] rounded-full bg-wfb-blue/[0.03]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 py-12 sm:py-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 border border-wfb-blue/20 rounded-full mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-medium font-wf-body text-wfb-blue">Connect AI agents via MCP</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-wf-heading font-semibold mb-4 sm:mb-6 tracking-tight"
          style={{ fontSize: 'clamp(2.25rem, 8vw, 5.313rem)', lineHeight: 1.04 }}
        >
          <span className="block text-wfb-black">Build with</span>
          <span className="block text-wfb-blue">Webflow</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-wfb-gray-500 font-wf-body max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
          style={{ lineHeight: 1.6 }}
        >
          Webflow's developer platform gives you the control and extensibility to build, deploy, and extend your sites.
        </motion.p>

        {/* Code preview — dark monochromatic terminal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 sm:mb-10 px-2 sm:px-4"
        >
          <div className="inline-block bg-wfb-black rounded-lg text-left max-w-2xl w-full border border-wfb-gray-800">
            <div className="flex items-center justify-between px-4 sm:px-5 md:px-6 pt-4 sm:pt-5 md:pt-6">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-wfb-gray-700" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-wfb-gray-700" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-wfb-gray-700" />
                <span className="ml-1.5 sm:ml-2 text-[10px] sm:text-xs text-wfb-gray-500 font-mono">terminal</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-[10px] sm:text-xs text-wfb-gray-500 hover:text-wfb-gray-300 font-mono transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 pt-3 sm:pt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm font-mono overflow-x-auto">
              <div className="text-wfb-gray-300">
                <span className="text-wfb-blue">$</span> npm install -g <span className="text-white">@webflow/webflow-cli</span>
              </div>
              <div className="text-wfb-gray-500">
                <span className="text-wfb-blue">$</span> webflow --version
              </div>
              <div className="text-wfb-gray-600">
                → v1.12.2
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTAs — solid colors only, no shadows/gradients */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 md:mb-20 px-4"
        >
          <a href="/signup" className="group inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-wfb-blue hover:bg-wfb-blue/90 text-white text-base sm:text-lg font-semibold font-wf-heading rounded-lg transition-all min-h-[48px]">
            Get started
            <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="https://developers.webflow.com/cli/reference/webflow-cli" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-white border border-wfb-gray-200 hover:border-wfb-gray-300 text-wfb-black text-base sm:text-lg font-semibold font-wf-heading rounded-lg transition-all min-h-[48px]">
            <Code className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
            View docs
          </a>
        </motion.div>

        {/* Stats cards — monochromatic with blue accent */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Terminal, label: 'REST', desc: 'RESTful APIs for sites, pages, forms, assets, and custom code.' },
            { icon: Database, label: 'CMS', desc: 'Read, write, and publish collection content programmatically.' },
            { icon: Code, label: 'SDK', desc: 'Official SDKs for JavaScript, Python, and more.' },
          ].map((stat, index) => (
            <div key={index} className="bg-white border border-wfb-gray-200 rounded-lg p-5 sm:p-6 hover:border-wfb-black/20 transition-all">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-wfb-gray-100 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-wfb-blue" />
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-semibold font-wf-heading text-wfb-black mb-1 sm:mb-2">{stat.label}</div>
              <p className="text-wfb-gray-500 text-xs sm:text-sm font-wf-body" style={{ lineHeight: 1.6 }}>{stat.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
