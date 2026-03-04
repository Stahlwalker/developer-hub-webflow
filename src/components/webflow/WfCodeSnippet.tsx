import { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { Copy, Check } from 'lucide-react';

interface WfCodeSnippetProps {
  code: string;
  language: string;
  title?: string;
  dark?: boolean;
}

export function WfCodeSnippet({ code, language, title, dark = true }: WfCodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`rounded-xl overflow-hidden border ${dark ? 'border-wf-gray-800 bg-wf-gray-900' : 'border-wf-gray-200 bg-white'}`}>
      {title && (
        <div className={`flex items-center justify-between px-4 py-3 border-b ${dark ? 'border-wf-gray-800' : 'border-wf-gray-200'}`}>
          <span className={`text-sm font-medium font-sans ${dark ? 'text-wf-gray-400' : 'text-wf-gray-600'}`}>{title}</span>
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-3 py-1 text-sm font-sans rounded-lg transition-colors ${
              dark ? 'hover:bg-wf-gray-800 text-wf-gray-400' : 'hover:bg-wf-gray-100 text-wf-gray-500'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-green-500">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
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
            className={`${className} p-4 overflow-x-auto text-sm`}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="inline-block w-8 text-wf-gray-600 select-none text-xs">{i + 1}</span>
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
