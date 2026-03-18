import { Youtube, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const productLinks = [
  { label: 'Platform', href: 'https://webflow.com/platform' },
  { label: 'Design', href: 'https://webflow.com/platform/designer' },
  { label: 'Edit content', href: 'https://webflow.com/platform/editor' },
  { label: 'Interactions', href: 'https://webflow.com/interactions-animations' },
  { label: 'GSAP', href: 'https://webflow.com/platform/gsap' },
  { label: 'Page building', href: 'https://webflow.com/platform/page-building' },
  { label: 'Shared Libraries', href: 'https://webflow.com/platform/libraries' },
  { label: 'Collaboration', href: 'https://webflow.com/platform/collaboration' },
  { label: 'CMS', href: 'https://webflow.com/platform/cms' },
  { label: 'Hosting', href: 'https://webflow.com/platform/hosting' },
  { label: 'Localization', href: 'https://webflow.com/platform/localization' },
  { label: 'Security', href: 'https://webflow.com/platform/security' },
  { label: 'Ecommerce', href: 'https://webflow.com/ecommerce' },
  { label: 'Analyze', href: 'https://webflow.com/platform/analyze' },
  { label: 'Optimize', href: 'https://webflow.com/platform/optimize' },
  { label: 'SEO', href: 'https://webflow.com/platform/seo' },
  { label: 'Webflow Cloud', href: 'https://webflow.com/platform/webflow-cloud' },
  { label: 'DevLink', href: 'https://webflow.com/platform/devlink', badge: 'LABS' },
  { label: 'Figma to Webflow', href: 'https://webflow.com/figma-to-webflow', badge: 'LABS' },
  { label: 'Accessibility', href: 'https://webflow.com/platform/accessibility' },
  { label: 'AI', href: 'https://webflow.com/platform/ai' },
];

const solutionsLinks = [
  { label: 'Enterprise', href: 'https://webflow.com/enterprise' },
  { label: 'Startups', href: 'https://webflow.com/startups' },
  { label: 'Global alliances', href: 'https://webflow.com/partners/global-alliances' },
  { label: 'Agencies', href: 'https://webflow.com/agencies' },
  { label: 'Freelancers', href: 'https://webflow.com/freelancers' },
];

const resourcesLinks = [
  { label: 'University', href: 'https://university.webflow.com' },
  { label: 'Blog', href: 'https://webflow.com/blog' },
  { label: 'Customer stories', href: 'https://webflow.com/customers' },
  { label: 'Webinars & ebooks', href: 'https://webflow.com/resources' },
  { label: 'Apps', href: 'https://webflow.com/apps' },
  { label: 'Libraries', href: 'https://webflow.com/made-in-webflow' },
  { label: 'Templates', href: 'https://webflow.com/templates' },
  { label: 'Developers', href: 'https://developers.webflow.com' },
  { label: 'Made in Webflow', href: 'https://webflow.com/made-in-webflow' },
  { label: 'Glossary', href: 'https://webflow.com/glossary' },
  { label: 'Livestreams', href: 'https://webflow.com/events' },
  { label: 'The Webflow Way', href: 'https://webflow.com/the-webflow-way' },
  { label: 'Business Value Calculator', href: 'https://webflow.com/business-value-calculator' },
];

const companyLinks = [
  { label: 'About', href: 'https://webflow.com/about' },
  { label: 'Careers', href: 'https://webflow.com/careers', badge: "WE'RE HIRING" },
  { label: 'Press', href: 'https://webflow.com/press' },
  { label: 'Webflow Ventures', href: 'https://webflow.com/ventures' },
  { label: 'Webflow Shop', href: 'https://webflow.com/shop' },
  { label: 'Terms of Service', href: 'https://webflow.com/legal/terms' },
  { label: 'Privacy policy', href: 'https://webflow.com/legal/privacy' },
  { label: 'Cookie policy', href: 'https://webflow.com/legal/cookie' },
  { label: 'Accessibility statement', href: 'https://webflow.com/accessibility-statement' },
];

const compareLinks = [
  { label: 'Contentful', href: 'https://webflow.com/vs/contentful' },
  { label: 'Framer', href: 'https://webflow.com/vs/framer' },
  { label: 'Sitecore', href: 'https://webflow.com/vs/sitecore' },
  { label: 'Wix', href: 'https://webflow.com/vs/wix' },
  { label: 'WordPress', href: 'https://webflow.com/vs/wordpress' },
];

const communityLinks = [
  { label: 'Discover the community', href: 'https://webflow.com/community' },
  { label: 'Partner with Webflow', href: 'https://webflow.com/partners' },
  { label: 'Certified Partners', href: 'https://webflow.com/certified-partners' },
  { label: 'Become a template designer', href: 'https://webflow.com/template-designers' },
  { label: 'Become an affiliate', href: 'https://webflow.com/affiliates' },
  { label: 'Become a Global Leader', href: 'https://webflow.com/community/global-leaders' },
  { label: 'Find a meetup near you', href: 'https://webflow.com/community/meetups' },
];

const getHelpLinks = [
  { label: 'Support', href: 'https://support.webflow.com' },
  { label: 'Pricing', href: 'https://webflow.com/pricing' },
  { label: 'Status', href: 'https://status.webflow.com' },
  { label: 'Community Homebase', href: 'https://community.webflow.com' },
  { label: 'Wishlist', href: 'https://wishlist.webflow.com' },
];

const socialLinks = [
  { icon: Youtube, href: 'https://www.youtube.com/webflow', label: 'YouTube' },
  { icon: Twitter, href: 'https://twitter.com/webflow', label: 'X / Twitter' },
  { icon: Facebook, href: 'https://www.facebook.com/webflow', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/webflow-inc-', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/webflow', label: 'Instagram' },
];

function FooterGroup({ title, links }: { title: string; links: { label: string; href: string; badge?: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold font-wf-heading text-wfb-black mb-3">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-wf-body text-wfb-gray-500 hover:text-wfb-black transition-colors"
            >
              {link.label}
              {link.badge && (
                <span className="text-[10px] font-semibold font-wf-heading px-1.5 py-0.5 rounded bg-wfb-blue/10 text-wfb-blue tracking-wide">
                  {link.badge}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function V3Footer() {
  return (
    <footer className="bg-white border-t border-wfb-gray-200 overflow-hidden">
      {/* Main footer content wrapper */}
      <div className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Product */}
          <FooterGroup title="Product" links={productLinks} />

          {/* Col 2: Solutions + Resources */}
          <div className="space-y-8">
            <FooterGroup title="Solutions" links={solutionsLinks} />
            <FooterGroup title="Resources" links={resourcesLinks} />
          </div>

          {/* Col 3: Company + Compare */}
          <div className="space-y-8">
            <FooterGroup title="Company" links={companyLinks} />
            <FooterGroup title="Compare" links={compareLinks} />
          </div>

          {/* Col 4: Community + Get help */}
          <div className="space-y-8">
            <FooterGroup title="Community" links={communityLinks} />
            <FooterGroup title="Get help" links={getHelpLinks} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-wfb-gray-200 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <img src="/logos/Mark_Logo_Black.png" alt="Webflow" className="h-5" />
            <p className="text-sm font-wf-body text-wfb-gray-500">
              © 2026 Webflow, Inc. All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-1">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-wfb-gray-400 hover:text-wfb-black transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Version switcher bar */}
      <div className="bg-wfb-black px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-1">
          <span className="text-xs font-wf-body text-wfb-gray-600 mr-2">Designs:</span>
          {[
            { label: 'Retro', to: '/retro' },
            { label: 'v1', to: '/new-design' },
            { label: 'v2', to: '/new-design-v2' },
            { label: 'v3', to: '/new-design-v3' },
          ].map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="px-2.5 py-1 text-xs font-medium font-wf-body text-wfb-gray-400 hover:text-white rounded transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
