'use client';

import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-crimson border-b border-crimson-light/40">
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center leading-none">
          <span className="text-white text-2xl font-bold tracking-[0.25em] uppercase">
            MEDICI
          </span>
          <span className="text-white/80 text-[0.65rem] tracking-[0.35em] uppercase mt-0.5">
            SOCIAL
          </span>
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white text-sm tracking-widest uppercase relative after:absolute after:left-0 after:bottom-[-4px] after:h-[1px] after:w-0 after:bg-white/70 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
