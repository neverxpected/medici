'use client';

import { motion } from 'framer-motion';

const cinematicEase = [0.16, 1, 0.3, 1] as const;

// Stagger children animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: cinematicEase,
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: cinematicEase,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative px-6 md:px-12 pt-16 md:pt-24 pb-12 md:pb-20 max-w-[1800px] mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col"
      >
        {/* Giant Hero Title */}
        <motion.h1
          variants={fadeUpVariants}
          className="text-[clamp(3.5rem,12vw,13rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-kanso-text"
        >
          Medici®
        </motion.h1>

        {/* Subtitle + Description Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-8 md:mt-12 gap-8">
          <motion.div variants={fadeUpVariants} className="md:max-w-md">
            {/* Empty spacer on the left for the Kanso asymmetric layout */}
          </motion.div>

          <motion.p
            variants={fadeUpVariants}
            className="text-kanso-secondary text-base md:text-lg leading-relaxed max-w-sm md:text-right"
          >
            A design studio crafting modern
            <br />
            brand identities and refined web experiences.
          </motion.p>
        </div>

        {/* Logo Marquee Strip */}
        <motion.div
          variants={fadeInVariants}
          className="mt-16 md:mt-24 flex items-center justify-between border-t border-b border-kanso-border py-6 md:py-8"
        >
          <div className="flex items-center gap-8 md:gap-14 overflow-hidden flex-1">
            {/* Placeholder logos as minimal text marks */}
            {['LOGO', 'BRAND', 'STUDIO', 'AGENCY', 'DESIGN', 'CREATE'].map(
              (name, i) => (
                <span
                  key={i}
                  className="text-kanso-border text-sm md:text-base font-semibold tracking-[0.15em] uppercase whitespace-nowrap select-none"
                >
                  {name}
                </span>
              )
            )}
          </div>

          <div className="hidden md:flex flex-col items-end ml-8 shrink-0">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3.5 h-3.5 text-kanso-text fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-kanso-text font-medium">
                4.9/5
              </span>
            </div>
            <span className="text-kanso-secondary text-xs mt-1">
              Trusted by <span className="font-medium text-kanso-text">100+</span> businesses
            </span>
          </div>
        </motion.div>

        {/* Hero Image Placeholder */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-8 md:mt-12 w-full aspect-[16/10] md:aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden bg-kanso-border relative"
        >
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
          {/* Placeholder for hero image - replace with Next/Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-kanso-secondary/40 text-sm tracking-widest uppercase">
              Hero Image
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
