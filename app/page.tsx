'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import FaqAccordion from './components/FaqAccordion';
import PricingPlans from './components/PricingPlans';
import ServicesList from './components/ServicesList';

/* ── Kanso-style animation variants ── */
const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const viewportConfig = { once: true, margin: '-100px' as const };

const clientLogos = [
  { src: '/logos/best-regards.webp', alt: 'Best Regards' },
  { src: '/logos/ciel.webp', alt: 'Ciel' },
  { src: '/logos/dobel.webp', alt: 'Dobel' },
  { src: '/logos/my-tennis-wall.webp', alt: 'My Tennis Wall' },
  { src: '/logos/plume.webp', alt: 'Plume' },
  { src: '/logos/sun.webp', alt: 'Suntory' },
];

export default function Home() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force iOS Safari strict autoplay policies
    if (heroVideoRef.current) {
      heroVideoRef.current.defaultMuted = true;
      heroVideoRef.current.muted = true;
      heroVideoRef.current.setAttribute('muted', '');
      heroVideoRef.current.setAttribute('playsinline', '');
      
      heroVideoRef.current.play().catch(error => {
        console.log("Video auto-play prevented:", error);
      });
    }
  }, []);

  return (
    <>
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO TITLE
      ═══════════════════════════════════════════════════════════ */}
      <section className="pt-12 md:pt-20 lg:pt-24 pb-0">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={staggerItem}
            className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-[-0.03em] text-crimson whitespace-nowrap"
          >
            Medici Social®
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="text-[#6B6B6B] text-base md:text-lg leading-relaxed max-w-xs md:text-right md:pb-4"
          >
            A social media marketing agency blending storytelling,
            aesthetics, and data-driven strategy.
          </motion.p>
        </motion.div>

        {/* Logo Ticker Strip */}
        <motion.div
          className="mt-6 md:mt-8 flex flex-col mb-0"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Mobile: rating above logos */}
          <div className="md:hidden flex flex-col gap-1 mb-4">
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-crimson" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-[#9B9B9B] font-semibold">4.9/5</span>
            </div>
            <span className="text-sm text-[#6B6B6B]">
              Trusted by <span className="font-semibold text-[#9B9B9B]">100+</span> businesses
            </span>
          </div>

          {/* Desktop: logos left, rating right */}
          <div className="flex items-center">
            {/* Scrolling logos */}
            <div className="flex-1 overflow-hidden relative">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#F9F9F8] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#F9F9F8] to-transparent z-10 pointer-events-none" />
              <div className="flex items-center group">
                {/* First wrapper */}
                <div className="flex flex-nowrap animate-marquee shrink-0 items-center">
                  {clientLogos.map((logo, i) => (
                    <Image
                      key={`a-${i}`}
                      src={logo.src}
                      alt={logo.alt}
                      width={400}
                      height={130}
                      className="h-28 md:h-32 w-auto object-contain grayscale opacity-70 shrink-0 mx-4 md:mx-8"
                    />
                  ))}
                </div>
                {/* Second wrapper (identical) */}
                <div className="flex flex-nowrap animate-marquee shrink-0 items-center" aria-hidden="true">
                  {clientLogos.map((logo, i) => (
                    <Image
                      key={`b-${i}`}
                      src={logo.src}
                      alt={logo.alt}
                      width={400}
                      height={130}
                      className="h-28 md:h-32 w-auto object-contain grayscale opacity-70 shrink-0 mx-4 md:mx-8"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop rating — right side */}
            <div className="hidden md:flex flex-col items-end ml-10 shrink-0">
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-crimson" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[#9B9B9B] font-semibold">4.9/5</span>
              </div>
              <span className="text-sm text-[#6B6B6B] mt-0.5">
                Trusted by <span className="font-semibold text-[#9B9B9B]">100+</span> businesses
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — HERO IMAGE
      ═══════════════════════════════════════════════════════════ */}
      <motion.section
        className="mt-0.5"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <div className="w-full h-[40vh] md:h-[60vh] bg-gray-200 rounded-2xl overflow-hidden relative border border-crimson/20">
          <video
            ref={heroVideoRef}
            src="/videos/hero-vid-small.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — ABOUT
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36">
        {/* Label row */}
        <motion.div
          className="flex items-center justify-between mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="text-crimson text-sm">
            <span className="mr-1">//</span> About us
          </span>
          <span className="text-[#6B6B6B] text-sm">(01)</span>
        </motion.div>

        {/* Split headline — staggered reveal */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            variants={staggerItem}
            className="font-serif text-3xl md:text-[2.75rem] lg:text-5xl leading-[1.2] tracking-[-0.01em] max-w-4xl"
          >
            <span className="text-crimson font-medium">
              We believe social media marketing is more than just strategy
            </span>
            {' — '}
            <span className="text-[#6B6B6B] font-light">
              it&apos;s an art form that shapes how brands connect with the world.
            </span>
          </motion.h2>
        </motion.div>

        {/* Stats ticker row */}
        <motion.div
          className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-start md:justify-between gap-8 border-t border-gray-200 pt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="flex-1 overflow-hidden">
            <div className="flex whitespace-nowrap animate-stats-marquee">
              {[...Array(2)].map((_, i) => (
                <span key={i} className="text-[#6B6B6B] text-sm tracking-wide mr-4">
                  15+ Brands Elevated &nbsp;/&nbsp; 100% Client Retention &nbsp;/&nbsp; 5+ Years Experience &nbsp;/&nbsp; 140+ Campaigns Delivered &nbsp;/&nbsp; 97% Client Satisfaction &nbsp;/&nbsp;&nbsp;
                </span>
              ))}
            </div>
          </div>
          <p className="text-[#6B6B6B] text-sm leading-relaxed max-w-sm shrink-0 md:text-right">
            Our studio is dedicated to crafting compelling,
            purposeful strategies that cut through the noise.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — SHOWREEL / VIDEO
      ═══════════════════════════════════════════════════════════ */}
      <motion.section
        className="pb-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <div className="w-full h-[40vh] md:h-[70vh] rounded-2xl overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1400&auto=format&fit=crop"
            alt="Medici Social showreel"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%)' }}
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <span className="text-white/50 text-xs tracking-wider">© 2025 Medici Social</span>
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — SELECTED WORK
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36">
        {/* Header row — staggered */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div>
            <motion.span variants={staggerItem} className="text-crimson text-sm mb-4 block">
              <span className="mr-1">//</span> Selected Work
            </motion.span>
            <motion.h2 variants={staggerItem} className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.01em] text-crimson">
              Selected Work.
            </motion.h2>
            <motion.p variants={staggerItem} className="text-[#6B6B6B] text-sm leading-relaxed max-w-sm mt-4">
              A curated selection of projects that reflect our
              commitment to purposeful, elevated brand storytelling.
            </motion.p>
          </div>
          <motion.div variants={staggerItem}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-gray-300 text-[#121212] text-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors duration-200 self-start md:self-auto"
            >
              View all projects
              <span className="text-lg">+</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              name: 'Suntory',
              category: 'Social Campaign',
              year: '2024',
              img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop&sat=-100',
            },
            {
              name: 'Dobel',
              category: 'Brand Content',
              year: '2024',
              img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop&sat=-100',
            },
            {
              name: "Landry's",
              category: 'Content Strategy',
              year: '2023',
              img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop&sat=-100',
            },
            {
              name: 'Le Ciel',
              category: 'Visual Direction',
              year: '2023',
              img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop&sat=-100',
            },
          ].map((project) => (
            <div
              key={project.name}
              className="group cursor-pointer rounded-2xl bg-[#EEEEEE] hover:bg-[#121212] p-3 pb-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden border-2 border-transparent group-hover:border-gray-700 transition-all duration-500">
                <img
                  src={project.img}
                  alt={`${project.name} — ${project.category}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-baseline justify-between mt-3 px-1">
                <div>
                  <h3 className="text-base font-semibold text-[#121212] group-hover:text-white transition-colors duration-500">
                    {project.name}
                  </h3>
                  <span className="text-[#6B6B6B] text-sm group-hover:text-gray-500 transition-colors duration-500">{project.category}</span>
                </div>
                <span className="text-[#6B6B6B] text-sm group-hover:text-gray-500 transition-colors duration-500">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — WHY US (BENTO GRID)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36">
        {/* Header — staggered */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={staggerItem} className="flex items-center justify-between mb-12">
            <span className="text-crimson text-sm">
              <span className="mr-1">//</span> Why us
            </span>
            <span className="text-[#6B6B6B] text-sm">(03)</span>
          </motion.div>

          <motion.h2 variants={staggerItem} className="font-serif text-3xl md:text-[2.75rem] lg:text-5xl leading-[1.2] tracking-[-0.01em] max-w-4xl mb-16">
            <span className="text-crimson font-medium">
              We cut through noise to create campaigns
            </span>
            {' '}
            <span className="text-[#6B6B6B] font-light">
              that are thoughtful, timeless, and impactful.
            </span>
          </motion.h2>
        </motion.div>

        {/* Bento Grid — staggered cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* CARD 1 */}
          <motion.div variants={staggerItem} className="lg:row-span-2 bg-[#EEEEEE] border border-gray-200/50 rounded-xl p-6 flex flex-col justify-between min-h-[320px] lg:min-h-0">
            <div>
              <h3 className="text-xl font-semibold text-[#121212] mb-4 leading-snug">
                Purposeful Strategy for Modern Brands
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Collaborative', 'Quick turnaround', 'Clear communication', 'Quality'].map((tag) => (
                  <span key={tag} className="text-xs text-[#6B6B6B] bg-[#F9F9F8] border border-gray-200/50 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#121212] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-black/80 transition-colors duration-200 w-full">
              Get started
            </Link>
          </motion.div>

          {/* CARD 2 */}
          <motion.div variants={staggerItem} className="bg-[#EEEEEE] border border-gray-200/50 rounded-xl p-6 flex flex-col items-start justify-center min-h-[160px]">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0019.875 10.875 3.375 3.375 0 0016.5 7.5h0A3.375 3.375 0 0013.125 4.125 3.375 3.375 0 009.75 7.5h0A3.375 3.375 0 006.375 10.875 3.375 3.375 0 003 14.25v4.5" />
              </svg>
            </div>
            <span className="text-4xl font-bold text-[#121212]">15+</span>
            <span className="text-[#6B6B6B] text-sm mt-1">Happy clients</span>
          </motion.div>

          {/* CARD 3 */}
          <motion.div variants={staggerItem} className="bg-[#EEEEEE] border border-gray-200/50 rounded-xl p-6 flex flex-col justify-between min-h-[160px]">
            <div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                &ldquo;Medici Social transformed our brands presence. Their strategy was precise
                and their execution flawless.&rdquo;
              </p>
            </div>
            <span className="text-xs text-[#6B6B6B] mt-4">— Alex Rivera, CEO at Le Ciel</span>
          </motion.div>

          {/* CARD 4 */}
          <motion.div variants={staggerItem} className="bg-[#EEEEEE] border border-gray-200/50 rounded-xl p-6 flex flex-col justify-between min-h-[160px]">
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-[#121212] mb-1">Streamlined Process</h4>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                From brief to launch, our workflow is optimized for speed and clarity.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-200/50">
              <h4 className="text-sm font-semibold text-[#121212] mb-1">Scalable Design</h4>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Systems built to grow with your brand across every platform.
              </p>
            </div>
          </motion.div>

          {/* CARD 5 */}
          <motion.div variants={staggerItem} className="bg-[#EEEEEE] border border-gray-200/50 rounded-xl p-6 flex flex-col justify-center min-h-[160px]">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
            </div>
            <h4 className="text-sm font-semibold text-[#121212] mb-1">Dedicated Support</h4>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              Your dedicated team available whenever you need, with transparent communication at every step.
            </p>
          </motion.div>

          {/* CARD 6 */}
          <motion.div variants={staggerItem} className="lg:col-span-2 bg-[#121212] rounded-xl p-6 md:p-8 flex items-center justify-between min-h-[160px] overflow-hidden relative">
            <div className="z-10">
              <h3 className="text-white text-2xl md:text-3xl font-serif font-medium leading-tight">
                Design with intent.
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                No excess, no fluff.
              </p>
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden opacity-60 shrink-0 ml-6">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=200&fit=crop"
                alt="Design abstract"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — SERVICES
      ═══════════════════════════════════════════════════════════ */}
      <motion.section
        className="py-24 md:py-36"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <ServicesList />
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — PRICING PLANS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={staggerItem} className="flex items-center justify-between mb-6">
            <span className="text-crimson text-sm">
              <span className="mr-1">//</span> Pricing
            </span>
            <span className="text-[#6B6B6B] text-sm">(06)</span>
          </motion.div>

          <motion.h2 variants={staggerItem} className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.01em] text-crimson mb-4">
            Pricing Plans.
          </motion.h2>
          <motion.p variants={staggerItem} className="text-[#6B6B6B] text-sm leading-relaxed max-w-sm mb-12">
            Transparent pricing tailored to your brand&apos;s
            growth stage and creative needs.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <PricingPlans />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9 — FAQs
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36">
        <motion.div
          className="flex items-center justify-between mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="text-crimson text-sm">
              <span className="mr-1">//</span> FAQs
          </span>
          <span className="text-[#6B6B6B] text-sm">(08)</span>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-16 lg:gap-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Left side */}
          <motion.div variants={staggerItem} className="lg:max-w-sm shrink-0">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-[-0.01em] text-crimson leading-tight">
              Wondering How We Work?
            </h2>
            <p className="text-[#6B6B6B] text-sm leading-relaxed mt-6 max-w-xs">
              Answers to common questions about
              our process, services, and how we work.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-gray-300 text-[#121212] text-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors duration-200 mt-8"
            >
              Contact us
              <span className="text-lg">+</span>
            </Link>
          </motion.div>

          {/* Right side — Accordion */}
          <motion.div variants={staggerItem} className="flex-1 border-t border-gray-200">
            <FaqAccordion />
          </motion.div>
        </motion.div>
      </section>

    </div>
    {/* END BOXED CONTAINER */}

    {/* ═══════════════════════════════════════════════════════════
        SECTION 10 — CTA CLOSING (Full-width, outside boxed layout)
    ═══════════════════════════════════════════════════════════ */}
    <motion.section
      className="bg-crimson py-5 md:py-10 px-4 md:px-10"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <motion.img
          variants={staggerItem}
          src="/images/medici slim.png"
          alt="Medici Social"
          className="w-48 md:w-72 mx-auto mb-2"
        />

        <motion.div variants={staggerItem} className="flex items-center justify-center gap-4 mb-6">
          <a href="https://www.facebook.com/medicisocial" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 transition-colors" aria-label="Facebook">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://www.instagram.com/medicisocial" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 transition-colors" aria-label="Instagram">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>

        <motion.h2 variants={staggerItem} className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] text-white leading-tight">
          Ready to elevate
          <br />
          your brand?
        </motion.h2>
        <motion.p variants={staggerItem} className="text-white/60 text-sm md:text-lg mt-3 md:mt-5">
          Let&apos;s create something extraordinary together.
        </motion.p>

        <motion.div variants={staggerItem} className="flex items-center justify-center mt-6 md:mt-8">
          <Link
            href="/contact"
            className="bg-white text-crimson text-sm font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>

    </>
  );
}