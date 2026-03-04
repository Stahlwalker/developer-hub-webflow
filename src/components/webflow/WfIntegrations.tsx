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
    count: '∞',
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

export function WfIntegrations() {
  return (
    <section id="integrations" className="py-20 px-4 sm:px-6 lg:px-8 bg-wf-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans mb-4 text-wf-dark tracking-tight"
          >
            Integrations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-wf-gray-500 font-sans max-w-2xl mx-auto"
          >
            Connect Webflow with your favorite tools and services
          </motion.p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {integrationCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-wf-gray-200 rounded-xl p-6 hover:border-wf-gray-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-wf-blue-light rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-wf-blue" />
                  </div>
                  <span className="text-2xl font-bold font-sans text-wf-blue">
                    {category.count}
                  </span>
                </div>

                <h3 className="text-lg font-semibold font-sans text-wf-dark mb-2">
                  {category.title}
                </h3>

                <p className="text-wf-gray-500 text-sm font-sans mb-4">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.examples.map((example, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium font-sans px-2.5 py-1 bg-wf-gray-100 text-wf-gray-600 rounded-md"
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
          className="bg-white border border-wf-gray-200 rounded-xl p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-xl font-semibold font-sans text-wf-dark">
              Featured Apps
            </h3>
            <a
              href="#"
              className="group inline-flex items-center gap-1.5 text-sm font-medium font-sans text-wf-blue hover:text-wf-blue-hover transition-colors"
            >
              View all
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredApps.map((app, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="group flex items-center justify-between p-4 border border-wf-gray-200 rounded-lg hover:border-wf-gray-300 hover:bg-wf-gray-50 transition-all"
              >
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-medium font-sans text-wf-dark group-hover:text-wf-blue transition-colors">
                      {app.name}
                    </span>
                    {app.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-wf-blue" />
                    )}
                  </div>
                  <span className="text-xs font-sans text-wf-gray-500">
                    {app.category}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-wf-gray-300 group-hover:text-wf-blue group-hover:translate-x-0.5 transition-all" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Build Your Own CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-white border border-wf-gray-200 rounded-xl p-8 w-full max-w-3xl">
            <h3 className="text-2xl font-bold font-sans text-wf-dark mb-3">
              Build your own
            </h3>
            <p className="text-wf-gray-500 font-sans mb-6 max-w-xl mx-auto">
              Use our APIs and SDKs to create custom integrations. Publish to the marketplace and reach thousands of developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="group inline-flex items-center justify-center px-6 py-3 bg-wf-blue hover:bg-wf-blue-hover text-white font-semibold font-sans rounded-lg transition-all">
                Start building
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#docs" className="inline-flex items-center justify-center px-6 py-3 bg-wf-gray-100 hover:bg-wf-gray-200 text-wf-dark font-semibold font-sans rounded-lg transition-all">
                View docs
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
