import { useState, useRef, useEffect } from 'react';
import { Menu, X, Search, Github, Newspaper, ChevronDown, ExternalLink } from 'lucide-react';
import { V3SearchModal } from './V3SearchModal';

const resourcesLinks = [
  { label: 'Docs', href: 'https://developers.webflow.com/docs', external: true },
  { label: 'Marketplace', href: 'https://webflow.com/apps', external: true },
  { label: 'Developer Blog', href: 'https://webflow.com/blog/category/development', external: true },
  { label: 'Newsletter', href: '#newsletter', external: false },
];

const centerNav = [
  { label: 'Platform', href: '#products' },
  { label: 'API Requests', href: '#api-playground' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Community', href: '#community' },
];

const navLinkClass = 'px-3 py-1.5 text-[13px] font-medium font-wf-body text-wfb-gray-600 hover:text-wfb-black hover:bg-wfb-gray-100 rounded-md transition-colors whitespace-nowrap';

export function V3Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <>
    <div className="fixed top-0 left-0 right-0 z-50">

      {/* ── Webflow main nav ── */}
      <div className="bg-white border-b border-wfb-gray-200">
        <div className="h-[3px] bg-[#1a1f36]" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Left: logo + links */}
            <div className="flex items-center gap-6">
              <img src="/logos/Full_Logo_Blue_Black.png" alt="Webflow" className="h-[22px] flex-shrink-0" />
              <div className="hidden md:flex items-center gap-0.5">
                {['Platform', 'Solutions', 'Resources', 'Enterprise', 'Pricing'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="px-3 py-1.5 text-[14px] font-medium font-wf-body text-wfb-gray-600 hover:text-wfb-black hover:bg-wfb-gray-100 rounded-md transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: secondary links + CTA */}
            <div className="hidden md:flex items-center gap-1">
              <a href="#" className="px-3 py-1.5 text-[14px] font-medium font-wf-body text-wfb-gray-600 hover:text-wfb-black hover:bg-wfb-gray-100 rounded-md transition-colors whitespace-nowrap">
                #MadeInWebflow
              </a>
              <a href="#" className="px-3 py-1.5 text-[14px] font-medium font-wf-body text-wfb-gray-600 hover:text-wfb-black hover:bg-wfb-gray-100 rounded-md transition-colors whitespace-nowrap">
                Contact Sales
              </a>
              <a href="#" className="ml-2 px-4 py-2 bg-wfb-blue hover:bg-wfb-blue/90 text-white text-[14px] font-semibold font-wf-heading rounded-lg transition-colors whitespace-nowrap">
                View dashboard
              </a>
            </div>

            <button className="md:hidden p-2 text-wfb-gray-500 hover:bg-wfb-gray-100 rounded-md">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Developer sub-nav ── */}
      <div className="bg-white border-b border-wfb-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-12 gap-6">

            {/* Left: Developers */}
            <span className="text-[15px] font-semibold font-wf-heading text-wfb-black tracking-[0.01em] flex-shrink-0">
              Developers
            </span>

            {/* Center: nav items */}
            <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">

              {/* Platform */}
              <a href="#products" className={navLinkClass}>Platform</a>

              {/* Resources dropdown — second */}
              <div ref={resourcesRef} className="relative">
                <button
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  className={`flex items-center gap-1 ${navLinkClass}`}
                >
                  Resources
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                </button>

                {resourcesOpen && (
                  <div className="absolute top-full left-0 mt-1.5 w-52 bg-white border border-wfb-gray-200 rounded-lg shadow-lg overflow-hidden z-50">
                    {resourcesLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        onClick={() => setResourcesOpen(false)}
                        className="flex items-center justify-between px-4 py-2.5 text-[13px] font-wf-body text-wfb-gray-600 hover:bg-wfb-gray-100 hover:text-wfb-black transition-colors"
                      >
                        {link.label}
                        {link.external && <ExternalLink className="w-3 h-3 text-wfb-gray-400" />}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Remaining nav items */}
              {centerNav.filter(item => item.label !== 'Platform').map((item) => (
                <a key={item.label} href={item.href} className={navLinkClass}>
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right: icons */}
            <div className="hidden md:flex items-center gap-0.5 flex-shrink-0">
              <button onClick={() => setSearchOpen(true)} className="p-2 text-wfb-gray-500 hover:text-wfb-black hover:bg-wfb-gray-100 rounded-md transition-colors" aria-label="Search">
                <Search className="w-4 h-4" />
              </button>
              <a href="#newsletter" className="p-2 text-wfb-gray-500 hover:text-wfb-black hover:bg-wfb-gray-100 rounded-md transition-colors" aria-label="Newsletter">
                <Newspaper className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/webflow"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-wfb-gray-500 hover:text-wfb-black hover:bg-wfb-gray-100 rounded-md transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden ml-auto">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-wfb-gray-500 hover:bg-wfb-gray-100 rounded-md"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-wfb-gray-200">
            <div className="px-4 pt-2 pb-4 space-y-0.5">
              {centerNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 rounded-md text-sm font-medium font-wf-body text-wfb-gray-600 hover:text-wfb-black hover:bg-wfb-gray-100 min-h-[44px] flex items-center"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-1 border-t border-wfb-gray-100 mt-1">
                <p className="px-3 py-1.5 text-xs font-semibold font-wf-heading text-wfb-gray-400 uppercase tracking-wider">Resources</p>
                {resourcesLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between px-3 py-3 rounded-md text-sm font-medium font-wf-body text-wfb-gray-600 hover:text-wfb-black hover:bg-wfb-gray-100 min-h-[44px]"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="w-3.5 h-3.5 text-wfb-gray-400" />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

    {searchOpen && <V3SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  );
}
