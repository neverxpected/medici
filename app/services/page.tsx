'use client';

import Link from 'next/link';
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

/* ── Services data ── */
const services = [
  {
    title: 'Social Media Marketing',
    desc: 'We manage your brand\'s social presence end-to-end: strategy, content, posting, engagement, and reporting. A deliberate system for growth.',
    details: [
      'Platform strategy & management',
      'Content calendaring & scheduling',
      'Community engagement & response',
      'Monthly analytics & reporting',
      'Audience growth strategy',
      'Competitor analysis & benchmarking',
    ],
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: 'Content Creation',
    desc: 'Short-form video, photography, graphic design, copywriting — every piece of content crafted to a single editorial standard across every channel. From TikTok scripts to brand photography, nothing leaves our studio without intention behind it.',
    details: [
      'Short-form video production & editing',
      'Brand photography & visual assets',
      'Graphic design & copywriting',
      'Brand guidelines & asset libraries',
      'Content repurposing & multi-platform adaptation',
      'Creative direction & art direction',
    ],
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    title: 'Website Design & SEO',
    desc: 'Your website is the foundation. Your search presence is how people find it. We handle both — designing and building sites as refined as your social content, then making sure they rank where it matters. One team, no disconnect.',
    details: [
      'Custom website design & responsive development',
      'Technical SEO audits & optimization',
      'Local SEO & Google Business Profile',
      'Keyword strategy & performance tracking',
      'Landing page design & conversion optimization',
      'Ongoing site maintenance & updates',
    ],
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
      </svg>
    ),
  },
  {
    title: 'AI Integrations',
    desc: 'The advantage most agencies can\'t offer. We integrate AI tools into your marketing workflows — from content ideation and analytics automation to chatbots and personalized customer journeys — so your team operates faster without sacrificing quality.',
    details: [
      'AI-powered content workflows',
      'Marketing automation & analytics',
      'Chatbot & customer journey design',
      'Custom AI tool implementation',
      'Predictive analytics & trend forecasting',
      'Workflow optimization & efficiency audits',
    ],
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h9a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0015.75 4.5h-9A2.25 2.25 0 004.5 6.75v10.5A2.25 2.25 0 006.75 19.5zM9 10.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
];

/* ── Process steps ── */
const process = [
  {
    step: '01',
    title: 'Discover',
    desc: 'We start with your brand — its voice, its audience, its goals. Before we build anything, we understand everything. Every engagement begins with a conversation, not a template.',
  },
  {
    step: '02',
    title: 'Build',
    desc: 'Strategy, content, websites, campaigns — crafted with editorial precision and built for the platforms and channels where your audience lives.',
  },
  {
    step: '03',
    title: 'Refine',
    desc: 'We measure what matters, learn from every piece of data, and iterate until the work performs as well as it looks. Great marketing isn\'t set-and-forget — it\'s a discipline.',
  },
];

export default function Services() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="text-center">
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 bg-red-900/30 text-red-400 text-xs font-medium px-4 py-1.5 rounded-full border border-red-800/40 mb-8">
              Our Services
            </motion.span>
            <motion.h1 variants={staggerItem} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Everything you need to grow<br className="hidden md:block" /> your brand, all in one place.
            </motion.h1>
            <motion.p variants={staggerItem} className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-10">
              We don&apos;t do one thing — we do everything it takes. Social media, content, websites, SEO, and AI integrations, built by one team with one standard.
            </motion.p>
            <motion.div variants={staggerItem}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-700 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-red-600 hover:scale-[1.02] transition-all duration-300"
              >
                Send an Inquiry →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SERVICES DETAIL
      ═══════════════════════════════════════════════════════════ */}
      {services.map((svc, idx) => (
        <section key={svc.title} className={`py-20 md:py-28 ${idx % 2 === 1 ? 'bg-zinc-950' : ''}`}>
          <div className="max-w-screen-xl mx-auto px-5 md:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${idx % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
            >
              {/* Text side */}
              <div className={`text-center md:text-left ${idx % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-900/20 rounded-xl border border-red-800/30 mb-6">
                  {svc.icon}
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
                  {svc.title}
                </h2>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                  {svc.desc}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-red-700 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-red-600 hover:scale-[1.02] transition-all duration-300"
                >
                  Get Started →
                </Link>
              </div>

              {/* Deliverables side */}
              <div className={idx % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  className="grid gap-4"
                >
                  {svc.details.map((detail) => (
                    <motion.div
                      key={detail}
                      variants={cardItem}
                      className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-5 hover:border-zinc-700 transition-colors duration-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                      <span className="text-sm text-zinc-300">{detail}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ═══════════════════════════════════════════════════════════
          HOW WE WORK
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center md:text-left mb-14 md:mb-20">
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 bg-red-900/30 text-red-400 text-xs font-medium px-4 py-1.5 rounded-full border border-red-800/40 mb-6">
              Process
            </motion.span>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              How every engagement works.
            </motion.h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid md:grid-cols-3 gap-6 md:gap-8">
            {process.map((step) => (
              <motion.div
                key={step.step}
                variants={cardItem}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 md:p-10 cursor-default text-center md:text-left"
              >
                <span className="text-red-600 text-sm font-mono font-bold mb-6 block">{step.step}</span>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY MEDICI
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-zinc-950">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center md:text-left mb-14 md:mb-20">
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 bg-red-900/30 text-red-400 text-xs font-medium px-4 py-1.5 rounded-full border border-red-800/40 mb-6">
              Why Medici
            </motion.span>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              One team. Every channel.<br className="hidden md:block" /> No disconnect.
            </motion.h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Full-Service, One Team',
                desc: 'No more juggling freelancers and agencies. Your social media, content, website, and SEO all come from one team with one standard.',
              },
              {
                title: 'Editorial Quality',
                desc: 'Every deliverable — from a TikTok to a homepage — is crafted to the same editorial standard. Your brand looks premium everywhere.',
              },
              {
                title: 'AI-Powered Edge',
                desc: 'We integrate AI tools into your workflows to move faster, surface insights earlier, and outperform competitors still working manually.',
              },
              {
                title: 'Data-Driven Refinement',
                desc: 'We don\'t guess. Every decision is backed by performance data, and every month we refine the strategy based on what the numbers tell us.',
              },
              {
                title: 'Houston Roots',
                desc: 'We understand Houston\'s market, its culture, and its people. Local insight paired with national-caliber execution.',
              },
              {
                title: 'Built for Growth',
                desc: 'Our work compounds. The brands we partner with don\'t just look better — they grow measurably, month over month.',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={cardItem}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 cursor-default text-center md:text-left"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
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

            <div className="relative z-10 p-12 md:p-20 text-center">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                Let&apos;s build something timeless.
              </h2>
              <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto mb-8">
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

    </main>
  );
}
