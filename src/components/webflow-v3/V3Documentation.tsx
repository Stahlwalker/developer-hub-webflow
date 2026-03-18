import { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

/* ──────────────────────────────────────────────────────────
   Mini UI mockup components — one per doc section.
   Pure JSX/Tailwind, monochromatic Webflow brand.
   ────────────────────────────────────────────────────────── */

function MockupGettingStarted() {
  return (
    <div className="w-full h-full bg-[#1e1e2e] rounded-t-xl p-3 sm:p-4 flex flex-col overflow-hidden font-mono text-[10px] sm:text-[11px] leading-relaxed">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
        <div className="w-2 h-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-white/30 text-[9px]">terminal</span>
      </div>
      <div className="space-y-1.5 text-white/80">
        <div><span className="text-[#a78bfa]">~</span> <span className="text-white/50">$</span> npm install webflow-api</div>
        <div className="text-emerald-400/80">+ webflow-api@2.4.1</div>
        <div className="text-white/30">added 12 packages in 2.1s</div>
        <div className="mt-2"><span className="text-[#a78bfa]">~</span> <span className="text-white/50">$</span> node init-project.js</div>
        <div className="text-emerald-400/80">✓ API key verified</div>
        <div className="text-emerald-400/80">✓ Connected to workspace</div>
        <div className="text-white/50">Ready to build →</div>
      </div>
    </div>
  );
}

function MockupAuthentication() {
  return (
    <div className="w-full h-full bg-wfb-gray-100 rounded-t-xl p-3 sm:p-4 flex items-start justify-center overflow-hidden">
      <div className="w-full max-w-[260px] bg-white rounded-lg shadow-sm border border-wfb-gray-200 p-3 sm:p-4 mt-1 sm:mt-2">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded bg-wfb-blue/10 flex items-center justify-center">
            <svg className="w-3 h-3 text-wfb-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
          </div>
          <span className="text-xs font-semibold font-wf-heading text-wfb-black">API Authorization</span>
        </div>
        <div className="space-y-2.5">
          <div>
            <div className="text-[10px] font-medium text-wfb-gray-500 mb-1">Bearer Token</div>
            <div className="flex items-center gap-1.5">
              <div className="flex-1 h-7 bg-wfb-gray-100 rounded border border-wfb-gray-200 px-2 flex items-center">
                <span className="text-[10px] text-wfb-gray-400 font-mono">sk-live-••••••••••••3fa8</span>
              </div>
              <div className="w-7 h-7 rounded bg-wfb-gray-100 border border-wfb-gray-200 flex items-center justify-center">
                <svg className="w-3 h-3 text-wfb-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              </div>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-medium text-wfb-gray-500 mb-1">Scopes</div>
            <div className="flex flex-wrap gap-1">
              {['sites:read', 'cms:write', 'forms:read'].map(s => (
                <span key={s} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-wfb-blue/8 text-wfb-blue border border-wfb-blue/10">{s}</span>
              ))}
            </div>
          </div>
          <div className="h-7 bg-wfb-blue rounded flex items-center justify-center">
            <span className="text-[10px] font-medium text-white">Authorize App</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupCMS() {
  return (
    <div className="w-full h-full bg-wfb-gray-100 rounded-t-xl p-3 sm:p-4 flex items-start justify-center overflow-hidden">
      <div className="w-full max-w-[260px] bg-white rounded-lg shadow-sm border border-wfb-gray-200 overflow-hidden mt-1 sm:mt-2">
        <div className="px-3 py-2 border-b border-wfb-gray-200 flex items-center justify-between">
          <span className="text-[10px] font-semibold font-wf-heading text-wfb-black">Blog Posts</span>
          <span className="text-[9px] font-mono text-wfb-gray-400">24 items</span>
        </div>
        {[
          { title: 'Introducing the v2 API', status: 'Published', color: 'bg-emerald-500' },
          { title: 'Migration Guide', status: 'Draft', color: 'bg-amber-400' },
          { title: 'Rate Limiting Deep Dive', status: 'Published', color: 'bg-emerald-500' },
          { title: 'Webhooks Best Practices', status: 'Review', color: 'bg-wfb-blue' },
        ].map((item, i) => (
          <div key={i} className={`px-3 py-2 flex items-center justify-between ${i < 3 ? 'border-b border-wfb-gray-100' : ''}`}>
            <div className="flex items-center gap-2 min-w-0">
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.color}`} />
              <span className="text-[10px] text-wfb-black truncate">{item.title}</span>
            </div>
            <span className="text-[9px] text-wfb-gray-400 flex-shrink-0 ml-2">{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupSites() {
  return (
    <div className="w-full h-full bg-wfb-gray-100 rounded-t-xl p-3 sm:p-4 flex items-start justify-center overflow-hidden">
      <div className="w-full max-w-[260px] space-y-2 mt-1 sm:mt-2">
        {[
          { name: 'Marketing Site', domain: 'www.acme.com', status: 'Live', pages: 34 },
          { name: 'Developer Docs', domain: 'docs.acme.com', status: 'Live', pages: 128 },
          { name: 'Staging', domain: 'staging.acme.com', status: 'Building', pages: 34 },
        ].map((site, i) => (
          <div key={i} className="bg-white rounded-lg border border-wfb-gray-200 p-2.5 shadow-sm">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-semibold font-wf-heading text-wfb-black">{site.name}</span>
              <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded ${site.status === 'Live' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{site.status}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono text-wfb-gray-400">{site.domain}</span>
              <span className="text-[9px] text-wfb-gray-400">{site.pages} pages</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupWebhooks() {
  return (
    <div className="w-full h-full bg-wfb-gray-100 rounded-t-xl p-3 sm:p-4 flex items-start justify-center overflow-hidden">
      <div className="w-full max-w-[260px] bg-white rounded-lg shadow-sm border border-wfb-gray-200 overflow-hidden mt-1 sm:mt-2">
        <div className="px-3 py-2 border-b border-wfb-gray-200 flex items-center justify-between">
          <span className="text-[10px] font-semibold font-wf-heading text-wfb-black">Event Log</span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] text-emerald-600">Live</span>
          </div>
        </div>
        {[
          { event: 'form_submission', time: '2s ago', code: 200 },
          { event: 'site_publish', time: '1m ago', code: 200 },
          { event: 'collection_item_changed', time: '3m ago', code: 200 },
          { event: 'ecomm_order_created', time: '8m ago', code: 408 },
        ].map((log, i) => (
          <div key={i} className={`px-3 py-1.5 flex items-center justify-between ${i < 3 ? 'border-b border-wfb-gray-100' : ''}`}>
            <div className="flex items-center gap-2 min-w-0">
              <span className={`text-[9px] font-mono px-1 py-0.5 rounded ${log.code === 200 ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'}`}>{log.code}</span>
              <span className="text-[10px] font-mono text-wfb-black truncate">{log.event}</span>
            </div>
            <span className="text-[9px] text-wfb-gray-400 flex-shrink-0 ml-2">{log.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupBestPractices() {
  return (
    <div className="w-full h-full bg-wfb-gray-100 rounded-t-xl p-3 sm:p-4 flex items-start justify-center overflow-hidden">
      <div className="w-full max-w-[260px] bg-white rounded-lg shadow-sm border border-wfb-gray-200 p-3 mt-1 sm:mt-2">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-semibold font-wf-heading text-wfb-black">API Health</span>
          <span className="text-[9px] font-mono text-emerald-600">All systems go</span>
        </div>
        <div className="space-y-2.5">
          {[
            { label: 'Rate Limit', used: 142, total: 300, pct: 47 },
            { label: 'Avg Response', used: 89, total: 200, pct: 45, unit: 'ms' },
            { label: 'Error Rate', used: 2, total: 100, pct: 2, unit: '%' },
          ].map((m, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-wfb-gray-500">{m.label}</span>
                <span className="text-[9px] font-mono text-wfb-black">{m.unit ? `${m.used}${m.unit}` : `${m.used}/${m.total}`}</span>
              </div>
              <div className="h-1.5 bg-wfb-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${m.pct < 50 ? 'bg-wfb-blue' : m.pct < 80 ? 'bg-amber-400' : 'bg-red-400'}`}
                  style={{ width: `${m.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-2.5 border-t border-wfb-gray-100 flex items-center gap-1.5">
          <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span className="text-[9px] text-wfb-gray-400">Last checked 12s ago</span>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Section data
   ────────────────────────────────────────────────────────── */

const docSections = [
  {
    title: 'Getting Started',
    description: 'Make your first API call from the docs.',
    href: 'https://developers.webflow.com/data/docs/data-clients',
    image: '/images/Structure.png',
    Mockup: MockupGettingStarted,
  },
  {
    title: 'Authentication',
    description: 'OAuth 2.0 and site token setup.',
    href: 'https://developers.webflow.com/data/reference/authentication',
    image: '/images/OAuth.png',
    Mockup: MockupAuthentication,
  },
  {
    title: 'CMS API',
    description: 'Create, update, and publish collection items.',
    href: 'https://developers.webflow.com/data/docs/working-with-the-cms',
    image: '/images/CMS Content.png',
    Mockup: MockupCMS,
  },
  {
    title: 'Site Management',
    description: 'Manage pages, domains, and publishing.',
    href: 'https://developers.webflow.com/data/reference/sites/list',
    image: '/images/Sites.png',
    Mockup: MockupSites,
  },
  {
    title: 'Custom Code',
    description: 'Add scripts and custom code to sites and pages.',
    href: 'https://developers.webflow.com/data/docs/working-with-custom-code',
    image: '/images/Cutsom Code.png',
    Mockup: MockupWebhooks,
  },
  {
    title: 'Webhooks',
    description: 'Subscribe to site, form, and CMS events.',
    href: 'https://developers.webflow.com/data/docs/working-with-webhooks',
    image: '/images/Webhook.png',
    Mockup: MockupBestPractices,
  },
];

const CARD_WIDTH = 340;
const SCROLL_GAP = 24;

export function V3Documentation() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollButtons();
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    window.addEventListener('resize', updateScrollButtons);

    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [updateScrollButtons]);

  const scrollPrev = useCallback(() => {
    scrollRef.current?.scrollBy({
      left: -(CARD_WIDTH + SCROLL_GAP),
      behavior: 'smooth',
    });
  }, []);

  const scrollNext = useCallback(() => {
    scrollRef.current?.scrollBy({
      left: CARD_WIDTH + SCROLL_GAP,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section id="docs" className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      <style>{`.docs-carousel-v3::-webkit-scrollbar { display: none; }`}</style>

      {/* Split header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:max-w-md lg:max-w-lg"
          >
            <h2
              className="font-wf-heading font-semibold text-wfb-black tracking-tight"
              style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', lineHeight: 1.04 }}
            >
              Documentation
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-end gap-6"
          >
            <p
              className="text-base sm:text-lg text-wfb-gray-500 font-wf-body md:max-w-sm"
              style={{ lineHeight: 1.6 }}
            >
              Guides, references, and examples across the developer platform.
            </p>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={scrollPrev}
                disabled={!canScrollLeft}
                className="w-10 h-10 rounded-full border border-wfb-gray-200 flex items-center justify-center text-wfb-black hover:border-wfb-black/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all bg-white"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollRight}
                className="w-10 h-10 rounded-full border border-wfb-gray-200 flex items-center justify-center text-wfb-black hover:border-wfb-black/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all bg-white"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carousel track — bleeds right */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div
          ref={scrollRef}
          className="docs-carousel-v3 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth"
          style={{
            paddingLeft: 'max(1rem, calc((100vw - 80rem) / 2 + 2rem))',
            paddingRight: '1.5rem',
            scrollbarWidth: 'none',
          }}
        >
          {docSections.map((section, index) => {
            const { Mockup } = section;
            return (
              <motion.a
                key={index}
                href={section.href}
                target={section.href.startsWith('http') ? '_blank' : undefined}
                rel={section.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                className="group flex-shrink-0 snap-start w-[280px] sm:w-[320px] lg:w-[340px] bg-white border border-wfb-gray-200 rounded-xl hover:border-wfb-black/20 transition-all flex flex-col"
              >
                {/* Preview */}
                <div className="h-44 sm:h-52 overflow-hidden rounded-t-xl">
                  {section.image
                    ? <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                    : <Mockup />
                  }
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold font-wf-heading text-wfb-black mb-2 group-hover:text-wfb-blue transition-colors">
                    {section.title}
                  </h3>
                  <p
                    className="text-wfb-gray-500 text-sm font-wf-body mb-4 flex-1"
                    style={{ lineHeight: 1.6 }}
                  >
                    {section.description}
                  </p>
                  <ArrowRight className="w-4 h-4 text-wfb-blue group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
