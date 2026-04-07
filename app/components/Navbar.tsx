'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const menuLinks = [
  { label: 'Home', href: '/', num: '01' },
  { label: 'About', href: '/about', num: '02' },
  { label: 'Services', href: '/services', num: '03' },
  { label: 'Contact', href: '/contact', num: '04' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* ─── Backdrop Overlay ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ─── Navbar Container ─── */}
      {/* ─── Fixed positioning wrapper (transparent, full width) ─── */}
      <div className="fixed top-0 w-full z-50 px-4 md:px-8 pt-0 pointer-events-none">
        <motion.header
          className="max-w-screen-xl mx-auto overflow-hidden pointer-events-auto"
          initial={false}
          animate={{
            height: isOpen ? '85vh' : '52px',
            borderBottomLeftRadius: isOpen ? '2rem' : '1.5rem',
            borderBottomRightRadius: isOpen ? '2rem' : '1.5rem',
            backgroundColor: isOpen ? '#EBEBEB' : '#810100',
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 22,
            mass: 1,
          }}
        >
        {/* ─── Top bar (always visible) ─── */}
        <nav className="flex items-center justify-between px-5 md:px-8 h-[52px] shrink-0">
          {/* Left — Logo */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className={`text-[15px] font-bold tracking-[0.01em] transition-colors duration-300 ${isOpen ? 'text-[#121212]' : 'text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              Medici Social®
            </Link>
          </div>

          {/* Right — Links + CTA + Toggle */}
          <div className="flex items-center gap-5 md:gap-6">
            {/* Inline links (hidden on mobile, hidden when menu is open) */}
            {!isOpen && (
              <>
                <Link href="/about" className="hidden lg:inline-block text-white/70 text-xs hover:text-white transition-colors duration-200">
                  About
                </Link>
                <Link href="/services" className="hidden lg:inline-block text-white/70 text-xs hover:text-white transition-colors duration-200">
                  Services
                </Link>
                <Link href="/contact" className="hidden lg:inline-block text-white/70 text-xs hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </>
            )}

            {/* CTA button */}
            <Link
              href="/contact"
              className={`text-[11px] font-medium px-4 py-1.5 rounded-full transition-colors duration-300 ${
                isOpen
                  ? 'bg-[#121212] text-white hover:bg-black/80'
                  : 'bg-white text-[#810100] hover:bg-white/90'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Start a project
            </Link>

            {/* Toggle button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 shrink-0 ${
                isOpen
                  ? 'bg-[#121212] hover:bg-black/80'
                  : 'bg-white/20 hover:bg-white/30'
              }`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <motion.span
                className="text-white text-sm font-light leading-none"
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                {isOpen ? '✕' : '+'}
              </motion.span>
            </button>
          </div>
        </nav>

        {/* ─── Expanded Menu Content ─── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.15, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col h-[calc(85vh-52px)] px-5 md:px-8"
            >
              {/* ─── Main Content Grid ─── */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 flex-1 pt-8 md:pt-12">
                {/* Left — Nav Links */}
                <div className="md:w-[45%] flex flex-col">
                  {menuLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.2 + i * 0.06,
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between py-4 md:py-5 border-b border-gray-300 group"
                      >
                        <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-black group-hover:translate-x-3 transition-transform duration-300">
                          {link.label}
                        </span>
                        <span className="text-[#9B9B9B] text-sm font-normal">
                          ({link.num})
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Right — Featured Image */}
                <motion.div
                  className="md:w-[55%] flex-1"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="relative w-full h-48 md:h-full rounded-2xl overflow-hidden bg-gray-800">
                    <img
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop&q=80"
                      alt="Featured landscape"
                      className="w-full h-full object-cover opacity-70"
                    />
                    {/* Overlay text */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                      <span className="text-white/80 text-sm font-medium tracking-wide">
                        Medici Social® Studio
                      </span>
                      <span className="text-white/50 text-xs">
                        © 2025 All rights reserved
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* ─── Footer Row ─── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-5 md:py-6 mt-auto border-t border-gray-300"
              >
                {/* Left — Contact */}
                <div className="flex flex-col gap-0.5">
                  <a href="mailto:hello@medicisocial.com" className="text-brand-black text-sm font-medium hover:underline">
                    hello@medicisocial.com
                  </a>
                  <span className="text-[#6B6B6B] text-xs">(713) 505-7871</span>
                </div>

                {/* Right — Social Links */}
                <div className="flex items-center gap-5 mt-3 sm:mt-0">
                  <a href="#" className="text-[#6B6B6B] text-xs hover:text-brand-black transition-colors duration-200">
                    Twitter/X
                  </a>
                  <a href="#" className="text-[#6B6B6B] text-xs hover:text-brand-black transition-colors duration-200">
                    Instagram
                  </a>
                  <a href="#" className="text-[#6B6B6B] text-xs hover:text-brand-black transition-colors duration-200">
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      </div>

      {/* Spacer to push content below the fixed navbar */}
      <div className="h-[52px]" />
    </>
  );
}
