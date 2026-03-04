import { useState } from 'react';
import { Play, Loader2, AlertCircle } from 'lucide-react';
import { WfCodeSnippet } from './WfCodeSnippet';

const API_ENDPOINTS = [
  { name: 'Get Sites', method: 'GET', path: '/sites' },
  { name: 'Get Site', method: 'GET', path: '/sites/:site_id' },
  { name: 'List Collections', method: 'GET', path: '/sites/:site_id/collections' },
  { name: 'Get Collection Items', method: 'GET', path: '/collections/:collection_id/items' },
];

export function WfAPIPlayground() {
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
    <section id="playground" className="py-20 px-4 sm:px-6 lg:px-8 bg-wf-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans mb-4 text-wf-dark tracking-tight">
            API Playground
          </h2>
          <p className="text-lg text-wf-gray-500 font-sans max-w-2xl mx-auto">
            Test endpoints in real-time — no API key required for demo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Panel - Configuration */}
          <div className="bg-white border border-wf-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold font-sans text-wf-dark mb-6">Request Configuration</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium font-sans text-wf-gray-700 mb-2">Endpoint</label>
                <select
                  value={API_ENDPOINTS.findIndex(e => e === selectedEndpoint)}
                  onChange={(e) => setSelectedEndpoint(API_ENDPOINTS[parseInt(e.target.value)])}
                  className="w-full px-4 py-2.5 rounded-lg border border-wf-gray-300 bg-white text-wf-dark font-sans text-sm focus:border-wf-blue focus:ring-2 focus:ring-wf-blue/20 outline-none transition-all"
                >
                  {API_ENDPOINTS.map((endpoint, index) => (
                    <option key={index} value={index}>
                      {endpoint.method} {endpoint.path}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium font-sans text-wf-gray-700 mb-2">API Key</label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your Webflow API key"
                  className="w-full px-4 py-2.5 rounded-lg border border-wf-gray-300 bg-white text-wf-dark font-sans text-sm focus:border-wf-blue focus:ring-2 focus:ring-wf-blue/20 outline-none transition-all placeholder:text-wf-gray-400"
                />
              </div>

              {selectedEndpoint.path.includes(':site_id') && (
                <div>
                  <label className="block text-sm font-medium font-sans text-wf-gray-700 mb-2">Site ID</label>
                  <input
                    type="text"
                    value={siteId}
                    onChange={(e) => setSiteId(e.target.value)}
                    placeholder="Enter site ID"
                    className="w-full px-4 py-2.5 rounded-lg border border-wf-gray-300 bg-white text-wf-dark font-sans text-sm focus:border-wf-blue focus:ring-2 focus:ring-wf-blue/20 outline-none transition-all placeholder:text-wf-gray-400"
                  />
                </div>
              )}

              <button
                onClick={handleExecute}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-wf-blue hover:bg-wf-blue-hover disabled:bg-wf-gray-300 text-white font-semibold font-sans rounded-lg transition-all"
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
                <div className="flex items-start gap-2 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-sans">{error}</span>
                </div>
              )}
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium font-sans text-wf-gray-700 mb-3">Code Example</h4>
              <WfCodeSnippet code={getCodeExample()} language="javascript" />
            </div>
          </div>

          {/* Right Panel - Response */}
          <div className="bg-white border border-wf-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold font-sans text-wf-dark mb-6">Response</h3>
            {response ? (
              <WfCodeSnippet code={response} language="json" title="JSON Response" />
            ) : (
              <div className="flex items-center justify-center h-64 border border-wf-gray-200 rounded-xl bg-wf-gray-50">
                <div className="text-center">
                  <Play className="w-12 h-12 mx-auto mb-4 text-wf-gray-300" />
                  <p className="text-wf-gray-400 font-sans">Execute a request to see the response</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
