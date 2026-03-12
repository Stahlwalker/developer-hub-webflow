import { useState } from 'react';
import { Play, Loader2, AlertCircle } from 'lucide-react';
import { V2CodeSnippet } from './V2CodeSnippet';

const API_ENDPOINTS = [
  { name: 'Get Sites', method: 'GET', path: '/sites' },
  { name: 'Get Site', method: 'GET', path: '/sites/:site_id' },
  { name: 'List Collections', method: 'GET', path: '/sites/:site_id/collections' },
  { name: 'Get Collection Items', method: 'GET', path: '/collections/:collection_id/items' },
];

export function V2APIPlayground() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(API_ENDPOINTS[0]);
  const [apiKey, setApiKey] = useState('');
  const [siteId, setSiteId] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleExecute = async () => {
    if (!apiKey) {
      setError('Please enter your API key');
      return;
    }

    setLoading(true);
    setError('');
    setResponse('');

    setTimeout(() => {
      setLoading(false);
      setResponse(JSON.stringify({
        sites: [
          {
            id: '6123abc456def789',
            name: 'My Awesome Site',
            shortName: 'my-site',
            lastPublished: '2024-01-15T10:30:00.000Z',
            createdOn: '2023-06-01T14:20:00.000Z'
          }
        ]
      }, null, 2));
    }, 1500);
  };

  const getCodeExample = () => {
    const path = selectedEndpoint.path.replace(':site_id', siteId || '{site_id}');
    return `// Using fetch
fetch('https://api.webflow.com/v2${path}', {
  method: '${selectedEndpoint.method}',
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
            API Playground
          </h2>
          <p className="text-base sm:text-lg text-wfb-gray-500 font-wf-body max-w-2xl mx-auto" style={{ lineHeight: 1.6 }}>
            Test endpoints in real-time — no API key required for demo
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
                  placeholder="Enter your Webflow API key"
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

              <button
                onClick={handleExecute}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-wfb-blue hover:bg-wfb-blue/90 disabled:bg-wfb-gray-300 text-white font-semibold font-wf-heading rounded-lg transition-all min-h-[48px] text-sm sm:text-base"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Executing...
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    Execute Request
                  </>
                )}
              </button>

              {error && (
                <div className="flex items-start gap-2 p-3 sm:p-4 bg-wfb-red/5 text-wfb-red rounded-lg border border-wfb-red/20">
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-wf-body">{error}</span>
                </div>
              )}
            </div>

            <div className="mt-4 sm:mt-6">
              <h4 className="text-xs sm:text-sm font-medium font-wf-body text-wfb-gray-700 mb-2 sm:mb-3">Code Example</h4>
              <V2CodeSnippet code={getCodeExample()} language="javascript" />
            </div>
          </div>

          {/* Right Panel - Response */}
          <div className="bg-white border border-wfb-gray-200 rounded-lg p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold font-wf-heading text-wfb-black mb-4 sm:mb-6">Response</h3>
            {response ? (
              <V2CodeSnippet code={response} language="json" title="JSON Response" />
            ) : (
              <div className="flex items-center justify-center h-40 sm:h-52 lg:h-64 border border-wfb-gray-200 rounded-lg bg-wfb-gray-100">
                <div className="text-center px-4">
                  <Play className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-wfb-gray-300" />
                  <p className="text-wfb-gray-400 font-wf-body text-sm">Execute a request to see the response</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
