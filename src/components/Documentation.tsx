import { Book, Code2, Rocket, Shield, Zap, Database } from 'lucide-react';

const docSections = [
  {
    icon: Rocket,
    title: 'INIT',
    subtitle: 'Getting Started',
    description: 'Bootstrap your dev environment and fire your first API call',
    color: 'terminal-cyan',
  },
  {
    icon: Shield,
    title: 'AUTH',
    subtitle: 'Authentication',
    description: 'OAuth 2.0 flow and secure request signing',
    color: 'terminal-green',
  },
  {
    icon: Database,
    title: 'CMS',
    subtitle: 'CMS API',
    description: 'CRUD operations for collections and dynamic content',
    color: 'terminal-magenta',
  },
  {
    icon: Code2,
    title: 'SITE',
    subtitle: 'Sites API',
    description: 'Programmatic site management and deployment',
    color: 'terminal-cyan',
  },
  {
    icon: Zap,
    title: 'HOOK',
    subtitle: 'Webhooks',
    description: 'Real-time event streaming and notifications',
    color: 'terminal-yellow',
  },
  {
    icon: Book,
    title: 'BEST',
    subtitle: 'Best Practices',
    description: 'Rate limits, error handling, and performance tips',
    color: 'terminal-green',
  },
];

export function Documentation() {
  return (
    <section id="docs" className="py-20 px-4 sm:px-6 lg:px-8 bg-crt-dark/30 dot-matrix">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-mono mb-4 text-terminal-cyan neon-text">
            $ cat DOCUMENTATION
          </h2>
          <p className="text-lg text-gray-400 font-mono">
            {'> '} Everything you need to ship with the Webflow API
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <a
                key={index}
                href="#"
                className="retro-card p-6 hover:scale-105 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-6xl font-mono text-white/5 font-bold">
                  0{index + 1}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 text-${section.color}`} />
                  <span className={`text-2xl font-bold font-mono text-${section.color}`}>
                    {section.title}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-terminal-cyan transition-colors">
                  {section.subtitle}
                </h3>
                <p className="text-gray-400 text-sm font-mono leading-relaxed">
                  {section.description}
                </p>
                <div className="mt-4 text-terminal-cyan/60 text-xs font-mono">
                  → Read more
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
