import { ArrowRight, Code, Terminal, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export function WfHero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-wf-blue-light via-white to-white">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-wf-blue/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-wf-blue/3 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-wf-blue/10 rounded-full mb-8">
            <span className="text-sm font-medium font-sans text-wf-blue">v2.0 REST API — Now available</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-sans tracking-tight"
        >
          <span className="block text-wf-dark">Build with</span>
          <span className="block text-wf-blue">Webflow</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-wf-gray-500 font-sans max-w-2xl mx-auto mb-10"
        >
          APIs, SDKs, and developer tools to build powerful integrations with the Webflow platform.
        </motion.p>

        {/* Code preview */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 px-4"
        >
          <div className="inline-block bg-wf-gray-900 rounded-xl p-5 sm:p-6 text-left max-w-2xl w-full shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-wf-gray-700"></div>
              <div className="w-3 h-3 rounded-full bg-wf-gray-700"></div>
              <div className="w-3 h-3 rounded-full bg-wf-gray-700"></div>
              <span className="ml-2 text-xs text-wf-gray-500 font-mono">terminal</span>
            </div>
            <div className="space-y-2 text-xs sm:text-sm font-mono overflow-x-auto">
              <div className="text-wf-gray-300">
                <span className="text-green-400">$</span> curl -X GET https://api.webflow.com/v2/sites
              </div>
              <div className="text-wf-gray-500">
                → 200 OK · 15ms · Everything you need to build.
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-16 sm:mb-20 px-4 max-w-md sm:max-w-none mx-auto"
        >
          <a href="#" className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-wf-blue hover:bg-wf-blue-hover text-white text-base sm:text-lg font-semibold font-sans rounded-lg transition-all shadow-lg shadow-wf-blue/25">
            Start building
            <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#docs" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white border border-wf-gray-200 hover:border-wf-gray-300 hover:bg-wf-gray-50 text-wf-dark text-base sm:text-lg font-semibold font-sans rounded-lg transition-all">
            <Code className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
            View docs
          </a>
        </motion.div>

        {/* Stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Terminal, label: 'REST', desc: 'Clean, RESTful APIs with full CRUD operations' },
            { icon: Database, label: 'CMS', desc: 'Powerful CMS API for dynamic content management' },
            { icon: Code, label: 'SDK', desc: 'Official SDKs for JavaScript, Python, and more' },
          ].map((stat, index) => (
            <div key={index} className="bg-white border border-wf-gray-200 rounded-xl p-6 hover:border-wf-gray-300 hover:shadow-md transition-all">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-wf-blue-light rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-wf-blue" />
                </div>
              </div>
              <div className="text-2xl font-bold font-sans text-wf-dark mb-2">{stat.label}</div>
              <p className="text-wf-gray-500 text-sm font-sans">{stat.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
