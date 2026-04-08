'use client';

import { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import Image from 'next/image';

const carouselImages = [
  { src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=800&fit=crop', alt: 'Event 1' },
  { src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=800&fit=crop', alt: 'Event 2' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=800&fit=crop', alt: 'Event 3' },
  { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=800&fit=crop', alt: 'Event 4' },
  { src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&h=800&fit=crop', alt: 'Event 5' },
  { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=800&fit=crop', alt: 'Event 6' },
  { src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=800&fit=crop', alt: 'Event 7' },
];

const total = carouselImages.length;

// Wrap index for infinite looping
function wrap(index: number): number {
  return ((index % total) + total) % total;
}

// Get shortest distance between two indices on a circular track
function circularDiff(from: number, to: number): number {
  const raw = to - from;
  const half = total / 2;
  if (raw > half) return raw - total;
  if (raw < -half) return raw + total;
  return raw;
}

export default function DepthDeckCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => setActiveIndex((prev) => wrap(prev + 1));
  const goPrev = () => setActiveIndex((prev) => wrap(prev - 1));

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -40) goNext();
    else if (info.offset.x > 40) goPrev();
  };

  const getCardStyle = (index: number) => {
    const diff = circularDiff(activeIndex, index);
    const absDiff = Math.abs(diff);

    if (absDiff > 3) {
      return { x: diff * 60, scale: 0.55, rotateY: diff > 0 ? -35 : 35, z: -300, opacity: 0 };
    }

    return {
      x: diff * 70,
      scale: absDiff === 0 ? 1 : absDiff === 1 ? 0.82 : absDiff === 2 ? 0.68 : 0.55,
      rotateY: diff > 0 ? -28 : diff < 0 ? 28 : 0,
      z: absDiff === 0 ? 0 : absDiff === 1 ? -120 : absDiff === 2 ? -220 : -300,
      opacity: absDiff === 0 ? 1 : absDiff === 1 ? 0.75 : absDiff === 2 ? 0.45 : 0.2,
    };
  };

  return (
    <div className="w-full md:hidden py-10 bg-[#F9F9F8] overflow-hidden">
      {/* 3D Carousel Container */}
      <div
        className="relative mx-auto flex items-center justify-center"
        style={{ perspective: '1200px', height: '360px' }}
      >
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {carouselImages.map((image, index) => {
            const style = getCardStyle(index);
            const diff = circularDiff(activeIndex, index);
            const absDiff = Math.abs(diff);
            return (
              <motion.div
                key={index}
                className="absolute cursor-pointer"
                style={{
                  width: '210px',
                  height: '290px',
                }}
                animate={{
                  x: style.x,
                  scale: style.scale,
                  rotateY: style.rotateY,
                  z: style.z,
                  opacity: style.opacity,
                  zIndex: total - absDiff,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 26,
                  mass: 0.8,
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="w-full h-full overflow-hidden shadow-2xl ring-1 ring-black/5" style={{ borderRadius: '28px' }}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="210px"
                    unoptimized
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-2">
        <button
          onClick={goPrev}
          className="w-10 h-10 rounded-full bg-black/8 backdrop-blur-sm flex items-center justify-center active:scale-90 transition-transform"
          aria-label="Previous"
        >
          <svg className="w-5 h-5 text-black/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-1.5">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-6 bg-crimson' : 'w-2 bg-black/15'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="w-10 h-10 rounded-full bg-black/8 backdrop-blur-sm flex items-center justify-center active:scale-90 transition-transform"
          aria-label="Next"
        >
          <svg className="w-5 h-5 text-black/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
