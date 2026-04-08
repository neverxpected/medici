'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import FaqAccordion from './components/FaqAccordion';
import PricingPlans from './components/PricingPlans';
import TestimonialCarousel from './components/TestimonialCarousel';
import SpotlightCard from './components/SpotlightCard';

/* ── Animation variants ── */
const heroEase = [0.16, 1, 0.3, 1] as const;
const scrollEase = [0.21, 0.47, 0.32, 0.98] as const;

/* Section-level scroll reveal (y: 40) */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [...scrollEase] as [number, number, number, number] } },
};

/* Hero stagger container (above-the-fold, uses animate not whileInView) */
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

/* Hero stagger child (0.8s with premium easing) */
const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [...heroEase] as [number, number, number, number] } },
};

/* Card stagger child for grids (0.6s with easeOut) */
const cardItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const viewportConfig = { once: true, margin: '-100px' as const };

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
    name: 'Plume',
    type: 'Personal Brand Scaling',
    desc: 'Scaling a founder\'s personal brand using optimized short-form storytelling and content structure.',
    stat1: { value: '295%', label: 'Increase in average watch time' },
    stat2: { value: '92%', label: 'Follower growth in 90 days' },
    img: '/images/plume.jpg',
  },
  {
    name: 'Ciel',
    type: 'E-commerce Brand Growth',
    desc: 'Helping a direct-to-consumer skincare brand scale sales through performance-driven short-form content.',
    stat1: { value: '3.4x', label: 'Increase in average video views' },
    stat2: { value: '58%', label: 'Growth in social-driven sales' },
    img: '/images/ciel.jpg',
  },
  {
    name: 'Best Regards',
    type: 'SaaS Startup Acquisition',
    desc: 'Driving user acquisition for an early-stage SaaS through educational and problem-driven short-form content.',
    stat1: { value: '176%', label: 'Increase in organic reach' },
    stat2: { value: '64%', label: 'Increase in sign-ups from social' },
    img: '/images/bestregards-space-45.webp',
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
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05]"
              >
                {['Turn', 'Views'].map((word) => (
                  <motion.span
                    key={word}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [...scrollEase] as [number, number, number, number] } },
                    }}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))}
                <span className="flex items-center gap-3 md:gap-4">
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [...scrollEase] as [number, number, number, number] } },
                    }}
                    className="inline-block"
                  >
                    Into
                  </motion.span>
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.95 },
                      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [...scrollEase] as [number, number, number, number] } },
                    }}
                    className="bg-red-700 text-white px-4 py-1 rounded-xl overflow-hidden relative flex items-center justify-center"
                    style={{ height: '1.15em', minWidth: '4.5em' }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={rotatingWords[wordIndex]}
                        initial={{ y: '100%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: '-100%', opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 flex items-center justify-center font-bold"
                      >
                        {rotatingWords[wordIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </motion.span>
                </span>
              </motion.h1>

              <motion.p
                variants={staggerItem}
                className="text-zinc-400 text-base md:text-lg mt-6 max-w-md leading-relaxed mx-auto md:mx-0"
              >
                We&apos;re a social-first marketing agency focused on short-form content that captures attention and drives real growth.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={staggerItem} className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 md:gap-4 mt-8 w-[280px] md:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-red-700 text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-red-600 hover:scale-[1.02] transition-all duration-300 w-full md:w-auto md:min-w-[200px]"
                >
                  Book a Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#pricing"
                  className="border border-zinc-800 text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-zinc-900 hover:scale-[1.02] transition-all duration-300 text-center w-full md:w-auto md:min-w-[200px]"
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
                    preload="auto"
                    poster="/images/hero-poster.webp"
                    className="w-full aspect-[9/16] object-cover pointer-events-none"
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
                      <svg key={i} className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
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
                    <Image key={`a-${i}`} src={logo.src} alt={logo.alt} width={400} height={130} className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-40 shrink-0 mx-4 md:mx-8" />
                  ))}
                </div>
                <div className="flex flex-nowrap animate-marquee shrink-0 items-center" aria-hidden="true">
                  {clientLogos.map((logo, i) => (
                    <Image key={`b-${i}`} src={logo.src} alt={logo.alt} width={400} height={130} className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-40 shrink-0 mx-4 md:mx-8" />
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
      <section className="py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 bg-white/5 text-white/60 text-xs font-medium px-4 py-1.5 rounded-full border border-white/10 mb-8">
              Who we are
            </motion.span>

            <motion.h2 variants={staggerItem} className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mb-16">
              Medici Social helps brands grow through{' '}
              <span className="text-zinc-400">performance-driven short-form content built for today&apos;s social platforms.</span>
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
              <motion.div key={stat.label} variants={cardItem} whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:p-8 cursor-default">
                <span className="text-3xl md:text-5xl font-bold text-red-600">{stat.number}</span>
                <span className="block text-zinc-400 text-sm mt-2">{stat.label}</span>
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
            {services.map((svc, idx) => (
              <motion.div key={svc.title} variants={cardItem} whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}>
                <SpotlightCard className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors duration-300 group cursor-default h-full">
                  {/* Top — content */}
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-red-900/30 flex items-center justify-center shrink-0">
                        {idx === 0 && (
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                          </svg>
                        )}
                        {idx === 1 && (
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                          </svg>
                        )}
                        {idx === 2 && (
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                          </svg>
                        )}
                        {idx === 3 && (
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38a.75.75 0 0 1-1.021-.26l-.365-.633a8.963 8.963 0 0 1-1.07-3.781m1.5-5.94c-.253-.962-.584-1.892-.985-2.783a1.125 1.125 0 0 1 .463-1.511l.657-.38a.75.75 0 0 1 1.021.26l.365.633a8.963 8.963 0 0 1 1.07 3.78M14.25 12h3m-3 0a2.25 2.25 0 0 0 0 4.5h3a2.25 2.25 0 0 0 0-4.5Z" />
                          </svg>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white">{svc.title}</h3>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                  {/* Bottom — scrolling tags */}
                  <div className="overflow-hidden relative py-4 md:py-5 border-t border-zinc-800">
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none" />
                    <div className="flex">
                      <div className="flex flex-nowrap animate-marquee shrink-0 items-center">
                        {[...svc.items, ...svc.items].map((item, i) => (
                          <span key={`a-${i}`} className="text-xs text-zinc-500 border border-zinc-700 rounded-full px-4 py-1.5 whitespace-nowrap mx-1.5">{item}</span>
                        ))}
                      </div>
                      <div className="flex flex-nowrap animate-marquee shrink-0 items-center" aria-hidden="true">
                        {[...svc.items, ...svc.items].map((item, i) => (
                          <span key={`b-${i}`} className="text-xs text-zinc-500 border border-zinc-700 rounded-full px-4 py-1.5 whitespace-nowrap mx-1.5">{item}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — PROCESS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
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
              <motion.div key={step.step} variants={cardItem} whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 md:p-10 cursor-default">
                <span className="text-red-600 text-sm font-mono font-bold mb-6 block">{step.step}</span>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — TESTIMONIAL QUOTE
      ═══════════════════════════════════════════════════════════ */}
      <TestimonialCarousel />

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
            <motion.p variants={staggerItem} className="text-zinc-400 text-base mt-4 max-w-xl">
              Medici Social helps brands grow through social-first strategies.
            </motion.p>
          </motion.div>

          <div className="flex flex-col gap-8 md:gap-0">
            {caseStudies.map((cs, idx) => (
              <motion.div
                key={cs.name}
                variants={cardItem}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-zinc-700 transition-colors duration-300 md:sticky md:mb-6"
                style={{ top: `${100 + idx * 40}px`, zIndex: idx + 1 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{cs.name}.</h3>
                    <span className="text-red-600 text-sm font-medium mb-4">{cs.type}.</span>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-8">{cs.desc}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/30 border border-zinc-800 rounded-xl p-4">
                        <span className="text-2xl md:text-3xl font-bold text-red-600">{cs.stat1.value}</span>
                        <span className="block text-zinc-400 text-xs mt-1">{cs.stat1.label}</span>
                      </div>
                      <div className="bg-black/30 border border-zinc-800 rounded-xl p-4">
                        <span className="text-2xl md:text-3xl font-bold text-red-600">{cs.stat2.value}</span>
                        <span className="block text-zinc-400 text-xs mt-1">{cs.stat2.label}</span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className="aspect-[4/3] md:aspect-auto overflow-hidden order-1 md:order-2"
                    initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                    whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [...scrollEase] as [number, number, number, number] }}
                  >
                    <img src={cs.img} alt={cs.name} className="w-full h-full object-cover transition-all duration-500 grayscale-[50%] brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
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
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Medici column */}
            <motion.div variants={cardItem} className="bg-zinc-900 border border-red-900/40 rounded-xl p-8 md:p-10">
              <h3 className="text-xl font-bold text-red-600 mb-8">Medici Social</h3>
              {[
                'Social-first, platform-native',
                'Performance & growth',
                'Strategy + execution combined',
                'Fast testing & iteration',
                'Continuous improvement',
              ].map(item => (
                <div key={item} className="flex items-center gap-3 py-3 border-b border-zinc-800 last:border-0">
                  <svg className="w-4 h-4 text-red-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Others column */}
            <motion.div variants={cardItem} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 md:p-10">
              <h3 className="text-xl font-bold text-zinc-500 mb-8">Other Agencies</h3>
              {[
                'Repurposed or generic',
                'Aesthetics & vanity metrics',
                'Often separated',
                'Slow turnaround',
                'One-off delivery',
              ].map(item => (
                <div key={item} className="flex items-center gap-3 py-3 border-b border-zinc-800 last:border-0">
                  <svg className="w-4 h-4 text-zinc-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-sm text-zinc-500">{item}</span>
                </div>
              ))}
            </motion.div>
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
            <motion.p variants={staggerItem} className="text-zinc-400 text-base mt-4 max-w-xl">
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
            <motion.p variants={staggerItem} className="text-zinc-400 text-base mt-4 max-w-xl">
              Everything you need to know before working with us.
            </motion.p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <FaqAccordion />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 10 — FINAL CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div
            className="relative border border-zinc-800 rounded-3xl overflow-hidden"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Faded background video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/cta-poster.webp"
              className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none"
            >
              <source src="/videos/hero-vid-small.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 p-12 md:p-20 text-center">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                Stop Guessing.<br />Start Growing.
              </h2>
              <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto mb-8">
                Work with a team built to test, optimize, and scale what works on social media.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-700 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-red-600 hover:scale-[1.02] transition-all duration-300"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}