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

export function V2DeveloperProducts() {
  return (
    <section id="products" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-wfb-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-wf-heading font-semibold mb-3 sm:mb-4 text-wfb-black tracking-tight"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', lineHeight: 1.04 }}
          >
            Developer Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-wfb-gray-500 font-wf-body max-w-2xl mx-auto"
            style={{ lineHeight: 1.6 }}
          >
            Build, extend, and scale with Webflow's developer platform
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                className="group bg-white border border-wfb-gray-200 rounded-lg p-5 sm:p-6 hover:border-wfb-black/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-wfb-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-wfb-blue" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold font-wf-heading text-wfb-black group-hover:text-wfb-blue transition-colors">
                    {product.title}
                  </h3>
                </div>

                <p className="text-wfb-gray-500 text-sm font-wf-body mb-3 sm:mb-4" style={{ lineHeight: 1.6 }}>
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] sm:text-xs font-medium font-wf-body px-2 sm:px-2.5 py-0.5 sm:py-1 bg-wfb-gray-100 text-wfb-gray-600 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-sm font-medium font-wf-heading text-wfb-blue transition-colors">
                  Learn more
                  <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* SDK install — monochromatic terminal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-16 text-center"
        >
          <div className="inline-block bg-wfb-black rounded-lg p-4 sm:p-6 font-mono w-full max-w-lg border border-wfb-gray-800">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-wfb-gray-700"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-wfb-gray-700"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-wfb-gray-700"></div>
            </div>
            <div className="text-left space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs md:text-sm">
              <div className="text-wfb-blue">$ npm install @webflow/sdk</div>
              <div className="text-wfb-gray-400">→ Installing Webflow SDK...</div>
              <div className="text-wfb-gray-500">→ Ready to build amazing things</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
