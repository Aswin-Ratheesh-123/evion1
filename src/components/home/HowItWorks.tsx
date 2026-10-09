'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, PlugZap, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const steps = [
  {
    num: '01',
    title: 'Find',
    subtitle: 'Locate an EVION charger nearby.',
    description: 'Use the EVION app or in-car navigation to find ultra-fast hubs with live bay availability, speed filters, and transparent real-time tariffs.',
    icon: <MapPin className="w-6 h-6 text-[#6DBE07]" />,
    highlight: 'Real-time telemetry & bay status',
  },
  {
    num: '02',
    title: 'Connect',
    subtitle: 'Plug in and start charging.',
    description: 'Plug in the ultra-lightweight liquid-cooled cable. Authentication happens automatically with ISO 15118 Plug & Charge, RFID, or in-app scan.',
    icon: <PlugZap className="w-6 h-6 text-[#000000]" />,
    highlight: 'Zero-touch Plug & Charge compatible',
  },
  {
    num: '03',
    title: 'Drive',
    subtitle: 'Get back on the road.',
    description: 'Enjoy a short espresso or check emails. In as little as 12–15 minutes, your battery is replenished to 80% and ready for hundreds of kilometers.',
    icon: <Gauge className="w-6 h-6 text-[#6DBE07]" />,
    highlight: '+300 km added in 15 minutes',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F8F8F8] relative overflow-hidden border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF8E7] border border-[#CFE8B5] text-xs font-mono text-[#4D8500] uppercase tracking-widest mb-3">
              THE EXPERIENCE
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#000000] uppercase">
              CHARGING SHOULDN&apos;T BE <br />
              <span className="text-[#6DBE07]">
                COMPLICATED.
              </span>
            </h2>
          </div>

          <Button variant="secondary" size="md" href="/charging-network" showArrow>
            Explore Interactive Map
          </Button>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative p-8 rounded-3xl bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#6DBE07] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-[0_10px_30px_rgba(109,190,7,0.1)]"
            >
              <div>
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#E5E5E5]">
                  <span className="text-5xl sm:text-6xl font-black font-mono tracking-tighter text-neutral-300 group-hover:text-[#6DBE07] transition-colors">
                    {step.num}
                  </span>

                  <div className="w-14 h-14 rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5] flex items-center justify-center group-hover:bg-[#EFF8E7] group-hover:border-[#CFE8B5] transition-colors">
                    {step.icon}
                  </div>
                </div>

                {/* Step Copy */}
                <div className="space-y-3 mb-8">
                  <h3 className="text-2xl font-bold text-[#000000] tracking-tight group-hover:text-[#6DBE07] transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-sm font-semibold text-[#333333]">
                    {step.subtitle}
                  </div>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Step Footnote */}
              <div className="pt-4 border-t border-[#E5E5E5] text-xs font-mono text-[#4D8500] flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6DBE07]" />
                <span>{step.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
