'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import FaqAccordion from './components/FaqAccordion';
import PricingPlans from './components/PricingPlans';

/* ── Animation variants ── */
const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const viewportConfig = { once: true, margin: '-80px' as const };

const rotatingWords = ['Traffic.', 'Revenue.', 'Growth.', 'Results.'];

/* ── Data ── */
const clientLogos = [
  { src: '/logos/small (1).png', alt: 'Client 1' },
  { src: '/logos/small (2).png', alt: 'Client 2' },
  { src: '/logos/small (3).png', alt: 'Client 3' },
  { src: '/logos/small (4).png', alt: 'Client 4' },
  { src: '/logos/small (5).png', alt: 'Client 5' },
  { src: '/logos/small (6).png', alt: 'Client 6' },
];

const services = [
  {
    title: 'Content Creation',
    desc: 'Scroll-stopping video content built for TikTok, Reels, and Shorts.',
    items: ['Concept development', 'Video production', 'Editing & pacing', 'Captions & formatting'],
  },
  {
    title: 'Social Media Strategy',
    desc: 'A clear plan for what to post, why it works, and how it grows.',
    items: ['Posting strategy', 'Growth frameworks', 'Trend & research', 'Content planning'],
  },
  {
    title: 'Performance & Optimization',
    desc: 'Maximize watch time and engagement with content refined through data.',
    items: ['Engagement analysis', 'Performance reporting', 'Ongoing optimization'],
  },
  {
    title: 'Paid Social Content',
    desc: 'Ad-ready creatives designed to convert attention into results.',
    items: ['Paid ads', 'Creative testing', 'Content formats'],
  },
];

