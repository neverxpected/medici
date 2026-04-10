'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

const scrollEase = [0.21, 0.47, 0.32, 0.98] as const;

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an external service (e.g. Sentry) in production
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [...scrollEase] as [number, number, number, number] }}
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl text-white font-medium mt-8">
          Something Went Wrong.
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-400 mt-4 max-w-md mx-auto">
          An unexpected error occurred. Our team has been notified.
        </p>

        {/* Retry CTA */}
        <button
          onClick={reset}
          className="mt-10 inline-flex items-center justify-center px-8 py-4 bg-red-700 text-white rounded-full hover:bg-red-600 hover:scale-[1.02] transition-all duration-300 font-medium"
        >
          Try Again →
        </button>
      </motion.div>
    </div>
  );
}
