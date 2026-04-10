'use client';

import { motion, Variants } from 'framer-motion';

/* ── Animation variants (from UI_UX_SPEC.md) ── */
const heroEase = [0.16, 1, 0.3, 1] as const;
const scrollEase = [0.21, 0.47, 0.32, 0.98] as const;

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [...heroEase] as [number, number, number, number] } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [...scrollEase] as [number, number, number, number] } },
};

/* ── Contact info data ── */
const contactInfo = [
  {
    label: 'Email',
    value: 'info@medicisocial.com',
    href: 'mailto:info@medicisocial.com',
    icon: (
      <svg className="w-4 h-4 text-red-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Houston, TX',
    href: null,
    icon: (
      <svg className="w-4 h-4 text-red-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
    icon: (
      <svg className="w-4 h-4 text-red-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

/* ── Form field config ── */
const inputClasses =
  'w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3.5 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-red-600/30 transition-colors duration-200';

export default function Contact() {
  return (
    <section className="pt-32 md:pt-44 pb-20 md:pb-28">
      <div className="max-w-screen-xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* ───────── LEFT COLUMN — Copy & Info ───────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Section pill */}
            <motion.span
              variants={staggerItem}
              className="inline-flex items-center gap-2 bg-red-900/30 text-red-400 text-xs font-medium px-4 py-1.5 rounded-full border border-red-800/40 mb-8"
            >
              Get in Touch
            </motion.span>

            {/* H1 */}
            <motion.h1
              variants={staggerItem}
              className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-6"
            >
              Let&apos;s Build Something Extraordinary.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={staggerItem}
              className="text-zinc-400 text-lg leading-relaxed max-w-md mb-12"
            >
              Drop us a line to discuss your brand&apos;s next move. We typically respond within 24 hours.
            </motion.p>

            {/* Contact info cards */}
            <motion.div variants={staggerItem} className="space-y-4">
              {contactInfo.map((info) => {
                const content = (
                  <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-lg bg-red-900/20 flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <span className="text-zinc-500 text-xs uppercase tracking-wider block">{info.label}</span>
                      <span className="text-white text-sm font-medium">{info.value}</span>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a key={info.label} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}
            </motion.div>

            {/* Social links */}
            <motion.div variants={staggerItem} className="mt-10 pt-8 border-t border-zinc-800">
              <span className="text-zinc-500 text-xs uppercase tracking-wider block mb-4">Follow us</span>
              <div className="flex items-center gap-4">
                {[
                  { name: 'Instagram', href: 'https://www.instagram.com/medicisocial' },
                  { name: 'Facebook', href: 'https://www.facebook.com/medicisocial' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ───────── RIGHT COLUMN — Form ───────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10">
              <h2 className="text-xl font-semibold text-white mb-1">Send Us A Message</h2>
              <p className="text-zinc-500 text-sm mb-8">Fill out the form below and we&apos;ll be in touch.</p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="text-zinc-400 text-xs uppercase tracking-wider block mb-2">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="John Doe"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-zinc-400 text-xs uppercase tracking-wider block mb-2">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="john@company.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="contact-company" className="text-zinc-400 text-xs uppercase tracking-wider block mb-2">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    placeholder="Acme Inc."
                    className={inputClasses}
                  />
                </div>

                {/* Budget range */}
                <div>
                  <label htmlFor="contact-budget" className="text-zinc-400 text-xs uppercase tracking-wider block mb-2">
                    Monthly Budget
                  </label>
                  <select
                    id="contact-budget"
                    className={`${inputClasses} appearance-none cursor-pointer`}
                    defaultValue=""
                  >
                    <option value="" disabled className="text-zinc-500 bg-zinc-900">Select a range</option>
                    <option value="<5k" className="bg-zinc-900">Under $5,000</option>
                    <option value="5k-10k" className="bg-zinc-900">$5,000 – $10,000</option>
                    <option value="10k-25k" className="bg-zinc-900">$10,000 – $25,000</option>
                    <option value="25k+" className="bg-zinc-900">$25,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="text-zinc-400 text-xs uppercase tracking-wider block mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-red-700 text-white text-sm font-medium py-4 rounded-full hover:bg-red-600 hover:scale-[1.02] transition-all duration-300 mt-2"
                >
                  Send Message
                </button>

                <p className="text-zinc-600 text-xs text-center mt-4">
                  By submitting, you agree to our Privacy Policy.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
