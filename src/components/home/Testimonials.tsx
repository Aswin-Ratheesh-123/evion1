'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '@/data/testimonials';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[activeIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#F8F8F8] relative overflow-hidden border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF8E7] border border-[#CFE8B5] text-xs font-mono text-[#4D8500] uppercase tracking-widest mb-4">
            VALIDATED IMPACT
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#000000] uppercase leading-[1.05]">
            TRUSTED BY DRIVERS <br />
            <span className="text-[#6DBE07]">
              AND PROPERTY LEADERS.
            </span>
          </h2>
        </div>

        {/* Featured Testimonial Box */}
        <div className="rounded-3xl bg-[#FFFFFF] border border-[#E5E5E5] p-8 sm:p-14 relative overflow-hidden shadow-sm">
          {/* Background Quote Mark */}
          <Quote className="absolute -top-6 -right-6 w-48 h-48 text-[#000000]/[0.03] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Quote Content */}
            <div className="lg:col-span-8 space-y-8">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                {current.statHighlight && (
                  <span className="ml-3 px-3 py-0.5 rounded-full bg-[#EFF8E7] border border-[#CFE8B5] text-xs font-mono font-bold text-[#4D8500]">
                    {current.statHighlight}
                  </span>
                )}
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={current.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#000000] leading-snug tracking-tight italic"
                >
                  &ldquo;{current.quote}&rdquo;
                </motion.p>
              </AnimatePresence>

              {/* Author details */}
              <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold text-[#000000]">{current.author}</div>
                  <div className="text-xs sm:text-sm text-[#666666]">
                    {current.role} · <span className="text-[#6DBE07] font-semibold">{current.company}</span>
                  </div>
                  <div className="text-xs text-[#666666] mt-0.5 font-mono">
                    {current.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Navigation Controls */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-6">
              <div className="text-xs font-mono text-[#666666]">
                STORY {activeIndex + 1} OF {testimonialsData.length}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5] hover:border-[#6DBE07] text-[#000000] flex items-center justify-center transition-all hover:bg-[#FFFFFF] active:scale-95 shadow-sm"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5] hover:border-[#6DBE07] text-[#000000] flex items-center justify-center transition-all hover:bg-[#FFFFFF] active:scale-95 shadow-sm"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
