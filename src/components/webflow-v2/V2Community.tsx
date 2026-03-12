import { Users, MessageSquare, Calendar, Trophy, Github, Youtube, MessageCircle, ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const communityStats = [
  { label: 'Active Developers', value: '50K+', icon: Users },
  { label: 'Open Source Projects', value: '200+', icon: Github },
  { label: 'Monthly Events', value: '12+', icon: Calendar },
  { label: 'Community Contributors', value: '1K+', icon: Trophy },
];

const communityChannels = [
  {
    icon: MessageCircle,
    title: 'Discord Community',
    description: 'Join 10,000+ developers in real-time chat',
    members: '10K+',
  },
  {
    icon: Github,
    title: 'GitHub Discussions',
    description: 'Contribute to open source projects',
    members: '5K+',
  },
  {
    icon: MessageSquare,
    title: 'Forum',
    description: 'Ask questions and share knowledge',
    members: '50K+',
  },
  {
    icon: Youtube,
    title: 'YouTube Channel',
    description: 'Video tutorials and live streams',
    members: '100K+',
  },
];

const upcomingEvents = [
  {
    title: 'Webflow DevCon 2026',
    date: 'Mar 15, 2026',
    type: 'Conference',
    attendees: '1000+',
  },
  {
    title: 'API Workshop: CMS Deep Dive',
    date: 'Mar 22, 2026',
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

export function V2Community() {
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
            Connect with developers, get support, and contribute
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-16">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-wfb-gray-200 rounded-lg p-4 sm:p-6 text-center hover:border-wfb-black/20 transition-all"
              >
                <Icon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-wfb-blue mx-auto mb-2 sm:mb-3" />
                <div className="text-lg sm:text-2xl md:text-3xl font-semibold font-wf-heading text-wfb-black mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs md:text-sm text-wfb-gray-500 font-wf-body">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Community Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-16">
          {communityChannels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white border border-wfb-gray-200 rounded-lg p-5 sm:p-6 hover:border-wfb-black/20 transition-all text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-wfb-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-wfb-blue" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold font-wf-heading text-wfb-black mb-1.5 sm:mb-2 group-hover:text-wfb-blue transition-colors">
                  {channel.title}
                </h3>
                <p className="text-wfb-gray-500 text-xs sm:text-sm font-wf-body mb-2 sm:mb-3">{channel.description}</p>
                <div className="text-xs sm:text-sm font-medium font-wf-heading text-wfb-blue">{channel.members} members</div>
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
            className="bg-white border border-wfb-gray-200 rounded-lg p-4 sm:p-6"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-wfb-blue" />
              <h3 className="text-lg sm:text-xl font-semibold font-wf-heading text-wfb-black">
                Upcoming Events
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 border border-wfb-gray-200 rounded-lg hover:border-wfb-black/20 transition-all"
                >
                  <div className="flex justify-between items-start gap-2 mb-1.5 sm:mb-2">
                    <h4 className="font-medium font-wf-heading text-wfb-black text-sm sm:text-base">{event.title}</h4>
                    <span className="text-[10px] sm:text-xs font-medium font-wf-body px-2 sm:px-2.5 py-0.5 sm:py-1 bg-wfb-gray-100 text-wfb-blue rounded-full flex-shrink-0">
                      {event.type}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-wfb-gray-500 font-wf-body">{event.date}</span>
                    <span className="text-wfb-gray-400 font-wf-body text-[10px] sm:text-xs">
                      {event.attendees} attending
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <a href="#" className="group flex items-center justify-center gap-1.5 w-full mt-3 sm:mt-4 px-4 py-3 border border-wfb-gray-200 hover:border-wfb-black/20 text-wfb-black font-medium font-wf-heading rounded-lg transition-all min-h-[44px] text-sm">
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
                <div
                  key={index}
                  className="p-3 sm:p-4 border border-wfb-gray-200 rounded-lg hover:border-wfb-black/20 transition-all"
                >
                  <h4 className="font-medium font-wf-heading text-wfb-black mb-1.5 sm:mb-2 text-sm sm:text-base">{program.title}</h4>
                  <p className="text-wfb-gray-500 text-xs sm:text-sm font-wf-body mb-2 sm:mb-3">{program.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {program.perks.map((perk, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] sm:text-xs font-medium font-wf-body px-2 sm:px-2.5 py-0.5 sm:py-1 bg-wfb-gray-100 text-wfb-blue rounded"
                      >
                        {perk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a href="#" className="group flex items-center justify-center gap-1.5 w-full mt-3 sm:mt-4 px-4 py-3 bg-wfb-blue hover:bg-wfb-blue/90 text-white font-semibold font-wf-heading rounded-lg transition-all min-h-[44px] text-sm">
              Join a program
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Support section — monochromatic dark */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 bg-wfb-black rounded-lg p-5 sm:p-6 md:p-8 text-center"
        >
          <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-auto mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold font-wf-heading text-white mb-2">Need help?</h3>
          <p className="text-wfb-gray-400 font-wf-body mb-1 text-sm sm:text-base">Our support team is here 24/7</p>
          <p className="text-wfb-gray-500 font-wf-body text-xs sm:text-sm">
            developer-support@webflow.com · Response time: &lt;4 hours for critical issues
          </p>
        </motion.div>
      </div>
    </section>
  );
}
