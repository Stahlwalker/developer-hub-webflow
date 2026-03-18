import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { V3CodeSnippet } from './V3CodeSnippet';

interface CodeExample {
  title: string;
  description: string;
  method: 'GET' | 'POST';
  endpoint: string;
  highlights: string[];
  docsHref: string;
  code: string;
  language: string;
}

const examples: CodeExample[] = [
  {
    title: 'List Sites',
    description: 'Return all sites in your Webflow workspace.',
    method: 'GET',
    endpoint: '/v2/sites',
    highlights: [
      'Pagination support',
      'Includes custom domain configuration',
      'Returns last published timestamp',
    ],
    docsHref: 'https://developers.webflow.com/data/reference/sites/list',
    code: `const response = await fetch('https://api.webflow.com/v2/sites', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Accept': 'application/json'
  }
});

const data = await response.json();
console.log(data.sites);
`,
    language: 'javascript',
  },
  {
    title: 'Create CMS Item',
    description: 'Add a new item to any CMS collection.',
    method: 'POST',
    endpoint: '/v2/collections/{collection_id}/items',
    highlights: [
      'Supports all custom field types',
      'Automatic slug generation',
      'Draft or publish immediately',
    ],
    docsHref: 'https://developers.webflow.com/data/v2.0.0/reference/cms/collection-items/staged-items/create-item',
    code: `const response = await fetch(
  'https://api.webflow.com/v2/collections/COLLECTION_ID/items',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      isArchived: false,
      isDraft: false,
      fieldData: {
        name: "The Hitchhiker's Guide to the Galaxy",
        slug: 'hitchhikers-guide-to-the-galaxy'
      }
    })
  }
);`,
    language: 'javascript',
  },
  {
    title: 'Publish Site',
    description: 'Publish your site to one or all connected custom domains.',
    method: 'POST',
    endpoint: '/v2/sites/{site_id}/publish',
    highlights: [
      'Publish to specific or all domains',
      'Returns deployment status',
      'Trigger via CI/CD pipelines',
    ],
    docsHref: 'https://developers.webflow.com/data/reference/sites/publish',
    code: `const response = await fetch(
  'https://api.webflow.com/v2/sites/SITE_ID/publish',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      domains: ['heartofgold.galaxy']
    })
  }
);

const data = await response.json();
console.log('Published:', data);`,
    language: 'javascript',
  },
];

const rowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function V3Examples() {
  return (
    <section id="examples" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-wf-heading font-semibold mb-3 sm:mb-4 text-wfb-black tracking-tight"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', lineHeight: 1.04 }}
          >
            Code Examples
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-wfb-gray-500 font-wf-body max-w-2xl mx-auto"
            style={{ lineHeight: 1.6 }}
          >
            Common API patterns with copy-paste snippets.
          </motion.p>
        </div>

        <div className="divide-y divide-wfb-gray-200">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center ${
                index > 0 ? 'pt-12 sm:pt-16 lg:pt-20' : ''
              } ${index < examples.length - 1 ? 'pb-12 sm:pb-16 lg:pb-20' : ''}`}
            >
              {/* Text column */}
              <motion.div variants={columnVariants} className="w-full lg:w-[40%]">
                <div className="flex items-center gap-2.5 mb-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold font-mono uppercase tracking-wider ${
                      example.method === 'GET'
                        ? 'bg-wfb-blue/10 text-wfb-blue'
                        : 'bg-wfb-black/[0.06] text-wfb-black'
                    }`}
                  >
                    {example.method}
                  </span>
                  <code className="text-sm font-mono text-wfb-gray-500">
                    {example.endpoint}
                  </code>
                </div>

                <h3 className="font-wf-heading font-semibold text-wfb-black text-xl sm:text-2xl mb-3">
                  {example.title}
                </h3>

                <p
                  className="text-wfb-gray-500 font-wf-body text-sm sm:text-base mb-5"
                  style={{ lineHeight: 1.6 }}
                >
                  {example.description}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {example.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-wfb-blue" />
                      <span
                        className="text-sm font-wf-body text-wfb-gray-600"
                        style={{ lineHeight: 1.5 }}
                      >
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={example.docsHref}
                  target={example.docsHref !== '#' ? '_blank' : undefined}
                  rel={example.docsHref !== '#' ? 'noopener noreferrer' : undefined}
                  className="group inline-flex items-center gap-1.5 text-sm font-medium font-wf-heading text-wfb-blue transition-colors py-1"
                >
                  View docs
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>

              {/* Code column */}
              <motion.div variants={columnVariants} className="w-full lg:w-[60%]">
                <V3CodeSnippet
                  code={example.code}
                  language={example.language}
                  title={example.language.toUpperCase()}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
