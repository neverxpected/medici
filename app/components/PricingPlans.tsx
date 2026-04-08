'use client';

import Link from 'next/link';

export default function PricingPlans() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Plan 1 — Subscription */}
      <div className="bg-[#111] border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col">
        <span className="text-white/40 text-sm mb-6">Subscription</span>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-5xl md:text-6xl font-bold text-white">$2,500</span>
          <span className="text-white/40 text-lg">/month</span>
        </div>
        <p className="text-white/50 text-sm leading-relaxed mb-8">
          Best for brands posting consistently and looking to grow month over month.
        </p>

        <span className="text-white/30 text-xs uppercase tracking-wider mb-4">Includes:</span>
        <ul className="space-y-3 mb-10 flex-1">
          {[
            'Short-form content creation',
            'Ongoing editing & optimization',
            'Content strategy & planning',
            'Performance tracking & iteration',
            '48h priority turnaround',
            'Pause or cancel anytime',
          ].map(f => (
            <li key={f} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0" />
              <span className="text-sm text-white/70">{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="w-full text-center bg-crimson text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-crimson/90 transition-colors duration-200"
        >
          Get started
        </Link>
      </div>

      {/* Plan 2 — Per Project */}
      <div className="bg-[#111] border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col">
        <span className="text-white/40 text-sm mb-6">Per Project</span>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-5xl md:text-6xl font-bold text-white">$5,000</span>
          <span className="text-white/40 text-lg">/project</span>
        </div>
        <p className="text-white/50 text-sm leading-relaxed mb-8">
          Best for campaigns, product launches, or testing short-form content.
        </p>

        <span className="text-white/30 text-xs uppercase tracking-wider mb-4">What&apos;s included:</span>
        <ul className="space-y-3 mb-10 flex-1">
          {[
            'Full project scoping & strategy',
            'Creative direction & concepts',
            'Content strategy & planning',
            'Platform-ready edits & captions',
            'Performance tracking & iteration',
            'Two rounds of revisions',
          ].map(f => (
            <li key={f} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0" />
              <span className="text-sm text-white/70">{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="w-full text-center bg-white text-black text-sm font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors duration-200"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}
