import { Package, Store, Puzzle, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const integrationCategories = [
  {
    icon: Package,
    title: 'Featured Integrations',
    count: '100+',
    description: 'Pre-built integrations with popular services',
    examples: ['Stripe', 'Zapier', 'Mailchimp', 'Google Analytics', 'Shopify', 'Airtable'],
  },
  {
    icon: Store,
    title: 'Marketplace Apps',
    count: '50+',
    description: 'Community-built apps and extensions',
    examples: ['SEO Tools', 'Analytics', 'Forms', 'Payments', 'CRM', 'Marketing'],
  },
  {
    icon: Puzzle,
    title: 'Custom Integrations',
    count: '\u221E',
    description: 'Build your own with our APIs',
    examples: ['REST API', 'Webhooks', 'OAuth', 'Custom Apps', 'Extensions', 'SDKs'],
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

export function V2Integrations() {
  return (
    <section id="integrations" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-wfb-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-wf-heading font-semibold mb-3 sm:mb-4 text-wfb-black tracking-tight"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', lineHeight: 1.04 }}
          >
            Integrations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-wfb-gray-500 font-wf-body max-w-2xl mx-auto"
            style={{ lineHeight: 1.6 }}
          >
            Connect Webflow with your favorite tools and services
          </motion.p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {integrationCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-wfb-gray-200 rounded-lg p-5 sm:p-6 hover:border-wfb-black/20 transition-all"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="w-10 h-10 bg-wfb-gray-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-wfb-blue" />
                  </div>
                  <span className="text-xl sm:text-2xl font-semibold font-wf-heading text-wfb-blue">
                    {category.count}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold font-wf-heading text-wfb-black mb-2">
                  {category.title}
                </h3>

                <p className="text-wfb-gray-500 text-sm font-wf-body mb-3 sm:mb-4" style={{ lineHeight: 1.6 }}>
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.examples.map((example, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium font-wf-body px-2 sm:px-2.5 py-1 bg-wfb-gray-100 text-wfb-gray-600 rounded"
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-wfb-gray-200 rounded-lg p-4 sm:p-6 md:p-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-semibold font-wf-heading text-wfb-black">
              Featured Apps
            </h3>
            <a
              href="#"
              className="group inline-flex items-center gap-1.5 text-sm font-medium font-wf-heading text-wfb-blue transition-colors py-1"
            >
              View all
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {featuredApps.map((app, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="group flex items-center justify-between p-3 sm:p-4 border border-wfb-gray-200 rounded-lg hover:border-wfb-black/20 transition-all min-h-[56px]"
              >
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-medium font-wf-heading text-sm sm:text-base text-wfb-black group-hover:text-wfb-blue transition-colors">
                      {app.name}
                    </span>
                    {app.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-wfb-blue" />
                    )}
                  </div>
                  <span className="text-xs font-wf-body text-wfb-gray-500">
                    {app.category}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-wfb-gray-300 group-hover:text-wfb-blue group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-2" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Build Your Own CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="inline-block bg-white border border-wfb-gray-200 rounded-lg p-6 sm:p-8 w-full max-w-3xl">
            <h3
              className="font-semibold font-wf-heading text-wfb-black mb-3"
              style={{ fontSize: 'clamp(1.25rem, 4vw, 2.313rem)', lineHeight: 1.04 }}
            >
              Build your own
            </h3>
            <p className="text-wfb-gray-500 font-wf-body mb-5 sm:mb-6 max-w-xl mx-auto text-sm sm:text-base" style={{ lineHeight: 1.6 }}>
              Use our APIs and SDKs to create custom integrations. Publish to the marketplace and reach thousands of developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="group inline-flex items-center justify-center px-5 sm:px-6 py-3 bg-wfb-blue hover:bg-wfb-blue/90 text-white font-semibold font-wf-heading rounded-lg transition-all min-h-[48px]">
                Start building
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#docs" className="inline-flex items-center justify-center px-5 sm:px-6 py-3 bg-wfb-gray-100 hover:bg-wfb-gray-200 text-wfb-black font-semibold font-wf-heading rounded-lg transition-all min-h-[48px]">
                View docs
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
