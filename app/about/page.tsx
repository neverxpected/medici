'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

/* ── Animation variants (from UI_UX_SPEC.md) ── */
const heroEase = [0.16, 1, 0.3, 1] as const;
const scrollEase = [0.21, 0.47, 0.32, 0.98] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [...scrollEase] as [number, number, number, number] } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [...heroEase] as [number, number, number, number] } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const viewportConfig = { once: true, margin: '-100px' as const };

/* ── Data ── */
const values = [
  {
    num: '01',
    title: 'Data-Driven Creativity',
    desc: 'Every concept we produce is backed by performance data. We test, measure, and iterate so your creative always improves. No gut feelings — just results.',
  },
  {
    num: '02',
    title: 'Platform Native',
    desc: 'We don\u2019t repurpose. Every piece of content is built from scratch for the platform it lives on.',
  },
  {
    num: '03',
    title: 'Relentless Iteration',
    desc: 'One post is never the answer. We build content systems that compound, testing until we find what scales.',
  },
];

const team = [
  {
    name: 'Alex Vance',
    role: 'Head of Strategy',
    desc: 'Translating brand DNA into scalable social architecture. Data-backed positioning for the modern era.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Creative Director',
    desc: 'Crafting scroll-stopping visual narratives that demand attention. No excess, no fluff.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Marcus Thorne',
    role: 'Growth Lead',
    desc: 'Engineering algorithmic loops and optimizing for maximum ROI through relentless, data-driven iteration.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
  },
];

/* ── Hero word stagger ── */
const heroWords = ['Built', 'for', 'the', 'modern', 'social', 'era.'];

export default function About() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO (Massive & Centered)
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 md:pt-44 pb-20 md:pb-28">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Section pill */}
            <motion.span
              variants={staggerItem}
              className="inline-flex items-center gap-2 bg-white/5 text-white/60 text-xs font-medium px-4 py-1.5 rounded-full border border-white/10 mb-8"
            >
              Our Story
            </motion.span>

            {/* H1 — word-by-word stagger, massive & centered */}
            <motion.h1
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tight leading-none mb-8"
            >
              {heroWords.map((word) => (
                <motion.span
                  key={word}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: [...scrollEase] as [number, number, number, number] },
                    },
                  }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            >
              We are a collective of strategists, editors, and creators obsessed with turning attention into measurable growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — MISSION / PHILOSOPHY (Grounded Band)
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-y border-zinc-800 bg-zinc-900/20 py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-4xl mx-auto text-center"
          >
            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-medium text-white leading-snug">
              &ldquo;Social media isn&apos;t a megaphone. It&apos;s a conversation. We build brands that people actually want to listen to.&rdquo;
            </blockquote>
            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="w-10 h-[1px] bg-red-600" />
              <span className="text-zinc-400 text-sm">Medici Social Philosophy</span>
              <div className="w-10 h-[1px] bg-red-600" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — CORE VALUES (Asymmetric Bento Grid)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mb-14 md:mb-20"
          >
            <motion.span
              variants={staggerItem}
              className="inline-flex items-center gap-2 bg-white/5 text-white/60 text-xs font-medium px-4 py-1.5 rounded-full border border-white/10 mb-6"
            >
              What drives us
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Our Core Values.
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-zinc-400 text-base mt-4 max-w-xl"
            >
              The principles behind every strategy, edit, and campaign we deliver.
            </motion.p>
          </motion.div>

          {/* Asymmetric bento: first card spans 2 cols, rest span 1 each */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {values.map((v, idx) => (
              <motion.div
                key={v.num}
                variants={cardItem}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
                className={`bg-zinc-900 border border-zinc-800 rounded-xl p-8 md:p-10 cursor-default ${idx === 0 ? 'md:col-span-2' : ''}`}
              >
                <span className="text-red-600 text-sm font-mono font-bold mb-6 block">{v.num}</span>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{v.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — THE TEAM (Editorial Portraits)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mb-14 md:mb-20"
          >
            <motion.span
              variants={staggerItem}
              className="inline-flex items-center gap-2 bg-white/5 text-white/60 text-xs font-medium px-4 py-1.5 rounded-full border border-white/10 mb-6"
            >
              The team
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              The People Behind Medici.
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-zinc-400 text-base mt-4 max-w-xl"
            >
              Meet the team driving strategy, creative, and growth for brands ready to scale.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {team.map((t) => (
              <motion.div
                key={t.name}
                variants={cardItem}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
                className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden group cursor-default"
              >
                {/* Portrait image — editorial 3:4 ratio */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover transition-all duration-500 grayscale-[50%] brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                  />
                </div>
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">{t.name}</h3>
                  <span className="text-red-600 text-xs font-medium uppercase tracking-wider block mb-3">{t.role}</span>
                  <p className="text-zinc-400 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — FINAL CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-12 md:p-20 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Ready to scale<br />your brand?
            </h2>
            <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto mb-8">
              Let&apos;s build a social strategy that turns content into compounding growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-700 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-red-600 hover:scale-[1.02] transition-all duration-300"
            >
              Book a Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
