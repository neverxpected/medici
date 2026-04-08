'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote:
      'We struggled to turn social content into a reliable growth channel. Medici Social changed that by focusing on performance, testing, and optimization.',
    name: 'Michael Perry',
    role: 'Marketing Director',
  },
  {
    quote:
      'Our brand went from invisible to viral in under 90 days. The team at Medici Social understands what makes content perform on every platform.',
    name: 'Sarah Chen',
    role: 'Founder & CEO',
  },
  {
    quote:
      'The ROI we saw from their short-form strategy was unlike anything we experienced with traditional agencies. They truly get social media growth.',
    name: 'David Okonkwo',
    role: 'Head of Digital',
  },
  {
    quote:
      'Medici Social doesn\'t just create content, they build systems that scale. Our engagement tripled and our cost per lead dropped by 60%.',
    name: 'Jessica Martinez',
    role: 'VP of Marketing',
  },
];

const INTERVAL_MS = 5000;

export default function TestimonialCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[activeIdx];

  return (
    <section className="py-24 md:py-32 border-y border-zinc-800">
      <div className="max-w-screen-xl mx-auto px-5 md:px-8">
        <motion.div
          className="text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="min-h-[180px] md:min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex flex-col items-center"
              >
                <blockquote className="text-xl md:text-3xl lg:text-4xl font-medium text-white leading-snug max-w-4xl mx-auto">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-8">
                  <span className="text-white font-semibold text-sm">{t.name}</span>
                  <span className="text-red-600 text-sm ml-2">&mdash; {t.role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIdx
                    ? 'bg-red-600 w-6'
                    : 'bg-zinc-700 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