const caseStudies = [
  {
    name: 'Axiom',
    type: 'Personal Brand Scaling',
    desc: 'Scaling a founder\'s personal brand using optimized short-form storytelling and content structure.',
    stat1: { value: '295%', label: 'Increase in average watch time' },
    stat2: { value: '92%', label: 'Follower growth in 90 days' },
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop&q=80',
  },
  {
    name: 'Lunera',
    type: 'E-commerce Brand Growth',
    desc: 'Helping a direct-to-consumer skincare brand scale sales through performance-driven short-form content.',
    stat1: { value: '3.4x', label: 'Increase in average video views' },
    stat2: { value: '58%', label: 'Growth in social-driven sales' },
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&q=80',
  },
  {
    name: 'Flowly',
    type: 'SaaS Startup Acquisition',
    desc: 'Driving user acquisition for an early-stage SaaS through educational and problem-driven short-form content.',
    stat1: { value: '176%', label: 'Increase in organic reach' },
    stat2: { value: '64%', label: 'Increase in sign-ups from social' },
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80',
  },
];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-8 md:pt-16 pb-0">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          {/* Split layout: text left, image right */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center min-h-[60vh] md:min-h-[70vh]"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Left — Text */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start">


              <motion.h1
                variants={staggerItem}
                className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05]"
              >
                Turn Views<br />
                Into{' '}
                <span className="bg-crimson text-white px-5 py-1.5 rounded-xl inline-flex items-center justify-center overflow-hidden relative w-[185px] md:w-[280px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingWords[wordIndex]}
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: '-100%', opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="inline-block text-[2rem] md:text-6xl lg:text-[5.5rem]"
                    >
                      {rotatingWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>

              <motion.p
                variants={staggerItem}
                className="text-white/50 text-base md:text-lg mt-6 max-w-md leading-relaxed mx-auto md:mx-0"
              >
                We&apos;re a social-first marketing agency focused on short-form content that captures attention and drives real growth.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={staggerItem} className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 md:gap-4 mt-8 w-full md:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black text-sm font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors w-full md:w-auto"
                >
                  Book a Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#pricing"
                  className="border border-white/20 text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-white/5 transition-colors text-center w-full md:w-auto"
                >
                  See Pricing
                </Link>
              </motion.div>
            </div>

            {/* Right — Image with floating badges */}
            <motion.div variants={staggerItem} className="relative flex justify-center md:justify-end">
              <div className="relative w-[280px] md:w-[380px] lg:w-[420px]">
                {/* Main image */}
                <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5">
                  <video
                    src="/videos/Intro Video HD.mov"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-[9/16] object-cover"
                  />
                </div>

                {/* Floating badges — top */}
                <div className="absolute -top-2 -left-2 md:top-6 md:-left-4 flex flex-col gap-2 z-10">
                  <span className="bg-white/10 backdrop-blur-xl text-white text-[11px] md:text-xs px-4 py-2.5 rounded-xl border border-white/10 shadow-lg">
                    Social Media Content
                  </span>
                  <span className="bg-white/10 backdrop-blur-xl text-white text-[11px] md:text-xs px-4 py-2.5 rounded-xl border border-white/10 shadow-lg">
                    Marketing Strategies
                  </span>
                </div>

                {/* Floating badges — bottom */}
                <div className="absolute -bottom-2 -right-2 md:bottom-12 md:-right-4 flex flex-col gap-2 items-end z-10">
                  <span className="bg-white/10 backdrop-blur-xl text-white text-[11px] md:text-xs px-4 py-2.5 rounded-xl border border-white/10 shadow-lg">
                    Performance Analysis
                  </span>
                  <span className="bg-white/10 backdrop-blur-xl text-white text-[11px] md:text-xs px-4 py-2.5 rounded-xl border border-white/10 shadow-lg">
                    Paid Social Content
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ─── Trust bar ─── */}
          <motion.div
            className="mt-4 md:mt-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 py-4 border-t border-white/5"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {/* Avatars + Rating */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex -space-x-2.5">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face" alt="" className="w-8 h-8 rounded-full border-2 border-black object-cover" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="" className="w-8 h-8 rounded-full border-2 border-black object-cover" />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" alt="" className="w-8 h-8 rounded-full border-2 border-black object-cover" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-crimson" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-white/80 font-semibold">4.9/5</span>
                </div>
                <span className="text-[10px] text-white/40">60+ Trusted Partners</span>
              </div>
            </div>

            {/* Logo ticker */}
            <div className="flex-1 overflow-hidden relative flex items-center">
              <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
              <div className="flex items-center">
                <div className="flex flex-nowrap animate-marquee shrink-0 items-center">
                  {clientLogos.map((logo, i) => (
                    <Image key={`a-${i}`} src={logo.src} alt={logo.alt} width={400} height={130} className="h-7 md:h-10 w-auto object-contain brightness-0 invert opacity-40 shrink-0 mx-4 md:mx-6" />
                  ))}
                </div>
                <div className="flex flex-nowrap animate-marquee shrink-0 items-center" aria-hidden="true">
                  {clientLogos.map((logo, i) => (
                    <Image key={`b-${i}`} src={logo.src} alt={logo.alt} width={400} height={130} className="h-7 md:h-10 w-auto object-contain brightness-0 invert opacity-40 shrink-0 mx-4 md:mx-6" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — WHO WE ARE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 bg-white/5 text-white/60 text-xs font-medium px-4 py-1.5 rounded-full border border-white/10 mb-8">
              Who we are
            </motion.span>

            <motion.h2 variants={staggerItem} className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mb-16">
              Medici Social helps brands grow through{' '}
              <span className="text-white/40">performance-driven short-form content built for today&apos;s social platforms.</span>
            </motion.h2>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {[
              { number: '5+', label: 'Years of experience' },
              { number: '140+', label: 'Campaigns launched' },
              { number: '60+', label: 'Brands served' },
              { number: '50M+', label: 'Views generated' },
            ].map(stat => (
              <motion.div key={stat.label} variants={staggerItem} className="bg-white md:bg-[#0a0a0a] border border-gray-200 md:border-white/5 rounded-2xl p-6 md:p-8">
                <span className="text-3xl md:text-5xl font-bold text-crimson md:text-white">{stat.number}</span>
                <span className="block text-gray-600 md:text-white/40 text-sm mt-2">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — SERVICES
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-14 md:mb-20">
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 bg-white/5 text-white/60 text-xs font-medium px-4 py-1.5 rounded-full border border-white/10 mb-6">
              Services
            </motion.span>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              We help brands grow through short-form content.
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {services.map(svc => (
              <motion.div key={svc.title} variants={staggerItem} className="bg-white md:bg-[#0a0a0a] border border-gray-200 md:border-white/5 rounded-2xl p-8 md:p-10 hover:border-crimson/30 transition-colors duration-300 group">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-crimson/10 flex items-center justify-center mb-6 group-hover:bg-crimson/20 transition-colors">
                  <div className="w-2.5 h-2.5 rounded-sm bg-crimson" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-crimson md:text-white mb-3">{svc.title}</h3>
                <p className="text-gray-600 md:text-white/40 text-sm leading-relaxed mb-6">{svc.desc}</p>
                <ul className="space-y-2.5">
                  {svc.items.map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-crimson shrink-0" />
                      <span className="text-sm text-gray-700 md:text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — PROCESS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-14 md:mb-20">
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 bg-white/5 text-white/60 text-xs font-medium px-4 py-1.5 rounded-full border border-white/10 mb-6">
              Process
            </motion.span>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              A streamlined process built for consistent performance.
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {[
              {
                step: '01',
                title: 'Define the Hook',
                desc: 'We identify your audience and the content angles that capture attention.',
              },
              {
                step: '02',
                title: 'Create & Distribute',
                desc: 'We produce high-impact short-form content, optimized for engagement.',
              },
              {
                step: '03',
                title: 'Analyze & Scale',
                desc: 'We track performance and scale winning formats to drive growth.',
              },
            ].map(step => (
              <motion.div key={step.step} variants={staggerItem} className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 md:p-10">
                <span className="text-crimson text-sm font-mono font-bold mb-6 block">{step.step}</span>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — TESTIMONIAL QUOTE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div
            className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-16 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <blockquote className="text-xl md:text-3xl lg:text-4xl font-medium text-white leading-snug max-w-4xl mx-auto">
              &ldquo;We struggled to turn social content into a reliable growth channel. Medici Social changed that by focusing on performance, testing, and optimization.&rdquo;
            </blockquote>
            <div className="mt-8">
              <span className="text-white font-semibold text-sm">Michael Perry</span>
              <span className="text-white/40 text-sm ml-2">— Marketing Director</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — CASE STUDIES
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-14 md:mb-20">
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 bg-white/5 text-white/60 text-xs font-medium px-4 py-1.5 rounded-full border border-white/10 mb-6">
              Case studies
            </motion.span>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Work That Delivers Results.
            </motion.h2>
            <motion.p variants={staggerItem} className="text-white/40 text-base mt-4 max-w-xl">
              Medici Social helps brands grow through social-first strategies.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {caseStudies.map(cs => (
              <motion.div key={cs.name} variants={staggerItem} className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden group hover:border-crimson/20 transition-colors duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img src={cs.img} alt={cs.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{cs.name}.</h3>
                    <span className="text-crimson text-sm font-medium mb-4">{cs.type}.</span>
                    <p className="text-white/40 text-sm leading-relaxed mb-8">{cs.desc}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-xl p-4">
                        <span className="text-2xl md:text-3xl font-bold text-white">{cs.stat1.value}</span>
                        <span className="block text-white/40 text-xs mt-1">{cs.stat1.label}</span>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4">
                        <span className="text-2xl md:text-3xl font-bold text-white">{cs.stat2.value}</span>
                        <span className="block text-white/40 text-xs mt-1">{cs.stat2.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — WHY US (COMPARISON TABLE)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-14 md:mb-20">
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 bg-white/5 text-white/60 text-xs font-medium px-4 py-1.5 rounded-full border border-white/10 mb-6">
              Why us
            </motion.span>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              A better approach to social growth.
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Medici column */}
            <div className="bg-crimson/10 border border-crimson/20 rounded-2xl p-8 md:p-10">
              <h3 className="text-xl font-bold text-crimson mb-8">Medici Social</h3>
              {[
                'Social-first, platform-native',
                'Performance & growth',
                'Strategy + execution combined',
                'Fast testing & iteration',
                'Continuous improvement',
              ].map(item => (
                <div key={item} className="flex items-center gap-3 py-3 border-b border-crimson/10 last:border-0">
                  <svg className="w-4 h-4 text-crimson shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>

            {/* Others column */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 md:p-10">
              <h3 className="text-xl font-bold text-white/40 mb-8">Other Agencies</h3>
              {[
                'Repurposed or generic',
                'Aesthetics & vanity metrics',
                'Often separated',
                'Slow turnaround',
                'One-off delivery',
              ].map(item => (
                <div key={item} className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0">
                  <svg className="w-4 h-4 text-white/20 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-sm text-white/40">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — PRICING
      ═══════════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-20 md:py-32">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-14 md:mb-20">
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 bg-white/5 text-white/60 text-xs font-medium px-4 py-1.5 rounded-full border border-white/10 mb-6">
              Pricing
            </motion.span>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Simple & Flexible Pricing.
            </motion.h2>
            <motion.p variants={staggerItem} className="text-white/40 text-base mt-4 max-w-xl">
              Choose a plan that fits how you work.
            </motion.p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <PricingPlans />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9 — FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-14 md:mb-20">
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 bg-white/5 text-white/60 text-xs font-medium px-4 py-1.5 rounded-full border border-white/10 mb-6">
              FAQ
            </motion.span>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Got Questions?
            </motion.h2>
            <motion.p variants={staggerItem} className="text-white/40 text-base mt-4 max-w-xl">
              Everything you need to know before working with us.
            </motion.p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="max-w-3xl">
            <FaqAccordion />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 10 — FINAL CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div
            className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-10 md:p-20 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <span className="inline-flex items-center gap-2 bg-crimson/10 border border-crimson/20 text-crimson text-xs font-medium px-4 py-1.5 rounded-full mb-6">
              3 spots available
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Stop Guessing.<br />Start Growing.
            </h2>
            <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto mb-8">
              Work with a team built to test, optimize, and scale what works on social media.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-crimson text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-crimson/90 transition-colors"
            >
              Book a Call
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════ */}
      <footer className="border-t border-white/5 py-12 md:py-16">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            {/* Logo + tagline */}
            <div className="md:col-span-2">
              <img src="/images/medici slim.png?v=3" alt="Medici Social" className="h-10 w-auto object-contain invert brightness-200 mb-4" />
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                We&apos;re a social-first marketing agency focused on short-form content.
              </p>
            </div>

            {/* Pages */}
            <div>
              <span className="text-white/30 text-xs uppercase tracking-wider block mb-4">Pages</span>
              <div className="flex flex-col gap-2.5">
                {['Home', 'About', 'Projects', 'Contact'].map(page => (
                  <Link key={page} href={page === 'Home' ? '/' : page === 'Projects' ? '/services' : `/${page.toLowerCase()}`} className="text-white/60 text-sm hover:text-white transition-colors">
                    {page}
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div>
              <span className="text-white/30 text-xs uppercase tracking-wider block mb-4">Legal</span>
              <div className="flex flex-col gap-2.5">
                <Link href="/privacy" className="text-white/60 text-sm hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="text-white/60 text-sm hover:text-white transition-colors">Terms & Conditions</Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-white/30 text-xs">© 2026 Medici Social. All rights reserved.</span>
            <div className="flex items-center gap-5">
              <a href="https://www.instagram.com/medicisocial" target="_blank" rel="noopener noreferrer" className="text-white/40 text-xs hover:text-white transition-colors">Instagram</a>
              <a href="https://www.facebook.com/medicisocial" target="_blank" rel="noopener noreferrer" className="text-white/40 text-xs hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}