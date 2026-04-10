'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What does Medici Social do?',
    answer:
      'We\'re a full-service marketing agency. We specialize in social media marketing and short-form content, and we also offer website design and development, SEO, content creation, and AI integrations. Most of our clients work with us as their complete marketing partner.',
  },
  {
    question: 'What industries do you work with?',
    answer:
      'Our client base is rooted in hospitality, food and beverage, luxury lifestyle, and premium consumer brands. We work best with businesses that care as much about how their brand looks and sounds as they do about performance.',
  },
  {
    question: 'What makes Medici Social different from other agencies?',
    answer:
      'We bring an editorial eye to everything: your social content, your website, your search presence. Most agencies specialize in one channel. We build across all of them, with short-form content as our specialty and social media management as our backbone. We also integrate AI tools into client workflows, which gives our partners a competitive edge most agencies simply can\'t deliver.',
  },
  {
    question: 'What does a typical engagement look like?',
    answer:
      'It starts with a discovery conversation. We learn your brand, align on goals, and build a strategy. From there, it\'s an ongoing cycle of creation, measurement, and refinement, with clear communication throughout. Most clients retain us on a monthly basis.',
  },
  {
    question: 'How long before we see results?',
    answer:
      'Most clients see measurable improvements in engagement and audience quality within the first 30 days. Meaningful, compounding growth typically develops over 60–90 days as we test, learn, and optimize.',
  },
  {
    question: 'Do you build websites too?',
    answer:
      'Yes. We design and develop websites that match the editorial standard of the content we create for your social channels. Many of our clients come to us for social media and end up having us rebuild their entire digital presence.',
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
              transition: 'max-height 900ms cubic-bezier(0.4, 0, 0.2, 1), opacity 600ms ease 150ms',
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
