'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What kind of clients do you work with?',
    answer:
      'We work with brands across hospitality, spirits, lifestyle, and luxury sectors. Whether you\'re an established company or an emerging brand, we tailor our approach to meet your unique goals and audience.',
  },
  {
    question: 'What services do you offer?',
    answer:
      'Our core services include social media strategy, content creation, brand storytelling, and campaign management. We offer both comprehensive retainer packages and project-based engagements.',
  },
  {
    question: 'How do you price your projects?',
    answer:
      'Pricing is based on scope, deliverables, and timeline. We offer flexible monthly retainers as well as fixed-price packages. Every engagement starts with a discovery call to align expectations.',
  },
  {
    question: 'What is your typical project timeline?',
    answer:
      'Most projects kick off within 1–2 weeks of signing. Strategy phases typically take 2–3 weeks, with ongoing content and campaign management running on monthly cycles.',
  },
  {
    question: 'Can we collaborate remotely?',
    answer:
      'Absolutely. We work with clients across the country and internationally. Our workflow is fully remote-optimized with regular video check-ins and transparent project tracking.',
  },
  {
    question: 'Do you accept one-off design tasks or only full projects?',
    answer:
      'While we specialize in ongoing brand partnerships, we do accept select one-off projects such as campaign launches, brand audits, and content shoots.',
  },
  {
    question: 'How many concepts or revisions are included?',
    answer:
      'Each project includes up to two rounds of revisions per deliverable. We believe in getting it right through collaborative feedback, not endless iteration.',
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
        <div key={i} className="border-b border-gray-200">
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between py-5 px-6 text-left hover:bg-gray-50/50 transition-colors duration-150 group"
          >
            <span className="text-sm md:text-base text-brand-black font-medium pr-8">
              {i + 1}. {faq.question}
            </span>
            <span
              className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center shrink-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                openIndex === i ? 'rotate-45 bg-brand-black border-brand-black' : ''
              }`}
            >
              <svg
                className={`w-3.5 h-3.5 transition-colors duration-500 ${
                  openIndex === i ? 'text-white' : 'text-gray-500'
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
            <p className="px-6 pb-6 text-sm text-gray-500 leading-relaxed max-w-2xl">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
