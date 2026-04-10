'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const scrollEase = [0.21, 0.47, 0.32, 0.98] as const;

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [...scrollEase] as [number, number, number, number] }}
      >
        {/* Giant background 404 */}
        <span className="text-[10rem] md:text-[14rem] font-bold text-zinc-900/50 leading-none select-none">
          404
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl text-white font-medium mt-8">
          Looks Like You&apos;re Lost.
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-400 mt-4 max-w-md mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center px-8 py-4 bg-red-700 text-white rounded-full hover:bg-red-600 hover:scale-[1.02] transition-all duration-300 font-medium"
        >
          Back to Home →
        </Link>
      </motion.div>
    </div>
  );
}
