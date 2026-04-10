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
  { src: '/logos/1 small.png', alt: 'Client 1' },
  { src: '/logos/2 small.webp', alt: 'Client 2' },
  { src: '/logos/3 small.png', alt: 'Client 3' },
  { src: '/logos/4 small.png', alt: 'Client 4' },
  { src: '/logos/5 small.png', alt: 'Client 5' },
  { src: '/logos/6 small.png', alt: 'Client 6' },
  { src: '/logos/7 small.png', alt: 'Client 7' },
  { src: '/logos/8 small.png', alt: 'Client 8' },
];

const services = [
  {
    title: 'Social Media Marketing',
    desc: 'We manage your brand\'s social presence end-to-end: strategy, content, posting, engagement, and reporting. A deliberate system for growth.',
    items: ['Platform Strategy & Management', 'Content Calendaring & Scheduling', 'Community Engagement & Response', 'Monthly Analytics & Reporting'],
  },
  {
    title: 'Content Creation',
    desc: 'Short-form video, photography, graphic design, and copywriting crafted to one editorial standard across every channel. Nothing leaves without intention behind it.',
    items: ['Short-form video production & editing', 'Brand photography & visual assets', 'Graphic design & copywriting', 'Brand guidelines & asset libraries'],
  },
  {
    title: 'Website Design & SEO',
    desc: 'Your website is the foundation. Your search presence is how people find it. We design, build, and optimize both. One team, no disconnect.',
    items: ['Custom website design & responsive development', 'Technical SEO audits & optimization', 'Local SEO & Google Business Profile', 'Keyword strategy & performance tracking'],
  },
  {
    title: 'AI Integrations',
    desc: 'The advantage most agencies can\'t offer. We integrate AI tools into your workflows so your team operates faster without sacrificing quality.',
    items: ['AI-powered content workflows', 'Marketing automation & analytics', 'Chatbot & customer journey design', 'Custom AI tool implementation'],
  },
];

