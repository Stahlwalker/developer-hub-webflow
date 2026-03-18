import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const versions = [
  { path: '/', label: 'Retro', description: 'CRT terminal theme' },
  { path: '/new-design', label: 'v1', description: 'Modern design' },
  { path: '/new-design-v2', label: 'v2', description: 'On-brand design' },
  { path: '/new-design-v3', label: 'v3', description: 'Factual content' },
];

interface VersionSwitcherProps {
  variant?: 'light' | 'dark' | 'retro';
}

export function VersionSwitcher({ variant = 'light' }: VersionSwitcherProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const current = versions.find(v => v.path === location.pathname) ?? versions[0];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const styles = {
    light: {
      button: 'border border-wf-gray-200 hover:bg-wf-gray-50 text-wf-gray-500 hover:text-wf-dark',
      dropdown: 'bg-white border border-wf-gray-200 shadow-lg',
      item: 'text-wf-gray-600 hover:bg-wf-gray-50 hover:text-wf-dark',
      active: 'bg-wf-gray-50 text-wf-blue',
      desc: 'text-wf-gray-400',
    },
    dark: {
      button: 'border border-wfb-gray-200 hover:bg-wfb-gray-100 text-wfb-gray-500 hover:text-wfb-black',
      dropdown: 'bg-white border border-wfb-gray-200 shadow-lg',
      item: 'text-wfb-gray-600 hover:bg-wfb-gray-100 hover:text-wfb-black',
      active: 'bg-wfb-gray-100 text-wfb-blue',
      desc: 'text-wfb-gray-400',
    },
    retro: {
      button: 'border border-terminal-cyan/20 hover:border-terminal-cyan text-terminal-cyan/60 hover:text-terminal-cyan',
      dropdown: 'bg-crt-dark border border-terminal-cyan/30 shadow-neon-cyan',
      item: 'text-gray-600 dark:text-gray-400 hover:bg-terminal-cyan/5 hover:text-terminal-cyan',
      active: 'bg-terminal-cyan/10 text-terminal-cyan',
      desc: 'text-gray-500 dark:text-gray-500',
    },
  };

  const s = styles[variant];
  const fontClass = variant === 'retro' ? 'font-mono' : variant === 'dark' ? 'font-wf-heading' : 'font-sans';
  const radius = variant === 'dark' ? 'rounded-md' : 'rounded-lg';

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] text-xs font-medium ${fontClass} ${radius} transition-colors ${s.button}`}
      >
        {variant === 'retro' ? current.label.toUpperCase() : current.label}
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className={`absolute right-0 sm:right-0 mt-2 w-44 sm:w-48 ${radius} overflow-hidden z-50 ${s.dropdown}`}>
          {versions.map((v) => (
            <button
              key={v.path}
              onClick={() => {
                navigate(v.path);
                setOpen(false);
              }}
              className={`w-full text-left px-3 py-3 text-sm ${fontClass} transition-colors ${
                v.path === current.path ? s.active : s.item
              }`}
            >
              <div className="font-medium">
                {variant === 'retro' ? v.label.toUpperCase() : v.label}
              </div>
              <div className={`text-xs ${s.desc}`}>
                {v.description}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
