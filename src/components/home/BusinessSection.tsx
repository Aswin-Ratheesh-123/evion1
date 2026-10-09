'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Hotel, ShoppingBag, Landmark, Truck, Stethoscope } from 'lucide-react';
import { images } from '@/config/images';
import { Button } from '@/components/ui/Button';

const propertyTypes = [
  {
    title: 'Hotels & Luxury Resorts',
    desc: 'High-value guest amenity that drives repeat bookings and extended overnight stay satisfaction.',
    icon: <Hotel className="w-5 h-5 text-[#6DBE07]" />,
  },
  {
    title: 'Shopping Centers & Malls',
    desc: 'Attract premium EV owners, increase shopping dwell time by 50+ minutes, and boost merchant sales.',
    icon: <ShoppingBag className="w-5 h-5 text-[#000000]" />,
  },
  {
    title: 'Corporate IT & Office Parks',
    desc: 'Attract top tier tenants, meet corporate ESG goals, and offer employee charging perks.',
    icon: <Building2 className="w-5 h-5 text-[#6DBE07]" />,
  },
  {
    title: 'Residential & Gated Communities',
    desc: 'Turnkey multi-family charging with sub-metered billing, zero HOA headache, and app reservation.',
    icon: <Landmark className="w-5 h-5 text-[#000000]" />,
  },
  {
    title: 'Hospitals & Healthcare Hubs',
    desc: 'Reliable 24/7 charging infrastructure for doctors, staff, patients, and healthcare fleets.',
    icon: <Stethoscope className="w-5 h-5 text-[#6DBE07]" />,
  },
  {
    title: 'Commercial Fleets & Depots',
    desc: 'Electrify delivery vans and transport fleets with automated schedule-aware load orchestration.',
    icon: <Truck className="w-5 h-5 text-[#000000]" />,
  },
];

export const BusinessSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FFFFFF] relative overflow-hidden border-t border-[#E5E5E5]">
      {/* Visual Background Backdrop */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <Image
          src={images.corporateHeadquarters}
          alt="Modern Commercial Property EV Charging Infrastructure"
          fill
          sizes="100vw"
          className="object-cover object-center grayscale contrast-125"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF8E7] border border-[#CFE8B5] text-xs font-mono text-[#4D8500] uppercase tracking-widest mb-4">
            ENTERPRISE & COMMERCIAL PARTNERSHIPS
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#000000] uppercase leading-[1.05]">
            TURN PARKING <br />
            <span className="text-[#6DBE07]">
              INTO POWER.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed">
            Whether you operate an A-grade commercial office tower, a busy shopping mall, a hotel resort, or a multi-thousand delivery fleet, EVION provides end-to-end turnkey hardware, software, and revenue-sharing.
          </p>
        </div>

        {/* 6 Property Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {propertyTypes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#6DBE07] hover:shadow-[0_10px_30px_rgba(109,190,7,0.1)] transition-all duration-300 group shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5] flex items-center justify-center mb-6 group-hover:bg-[#EFF8E7] group-hover:border-[#CFE8B5] transition-colors">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-[#000000] tracking-tight mb-2 group-hover:text-[#6DBE07] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-[#666666] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action Banner (Dark section for visual hierarchy) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#050505] border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-mono text-[#6DBE07] uppercase tracking-wider font-bold">
              ZERO-CAPEX & HOST PARTNERSHIPS AVAILABLE
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to monetize your commercial parking?
            </h4>
            <p className="text-sm text-neutral-400 max-w-xl">
              Our engineering team handles full site assessment, electrical grid permitting, high-speed dispenser installation, and 24/7 cloud management.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button variant="primary" size="lg" href="/contact" showArrow>
              Install EVION
            </Button>
            <Button variant="secondary" size="lg" href="/contact">
              Talk to Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
