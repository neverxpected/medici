'use client';

import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-5 px-6 md:px-10">
      <nav className="flex items-center justify-between max-w-7xl mx-auto bg-crimson rounded-full px-8 py-3 shadow-lg">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center leading-none">
          <span className="text-white text-lg font-bold tracking-[0.25em] uppercase">
            MEDICI
          </span>
          <span className="text-white/80 text-[0.5rem] tracking-[0.35em] uppercase mt-0.5">
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
