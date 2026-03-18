import { useEffect, useRef } from 'react';
import { X, Sparkles, SlidersHorizontal, ChevronDown, Sun, Moon, Monitor } from 'lucide-react';

interface Props {
  onClose: () => void;
}

const filters = [
  { label: 'Filter to Data API', count: 285 },
  { label: 'Filter to Designer API', count: 258 },
  { label: 'Filter to FlowKit CSS Framework', count: 47 },
];

const themeOptions = [
  { icon: Sun, label: 'Change theme to light' },
  { icon: Moon, label: 'Change theme to dark' },
  { icon: Monitor, label: 'Change theme to system' },
];

export function V3SearchModal({ onClose }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center px-4 py-3 border-b border-wfb-gray-200">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            className="flex-1 text-base font-wf-body text-wfb-black placeholder:text-wfb-gray-400 outline-none bg-transparent"
          />
          <button
            onClick={onClose}
            className="ml-2 px-2 py-0.5 text-xs font-medium font-wf-body text-wfb-gray-500 border border-wfb-gray-200 rounded hover:bg-wfb-gray-100 transition-colors"
          >
            Esc
          </button>
        </div>

        <div className="py-2 max-h-[420px] overflow-y-auto">
          {/* Ask AI */}
          <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-wfb-blue/[0.06] hover:bg-wfb-blue/10 transition-colors text-left">
            <Sparkles className="w-4 h-4 text-wfb-blue flex-shrink-0" />
            <span className="text-sm font-medium font-wf-body text-wfb-black">Ask AI</span>
          </button>

          {/* Filters */}
          <div className="mt-2 px-4 pb-1">
            <p className="text-xs font-semibold font-wf-body text-wfb-gray-400 mb-1">Filters</p>
          </div>
          {filters.map((filter) => (
            <button
              key={filter.label}
              className="w-full flex items-center justify-between gap-3 px-4 py-2.5 hover:bg-wfb-gray-100 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <SlidersHorizontal className="w-4 h-4 text-wfb-gray-400 flex-shrink-0" />
                <span className="text-sm font-wf-body text-wfb-black">{filter.label}</span>
              </div>
              <span className="text-xs font-wf-body text-wfb-gray-400">{filter.count}</span>
            </button>
          ))}
          <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-wfb-gray-100 transition-colors text-left">
            <ChevronDown className="w-4 h-4 text-wfb-gray-400 flex-shrink-0" />
            <span className="text-sm font-wf-body text-wfb-black">Show more filters (21)</span>
          </button>

          {/* Theme */}
          <div className="mt-2 px-4 pb-1">
            <p className="text-xs font-semibold font-wf-body text-wfb-gray-400 mb-1">Theme</p>
          </div>
          {themeOptions.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-wfb-gray-100 transition-colors text-left"
            >
              <Icon className="w-4 h-4 text-wfb-gray-400 flex-shrink-0" />
              <span className="text-sm font-wf-body text-wfb-black">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
