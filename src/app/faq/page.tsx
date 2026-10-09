'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, HelpCircle } from 'lucide-react';
import { faqsData } from '@/data/faqs';
import { Button } from '@/components/ui/Button';

export default function FAQPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const categories = ['All', 'Drivers & Charging', 'Business & Property', 'Technology & Hardware', 'Billing & Fleets'];

  const filteredFaqs = useMemo(() => {
    return faqsData.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(search.toLowerCase()) ||
        faq.answer.toLowerCase().includes(search.toLowerCase());

      const matchesCat = activeCategory === 'All' || faq.category === activeCategory;

      return matchesSearch && matchesCat;
    });
  }, [search, activeCategory]);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="pt-24 sm:pt-28 bg-[#FFFFFF]">
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E5E5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF8E7] border border-[#CFE8B5] text-xs font-mono text-[#4D8500] uppercase tracking-widest font-semibold">
              KNOWLEDGE BASE & SUPPORT
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-[#000000] tracking-tight uppercase leading-[0.95]">
              FREQUENTLY <br />
              <span className="text-[#6DBE07]">
                ASKED QUESTIONS.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed">
              Find answers regarding EVION 350kW charging speeds, vehicle connector compatibility, billing, business partnership models, and dynamic grid technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Search & Accordions */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666666]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search across questions, speeds, connectors, tariffs..."
              className="w-full bg-[#FFFFFF] border border-[#E5E5E5] rounded-2xl pl-12 pr-4 py-4 text-sm text-[#000000] placeholder-neutral-400 focus:outline-none focus:border-[#6DBE07] focus:ring-4 focus:ring-[#6DBE07]/15 shadow-sm transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-[#FFFFFF] text-[#000000] border-2 border-[#6DBE07] font-bold shadow-sm'
                    : 'bg-[#FFFFFF] text-[#666666] hover:text-[#000000] border border-[#E5E5E5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordions */}
          <div className="space-y-4 pt-4">
            {filteredFaqs.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-[#FFFFFF] border border-[#E5E5E5] text-[#666666]">
                <HelpCircle className="w-8 h-8 mx-auto mb-2 text-[#666666]" />
                <div className="text-[#000000] font-semibold mb-1">No matching questions found</div>
                <p className="text-xs text-[#666666]">Try a different search keyword or switch categories.</p>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#6DBE07] transition-all overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => toggle(faq.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-[#4D8500] uppercase tracking-wider block font-bold">
                          {faq.category}
                        </span>
                        <span className="text-base sm:text-lg font-bold text-[#000000] tracking-tight">
                          {faq.question}
                        </span>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 bg-[#EFF8E7] text-[#4D8500] border-[#CFE8B5]' : 'bg-[#F8F8F8] border-[#E5E5E5] text-[#666666]'
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
                          <div className="px-6 pb-6 pt-2 text-sm text-[#4B5563] leading-relaxed border-t border-[#E5E5E5]">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            )}
          </div>

          {/* Need more help banner */}
          <div className="mt-16 p-8 rounded-3xl bg-[#FFFFFF] border border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg font-bold text-[#000000]">Still have questions?</h4>
              <p className="text-xs text-[#666666]">Our engineering and partnership team is here to assist.</p>
            </div>
            <Button variant="primary" size="md" href="/contact" showArrow>
              Contact Support Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
