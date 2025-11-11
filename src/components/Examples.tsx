import { CodeSnippet } from './CodeSnippet';

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

export function Examples() {
  return (
    <section id="examples" className="py-20 px-4 sm:px-6 lg:px-8 bg-crt-dark/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono mb-4 text-terminal-green neon-text">$ CODE_EXAMPLES</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 font-mono px-4">
            Copy-paste snippets → Ship faster
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {examples.map((example, index) => (
            <div key={index} className="retro-card p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
                <span className="text-terminal-cyan font-mono text-xl sm:text-2xl font-bold flex-shrink-0">0{index + 1}</span>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold font-mono text-terminal-cyan">{example.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-mono">
                    {example.description}
                  </p>
                </div>
              </div>
              <CodeSnippet
                code={example.code}
                language={example.language}
                title={example.language.toUpperCase()}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
