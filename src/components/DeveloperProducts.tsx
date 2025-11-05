import { Cloud, Code, Puzzle, Database, Zap, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    icon: Cloud,
    name: 'WEBFLOW_CLOUD',
    title: 'Webflow Cloud',
    description: 'Enterprise-grade hosting infrastructure with global CDN, auto-scaling, and 99.99% uptime SLA',
    features: ['Global CDN', 'Auto-scaling', 'DDoS Protection', 'SSL Certificates'],
    color: 'terminal-cyan',
    link: '#',
  },
  {
    icon: Code,
    name: 'CODE_COMP',
    title: 'Code Components',
    description: 'Build custom React components that integrate seamlessly into the Webflow Designer',
    features: ['React Integration', 'Visual Editing', 'Type Safety', 'Hot Reload'],
    color: 'terminal-green',
    link: '#',
  },
  {
    icon: Database,
    name: 'REST_API',
    title: 'REST APIs',
    description: 'Comprehensive RESTful APIs for sites, CMS, ecommerce, and more with full CRUD operations',
    features: ['Sites API', 'CMS API', 'Ecommerce API', 'User API'],
    color: 'terminal-magenta',
    link: '#',
  },
  {
    icon: Cpu,
    name: 'MCP_SERVER',
    title: 'MCP Server',
    description: 'Model Context Protocol server for AI-powered development workflows and automation',
    features: ['AI Integration', 'Automation', 'Context Aware', 'CLI Tools'],
    color: 'terminal-cyan',
    link: '#',
  },
  {
    icon: Zap,
    name: 'WEBHOOKS',
    title: 'Webhooks',
    description: 'Real-time event notifications for site changes, form submissions, and CMS updates',
    features: ['Real-time Events', 'Retry Logic', 'Secure Payloads', 'Custom Endpoints'],
    color: 'terminal-yellow',
    link: '#',
  },
  {
    icon: Puzzle,
    name: 'EXTENSIONS',
    title: 'Designer Extensions',
    description: 'Build extensions that add custom functionality directly into the Webflow Designer',
    features: ['Custom UI', 'API Access', 'Data Sync', 'Marketplace'],
    color: 'terminal-green',
    link: '#',
  },
];

export function DeveloperProducts() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 retro-gradient scanlines relative overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold font-mono mb-4 text-terminal-cyan neon-text"
          >
            {'>'} DEVELOPER_PRODUCTS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-mono"
          >
            Build, extend, and scale with Webflow's developer platform
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.a
                key={index}
                href={product.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="retro-card p-6 hover:scale-105 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-6xl font-mono text-white/5 font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 border-2 border-${product.color} rounded flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${product.color}`} />
                  </div>
                  <div className={`text-sm font-bold font-mono text-${product.color}`}>
                    {product.name}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-terminal-cyan transition-colors">
                  {product.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono text-gray-500">
                      <span className="text-terminal-green">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-terminal-cyan/60 text-xs font-mono group-hover:text-terminal-cyan transition-colors">
                  → Learn more
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block terminal-window p-8 font-mono">
            <div className="flex items-center gap-2 mb-4 pt-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-left space-y-2 text-sm">
              <div className="text-terminal-green">$ npm install @webflow/sdk</div>
              <div className="text-terminal-cyan">→ Installing Webflow SDK...</div>
              <div className="text-gray-400">→ Ready to build amazing things</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
