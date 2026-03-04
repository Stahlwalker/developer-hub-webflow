import { WfCodeSnippet } from './WfCodeSnippet';
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

export function WfExamples() {
  return (
    <section id="examples" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans mb-4 text-wf-dark tracking-tight"
          >
            Code Examples
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-wf-gray-500 font-sans max-w-2xl mx-auto"
          >
            Copy-paste snippets to ship faster
          </motion.p>
        </div>

        <div className="space-y-6">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-wf-gray-200 rounded-xl p-6 hover:border-wf-gray-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-wf-blue rounded-lg flex items-center justify-center text-white font-bold font-sans text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-semibold font-sans text-wf-dark">{example.title}</h3>
                  <p className="text-wf-gray-500 text-sm font-sans">{example.description}</p>
                </div>
              </div>
              <WfCodeSnippet
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
