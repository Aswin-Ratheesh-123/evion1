'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';
import { images } from '@/config/images';
import { Button } from '@/components/ui/Button';

export const ChargerShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'performance' | 'cooling' | 'software'>('performance');

  const specsData = {
    performance: [
      { label: 'Maximum Power Output', value: '350 kW DC Continuous' },
      { label: 'Max Output Current', value: '500 A (Liquid-Cooled)' },
      { label: 'Voltage Range', value: '200 V – 1000 V DC' },
      { label: 'Peak Power Efficiency', value: '97.5% Ultra-High Efficiency' },
      { label: 'Simultaneous Dispensing', value: 'Dual 175 kW or Single 350 kW' },
    ],
    cooling: [
      { label: 'Cable Cooling Tech', value: 'Closed-loop Dielectric Liquid' },
      { label: 'Cable Diameter & Weight', value: 'Lightweight Ø 28mm / 1.8 kg/m' },
      { label: 'Ingress Protection', value: 'IP65 Weatherproof Sealed' },
      { label: 'Impact Resistance', value: 'IK10 Vandal-Proof Enclosure' },
      { label: 'Operating Temperature', value: '-30°C to +55°C Extreme Ambient' },
    ],
    software: [
      { label: 'Protocol Support', value: 'OCPP 2.0.1 & ISO 15118 (Plug & Charge)' },
      { label: 'Connectivity Modules', value: 'Dual 5G / 4G LTE + Industrial Ethernet' },
      { label: 'User Interface Screen', value: '15.6-inch Ultra-Bright Anti-Glare 4K' },
      { label: 'Payment Terminals', value: 'EMV Contactless, Apple/Google Pay, UPI' },
      { label: 'Cloud Telemetry', value: 'Sub-second real-time telemetry streaming' },
    ],
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F8F8F8] relative overflow-hidden border-t border-[#E5E5E5]">
      {/* Subtle Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#6DBE07]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Hardware Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[480px] sm:h-[580px] rounded-3xl overflow-hidden border border-[#E5E5E5] bg-[#FFFFFF] shadow-xl group">
              <Image
                src={images.chargerPillar}
                alt="EVION 350 kW Ultra-Fast Charger Hardware Dispenser"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center brightness-[0.95] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent" />

              {/* Floating Highlight Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FFFFFF]/95 backdrop-blur-xl border border-[#E5E5E5] flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EFF8E7] border border-[#CFE8B5] flex items-center justify-center text-[#4D8500]">
                    <Zap className="w-5 h-5 fill-current text-[#6DBE07]" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#666666]">FLAGSHIP HARDWARE</div>
                    <div className="text-sm font-bold text-[#000000]">EVION HYPERDISPENSER 350</div>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold text-[#4D8500] bg-[#EFF8E7] px-3 py-1.5 rounded-full border border-[#CFE8B5]">
                  350 kW DC
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Interactive Technical Specifications */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF8E7] border border-[#CFE8B5] text-xs font-mono text-[#4D8500] uppercase tracking-widest">
                FLAGSHIP DISPENSER
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#000000] uppercase leading-[1.05]">
                MORE POWER. <br />
                <span className="text-[#6DBE07]">
                  LESS WAITING.
                </span>
              </h2>
              <p className="text-base text-[#4B5563] leading-relaxed">
                Engineered with ultra-light liquid-cooled connectors and Silicon Carbide (SiC) semiconductor power modules to maximize throughput and minimize dwell time.
              </p>
            </div>

            {/* Spec Categories Switcher */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E5] w-fit shadow-sm">
              <button
                onClick={() => setActiveTab('performance')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                  activeTab === 'performance'
                    ? 'bg-[#FFFFFF] text-[#000000] border-2 border-[#6DBE07] shadow-sm'
                    : 'text-[#666666] hover:text-[#000000]'
                }`}
              >
                Performance
              </button>
              <button
                onClick={() => setActiveTab('cooling')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                  activeTab === 'cooling'
                    ? 'bg-[#FFFFFF] text-[#000000] border-2 border-[#6DBE07] shadow-sm'
                    : 'text-[#666666] hover:text-[#000000]'
                }`}
              >
                Cooling & Safety
              </button>
              <button
                onClick={() => setActiveTab('software')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                  activeTab === 'software'
                    ? 'bg-[#FFFFFF] text-[#000000] border-2 border-[#6DBE07] shadow-sm'
                    : 'text-[#666666] hover:text-[#000000]'
                }`}
              >
                Software & Cloud
              </button>
            </div>

            {/* Specs Table */}
            <div className="rounded-2xl bg-[#FFFFFF] border border-[#E5E5E5] p-5 space-y-3 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  {specsData[activeTab].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-[#E5E5E5] last:border-0"
                    >
                      <span className="text-[#666666] font-mono">{item.label}</span>
                      <span className="text-[#000000] font-semibold font-mono text-right">{item.value}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 pt-2">
              <Button variant="primary" size="md" href="/contact" showArrow>
                Request Hardware Catalog
              </Button>
              <Button variant="secondary" size="md" href="/technology">
                Learn About EVION OS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
