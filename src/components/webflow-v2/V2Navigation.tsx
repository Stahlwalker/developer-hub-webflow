import { useState } from 'react';
import { Menu, X, Search, Github, ArrowRight } from 'lucide-react';
import { VersionSwitcher } from '../VersionSwitcher';

export function V2Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-wfb-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo — mark + wordmark with "Developers" label */}
          <div className="flex items-center">
            <img
              src="/logos/Full_Logo_Blue_Black.png"
              alt="Webflow"
              className="h-5 sm:h-[22px]"
            />
            <div className="w-px h-4 sm:h-5 bg-wfb-gray-200 mx-2 sm:mx-3" />
            <span
              className="text-xs sm:text-[13px] font-semibold font-wf-heading text-wfb-black tracking-[0.04em]"
            >
              Developers
            </span>
          </div>

          {/* Desktop Navigation — WF Visual Sans medium weight */}
          <div className="hidden md:flex items-center space-x-0.5">
            {['Products', 'Docs', 'API Playground', 'Integrations', 'Community'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3.5 py-2 text-[14px] font-medium font-wf-heading text-wfb-gray-600 hover:text-wfb-black rounded-md hover:bg-wfb-gray-100 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-1.5">
            <button className="p-2.5 rounded-md text-wfb-gray-400 hover:text-wfb-black hover:bg-wfb-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
              <Search className="w-[18px] h-[18px]" />
            </button>
            <a
              href="https://github.com/webflow"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-md text-wfb-gray-400 hover:text-wfb-black hover:bg-wfb-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <Github className="w-[18px] h-[18px]" />
            </a>
            <VersionSwitcher variant="dark" />
            <a
              href="#"
              className="group inline-flex items-center px-4 py-2.5 bg-wfb-blue hover:bg-wfb-blue/90 text-white text-sm font-semibold font-wf-heading rounded-md transition-all"
            >
              Get started
              <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-1">
            <VersionSwitcher variant="dark" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-md text-wfb-gray-500 hover:bg-wfb-gray-100 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-wfb-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-0.5">
            {['Products', 'Docs', 'API Playground', 'Integrations', 'Community'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md font-wf-heading font-medium text-sm text-wfb-gray-600 hover:text-wfb-black hover:bg-wfb-gray-100 min-h-[44px] flex items-center"
              >
                {item}
              </a>
            ))}
            <div className="pt-3">
              <a href="#" className="block text-center px-4 py-3 bg-wfb-blue text-white font-semibold font-wf-heading rounded-md min-h-[44px]">
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
