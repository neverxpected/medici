'use client';

import { useState } from 'react';
import Link from 'next/link';

const plans = {
  monthly: {
    label: 'Subscription',
    labelAddon: 'Subscription +',
    price: '$2,500',
    priceAddon: '$3,300',
    period: '/month',
    description:
      'For ongoing support and flexible social media needs. Ideal for growing brands and marketing teams needing consistent creative support.',
    addon: '($800/m) SEO Optimization Add-on.',
    features: [
      'Unlimited content requests',
      'One active task at a time',
      'Weekly progress calls',
      'Fast turnaround times',
      'Brand consistency across all deliverables',
      'Priority support',
      'Pause or cancel anytime',
    ],
    delivery: '48 hours',
  },
  project: {
    label: 'Project Based',
    labelAddon: 'Project Based +',
    price: '$5,000',
    priceAddon: '$6,200',
    period: '/project',
    description:
      'For brands with a defined scope and clear deliverables. Perfect for campaign launches, brand refreshes, and one-time content packages.',
    addon: '($1,200) Analytics & Reporting Package.',
    features: [
      'Full project scoping & strategy',
      'Dedicated project manager',
      'Up to 3 revision rounds',
      'Content calendar included',
      'Brand guidelines delivered',
      'Post-campaign performance report',
      'Flexible payment schedule',
    ],
    delivery: '2–4 weeks',
  },
};

export default function PricingPlans() {
  const [activeTab, setActiveTab] = useState<'monthly' | 'project'>('monthly');
  const [addonEnabled, setAddonEnabled] = useState(false);
  const plan = plans[activeTab];

  return (
    <div>
      {/* Toggle tabs */}
      <div className="flex justify-end mb-10">
        <div className="inline-flex bg-gray-100 rounded-full p-1">
          <button
            onClick={() => { setActiveTab('monthly'); setAddonEnabled(false); }}
            className={`text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 ${
              activeTab === 'monthly'
                ? 'bg-brand-black text-white'
                : 'text-gray-500 hover:text-brand-black'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => { setActiveTab('project'); setAddonEnabled(false); }}
            className={`text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 ${
              activeTab === 'project'
                ? 'bg-brand-black text-white'
                : 'text-gray-500 hover:text-brand-black'
            }`}
          >
            Project based
          </button>
        </div>
      </div>

      {/* Pricing card + features */}
      <div className="flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden border border-gray-200">
        {/* Left — Dark pricing card */}
        <div className="bg-brand-black text-white p-8 md:p-10 lg:w-[45%] flex flex-col justify-between min-h-[360px]">
          <div>
            <div className="flex items-center justify-between mb-6">
              {/* Rolling label */}
              <div className="overflow-hidden h-5">
                <div
                  className="transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ transform: addonEnabled ? 'translateY(-50%)' : 'translateY(0%)' }}
                >
                  <span className="block h-5 text-sm text-gray-400 leading-5">{plan.label}</span>
                  <span className="block h-5 text-sm text-gray-400 leading-5">{plan.labelAddon}</span>
                </div>
              </div>
              <span className="text-xs text-gray-500 tracking-wider">Medici Social®</span>
            </div>
            <div className="flex items-baseline gap-1 mb-4">
              {/* Rolling price */}
              <div className="overflow-hidden" style={{ height: '3rem' }}>
                <div
                  className="transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ transform: addonEnabled ? 'translateY(-50%)' : 'translateY(0%)' }}
                >
                  <span className="block text-4xl md:text-5xl font-bold leading-[3rem]">{plan.price}</span>
                  <span className="block text-4xl md:text-5xl font-bold leading-[3rem]">{plan.priceAddon}</span>
                </div>
              </div>
              <span className="text-gray-500 text-lg">{plan.period}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {plan.description}
            </p>
          </div>

          {/* Addon toggle */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            <span className="text-xs text-gray-500">
              <span className="text-gray-400">◎</span> {plan.addon}
            </span>
            <button
              onClick={() => setAddonEnabled(!addonEnabled)}
              className={`w-10 h-5 rounded-full relative transition-colors duration-200 ${
                addonEnabled ? 'bg-white' : 'bg-gray-700'
              }`}
            >
              <span
                className={`absolute top-0.5 w-4 h-4 rounded-full transition-all duration-200 ${
                  addonEnabled
                    ? 'left-[22px] bg-brand-black'
                    : 'left-0.5 bg-gray-500'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Right — Features list */}
        <div className="bg-white p-8 md:p-10 lg:flex-1 flex flex-col justify-between">
          <div>
            <span className="text-gray-400 text-sm mb-6 block">What&apos;s included:</span>
            <ul className="space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-black shrink-0" />
                  <span className="text-sm text-brand-black">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-200">
            <div>
              <span className="text-gray-400 text-xs block">Estimated delivery:</span>
              <span className="text-brand-black text-sm font-semibold">{plan.delivery}</span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-black text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-black/80 transition-colors duration-200"
            >
              Get started
              <span className="text-lg">+</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
