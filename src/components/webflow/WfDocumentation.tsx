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

export function WfDocumentation() {
  return (
    <section id="docs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans mb-4 text-wf-dark tracking-tight"
          >
            Documentation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-wf-gray-500 font-sans max-w-2xl mx-auto"
          >
            Everything you need to ship with the Webflow API
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="group bg-white border border-wf-gray-200 rounded-xl p-6 hover:border-wf-gray-300 hover:bg-wf-gray-50 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 bg-wf-blue-light rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-wf-blue" />
                </div>

                <h3 className="text-lg font-semibold font-sans text-wf-dark mb-2 group-hover:text-wf-blue transition-colors">
                  {section.title}
                </h3>

                <p className="text-wf-gray-500 text-sm font-sans leading-relaxed mb-4">
                  {section.description}
                </p>

                <div className="flex items-center text-sm font-medium font-sans text-wf-blue opacity-0 group-hover:opacity-100 transition-opacity">
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
