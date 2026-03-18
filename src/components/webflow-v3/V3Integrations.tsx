import { Package, Store, Puzzle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const integrationCategories = [
  {
    icon: Store,
    title: 'Marketplace Apps',
    description: 'Apps and extensions built by partners and the community.',
    tags: ['AI', 'Analytics', 'SEO', 'Localization', 'Marketing'],
    linkLabel: 'View all',
    href: 'https://webflow.com/apps',
  },
  {
    icon: Package,
    title: 'Native Integrations',
    description: 'Built-in connections to popular tools and services.',
    tags: ['Analytics', 'CRM', 'Automation', 'Design'],
    linkLabel: 'Browse',
    href: 'https://webflow.com/integrations',
  },
  {
    icon: Puzzle,
    title: 'Custom Integrations',
    description: 'Build your own with Webflow\'s APIs and SDKs.',
    tags: ['REST API', 'Webhooks', 'OAuth', 'SDKs'],
    linkLabel: 'Start building',
    href: 'https://developers.webflow.com/data/docs/data-clients',
  },
];

const featuredApps = [
  { name: 'Zapier', category: 'Automation', href: 'https://webflow.com/apps/detail/zapier', image: '/images/Zapier.png' },
  { name: 'Finsweet', category: 'Development', href: 'https://webflow.com/apps/detail/finsweet-extension', image: '/images/Finsweet.png' },
  { name: 'HubSpot', category: 'Marketing', href: 'https://webflow.com/apps/detail/hubspot', image: '/images/Hubspot.png' },
  { name: 'Google Ads for Webflow', category: 'Advertising', href: 'https://webflow.com/apps/detail/google-ads-for-webflow', image: '/images/GoogleAds.png' },
  { name: 'Relume', category: 'Design', href: 'https://webflow.com/apps/detail/relume', image: '/images/Relume.png' },
  { name: 'Figma to Webflow', category: 'Design', href: 'https://webflow.com/apps/detail/figma-to-webflow', image: '/images/Figma.png' },
];

export function V3Integrations() {
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
            Connect Webflow to your existing tools and workflows.
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
                className="bg-white border border-wfb-gray-200 rounded-lg p-5 sm:p-6 hover:border-wfb-black/20 transition-all flex flex-col"
              >
                <div className="w-10 h-10 bg-wfb-gray-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 text-wfb-blue" />
                </div>

                <h3 className="text-base sm:text-lg font-semibold font-wf-heading text-wfb-black mb-2">
                  {category.title}
                </h3>

                <p className="text-wfb-gray-500 text-sm font-wf-body mb-3 sm:mb-4 flex-1" style={{ lineHeight: 1.6 }}>
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {category.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium font-wf-body px-2 sm:px-2.5 py-1 bg-wfb-gray-100 text-wfb-gray-600 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={category.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm font-medium font-wf-heading text-wfb-blue transition-colors"
                >
                  {category.linkLabel}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
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
              href="https://webflow.com/apps"
              target="_blank"
              rel="noopener noreferrer"
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
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="group flex items-center justify-between p-3 sm:p-4 border border-wfb-gray-200 rounded-lg hover:border-wfb-black/20 transition-all min-h-[56px]"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={app.image}
                    alt={app.name}
                    className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
                  />
                  <div>
                    <div className="mb-0.5">
                      <span className="font-medium font-wf-heading text-sm sm:text-base text-wfb-black group-hover:text-wfb-blue transition-colors">
                        {app.name}
                      </span>
                    </div>
                    <span className="text-xs font-wf-body text-wfb-gray-500">
                      {app.category}
                    </span>
                  </div>
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
              Use Webflow's APIs and SDKs to create custom integrations. Publish to the Marketplace and reach millions of Webflow users.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://developers.webflow.com/data/docs/getting-started-apps"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-5 sm:px-6 py-3 bg-wfb-blue hover:bg-wfb-blue/90 text-white font-semibold font-wf-heading rounded-lg transition-all min-h-[48px]"
              >
                Start building
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="https://developers.webflow.com/data/reference/rest-introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-5 sm:px-6 py-3 bg-wfb-gray-100 hover:bg-wfb-gray-200 text-wfb-black font-semibold font-wf-heading rounded-lg transition-all min-h-[48px]"
              >
                View docs
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
