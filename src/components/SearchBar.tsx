import { useState, useEffect, useRef } from 'react';
import { Search, X, FileText, Code, Book } from 'lucide-react';

interface SearchResult {
  title: string;
  description: string;
  type: 'docs' | 'api' | 'guide';
  url: string;
}

const mockResults: SearchResult[] = [
  {
    title: 'Getting Started with Webflow API',
    description: 'Learn how to authenticate and make your first API call',
    type: 'guide',
    url: '#'
  },
  {
    title: 'Sites API Reference',
    description: 'Manage sites programmatically with the Sites API',
    type: 'api',
    url: '#'
  },
  {
    title: 'CMS Collections',
    description: 'Working with CMS collections and items',
    type: 'docs',
    url: '#'
  },
  {
    title: 'Authentication Guide',
    description: 'OAuth 2.0 authentication flow and best practices',
    type: 'guide',
    url: '#'
  },
];

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const filtered = mockResults.filter(
        (result) =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'docs':
        return <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'api':
        return <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'guide':
        return <Book className="w-5 h-5 text-green-600 dark:text-green-400" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <div ref={searchRef} className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 glass-effect rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors w-64"
      >
        <Search className="w-5 h-5 text-gray-400" />
        <span className="text-gray-400">Search documentation...</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-effect rounded-xl shadow-2xl overflow-hidden z-50 w-96">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search documentation..."
                className="flex-1 bg-transparent outline-none"
                autoFocus
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {results.length > 0 ? (
              <div className="py-2">
                {results.map((result, index) => (
                  <a
                    key={index}
                    href={result.url}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="mt-1">{getIcon(result.type)}</div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{result.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {result.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            ) : query ? (
              <div className="px-4 py-8 text-center text-gray-500">
                No results found for "{query}"
              </div>
            ) : (
              <div className="px-4 py-8 text-center text-gray-500">
                Start typing to search...
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