const caseStudies = [
  {
    name: 'Plume',
    type: 'Social-Led Brand Building',
    desc: 'Building a distinctive social presence for Houston\'s Plume through short-form storytelling and a content strategy rooted in the brand\'s identity.',
    stat1: { value: '295%', label: 'Increase in average watch time' },
    stat2: { value: '92%', label: 'Follower growth in 90 days' },
    img: '/images/plume.jpg',
  },
  {
    name: 'Arco Fit Gym',
    type: 'Hospitality, Elevated',
    desc: 'Translating the on-premise experience of a premier Houston hospitality group into a social media presence that matches the quality of the dining room.',
    stat1: { value: '3.4x', label: 'Increase in average video views' },
    stat2: { value: '58%', label: 'Growth in social-driven sales' },
    img: '/images/arco-gym.webp',
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
                className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] text-center md:text-left"
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
                <span className="flex items-center justify-center md:justify-start gap-3 md:gap-4">
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
                className="text-zinc-400 text-lg mt-6 max-w-none md:max-w-md leading-relaxed mx-auto md:mx-0"
              >
                A full-service marketing agency specializing in social media, web design, SEO, and AI integrations.
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
                  Send an Inquiry
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
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    // @ts-expect-error: React types omit defaultMuted, but it is strictly required for iOS Safari autoplay bypass
                    defaultMuted={true}
                    playsInline={true}
                    preload="auto"
                    poster="/images/hero-poster.webp"
                    className="w-full aspect-[9/16] object-cover pointer-events-none"
                  />
                </div>

                {/* Floating badges — top */}
                <div className="absolute -top-2 -left-2 md:top-6 md:-left-4 flex flex-col gap-2 z-10">
                  <span className="bg-white/10 backdrop-blur-xl text-white text-[11px] md:text-xs px-4 py-2.5 rounded-xl border border-white/10 shadow-lg">
                    Social Media Marketing
                  </span>
                  <span className="bg-white/10 backdrop-blur-xl text-white text-[11px] md:text-xs px-4 py-2.5 rounded-xl border border-white/10 shadow-lg">
                    Content Strategy
                  </span>
                </div>

                {/* Floating badges — bottom */}
                <div className="absolute -bottom-2 -right-2 md:bottom-12 md:-right-4 flex flex-col gap-2 items-end z-10">
                  <span className="bg-white/10 backdrop-blur-xl text-white text-[11px] md:text-xs px-4 py-2.5 rounded-xl border border-white/10 shadow-lg">
                    Web Design & SEO
                  </span>
                  <span className="bg-white/10 backdrop-blur-xl text-white text-[11px] md:text-xs px-4 py-2.5 rounded-xl border border-white/10 shadow-lg">
                    AI Integrations
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
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center md:text-left">
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 bg-red-900/30 text-red-400 text-xs font-medium px-4 py-1.5 rounded-full border border-red-800/40 mb-8">
              Who we are
            </motion.span>

            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold leading-tight max-w-5xl mb-6">
              Every Brand Has A Story Worth <span className="whitespace-nowrap">Telling Well.</span>
            </motion.h2>
            <motion.p variants={staggerItem} className="text-zinc-400 text-lg leading-relaxed max-w-4xl mb-16">
              We build brands across every digital touchpoint: social media, web design, SEO, and AI integrations that give our clients an edge most agencies can&apos;t offer.
            </motion.p>
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
              { number: '20+', label: 'Brands served' },
              { number: '10M+', label: 'Views generated' },
            ].map(stat => (
              <motion.div key={stat.label} variants={cardItem} whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:p-8 cursor-default text-center md:text-left">
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
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center md:text-left mb-14 md:mb-20">
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 bg-red-900/30 text-red-400 text-xs font-medium px-4 py-1.5 rounded-full border border-red-800/40 mb-6">
              Services
            </motion.span>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold tracking-tight">
              Everything You Need<br className="md:hidden" /> To Grow Your Brand.
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
              <motion.div
                key={svc.title}
                variants={cardItem}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
              >
                <SpotlightCard className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-red-900/40 transition-all duration-400 group cursor-default h-full flex flex-col relative">
                  {/* Red glow orb on hover */}
                  <div className="absolute -top-20 -right-20 w-48 h-48 bg-red-600/0 group-hover:bg-red-600/[0.04] rounded-full transition-all duration-700 blur-3xl pointer-events-none" />
                  {/* Top — content */}
                  <div className="p-8 md:p-10 flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-red-900/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {idx === 0 && (
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                          </svg>
                        )}
                        {idx === 1 && (
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>
                        )}
                        {idx === 2 && (
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                          </svg>
                        )}
                        {idx === 3 && (
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h9a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0015.75 4.5h-9A2.25 2.25 0 004.5 6.75v10.5A2.25 2.25 0 006.75 19.5zM9 10.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                          </svg>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-white transition-colors">{svc.title}</h3>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">{svc.desc}</p>
                  </div>
                  {/* Bottom — scrolling tags */}
                  <div className="overflow-hidden relative py-4 md:py-5 border-t border-zinc-800 mt-auto">
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
          SECTION 4 — CASE STUDIES
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center md:text-left mb-14 md:mb-20">
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 bg-red-900/30 text-red-400 text-xs font-medium px-4 py-1.5 rounded-full border border-red-800/40 mb-6">
              Case studies
            </motion.span>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold tracking-tight">
              Work That<br className="md:hidden" /> Delivers Results.
            </motion.h2>
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
          SECTION 5 — TESTIMONIAL QUOTE
      ═══════════════════════════════════════════════════════════ */}
      <TestimonialCarousel />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — WHY US (COMPARISON TABLE)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center md:text-left mb-14 md:mb-20">
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 bg-red-900/30 text-red-400 text-xs font-medium px-4 py-1.5 rounded-full border border-red-800/40 mb-6">
              Why us
            </motion.span>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold tracking-tight">
              A Better Approach To Social Growth.
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
            <motion.div
              variants={cardItem}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="bg-zinc-900 border border-red-900/40 rounded-xl p-8 md:p-10 hover:border-red-700/50 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Red glow */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-red-600/0 group-hover:bg-red-600/[0.06] rounded-full transition-all duration-700 blur-3xl" />
              <h3 className="relative text-xl font-bold text-red-600 mb-8">Medici Social</h3>
              {[
                'Social-first, platform-native',
                'Performance & growth',
                'Strategy + execution combined',
                'Fast testing & iteration',
                'Continuous improvement',
              ].map(item => (
                <div key={item} className="flex items-center gap-3 py-3 border-b border-zinc-800 last:border-0 hover:pl-2 transition-all duration-200">
                  <svg className="w-4 h-4 text-red-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-zinc-300 group-hover:text-white transition-colors duration-200">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Others column */}
            <motion.div
              variants={cardItem}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 md:p-10 hover:border-zinc-700 transition-all duration-300"
            >
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
          SECTION 9 — FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center md:text-left mb-14 md:mb-20">
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 bg-red-900/30 text-red-400 text-xs font-medium px-4 py-1.5 rounded-full border border-red-800/40 mb-6">
              FAQ
            </motion.span>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold tracking-tight">
              A Few Questions We Hear Often.
            </motion.h2>
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
              autoPlay={true}
              loop={true}
              muted={true}
              // @ts-expect-error: React types omit defaultMuted, but it is strictly required for iOS Safari autoplay bypass
              defaultMuted={true}
              playsInline={true}
              preload="auto"
              poster="/images/cta-poster.webp"
              className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none"
            >
              <source src="/videos/hero-vid-small.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 p-12 md:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Let&apos;s Build Something Timeless.
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8">
                Your brand deserves its story to be told.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-700 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-red-600 hover:scale-[1.02] transition-all duration-300"
              >
                Book a Call →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}