import { motion } from 'framer-motion';

export function V3MCPBridge() {
  return (
    <div
      className="relative flex flex-col items-center overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #F0F0F0 0%, #080808 100%)',
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
      }}
    >
      {/* Animated chevrons */}
      <div className="flex flex-col items-center gap-2.5">
        {[0, 0.2, 0.4].map((delay, i) => (
          <motion.svg
            key={i}
            width="32"
            height="18"
            viewBox="0 0 32 18"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.15, 1, 0.15] }}
            transition={{ duration: 1.6, repeat: Infinity, delay, ease: 'easeInOut' }}
          >
            <path
              d="M2 2L16 16L30 2"
              stroke="#146EF5"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        ))}
      </div>
    </div>
  );
}
