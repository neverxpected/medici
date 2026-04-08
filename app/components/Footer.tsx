import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo + tagline */}
          <div className="md:col-span-2">
            <img src="/images/medici slim.png?v=3" alt="Medici Social" className="h-12 md:h-14 w-auto object-contain mb-4" style={{ filter: 'brightness(0) invert(1)' }} />
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              We&apos;re a social-first marketing agency focused on short-form content.
            </p>
          </div>

          {/* Pages */}
          <div>
            <span className="text-zinc-500 text-xs uppercase tracking-wider block mb-4">Pages</span>
            <div className="flex flex-col gap-2.5">
              {['Home', 'About', 'Contact'].map(page => (
                <Link key={page} href={page === 'Home' ? '/' : `/${page.toLowerCase()}`} className="text-zinc-400 text-sm hover:text-white transition-colors">
                  {page}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <span className="text-zinc-500 text-xs uppercase tracking-wider block mb-4">Legal</span>
            <div className="flex flex-col gap-2.5">
              <Link href="/privacy" className="text-zinc-400 text-sm hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-zinc-400 text-sm hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-zinc-500 text-xs">&copy; 2026 Medici Social. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/medicisocial" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-xs hover:text-white transition-colors">Instagram</a>
            <a href="https://www.facebook.com/medicisocial" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-xs hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-zinc-400 text-xs hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
