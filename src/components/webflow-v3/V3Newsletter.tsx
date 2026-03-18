import { useState } from 'react';
import { motion } from 'framer-motion';

export function V3Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <section id="newsletter" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-wfb-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-wfb-gray-200 rounded-lg p-6 sm:p-8 md:p-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            {/* Left */}
            <div className="lg:w-[40%]">
              <h2 className="font-wf-heading font-bold text-wfb-black mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.2 }}>
                Get the Developer Newsletter
              </h2>
              <p className="text-wfb-gray-500 font-wf-body text-sm sm:text-base" style={{ lineHeight: 1.6 }}>
                A first look at new betas and developer product updates, delivered right to your inbox each month.
              </p>
            </div>

            {/* Right */}
            <form onSubmit={handleSubmit} className="lg:w-[60%]">
              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <div className="flex-1">
                  <label className="block text-sm font-medium font-wf-body text-wfb-black mb-1.5">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg border border-wfb-gray-200 bg-white text-wfb-black font-wf-body text-sm focus:border-wfb-blue focus:ring-2 focus:ring-wfb-blue/20 outline-none transition-all placeholder:text-wfb-gray-400 min-h-[48px]"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium font-wf-body text-wfb-black mb-1.5">Email*</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-wfb-gray-200 bg-white text-wfb-black font-wf-body text-sm focus:border-wfb-blue focus:ring-2 focus:ring-wfb-blue/20 outline-none transition-all placeholder:text-wfb-gray-400 min-h-[48px]"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-wfb-blue hover:bg-wfb-blue/90 text-white font-semibold font-wf-heading rounded-lg transition-colors min-h-[48px]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
