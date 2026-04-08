'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What does Medici Social specialize in?',
    answer:
      'Medici Social specializes in short-form content and social media growth. We create and optimize content for platforms like TikTok, Instagram Reels, and YouTube Shorts with a strong focus on performance and measurable results.',
  },
  {
    question: 'Which platforms do you work with?',
    answer:
      'We primarily work with TikTok, Instagram Reels, and YouTube Shorts. Depending on the project, we also adapt content for other social platforms where short-form video performs.',
  },
  {
    question: 'Who is Medici Social best suited for?',
    answer:
      'Medici Social works with brands, startups, creators, and businesses that want to grow through social-first, short-form content. We\'re a great fit for teams that care about performance, not just aesthetics.',
  },
  {
    question: 'What services do you offer?',
    answer:
      'We specialize in content creation, social media strategy, performance optimization, paid social content, campaign management, and brand storytelling. Our goal is to create high-performing content that drives real growth.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'While results vary, most clients start seeing improvements in engagement and retention within the first few weeks. Meaningful growth typically builds over 30-90 days as we test and optimize.',
  },
  {
    question: 'What does the onboarding process look like?',
    answer:
      'We start with a discovery call, align on goals and strategy, then move into production, testing, and optimization with clear communication throughout.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-0">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-white/10">
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between py-6 px-0 text-left hover:opacity-80 transition-opacity duration-150 group"
          >
            <span className="text-sm md:text-base text-white font-medium pr-8">
              {faq.question}
            </span>
            <span
              className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                openIndex === i ? 'rotate-45 bg-crimson border-crimson' : ''
              }`}
            >
              <svg
                className={`w-3.5 h-3.5 transition-colors duration-500 ${
                  openIndex === i ? 'text-white' : 'text-white/50'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          <div
            style={{
              maxHeight: openIndex === i ? '200px' : '0px',
              opacity: openIndex === i ? 1 : 0,
              transition: 'max-height 600ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease 100ms',
            }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-white/50 leading-relaxed max-w-2xl">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
