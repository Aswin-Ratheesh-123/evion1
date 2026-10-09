'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Clock, Activity } from 'lucide-react';

interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    id: 'points',
    value: '500+',
    label: 'Charging Points',
    sublabel: 'Across major metro & highway corridors',
    icon: <Zap className="w-5 h-5 text-[#6DBE07]" />,
  },
  {
    id: 'availability',
    value: '24/7',
    label: 'Network Availability',
    sublabel: 'Round-the-clock autonomous access',
    icon: <Clock className="w-5 h-5 text-[#000000]" />,
  },
  {
    id: 'speed',
    value: '350 kW',
    label: 'Ultra-Fast DC Speed',
    sublabel: 'Adds 300 km range in under 15 minutes',
    icon: <Activity className="w-5 h-5 text-[#6DBE07]" />,
  },
  {
    id: 'reliability',
    value: '99.9%',
    label: 'Network Reliability',
    sublabel: 'Backed by guaranteed enterprise SLA',
    icon: <ShieldCheck className="w-5 h-5 text-[#6DBE07]" />,
  },
];

export const QuickStats: React.FC = () => {
  return (
    <section id="stats" className="relative bg-[#F8F8F8] border-y border-[#E5E5E5] py-14 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-5 sm:p-6 rounded-3xl bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#6DBE07] hover:shadow-[0_10px_30px_rgba(109,190,7,0.1)] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5] flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#666666]">
                  METRIC 0{idx + 1}
                </span>
              </div>

              <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-[#000000] mb-2">
                {item.value}
              </div>

              <div className="text-sm font-semibold text-[#000000] mb-1">
                {item.label}
              </div>

              <p className="text-xs text-[#666666] leading-relaxed">
                {item.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
