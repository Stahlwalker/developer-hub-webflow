import { useState } from 'react';
import { Play, Loader2, AlertCircle } from 'lucide-react';
import { CodeSnippet } from './CodeSnippet';

const API_ENDPOINTS = [
  { name: 'Get Sites', method: 'GET', path: '/sites' },
  { name: 'Get Site', method: 'GET', path: '/sites/:site_id' },
  { name: 'List Collections', method: 'GET', path: '/sites/:site_id/collections' },
  { name: 'Get Collection Items', method: 'GET', path: '/collections/:collection_id/items' },
];

export function APIPlayground() {
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

    // Simulate API call
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
    let path = selectedEndpoint.path.replace(':site_id', siteId || '{site_id}');

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
    <section id="playground" className="py-20 px-4 sm:px-6 lg:px-8 retro-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono mb-4 text-terminal-cyan neon-text">
            {'>'} API_PLAYGROUND
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 font-mono px-4">
            Test endpoints in real-time → No API key required for demo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Panel - Configuration */}
          <div className="retro-card p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 font-mono text-terminal-cyan">{'>'} REQUEST_CONFIG</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Endpoint</label>
                <select
                  value={API_ENDPOINTS.findIndex(e => e === selectedEndpoint)}
                  onChange={(e) => setSelectedEndpoint(API_ENDPOINTS[parseInt(e.target.value)])}
                  className="w-full px-4 py-2 rounded-lg border-2 border-terminal-cyan/30 bg-crt-dark focus:border-terminal-cyan outline-none font-mono text-sm text-gray-300"
                >
                  {API_ENDPOINTS.map((endpoint, index) => (
                    <option key={index} value={index}>
                      {endpoint.method} {endpoint.path}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">API Key</label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your Webflow API key"
                  className="w-full px-4 py-2 rounded-lg border-2 border-terminal-cyan/30 bg-crt-dark focus:border-terminal-cyan outline-none font-mono text-sm text-gray-300"
                />
              </div>

              {selectedEndpoint.path.includes(':site_id') && (
                <div>
                  <label className="block text-sm font-medium mb-2">Site ID</label>
                  <input
                    type="text"
                    value={siteId}
                    onChange={(e) => setSiteId(e.target.value)}
                    placeholder="Enter site ID"
                    className="w-full px-4 py-2 rounded-lg border-2 border-terminal-cyan/30 bg-crt-dark focus:border-terminal-cyan outline-none font-mono text-sm text-gray-300"
                  />
                </div>
              )}

              <button
                onClick={handleExecute}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-terminal-cyan hover:bg-terminal-cyan/90 disabled:bg-gray-600 text-crt-darker font-bold font-mono rounded-lg transition-all hover:shadow-neon-cyan"
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
                <div className="flex items-start gap-2 p-4 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{error}</span>
                </div>
              )}
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Code Example</h4>
              <CodeSnippet
                code={getCodeExample()}
                language="javascript"
              />
            </div>
          </div>

          {/* Right Panel - Response */}
          <div className="retro-card p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 font-mono text-terminal-cyan">Response</h3>
            {response ? (
              <CodeSnippet
                code={response}
                language="json"
                title="JSON Response"
              />
            ) : (
              <div className="flex items-center justify-center h-64 text-gray-400 dark:text-gray-600">
                <div className="text-center">
                  <Play className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Execute a request to see the response</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
