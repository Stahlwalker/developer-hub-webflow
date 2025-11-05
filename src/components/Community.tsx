import { Users, MessageSquare, Calendar, Trophy, Github, Youtube, Twitter, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const communityChannels = [
  {
    icon: MessageCircle,
    name: 'DISCORD',
    title: 'Discord Community',
    description: 'Join 10,000+ developers in real-time chat',
    members: '10K+',
    color: 'terminal-cyan',
    link: '#',
  },
  {
    icon: Github,
    name: 'GITHUB',
    title: 'GitHub Discussions',
    description: 'Contribute to open source projects',
    members: '5K+',
    color: 'terminal-green',
    link: '#',
  },
  {
    icon: MessageSquare,
    title: 'Forum',
    name: 'FORUM',
    description: 'Ask questions and share knowledge',
    members: '50K+',
    color: 'terminal-magenta',
    link: '#',
  },
  {
    icon: Youtube,
    name: 'YOUTUBE',
    title: 'YouTube Channel',
    description: 'Video tutorials and live streams',
    members: '100K+',
    color: 'terminal-yellow',
    link: '#',
  },
];

const communityStats = [
  { label: 'Active Developers', value: '50K+', icon: Users },
  { label: 'Open Source Projects', value: '200+', icon: Github },
  { label: 'Monthly Events', value: '12+', icon: Calendar },
  { label: 'Community Contributors', value: '1K+', icon: Trophy },
];

const upcomingEvents = [
  {
    title: 'Webflow DevCon 2024',
    date: 'Mar 15, 2024',
    type: 'Conference',
    attendees: '1000+',
  },
  {
    title: 'API Workshop: CMS Deep Dive',
    date: 'Mar 22, 2024',
    type: 'Workshop',
    attendees: '50',
  },
  {
    title: 'Community Office Hours',
    date: 'Every Friday',
    type: 'Recurring',
    attendees: '100+',
  },
];

const contributorPrograms = [
  {
    title: 'Developer Advocate',
    description: 'Share your expertise and help other developers succeed',
    perks: ['Exclusive access', 'Direct support', 'Recognition'],
  },
  {
    title: 'Beta Tester',
    description: 'Get early access to new features and APIs',
    perks: ['Early access', 'Influence roadmap', 'Direct feedback'],
  },
  {
    title: 'Open Source',
    description: 'Contribute to Webflow SDKs and developer tools',
    perks: ['Code contributions', 'Public recognition', 'Swag'],
  },
];

export function Community() {
  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 retro-gradient relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold font-mono mb-4 text-terminal-green neon-text"
          >
            $ whoami COMMUNITY
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-mono"
          >
            Connect with developers, get support, and contribute
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="retro-card p-6 text-center"
              >
                <Icon className="w-8 h-8 text-terminal-cyan mx-auto mb-3" />
                <div className="text-3xl font-bold font-mono text-terminal-cyan mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Community Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityChannels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <motion.a
                key={index}
                href={channel.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="retro-card p-6 hover:scale-105 transition-all group text-center"
              >
                <div className={`w-12 h-12 border-2 border-${channel.color} rounded flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-6 h-6 text-${channel.color}`} />
                </div>
                <div className={`text-xs font-bold font-mono text-${channel.color} mb-2`}>
                  {channel.name}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-terminal-cyan transition-colors">
                  {channel.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{channel.description}</p>
                <div className="text-terminal-cyan font-mono text-sm">{channel.members} members</div>
              </motion.a>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="retro-card p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-terminal-cyan" />
              <h3 className="text-2xl font-bold font-mono text-terminal-cyan">
                UPCOMING_EVENTS
              </h3>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="p-4 bg-crt-dark/50 border border-terminal-cyan/20 rounded hover:border-terminal-cyan/40 transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-white">{event.title}</h4>
                    <span className="text-xs font-mono px-2 py-1 bg-terminal-cyan/20 text-terminal-cyan rounded">
                      {event.type}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 font-mono">{event.date}</span>
                    <span className="text-terminal-cyan font-mono text-xs">
                      {event.attendees} attending
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 px-4 py-3 border-2 border-terminal-cyan/30 hover:border-terminal-cyan text-terminal-cyan font-mono font-bold rounded transition-all">
              VIEW_ALL_EVENTS
            </button>
          </motion.div>

          {/* Get Involved */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="retro-card p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-6 h-6 text-terminal-green" />
              <h3 className="text-2xl font-bold font-mono text-terminal-green">
                GET_INVOLVED
              </h3>
            </div>

            <div className="space-y-4">
              {contributorPrograms.map((program, index) => (
                <div
                  key={index}
                  className="p-4 bg-crt-dark/50 border border-terminal-green/20 rounded hover:border-terminal-green/40 transition-all"
                >
                  <h4 className="font-semibold text-white mb-2">{program.title}</h4>
                  <p className="text-gray-400 text-sm mb-3">{program.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {program.perks.map((perk, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2 py-1 bg-terminal-green/10 border border-terminal-green/20 rounded text-terminal-green"
                      >
                        {perk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 px-4 py-3 bg-terminal-green hover:bg-terminal-green/90 text-crt-darker font-mono font-bold rounded transition-all hover:shadow-neon-green">
              JOIN_PROGRAM
            </button>
          </motion.div>
        </div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center terminal-window p-8 font-mono"
        >
          <div className="flex items-center gap-2 justify-center mb-4 pt-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-xs text-terminal-cyan/60">support.webflow.com</span>
          </div>
          <div className="space-y-2 text-sm text-left max-w-2xl mx-auto">
            <div className="flex items-start">
              <span className="text-terminal-green mr-2">$</span>
              <span className="text-gray-300">Need help? Our support team is here 24/7</span>
            </div>
            <div className="flex items-start text-terminal-cyan/70">
              <span className="mr-2">→</span>
              <span>Email: developer-support@webflow.com</span>
            </div>
            <div className="flex items-start text-terminal-cyan/70">
              <span className="mr-2">→</span>
              <span>Response time: {'<'} 4 hours for critical issues</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
