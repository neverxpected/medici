'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const services = [
  {
    num: 1,
    title: 'Social Media Strategy',
    desc: 'We craft cohesive social strategies that communicate who you are with clarity and intention, from the core idea to every visual expression.',
    tags: ['Platform Strategy', 'Content Planning', 'Audience Growth', 'Analytics & Insights', 'Community Management', 'Paid Social'],
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=80&fit=crop&q=80',
  },
  {
    num: 2,
    title: 'Content Creation',
    desc: 'Scroll-stopping visuals and copy that embody your brand identity across every platform, designed to drive engagement and conversions.',
    tags: ['Photography', 'Video Production', 'Graphic Design', 'Copywriting', 'Reels & Stories', 'UGC Strategy'],
    img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=120&h=80&fit=crop&q=80',
  },
  {
    num: 3,
    title: 'Brand Storytelling',
    desc: 'Narrative architecture that builds emotional connections between your brand and audience, from positioning to tone of voice.',
    tags: ['Brand Guidelines', 'Tone of Voice', 'Visual Identity', 'Naming Strategy', 'Campaign Narratives', 'Brand Audit'],
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=120&h=80&fit=crop&q=80',
  },
  {
    num: 4,
    title: 'Campaign Management',
    desc: 'End-to-end campaign execution with real-time optimization, transparent reporting, and measurable results across all channels.',
    tags: ['Launch Strategy', 'A/B Testing', 'Performance Reports', 'Budget Optimization', 'Cross-Platform', 'ROI Tracking'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=80&fit=crop&q=80',
  },
];

export default function ServicesList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const handleTouch = () => setIsTouch(true);
    window.addEventListener('touchstart', handleTouch, { once: true });
    return () => window.removeEventListener('touchstart', handleTouch);
  }, []);

  const handleClick = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
      setHoveredIndex(null); // Force close sticky hover
    } else {
      setOpenIndex(index);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (!isTouch) setHoveredIndex(index);
  };

  return (
    <div className="bg-brand-black rounded-2xl px-8 md:px-12 py-10 md:py-14">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <span className="text-white text-sm">
          <span className="text-crimson mr-1">//</span> Services
        </span>
        <span className="text-gray-600 text-sm">(04)</span>
      </div>

      {/* Service rows */}
      <div className="space-y-0">
        {services.map((service, i) => {
          const isHovered = hoveredIndex === i;
          const isOpen = openIndex === i;

          return (
            <div key={service.num}>
              {/* Title row */}
              <button
                className="w-full text-left group cursor-pointer"
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleClick(i)}
              >
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-0">
                    {/* Thumbnail — slides in on hover */}
                    <div
                      className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shrink-0"
                      style={{
                        width: isHovered || isOpen ? '80px' : '0px',
                        marginRight: isHovered || isOpen ? '16px' : '0px',
                        opacity: isHovered || isOpen ? 1 : 0,
                      }}
                    >
                      <img
                        src={service.img}
                        alt=""
                        className="w-20 h-14 object-cover rounded-lg"
                      />
                    </div>

                    {/* Title — shifts right on hover */}
                    <h3
                      className="text-3xl md:text-5xl font-bold text-white tracking-[-0.02em] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                      style={{
                        transform: isHovered && !isOpen ? 'translateX(8px)' : 'translateX(0)',
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Number / + / × indicator */}
                  <span className="text-gray-600 text-3xl md:text-4xl font-light shrink-0 ml-4 transition-all duration-300">
                    {isOpen ? (
                      <span className="text-gray-400">×</span>
                    ) : isHovered ? (
                      <span className="text-gray-400">+</span>
                    ) : (
                      <span>{service.num}</span>
                    )}
                  </span>
                </div>
              </button>

              {/* Expanded content */}
              <div
                style={{
                  maxHeight: isOpen ? '220px' : '0px',
                  opacity: isOpen ? 1 : 0,
                  transition: 'max-height 600ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease 80ms',
                }}
                className="overflow-hidden"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 pb-6 pt-2 pl-0 md:pl-24">
                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    {service.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 md:ml-auto">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-400 border border-gray-700 px-3 py-1.5 rounded-full whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              {i < services.length - 1 && (
                <div className="border-b border-white/5" />
              )}
            </div>
          );
        })}
      </div>

      {/* See pricing button */}
      <div className="mt-10">
        <Link
          href="#pricing"
          className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-white/20 transition-colors duration-200 border border-white/10"
        >
          See pricing
          <span className="text-lg">+</span>
        </Link>
      </div>
    </div>
  );
}
