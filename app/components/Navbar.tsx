'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ─── Backdrop Overlay ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ─── Fixed navbar ─── */}
      <div className="fixed top-0 w-full z-50 pt-[env(safe-area-inset-top)] pointer-events-none">
        <motion.header
          className={`w-full pointer-events-auto transition-colors duration-300 ${scrolled && !isOpen ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
            } ${isOpen ? 'bg-[#0a0a0a]' : ''}`}
          initial={false}
          animate={{
            height: isOpen ? '100vh' : '72px',
          }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 24,
            mass: 1,
          }}
        >
          {/* ─── Top bar ─── */}
          <nav className="flex items-center justify-between mx-auto w-full max-w-screen-xl px-5 md:px-8 h-[72px] shrink-0">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <img src="/images/footer logo medici.png" alt="Medici Social" className="h-12 md:h-14 w-auto object-contain -ml-3" />
            </Link>

            {/* Right — Nav links + CTA + Hamburger */}
            <div className="flex items-center gap-6">
              {/* Desktop nav links */}
              <div className="hidden md:flex items-center gap-6">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200 hover-underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 bg-red-700 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-red-600 hover:scale-[1.02] transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                <motion.span
                  className="block w-6 h-[1.5px] bg-white origin-center"
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 3.5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block w-6 h-[1.5px] bg-white origin-center"
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -3.5 : 0,
                    opacity: isOpen ? 1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>
          </nav>

          {/* ─── Mobile menu content ─── */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="flex flex-col px-5 pt-8 pb-12 h-[calc(100vh-72px)]"
              >
                <div className="flex flex-col gap-1 flex-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-3xl font-semibold text-white py-4 border-b border-white/10 hover:text-crimson transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-red-700 text-white text-center text-base font-medium px-8 py-4 rounded-full hover:bg-red-600 hover:scale-[1.02] transition-all duration-300 mt-auto"
                >
                  Contact
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      </div>

      {/* Spacer */}
      <div className="h-[72px]" />
    </>
  );
}
