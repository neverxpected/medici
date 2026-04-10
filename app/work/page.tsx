'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

/* ── Animation variants (matching homepage) ── */
const scrollEase = [0.21, 0.47, 0.32, 0.98] as const;
const heroEase = [0.16, 1, 0.3, 1] as const;

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

/* ── Featured projects ── */
const featuredProjects = [
  {
    name: 'Plume',
    type: 'Social-Led Brand Building',
    desc: 'Building a distinctive social presence for Houston\'s Plume through short-form storytelling and a content strategy rooted in the brand\'s identity.',
    stat1: { value: '295%', label: 'Increase in average watch time' },
    stat2: { value: '92%', label: 'Follower growth in 90 days' },
    services: ['Social Media Marketing', 'Content Creation', 'Brand Strategy'],
    img: '/images/plume.jpg',
  },
  {
    name: 'Arco Fit Gym',
    type: 'Hospitality, Elevated',
    desc: 'Translating the on-premise experience of a premier Houston hospitality group into a social media presence that matches the quality of the dining room.',
    stat1: { value: '3.4x', label: 'Increase in average video views' },
    stat2: { value: '58%', label: 'Growth in social-driven sales' },
    services: ['Social Media Marketing', 'Content Creation', 'Website Design'],
    img: '/images/arco-gym.webp',
  },
  {
    name: 'Best Regards',
    type: 'SaaS Startup Acquisition',
    desc: 'Driving user acquisition for an early-stage SaaS through educational and problem-driven short-form content.',
    stat1: { value: '176%', label: 'Increase in organic reach' },
    stat2: { value: '64%', label: 'Increase in sign-ups from social' },
    services: ['Content Strategy', 'Short-Form Video', 'SEO'],
    img: '/images/bestregards-space-45.webp',
  },
];

export default function Work() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="text-center">
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 bg-red-900/30 text-red-400 text-xs font-medium px-4 py-1.5 rounded-full border border-red-800/40 mb-8">
              Our Work
            </motion.span>
            <motion.h1 variants={staggerItem} className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Brands We've<br className="md:hidden" /> Helped Build.
            </motion.h1>
            <motion.p variants={staggerItem} className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
              A selection of the brands we&apos;ve partnered with, from hospitality and lifestyle to tech and consumer. Every project is a story of strategy, craft, and measurable growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FEATURED PROJECTS
      ═══════════════════════════════════════════════════════════ */}
      {featuredProjects.map((project, idx) => (
        <section key={project.name} className={`py-16 md:py-24 ${idx % 2 === 1 ? 'bg-zinc-950' : ''}`}>
          <div className="max-w-screen-xl mx-auto px-5 md:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {/* Full-width image */}
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-10 md:mb-14 group">
                <Image
                  src={project.img}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Project name overlay */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                  <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                    {project.name}.
                  </h2>
                </div>
              </div>

              {/* Project details */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                {/* Left — info */}
                <div className="text-center md:text-left">
                  <span className="text-red-500 text-sm font-medium mb-3 block">{project.type}</span>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0 mb-8">
                    {project.desc}
                  </p>
                  {/* Service tags */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {project.services.map((service) => (
                      <span key={service} className="text-xs text-zinc-500 border border-zinc-700 rounded-full px-4 py-1.5">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:p-8 text-center md:text-left">
                    <span className="text-3xl md:text-4xl font-bold text-red-600 block">{project.stat1.value}</span>
                    <span className="text-zinc-400 text-xs mt-2 block">{project.stat1.label}</span>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:p-8 text-center md:text-left">
                    <span className="text-3xl md:text-4xl font-bold text-red-600 block">{project.stat2.value}</span>
                    <span className="text-zinc-400 text-xs mt-2 block">{project.stat2.label}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ═══════════════════════════════════════════════════════════
          GALLERY GRID — Placeholder for future media
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14 md:mb-20">
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 bg-red-900/30 text-red-400 text-xs font-medium px-4 py-1.5 rounded-full border border-red-800/40 mb-6">
              Gallery
            </motion.span>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Behind The Work.
            </motion.h2>
            <motion.p variants={staggerItem} className="text-zinc-400 text-lg max-w-xl mx-auto">
              A look inside the content, campaigns, and creative we produce every day.
            </motion.p>
          </motion.div>

          {/* Masonry-style grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            {[
              { src: '/images/plume.jpg', alt: 'Plume hospitality brand content', aspect: 'aspect-[3/4]' },
              { src: '/images/arco-gym.webp', alt: 'Arco Fit Gym branded content', aspect: 'aspect-[4/3]' },
              { src: '/images/bestregards-space-45.webp', alt: 'Best Regards SaaS campaign', aspect: 'aspect-[3/4]' },
              { src: '/images/plume.jpg', alt: 'Behind the scenes production', aspect: 'aspect-[4/5]' },
              { src: '/images/arco-gym.webp', alt: 'Content shoot setup', aspect: 'aspect-[3/4]' },
              { src: '/images/bestregards-space-45.webp', alt: 'Social media campaign assets', aspect: 'aspect-[4/3]' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardItem}
                className={`relative ${item.aspect} rounded-xl overflow-hidden break-inside-avoid group`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SERVICES USED
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14 md:mb-20">
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 bg-red-900/30 text-red-400 text-xs font-medium px-4 py-1.5 rounded-full border border-red-800/40 mb-6">
              What we deliver
            </motion.span>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              The Full Picture.
            </motion.h2>
            <motion.p variants={staggerItem} className="text-zinc-400 text-lg max-w-xl mx-auto">
              Every project draws from our full suite of capabilities.
            </motion.p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              'Social Media Marketing',
              'Content Creation',
              'Website Design',
              'SEO & Search',
              'Brand Strategy',
              'AI Integrations',
              'Short-Form Video',
              'Performance Analytics',
            ].map((service) => (
              <motion.div
                key={service}
                variants={cardItem}
                whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.25 } }}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center cursor-default"
              >
                <span className="text-sm text-zinc-300 font-medium">{service}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA
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
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              defaultMuted={true}
              playsInline={true}
              preload="auto"
              poster="/images/cta-poster.webp"
              className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none"
            >
              <source src="/videos/hero-vid-small.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 p-12 md:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Your Brand Could Be Next.
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8">
                Let&apos;s talk about what we can build together.
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

    </main>
  );
}
