import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Heading + Subtext Row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-brand-black leading-[0.95]">
              MEDICI
              <br />
              SOCIAL
            </h1>
            <p className="text-brand-black/60 font-light text-base md:text-lg max-w-xs md:text-right leading-relaxed">
              A social media marketing agency blending storytelling,
              aesthetics, and data-driven strategy.
            </p>
          </div>

          {/* Hero Image Placeholder */}
          <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500 text-sm tracking-widest uppercase">
              Hero Video / Image
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — MARQUEE TEXT STRIP
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-crimson overflow-hidden py-6">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-brand-white text-lg md:text-xl font-light tracking-[0.25em] uppercase mx-4"
            >
              STORYTELLING &nbsp;·&nbsp; AESTHETICS &nbsp;·&nbsp; DATA-DRIVEN &nbsp;·&nbsp; BRAND ELEVATION &nbsp;·&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — ABOUT
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Label */}
          <span className="text-brand-black/50 text-sm tracking-widest uppercase">
            About us
          </span>

          {/* Heading + Body Row */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mt-10">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-brand-black leading-tight lg:max-w-xl">
              We believe social media marketing
              is more than just strategy —
              it&apos;s an art form.
            </h2>
            <p className="text-brand-black/70 font-light text-base md:text-lg leading-relaxed lg:max-w-md lg:mt-2">
              We are a social media marketing agency that blends storytelling,
              aesthetics, and data-driven strategy to elevate brands. Our approach
              is not about chasing trends — it&apos;s about creating movements that
              shape industries.
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-20 pt-10 border-t border-brand-black/10">
            <div>
              <span className="text-3xl md:text-4xl font-semibold tracking-wide text-brand-black">15+</span>
              <p className="text-brand-black/50 text-sm tracking-wider uppercase mt-2">Brands Elevated</p>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-semibold tracking-wide text-brand-black">100%</span>
              <p className="text-brand-black/50 text-sm tracking-wider uppercase mt-2">Client Retention</p>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-semibold tracking-wide text-brand-black">5+</span>
              <p className="text-brand-black/50 text-sm tracking-wider uppercase mt-2">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — CLIENTS
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Label */}
          <span className="text-brand-black/50 text-sm tracking-widest uppercase">
            Our Clients
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-brand-black mt-10">
            The visionaries we work with.
          </h2>

          {/* Scrolling Logo Row */}
          <div className="flex gap-6 overflow-x-auto mt-16 pb-4 scrollbar-hide">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-48 h-28 bg-gray-200 flex items-center justify-center"
              >
                <span className="text-gray-400 text-xs tracking-widest uppercase">
                  Logo {i + 1}
                </span>
              </div>
            ))}
          </div>

          {/* Body Text */}
          <p className="text-brand-black/70 font-light text-base md:text-lg leading-relaxed max-w-2xl mt-12">
            We collaborate with brands that embody excellence, innovation,
            and artistry. Current and past clients include Suntory, Dobel,
            Landry&apos;s Inc, Le Ciel Hospitality Group, and more.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — SERVICES PREVIEW
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-crimson py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Label */}
          <span className="text-brand-white/50 text-sm tracking-widest uppercase">
            Services
          </span>

          {/* Heading + Services List Row */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mt-10">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-brand-white leading-tight lg:max-w-md">
              What we do.
            </h2>

            <div className="flex flex-col gap-6 lg:max-w-lg">
              {[
                { num: '01', label: 'Social Media Strategy' },
                { num: '02', label: 'Content Creation' },
                { num: '03', label: 'Brand Storytelling' },
                { num: '04', label: 'Campaign Management' },
              ].map((service) => (
                <div
                  key={service.num}
                  className="flex items-baseline gap-6 border-b border-brand-white/20 pb-6"
                >
                  <span className="text-brand-white/40 text-sm tracking-wider font-light">
                    {service.num}
                  </span>
                  <span className="text-brand-white text-xl md:text-2xl font-light tracking-wide">
                    {service.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16">
            <Link
              href="/services"
              className="inline-block bg-brand-white text-crimson text-sm font-semibold tracking-widest uppercase px-10 py-4 rounded-none hover:bg-brand-white/90 transition-colors duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — CTA CLOSING
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-crimson py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-wider text-brand-white leading-tight">
            Ready to elevate
            <br />
            your brand?
          </h2>
          <p className="text-brand-white/70 font-light text-lg md:text-xl mt-8 tracking-wide">
            Let&apos;s create something extraordinary.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link
              href="/contact"
              className="bg-brand-white text-crimson text-sm font-semibold tracking-widest uppercase px-10 py-4 rounded-none hover:bg-brand-white/90 transition-colors duration-300"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="border border-brand-white text-brand-white text-sm font-semibold tracking-widest uppercase px-10 py-4 rounded-none hover:bg-brand-white/10 transition-colors duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}