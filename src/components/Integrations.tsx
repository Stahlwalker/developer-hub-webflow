import { Package, Store, Puzzle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const integrationCategories = [
  {
    icon: Package,
    title: 'Featured Integrations',
    count: '100+',
    description: 'Pre-built integrations with popular services',
    examples: ['Stripe', 'Zapier', 'Mailchimp', 'Google Analytics', 'Shopify', 'Airtable'],
    color: 'terminal-cyan',
  },
  {
    icon: Store,
    title: 'Marketplace Apps',
    count: '50+',
    description: 'Community-built apps and extensions',
    examples: ['SEO Tools', 'Analytics', 'Forms', 'Payments', 'CRM', 'Marketing'],
    color: 'terminal-magenta',
  },
  {
    icon: Puzzle,
    title: 'Custom Integrations',
    count: '∞',
    description: 'Build your own with our APIs',
    examples: ['REST API', 'Webhooks', 'OAuth', 'Custom Apps', 'Extensions', 'SDKs'],
    color: 'terminal-green',
  },
];

const featuredApps = [
  { name: 'Stripe Payments', category: 'Ecommerce', verified: true },
  { name: 'Google Analytics', category: 'Analytics', verified: true },
  { name: 'Mailchimp Sync', category: 'Marketing', verified: true },
  { name: 'Zapier Connect', category: 'Automation', verified: true },
  { name: 'Shopify Bridge', category: 'Ecommerce', verified: true },
  { name: 'Airtable CMS', category: 'Database', verified: true },
];

export function Integrations() {
  return (
    <section id="integrations" className="py-20 px-4 sm:px-6 lg:px-8 bg-crt-dark/30 dot-matrix">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold font-mono mb-4 text-terminal-magenta neon-text"
          >
            $ ls INTEGRATIONS/
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-mono"
          >
            Connect Webflow with your favorite tools and services
          </motion.p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {integrationCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="retro-card p-6 hover:scale-105 transition-all relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 border-2 border-${category.color} rounded flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <div className={`text-3xl font-bold font-mono text-${category.color}`}>
                    {category.count}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-white font-mono">
                  {category.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.examples.map((example, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2 py-1 bg-crt-glow/30 border border-terminal-cyan/20 rounded text-gray-300"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Apps Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="retro-card p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold font-mono text-terminal-cyan">
              FEATURED_APPS
            </h3>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-mono text-terminal-cyan hover:text-terminal-green transition-colors"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredApps.map((app, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 bg-crt-dark/50 border border-terminal-cyan/20 rounded hover:border-terminal-cyan/40 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-white group-hover:text-terminal-cyan transition-colors">
                        {app.name}
                      </span>
                      {app.verified && (
                        <span className="text-terminal-green text-xs">✓</span>
                      )}
                    </div>
                    <div className="text-xs font-mono text-gray-500">
                      {app.category}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-terminal-cyan/40 group-hover:text-terminal-cyan group-hover:translate-x-1 transition-all" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Build Your Own CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block retro-card p-8">
            <h3 className="text-2xl font-bold font-mono text-terminal-cyan mb-4">
              BUILD_YOUR_OWN
            </h3>
            <p className="text-gray-400 font-mono mb-6 max-w-xl">
              Use our APIs and SDKs to create custom integrations.
              <br />
              Publish to the marketplace and reach thousands of developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-terminal-cyan hover:bg-terminal-cyan/90 text-crt-darker font-mono font-bold rounded transition-all hover:shadow-neon-cyan">
                START_BUILDING
              </button>
              <button className="px-6 py-3 border-2 border-terminal-cyan/30 hover:border-terminal-cyan text-terminal-cyan font-mono font-bold rounded transition-all">
                VIEW_DOCS
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
