import { useState } from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { V3CodeSnippet } from './V3CodeSnippet';

const API_ENDPOINTS = [
  { name: 'Get Sites', method: 'GET', path: '/sites' },
  { name: 'Get Site', method: 'GET', path: '/sites/:site_id' },
  { name: 'List Collections', method: 'GET', path: '/sites/:site_id/collections' },
  { name: 'Get Collection Items', method: 'GET', path: '/collections/:collection_id/items' },
];

export function V3APIPlayground() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(API_ENDPOINTS[0]);
  const [apiKey, setApiKey] = useState('');
  const [siteId, setSiteId] = useState('');
  const [error] = useState<string>('');

  const getCodeExample = () => {
    return `// Using fetch
fetch('https://api.webflow.com/v2/sites', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Accept': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`;
  };

  return (
    <section id="api-playground" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-wfb-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="font-wf-heading font-semibold mb-3 sm:mb-4 text-wfb-black tracking-tight"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', lineHeight: 1.04 }}
          >
            API Requests
          </h2>
          <p className="text-base sm:text-lg text-wfb-gray-500 font-wf-body max-w-2xl mx-auto" style={{ lineHeight: 1.6 }}>
            Test endpoints directly from the docs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Left Panel - Configuration */}
          <div className="bg-white border border-wfb-gray-200 rounded-lg p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold font-wf-heading text-wfb-black mb-4 sm:mb-6">Request Configuration</h3>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium font-wf-body text-wfb-gray-700 mb-1.5 sm:mb-2">Endpoint</label>
                <select
                  value={API_ENDPOINTS.findIndex(e => e === selectedEndpoint)}
                  onChange={(e) => setSelectedEndpoint(API_ENDPOINTS[parseInt(e.target.value)])}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-wfb-gray-200 bg-white text-wfb-black font-wf-body text-sm focus:border-wfb-blue focus:ring-2 focus:ring-wfb-blue/20 outline-none transition-all min-h-[44px]"
                >
                  {API_ENDPOINTS.map((endpoint, index) => (
                    <option key={index} value={index}>
                      {endpoint.method} {endpoint.path}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium font-wf-body text-wfb-gray-700 mb-1.5 sm:mb-2">API Key</label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="sk-live-••••••••••••3fa8"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-wfb-gray-200 bg-white text-wfb-black font-wf-body text-sm focus:border-wfb-blue focus:ring-2 focus:ring-wfb-blue/20 outline-none transition-all placeholder:text-wfb-gray-400 min-h-[44px]"
                />
              </div>

              {selectedEndpoint.path.includes(':site_id') && (
                <div>
                  <label className="block text-xs sm:text-sm font-medium font-wf-body text-wfb-gray-700 mb-1.5 sm:mb-2">Site ID</label>
                  <input
                    type="text"
                    value={siteId}
                    onChange={(e) => setSiteId(e.target.value)}
                    placeholder="Enter site ID"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-wfb-gray-200 bg-white text-wfb-black font-wf-body text-sm focus:border-wfb-blue focus:ring-2 focus:ring-wfb-blue/20 outline-none transition-all placeholder:text-wfb-gray-400 min-h-[44px]"
                  />
                </div>
              )}

              {error && (
                <div className="flex items-start gap-2 p-3 sm:p-4 bg-wfb-red/5 text-wfb-red rounded-lg border border-wfb-red/20">
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-wf-body">{error}</span>
                </div>
              )}
            </div>

            <div className="mt-4 sm:mt-6">
              <h4 className="text-xs sm:text-sm font-medium font-wf-body text-wfb-gray-700 mb-2 sm:mb-3">Code Example</h4>
              <V3CodeSnippet code={getCodeExample()} language="javascript" />
            </div>
          </div>

          {/* Right Panel - Response */}
          <div className="bg-white border border-wfb-gray-200 rounded-lg p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold font-wf-heading text-wfb-black mb-4 sm:mb-6">Response</h3>
            <V3CodeSnippet code={`{
  "sites": [
    {
      "id": "42e63e98c9a982ac9b8b741",
      "displayName": "Heart of Gold Spaceship",
      "shortName": "heart-of-gold",
      "lastPublished": "2023-04-02T12:42:00.000Z",
      "customDomains": [
        {
          "url": "heartofgold.galaxy"
        }
      ]
    }
  ]
}`} language="json" />
            <a
              href="https://developers.webflow.com/data/reference/sites/list?explorer=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 mt-4 px-4 py-2.5 bg-wfb-blue hover:bg-wfb-blue/90 text-white text-sm font-semibold font-wf-heading rounded-lg transition-colors"
            >
              Try it
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

