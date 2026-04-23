import { Users, Calendar, Trophy, Github, Youtube, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function RedditIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
    </svg>
  );
}

const channels = [
  {
    icon: Users,
    title: 'Webflow Community',
    description: 'Ask questions and share your work.',
    href: 'https://community.webflow.com',
    linkLabel: 'Join the forum',
  },
  {
    icon: Github,
    title: 'GitHub',
    description: 'SDKs, examples, and open source projects.',
    href: 'https://github.com/webflow',
    linkLabel: 'View on GitHub',
  },
  {
    icon: RedditIcon,
    title: 'Reddit',
    description: 'Discussions and feedback from Webflow developers.',
    href: 'https://www.reddit.com/r/webflow/',
    linkLabel: 'Visit r/webflow',
  },
  {
    icon: DiscordIcon,
    title: 'Discord',
    description: 'Chat with developers building on Webflow.',
    href: 'https://discord.com/invite/webflow-community-495477343494602762',
    linkLabel: 'Join Discord',
  },
  {
    icon: Youtube,
    title: 'YouTube',
    description: 'Tutorials, demos, and live streams.',
    href: 'https://www.youtube.com/webflow',
    linkLabel: 'Watch videos',
  },
];

const upcomingEvents = [
  {
    title: 'Developer Office Hours Livestream',
    date: 'TBD',
    type: 'Livestream',
  },
  {
    title: 'React Conf 2026',
    date: 'TBD',
    type: 'Conference',
  },
  {
    title: 'WeAreDevelopers — San Jose',
    date: 'TBD',
    type: 'Conference',
  },
  {
    title: 'WeAreDevelopers — Berlin',
    date: 'TBD',
    type: 'Conference',
  },
  {
    title: 'Cloudflare Connect',
    date: 'TBD',
    type: 'Conference',
  },
];

const contributorPrograms = [
  {
    title: 'Developer Blog',
    description: 'Technical posts on APIs, Cloud, and building with Webflow.',
    tags: ['Tutorials', 'Product Updates', 'Best Practices'],
    href: 'https://webflow.com/blog/category/development',
  },
  {
    title: 'Webflow University',
    description: 'Courses and tutorials for learning the platform.',
    tags: ['Video Courses', 'Certifications', 'Guides'],
    href: 'https://university.webflow.com',
  },
  {
    title: 'Open Source',
    description: 'Contribute to Webflow SDKs and developer tools on GitHub.',
    tags: ['Code Contributions', 'Public Repos', 'SDKs'],
    href: 'https://github.com/webflow',
  },
  {
    title: 'Beta Testing',
    description: 'Get early access to new features and APIs.',
    tags: ['Early Access', 'Direct Feedback', 'Influence Roadmap'],
    href: '#',
  },
  {
    title: 'ACEs Program',
    description: 'Recognized experts building and teaching on Webflow.',
    tags: ['Recognition', 'Exclusive Access', 'Community'],
    href: '#',
  },
];

export function V3Community() {
  return (
    <section id="community" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-wf-heading font-semibold mb-3 sm:mb-4 text-wfb-black tracking-tight"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', lineHeight: 1.04 }}
          >
            Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-wfb-gray-500 font-wf-body max-w-2xl mx-auto"
            style={{ lineHeight: 1.6 }}
          >
            Connect with developers, get support, and contribute.
          </motion.p>
        </div>

        {/* Community Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <motion.a
                key={index}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white border border-wfb-gray-200 rounded-lg p-5 sm:p-6 hover:border-wfb-black/20 transition-all flex flex-col"
              >
                <div className="w-10 h-10 bg-wfb-gray-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 text-wfb-blue" />
                </div>

                <h3 className="text-base sm:text-lg font-semibold font-wf-heading text-wfb-black mb-2 group-hover:text-wfb-blue transition-colors">
                  {channel.title}
                </h3>

                <p className="text-wfb-gray-500 text-sm font-wf-body mb-4 flex-1" style={{ lineHeight: 1.6 }}>
                  {channel.description}
                </p>

                <div className="inline-flex items-center gap-1 text-sm font-medium font-wf-heading text-wfb-blue">
                  {channel.linkLabel}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Events & Get Involved */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-wfb-gray-200 rounded-lg p-4 sm:p-6 flex flex-col h-full"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-wfb-blue" />
              <h3 className="text-lg sm:text-xl font-semibold font-wf-heading text-wfb-black">
                Upcoming Events
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4 flex-1 min-h-0 overflow-y-auto pr-1">
              {upcomingEvents.map((event, index) => (
                <a
                  key={index}
                  href="#"
                  className="group block p-3 sm:p-4 border border-wfb-gray-200 rounded-lg hover:border-wfb-black/20 transition-all"
                >
                  <div className="flex justify-between items-start gap-2 mb-1.5 sm:mb-2">
                    <h4 className="font-medium font-wf-heading text-wfb-black group-hover:text-wfb-blue transition-colors text-sm sm:text-base">{event.title}</h4>
                    <span className="text-[10px] sm:text-xs font-medium font-wf-body px-2 sm:px-2.5 py-0.5 sm:py-1 bg-wfb-gray-100 text-wfb-blue rounded-full flex-shrink-0">
                      {event.type}
                    </span>
                  </div>
                  <span className="text-wfb-gray-500 font-wf-body text-xs sm:text-sm">{event.date}</span>
                </a>
              ))}
            </div>

            <a
              href="https://community.webflow.com/events"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-1.5 w-full mt-3 sm:mt-4 px-4 py-3 border border-wfb-gray-200 hover:border-wfb-black/20 text-wfb-black font-medium font-wf-heading rounded-lg transition-all min-h-[44px] text-sm"
            >
              View all events
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Get Involved */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-wfb-gray-200 rounded-lg p-4 sm:p-6"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-wfb-blue" />
              <h3 className="text-lg sm:text-xl font-semibold font-wf-heading text-wfb-black">
                Get Involved
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {contributorPrograms.map((program, index) => (
                <a
                  key={index}
                  href={program.href}
                  target={program.href !== '#' ? '_blank' : undefined}
                  rel={program.href !== '#' ? 'noopener noreferrer' : undefined}
                  className="group block p-3 sm:p-4 border border-wfb-gray-200 rounded-lg hover:border-wfb-black/20 transition-all"
                >
                  <h4 className="font-medium font-wf-heading text-wfb-black group-hover:text-wfb-blue transition-colors mb-1.5 sm:mb-2 text-sm sm:text-base">{program.title}</h4>
                  <p className="text-wfb-gray-500 text-xs sm:text-sm font-wf-body mb-2 sm:mb-3">{program.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {program.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] sm:text-xs font-medium font-wf-body px-2 sm:px-2.5 py-0.5 sm:py-1 bg-wfb-gray-100 text-wfb-gray-600 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
