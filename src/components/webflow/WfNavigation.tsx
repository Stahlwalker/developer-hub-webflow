import { useState } from 'react';
import { Menu, X, Search, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WfNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-wf-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-wf-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm font-sans">W</span>
            </div>
            <span className="text-lg font-semibold font-sans text-wf-dark">
              Webflow Developers
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#products" className="px-4 py-2 text-sm font-medium font-sans text-wf-gray-600 hover:text-wf-dark rounded-lg hover:bg-wf-gray-50 transition-colors">
              Products
            </a>
            <a href="#docs" className="px-4 py-2 text-sm font-medium font-sans text-wf-gray-600 hover:text-wf-dark rounded-lg hover:bg-wf-gray-50 transition-colors">
              Docs
            </a>
            <a href="#playground" className="px-4 py-2 text-sm font-medium font-sans text-wf-gray-600 hover:text-wf-dark rounded-lg hover:bg-wf-gray-50 transition-colors">
              API Playground
            </a>
            <a href="#integrations" className="px-4 py-2 text-sm font-medium font-sans text-wf-gray-600 hover:text-wf-dark rounded-lg hover:bg-wf-gray-50 transition-colors">
              Integrations
            </a>
            <a href="#community" className="px-4 py-2 text-sm font-medium font-sans text-wf-gray-600 hover:text-wf-dark rounded-lg hover:bg-wf-gray-50 transition-colors">
              Community
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <button className="p-2 rounded-lg text-wf-gray-400 hover:text-wf-dark hover:bg-wf-gray-50 transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <a
              href="https://github.com/webflow"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-wf-gray-400 hover:text-wf-dark hover:bg-wf-gray-50 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <Link
              to="/"
              className="px-3 py-1.5 text-xs font-medium font-sans text-wf-gray-500 hover:text-wf-dark border border-wf-gray-200 rounded-lg hover:bg-wf-gray-50 transition-colors"
            >
              Retro version
            </Link>
            <a href="#" className="group inline-flex items-center px-4 py-2 bg-wf-blue hover:bg-wf-blue-hover text-white text-sm font-semibold font-sans rounded-lg transition-all">
              Get started
              <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-wf-gray-500 hover:bg-wf-gray-50"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-wf-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#products" className="block px-3 py-2 rounded-lg font-sans text-sm text-wf-gray-600 hover:text-wf-dark hover:bg-wf-gray-50">
              Products
            </a>
            <a href="#docs" className="block px-3 py-2 rounded-lg font-sans text-sm text-wf-gray-600 hover:text-wf-dark hover:bg-wf-gray-50">
              Docs
            </a>
            <a href="#playground" className="block px-3 py-2 rounded-lg font-sans text-sm text-wf-gray-600 hover:text-wf-dark hover:bg-wf-gray-50">
              API Playground
            </a>
            <a href="#integrations" className="block px-3 py-2 rounded-lg font-sans text-sm text-wf-gray-600 hover:text-wf-dark hover:bg-wf-gray-50">
              Integrations
            </a>
            <a href="#community" className="block px-3 py-2 rounded-lg font-sans text-sm text-wf-gray-600 hover:text-wf-dark hover:bg-wf-gray-50">
              Community
            </a>
            <div className="pt-2 space-y-2">
              <Link
                to="/"
                className="block text-center px-4 py-2 text-sm font-medium font-sans text-wf-gray-500 border border-wf-gray-200 rounded-lg"
              >
                Retro version
              </Link>
              <a href="#" className="block text-center px-4 py-2 bg-wf-blue text-white font-semibold font-sans rounded-lg">
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
