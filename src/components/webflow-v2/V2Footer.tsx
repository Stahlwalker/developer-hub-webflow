import { Github, Youtube, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function V2Footer() {
  return (
    <footer className="bg-wfb-gray-900 text-wfb-gray-300 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand column */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/logos/Full_Logo_Blue_White.png"
                alt="Webflow"
                className="h-4 sm:h-5"
              />
              <div className="w-px h-3.5 sm:h-4 bg-wfb-gray-700 mx-2 sm:mx-3" />
              <span className="text-xs sm:text-[13px] font-semibold font-wf-heading text-wfb-gray-300 tracking-[0.04em]">
                Developers
              </span>
            </div>
            <p className="text-sm text-wfb-gray-500 font-wf-body" style={{ lineHeight: 1.6 }}>
              Build powerful applications with Webflow APIs
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold font-wf-heading text-sm mb-3 sm:mb-4 tracking-[0.02em]">Resources</h3>
            <ul className="space-y-2 sm:space-y-2.5 text-sm font-wf-body">
              <li><a href="#" className="text-wfb-gray-400 hover:text-white transition-colors inline-block py-0.5">Documentation</a></li>
              <li><a href="#" className="text-wfb-gray-400 hover:text-white transition-colors inline-block py-0.5">API Reference</a></li>
              <li><a href="#" className="text-wfb-gray-400 hover:text-white transition-colors inline-block py-0.5">Tutorials</a></li>
              <li><a href="#" className="text-wfb-gray-400 hover:text-white transition-colors inline-block py-0.5">Changelog</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold font-wf-heading text-sm mb-3 sm:mb-4 tracking-[0.02em]">Community</h3>
            <ul className="space-y-2 sm:space-y-2.5 text-sm font-wf-body">
              <li><a href="#" className="text-wfb-gray-400 hover:text-white transition-colors inline-block py-0.5">Forum</a></li>
              <li><a href="#" className="text-wfb-gray-400 hover:text-white transition-colors inline-block py-0.5">Discord</a></li>
              <li><a href="#" className="text-wfb-gray-400 hover:text-white transition-colors inline-block py-0.5">Stack Overflow</a></li>
              <li><a href="#" className="text-wfb-gray-400 hover:text-white transition-colors inline-block py-0.5">GitHub</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold font-wf-heading text-sm mb-3 sm:mb-4 tracking-[0.02em]">Connect</h3>
            <div className="flex space-x-1">
              <a href="#" className="text-wfb-gray-400 hover:text-white transition-colors p-2 -ml-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-wfb-gray-400 hover:text-white transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-wfb-gray-400 hover:text-white transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-3 sm:mt-5 space-y-1.5 sm:space-y-2">
              <Link
                to="/new-design"
                className="block text-sm font-wf-body text-wfb-gray-500 hover:text-white transition-colors py-0.5"
              >
                View v1 design →
              </Link>
              <Link
                to="/"
                className="block text-sm font-wf-body text-wfb-gray-500 hover:text-white transition-colors py-0.5"
              >
                View retro version →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-wfb-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-wfb-gray-500 font-wf-body gap-3 sm:gap-4">
          <p>&copy; 2026 Webflow, Inc. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors py-1">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors py-1">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors py-1">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
