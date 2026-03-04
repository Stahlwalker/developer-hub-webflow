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

export function WfCommunity() {
  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans mb-4 text-wf-dark tracking-tight"
          >
            Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-wf-gray-500 font-sans max-w-2xl mx-auto"
          >
            Connect with developers, get support, and contribute
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-wf-gray-200 rounded-xl p-6 text-center hover:border-wf-gray-300 hover:shadow-sm transition-all"
              >
                <Icon className="w-6 sm:w-7 h-6 sm:h-7 text-wf-blue mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl font-bold font-sans text-wf-blue mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-wf-gray-500 font-sans">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Community Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
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
                className="group bg-white border border-wf-gray-200 rounded-xl p-6 hover:border-wf-gray-300 hover:shadow-md transition-all text-center"
              >
                <div className="w-12 h-12 bg-wf-blue-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-wf-blue" />
                </div>
                <h3 className="text-base font-semibold font-sans text-wf-dark mb-2 group-hover:text-wf-blue transition-colors">
                  {channel.title}
                </h3>
                <p className="text-wf-gray-500 text-sm font-sans mb-3">{channel.description}</p>
                <div className="text-sm font-medium font-sans text-wf-blue">{channel.members} members</div>
              </motion.a>
            );
          })}
        </div>

        {/* Events & Get Involved */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-wf-gray-200 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 h-5 text-wf-blue" />
              <h3 className="text-xl font-semibold font-sans text-wf-dark">
                Upcoming Events
              </h3>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="p-4 border border-wf-gray-200 rounded-lg hover:border-wf-gray-300 hover:bg-wf-gray-50 transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium font-sans text-wf-dark">{event.title}</h4>
                    <span className="text-xs font-medium font-sans px-2.5 py-1 bg-wf-blue-light text-wf-blue rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-wf-gray-500 font-sans">{event.date}</span>
                    <span className="text-wf-gray-400 font-sans text-xs">
                      {event.attendees} attending
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <a href="#" className="group flex items-center justify-center gap-1.5 w-full mt-4 px-4 py-3 border border-wf-gray-200 hover:border-wf-gray-300 text-wf-dark font-medium font-sans rounded-lg transition-all hover:bg-wf-gray-50">
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
            className="bg-white border border-wf-gray-200 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-5 h-5 text-wf-blue" />
              <h3 className="text-xl font-semibold font-sans text-wf-dark">
                Get Involved
              </h3>
            </div>

            <div className="space-y-4">
              {contributorPrograms.map((program, index) => (
                <div
                  key={index}
                  className="p-4 border border-wf-gray-200 rounded-lg hover:border-wf-gray-300 hover:bg-wf-gray-50 transition-all"
                >
                  <h4 className="font-medium font-sans text-wf-dark mb-2">{program.title}</h4>
                  <p className="text-wf-gray-500 text-sm font-sans mb-3">{program.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {program.perks.map((perk, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium font-sans px-2.5 py-1 bg-wf-blue-light text-wf-blue rounded-md"
                      >
                        {perk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a href="#" className="group flex items-center justify-center gap-1.5 w-full mt-4 px-4 py-3 bg-wf-blue hover:bg-wf-blue-hover text-white font-semibold font-sans rounded-lg transition-all">
              Join a program
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Support section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-wf-gray-900 rounded-xl p-6 sm:p-8 text-center"
        >
          <Mail className="w-8 h-8 text-white mx-auto mb-4" />
          <h3 className="text-xl font-semibold font-sans text-white mb-2">Need help?</h3>
          <p className="text-wf-gray-400 font-sans mb-1">Our support team is here 24/7</p>
          <p className="text-wf-gray-500 font-sans text-sm">
            developer-support@webflow.com · Response time: &lt;4 hours for critical issues
          </p>
        </motion.div>
      </div>
    </section>
  );
}
