'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo + tagline */}
          <div className="md:col-span-2">
            <Link
              href="/"
              scroll={false}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img src="/images/footer logo medici.png" alt="Medici Social" className="h-12 md:h-14 w-auto object-contain mb-4" />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              A full-service marketing agency specializing in social media, web design, SEO, and AI integrations.
            </p>
          </div>

          {/* Pages */}
          <div>
            <span className="text-zinc-500 text-xs uppercase tracking-wider block mb-4">Pages</span>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Work', href: '/work' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map(link => (
                <Link key={link.href} href={link.href} className="text-zinc-400 text-sm hover:text-white transition-colors hover-underline">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <span className="text-zinc-500 text-xs uppercase tracking-wider block mb-4">Legal</span>
            <div className="flex flex-col gap-2.5">
              <Link href="/privacy" className="text-zinc-400 text-sm hover:text-white transition-colors hover-underline">Privacy Policy</Link>
              <Link href="/terms" className="text-zinc-400 text-sm hover:text-white transition-colors hover-underline">Terms & Conditions</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-zinc-500 text-xs">&copy; 2026 Medici Social. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/medicisocial" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="text-zinc-400 text-xs hover:text-white transition-colors hover-underline">Instagram</a>
            <a href="https://www.facebook.com/medicisocial" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="text-zinc-400 text-xs hover:text-white transition-colors hover-underline">Facebook</a>

          </div>
        </div>
      </div>
    </footer>
  );
}
