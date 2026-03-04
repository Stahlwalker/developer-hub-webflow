import { Cloud, Code, Puzzle, Database, Zap, Cpu, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    icon: Cloud,
    title: 'Webflow Cloud',
    description: 'Enterprise-grade hosting infrastructure with global CDN, auto-scaling, and 99.99% uptime SLA',
    features: ['Global CDN', 'Auto-scaling', 'DDoS Protection', 'SSL Certificates'],
  },
  {
    icon: Code,
    title: 'Code Components',
    description: 'Build custom React components that integrate seamlessly into the Webflow Designer',
    features: ['React Integration', 'Visual Editing', 'Type Safety', 'Hot Reload'],
  },
  {
    icon: Database,
    title: 'REST APIs',
    description: 'Comprehensive RESTful APIs for sites, CMS, ecommerce, and more with full CRUD operations',
    features: ['Sites API', 'CMS API', 'Ecommerce API', 'User API'],
  },
  {
    icon: Cpu,
    title: 'MCP Server',
    description: 'Model Context Protocol server for AI-powered development workflows and automation',
    features: ['AI Integration', 'Automation', 'Context Aware', 'CLI Tools'],
  },
  {
    icon: Zap,
    title: 'Webhooks',
    description: 'Real-time event notifications for site changes, form submissions, and CMS updates',
    features: ['Real-time Events', 'Retry Logic', 'Secure Payloads', 'Custom Endpoints'],
  },
  {
    icon: Puzzle,
    title: 'Designer Extensions',
    description: 'Build extensions that add custom functionality directly into the Webflow Designer',
    features: ['Custom UI', 'API Access', 'Data Sync', 'Marketplace'],
  },
];

export function WfDeveloperProducts() {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-wf-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans mb-4 text-wf-dark tracking-tight"
          >
            Developer Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-wf-gray-500 font-sans max-w-2xl mx-auto"
          >
            Build, extend, and scale with Webflow's developer platform
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white border border-wf-gray-200 rounded-xl p-6 hover:border-wf-gray-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-wf-blue-light rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-wf-blue" />
                  </div>
                  <h3 className="text-lg font-semibold font-sans text-wf-dark group-hover:text-wf-blue transition-colors">
                    {product.title}
                  </h3>
                </div>

                <p className="text-wf-gray-500 text-sm font-sans mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium font-sans px-2.5 py-1 bg-wf-gray-100 text-wf-gray-600 rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-sm font-medium font-sans text-wf-blue group-hover:text-wf-blue-hover transition-colors">
                  Learn more
                  <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* SDK install */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-wf-gray-900 rounded-xl p-6 font-mono w-full max-w-lg shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-wf-gray-700"></div>
              <div className="w-3 h-3 rounded-full bg-wf-gray-700"></div>
              <div className="w-3 h-3 rounded-full bg-wf-gray-700"></div>
            </div>
            <div className="text-left space-y-2 text-xs sm:text-sm">
              <div className="text-green-400">$ npm install @webflow/sdk</div>
              <div className="text-wf-gray-400">→ Installing Webflow SDK...</div>
              <div className="text-wf-gray-500">→ Ready to build amazing things</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
