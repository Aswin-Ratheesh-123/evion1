'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { faqsData } from '@/data/faqs';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Drivers & Charging', 'Business & Property', 'Technology & Hardware', 'Billing & Fleets'];

  const filteredFaqs = activeCategory === 'All' 
    ? faqsData.slice(0, 7)
    : faqsData.filter((f) => f.category === activeCategory);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#FFFFFF] relative overflow-hidden border-t border-[#E5E5E5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF8E7] border border-[#CFE8B5] text-xs font-mono text-[#4D8500] uppercase tracking-widest mb-4">
            QUESTIONS & ANSWERS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#000000] uppercase leading-[1.05]">
            FREQUENTLY ASKED <br />
            <span className="text-[#6DBE07]">
              QUESTIONS.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B5563] leading-relaxed">
            Everything you need to know about charging speeds, vehicle compatibility, installation options, and commercial partnerships.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#FFFFFF] text-[#000000] border-2 border-[#6DBE07] font-bold shadow-sm'
                  : 'bg-[#F8F8F8] text-[#666666] hover:text-[#000000] border border-[#E5E5E5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#6DBE07] transition-all shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#000000] tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-[#EFF8E7] text-[#4D8500] border-[#CFE8B5]'
                        : 'bg-[#F8F8F8] border-[#E5E5E5] text-[#666666]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#4B5563] leading-relaxed border-t border-[#E5E5E5]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* FAQ Knowledge Base Link */}
        <div className="mt-12 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#000000] hover:text-[#6DBE07] transition-colors"
          >
            <span>View complete knowledge base & technical FAQ</span>
            <ArrowRight className="w-4 h-4 text-[#6DBE07]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
