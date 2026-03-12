import { ArrowRight, Code, Terminal, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export function V2Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-16 bg-white">
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
            <span className="text-xs sm:text-sm font-medium font-wf-body text-wfb-blue">v2.0 REST API — Now available</span>
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
          APIs, SDKs, and developer tools to build powerful integrations with the Webflow platform.
        </motion.p>

        {/* Code preview — dark monochromatic terminal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 sm:mb-10 px-2 sm:px-4"
        >
          <div className="inline-block bg-wfb-black rounded-lg p-4 sm:p-5 md:p-6 text-left max-w-2xl w-full border border-wfb-gray-800">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-wfb-gray-700"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-wfb-gray-700"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-wfb-gray-700"></div>
              <span className="ml-1.5 sm:ml-2 text-[10px] sm:text-xs text-wfb-gray-500 font-mono">terminal</span>
            </div>
            <div className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs md:text-sm font-mono overflow-x-auto">
              <div className="text-wfb-gray-300">
                <span className="text-wfb-blue">$</span> curl -X GET https://api.webflow.com/v2/sites
              </div>
              <div className="text-wfb-gray-500">
                → 200 OK · 15ms · Everything you need to build.
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
          <a href="#" className="group inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-wfb-blue hover:bg-wfb-blue/90 text-white text-base sm:text-lg font-semibold font-wf-heading rounded-lg transition-all min-h-[48px]">
            Start building
            <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#docs" className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-white border border-wfb-gray-200 hover:border-wfb-gray-300 text-wfb-black text-base sm:text-lg font-semibold font-wf-heading rounded-lg transition-all min-h-[48px]">
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
            { icon: Terminal, label: 'REST', desc: 'Clean, RESTful APIs with full CRUD operations' },
            { icon: Database, label: 'CMS', desc: 'Powerful CMS API for dynamic content management' },
            { icon: Code, label: 'SDK', desc: 'Official SDKs for JavaScript, Python, and more' },
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
