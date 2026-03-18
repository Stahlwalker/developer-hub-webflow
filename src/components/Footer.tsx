import { Github, Twitter, Youtube, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-crt-darker border-t-2 border-terminal-cyan/20 text-gray-600 dark:text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 border-2 border-terminal-cyan rounded flex items-center justify-center">
                <span className="text-terminal-cyan font-bold">W</span>
              </div>
              <span className="text-lg font-bold text-terminal-cyan font-mono">WEBFLOW_DEV</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-500 font-mono">
              $ Build powerful applications with Webflow APIs
            </p>
          </div>

          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Forum</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Stack Overflow</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400 gap-4">
          <p className="text-center md:text-left">&copy; 2024 Webflow, Inc. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors whitespace-nowrap">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors whitespace-nowrap">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors whitespace-nowrap">Status</a>
          </div>
        </div>
      </div>

      <div className="bg-black px-4 sm:px-6 lg:px-8 py-2.5 -mx-4 sm:-mx-6 lg:-mx-8 mt-8">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-1">
          <span className="text-xs text-gray-600 mr-2">Designs:</span>
          {[
            { label: 'Retro', to: '/retro' },
            { label: 'v1', to: '/new-design' },
            { label: 'v2', to: '/new-design-v2' },
            { label: 'v3', to: '/' },
          ].map(({ label, to }) => (
            <Link key={to} to={to} className="px-2.5 py-1 text-xs font-medium text-gray-400 hover:text-white rounded transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
