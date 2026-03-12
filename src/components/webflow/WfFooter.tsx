import { Github, Youtube, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WfFooter() {
  return (
    <footer className="bg-wf-gray-900 text-wf-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-wf-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm font-sans">W</span>
              </div>
              <span className="text-lg font-semibold text-white font-sans">Webflow Developers</span>
            </div>
            <p className="text-sm text-wf-gray-500 font-sans">
              Build powerful applications with Webflow APIs
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold font-sans mb-4">Resources</h3>
            <ul className="space-y-2 text-sm font-sans">
              <li><a href="#" className="text-wf-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-wf-gray-400 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-wf-gray-400 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-wf-gray-400 hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold font-sans mb-4">Community</h3>
            <ul className="space-y-2 text-sm font-sans">
              <li><a href="#" className="text-wf-gray-400 hover:text-white transition-colors">Forum</a></li>
              <li><a href="#" className="text-wf-gray-400 hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="text-wf-gray-400 hover:text-white transition-colors">Stack Overflow</a></li>
              <li><a href="#" className="text-wf-gray-400 hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold font-sans mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-wf-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-wf-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-wf-gray-400 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4 space-y-2">
              <Link to="/" className="block text-sm font-sans text-wf-gray-500 hover:text-white transition-colors">
                Retro version →
              </Link>
              <Link to="/new-design-v2" className="block text-sm font-sans text-wf-gray-500 hover:text-white transition-colors">
                v2 (on-brand) →
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-wf-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-wf-gray-500 font-sans gap-4">
          <p>&copy; 2024 Webflow, Inc. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
