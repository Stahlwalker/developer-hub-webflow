import { useState } from 'react';
import { Menu, X, Moon, Sun, Search, Github, Terminal } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-crt-darker/95 backdrop-blur-md border-b-2 border-terminal-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 border-2 border-terminal-cyan rounded flex items-center justify-center">
              <Terminal className="w-5 h-5 text-terminal-cyan" />
            </div>
            <span className="text-lg font-bold font-mono text-terminal-cyan">
              WEBFLOW_DEV
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#docs" className="px-4 py-2 text-sm font-mono text-gray-400 hover:text-terminal-cyan hover:bg-terminal-cyan/5 rounded transition-colors">
              /docs
            </a>
            <a href="#api" className="px-4 py-2 text-sm font-mono text-gray-400 hover:text-terminal-cyan hover:bg-terminal-cyan/5 rounded transition-colors">
              /api
            </a>
            <a href="#playground" className="px-4 py-2 text-sm font-mono text-gray-400 hover:text-terminal-cyan hover:bg-terminal-cyan/5 rounded transition-colors">
              /playground
            </a>
            <a href="#examples" className="px-4 py-2 text-sm font-mono text-gray-400 hover:text-terminal-cyan hover:bg-terminal-cyan/5 rounded transition-colors">
              /examples
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              className="p-2 rounded border border-terminal-cyan/20 hover:border-terminal-cyan text-terminal-cyan/60 hover:text-terminal-cyan transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <a
              href="https://github.com/webflow"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded border border-terminal-cyan/20 hover:border-terminal-cyan text-terminal-cyan/60 hover:text-terminal-cyan transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded border border-terminal-cyan/20 hover:border-terminal-cyan text-terminal-cyan/60 hover:text-terminal-cyan transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <button className="px-4 py-2 bg-terminal-cyan hover:bg-terminal-cyan/90 text-crt-darker text-sm font-mono font-bold rounded transition-all hover:shadow-neon-cyan">
              START_
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded border border-terminal-cyan/20 text-terminal-cyan/60"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded border border-terminal-cyan/20 text-terminal-cyan/60"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-crt-dark border-t border-terminal-cyan/20">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#docs" className="block px-3 py-2 rounded font-mono text-sm text-gray-400 hover:text-terminal-cyan hover:bg-terminal-cyan/5">
              /docs
            </a>
            <a href="#api" className="block px-3 py-2 rounded font-mono text-sm text-gray-400 hover:text-terminal-cyan hover:bg-terminal-cyan/5">
              /api
            </a>
            <a href="#playground" className="block px-3 py-2 rounded font-mono text-sm text-gray-400 hover:text-terminal-cyan hover:bg-terminal-cyan/5">
              /playground
            </a>
            <a href="#examples" className="block px-3 py-2 rounded font-mono text-sm text-gray-400 hover:text-terminal-cyan hover:bg-terminal-cyan/5">
              /examples
            </a>
            <button className="w-full mt-2 px-4 py-2 bg-terminal-cyan hover:bg-terminal-cyan/90 text-crt-darker font-mono font-bold rounded transition-colors">
              START_
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
