import { Cloud, Code, Puzzle, Database, Store, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    icon: Cloud,
    title: 'Webflow Cloud',
    description: 'Deploy full-stack apps alongside your Webflow sites.',
    tags: ['Hosting', 'Frameworks', 'Storage'],
    href: 'https://developers.webflow.com/webflow-cloud/intro',
  },
  {
    icon: Code,
    title: 'Code Components',
    description: 'Import React components into Webflow\'s visual canvas.',
    tags: ['React', 'Visual Canvas', 'Libraries'],
    href: 'https://developers.webflow.com/code-components/introduction',
  },
  {
    icon: Database,
    title: 'APIs',
    description: 'Programmatic access to sites, pages, CMS, forms, and assets.',
    tags: ['REST', 'Webhooks', 'Authentication'],
    href: 'https://developers.webflow.com/data/reference/rest-introduction',
  },
  {
    icon: Store,
    title: 'Apps',
    description: 'Build integrations for the Marketplace or your workspace.',
    tags: ['Marketplace', 'OAuth', 'Integrations'],
    href: 'https://developers.webflow.com/apps/docs/getting-started-apps',
  },
  {
    icon: Puzzle,
    title: 'Designer Extensions',
    description: 'Build custom tools that run inside the Webflow Designer.',
    tags: ['Designer API', 'CLI', 'Marketplace'],
    href: 'https://developers.webflow.com/apps/docs/designer-extensions',
  },
];

export function V3DeveloperProducts() {
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
            Developer Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-wfb-gray-500 font-wf-body max-w-2xl mx-auto"
            style={{ lineHeight: 1.6 }}
          >
            The tools and infrastructure for building on Webflow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.a
                key={index}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white border border-wfb-gray-200 rounded-lg p-5 sm:p-6 hover:border-wfb-black/20 transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-wfb-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-wfb-blue" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold font-wf-heading text-wfb-black group-hover:text-wfb-blue transition-colors">
                    {product.title}
                  </h3>
                </div>

                <p className="text-wfb-gray-500 text-sm font-wf-body mb-3 sm:mb-4 flex-1" style={{ lineHeight: 1.6 }}>
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {product.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] sm:text-xs font-medium font-wf-body px-2 sm:px-2.5 py-0.5 sm:py-1 bg-wfb-gray-100 text-wfb-gray-600 rounded"
                    >
                      {tag}
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

      </div>
    </section>
  );
}
