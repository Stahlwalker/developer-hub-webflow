import { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { Copy, Check } from 'lucide-react';

interface V3CodeSnippetProps {
  code: string;
  language: string;
  title?: string;
  dark?: boolean;
}

export function V3CodeSnippet({ code, language, title, dark = true }: V3CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`rounded-lg overflow-hidden border ${dark ? 'border-wfb-gray-800 bg-wfb-gray-900' : 'border-wfb-gray-200 bg-white'}`}>
      {title && (
        <div className={`flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b ${dark ? 'border-wfb-gray-800' : 'border-wfb-gray-200'}`}>
          <span className={`text-xs sm:text-sm font-medium font-wf-body ${dark ? 'text-wfb-gray-400' : 'text-wfb-gray-600'}`}>{title}</span>
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 min-h-[44px] text-xs sm:text-sm font-wf-body rounded-md transition-colors ${
              dark ? 'hover:bg-wfb-gray-800 text-wfb-gray-400' : 'hover:bg-wfb-gray-100 text-wfb-gray-500'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-wfb-green" />
                <span className="text-wfb-green hidden sm:inline">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="hidden sm:inline">Copy</span>
              </>
            )}
          </button>
        </div>
      )}
      <Highlight
        theme={dark ? themes.nightOwl : themes.nightOwlLight}
        code={code.trim()}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm`}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="hidden sm:inline-block w-8 text-wfb-gray-600 select-none text-xs">{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
