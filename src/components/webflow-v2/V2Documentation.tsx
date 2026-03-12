import { Book, Code2, Rocket, Shield, Zap, Database, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const docSections = [
  {
    icon: Rocket,
    title: 'Getting Started',
    description: 'Bootstrap your dev environment and fire your first API call',
  },
  {
    icon: Shield,
    title: 'Authentication',
    description: 'OAuth 2.0 flow and secure request signing',
  },
  {
    icon: Database,
    title: 'CMS API',
    description: 'CRUD operations for collections and dynamic content',
  },
  {
    icon: Code2,
    title: 'Sites API',
    description: 'Programmatic site management and deployment',
  },
  {
    icon: Zap,
    title: 'Webhooks',
    description: 'Real-time event streaming and notifications',
  },
  {
    icon: Book,
    title: 'Best Practices',
    description: 'Rate limits, error handling, and performance tips',
  },
];

export function V2Documentation() {
  return (
    <section id="docs" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-wf-heading font-semibold mb-3 sm:mb-4 text-wfb-black tracking-tight"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', lineHeight: 1.04 }}
          >
            Documentation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-wfb-gray-500 font-wf-body max-w-2xl mx-auto"
            style={{ lineHeight: 1.6 }}
          >
            Everything you need to ship with the Webflow API
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {docSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white border border-wfb-gray-200 rounded-lg p-5 sm:p-6 hover:border-wfb-black/20 transition-all"
              >
                <div className="w-10 h-10 bg-wfb-gray-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 text-wfb-blue" />
                </div>

                <h3
                  className="font-semibold font-wf-heading text-wfb-black mb-2 group-hover:text-wfb-blue transition-colors text-lg sm:text-xl"
                >
                  {section.title}
                </h3>

                <p className="text-wfb-gray-500 text-sm font-wf-body mb-3 sm:mb-4" style={{ lineHeight: 1.6 }}>
                  {section.description}
                </p>

                <div className="flex items-center text-sm font-medium font-wf-heading text-wfb-blue sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  Read more
                  <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
