const logos = [
  'NCR Voyix',
  'monday.com',
  'Spotify',
  'TED',
  'Dropbox',
  'Greenhouse',
  'CLEAR',
  'Orangetheory',
  'Checkr',
  'Lattice',
  'Deel',
  'Webflow',
];

export function V3TrustedBy() {
  return (
    <section className="py-10 sm:py-12 bg-white border-t border-b border-wfb-gray-200">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Heading */}
      <p className="text-center text-[15px] font-wf-body text-wfb-gray-500 mb-8 px-4">
        Trusted by over <strong className="text-wfb-black font-semibold font-wf-heading">300,000</strong> of the world's leading organizations
      </p>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex items-center gap-8 sm:gap-14 whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...logos, ...logos].map((name, i) => (
            <span
              key={i}
              className="text-[15px] sm:text-[16px] font-semibold font-wf-heading text-wfb-gray-300 hover:text-wfb-gray-500 transition-colors cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
