import { V2CodeSnippet } from './V2CodeSnippet';
import { motion } from 'framer-motion';

const examples = [
  {
    title: 'Fetch All Sites',
    description: 'Get a list of all sites in your Webflow account',
    code: `const response = await fetch('https://api.webflow.com/v2/sites', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Accept': 'application/json'
  }
});

const data = await response.json();
console.log(data.sites);`,
    language: 'javascript',
  },
  {
    title: 'Create CMS Item',
    description: 'Add a new item to a CMS collection',
    code: `const response = await fetch(
  'https://api.webflow.com/v2/collections/COLLECTION_ID/items',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fieldData: {
        name: 'New Blog Post',
        slug: 'new-blog-post',
        content: 'This is the content...'
      }
    })
  }
);

const data = await response.json();
console.log(data);`,
    language: 'javascript',
  },
  {
    title: 'Publish Site',
    description: 'Publish a site to its custom domain',
    code: `const response = await fetch(
  'https://api.webflow.com/v2/sites/SITE_ID/publish',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      domains: ['www.example.com']
    })
  }
);

const data = await response.json();
console.log('Published:', data);`,
    language: 'javascript',
  },
];

export function V2Examples() {
  return (
    <section id="examples" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
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
            Copy-paste snippets to ship faster
          </motion.p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-wfb-gray-200 rounded-lg p-4 sm:p-6 hover:border-wfb-black/20 transition-all"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-wfb-black rounded-lg flex items-center justify-center text-white font-semibold font-wf-heading text-xs sm:text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-semibold font-wf-heading text-wfb-black text-base sm:text-lg md:text-xl">
                    {example.title}
                  </h3>
                  <p className="text-wfb-gray-500 text-xs sm:text-sm font-wf-body">{example.description}</p>
                </div>
              </div>
              <V2CodeSnippet
                code={example.code}
                language={example.language}
                title={example.language.toUpperCase()}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
