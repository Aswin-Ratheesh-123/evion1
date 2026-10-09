'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Gauge, Clock } from 'lucide-react';

export const HeroChargingCard: React.FC = () => {
  const [batteryPercent, setBatteryPercent] = useState(82);
  const [rangeAdded, setRangeAdded] = useState(248);
  const [powerKw, setPowerKw] = useState(320);

  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryPercent((prev) => {
        if (prev >= 98) return 82;
        return prev + 1;
      });
      setRangeAdded((prev) => {
        if (prev >= 380) return 248;
        return prev + 4;
      });
      // Slight simulated power variance
      setPowerKw(318 + Math.floor(Math.random() * 6));
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      className="w-full max-w-sm rounded-3xl bg-[#FFFFFF] border border-[#E5E5E5] p-5 sm:p-6 shadow-xl text-[#000000] relative overflow-hidden"
    >
      {/* Background glow accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#6DBE07]/8 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#EFF8E7] border border-[#CFE8B5] flex items-center justify-center text-[#4D8500]">
            <Zap className="w-4 h-4 fill-current animate-pulse text-[#6DBE07]" />
          </div>
          <div>
            <div className="text-xs font-mono tracking-wider text-[#666666]">EVION CHARGE</div>
            <div className="text-xs font-semibold text-[#000000] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6DBE07] animate-ping" />
              Connected · DC Ultra-Fast
            </div>
          </div>
        </div>

        <div className="px-2.5 py-1 rounded-full bg-[#EFF8E7] border border-[#CFE8B5] text-[10px] font-mono font-bold text-[#4D8500]">
          350 kW MAX
        </div>
      </div>

      {/* Main Charge Percentage Display */}
      <div className="flex items-baseline justify-between mb-4">
        <div className="flex items-baseline gap-1">
          <motion.span
            key={batteryPercent}
            initial={{ opacity: 0.7, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black tracking-tight text-[#000000] font-mono"
          >
            {batteryPercent}
          </motion.span>
          <span className="text-2xl font-bold text-[#6DBE07]">%</span>
        </div>

        <div className="text-right">
          <div className="text-xs text-[#666666] font-mono">POWER DELIVERED</div>
          <div className="text-xl font-bold font-mono text-[#000000] flex items-center justify-end gap-1">
            <span>{powerKw}</span>
            <span className="text-xs text-[#666666] font-normal">kW</span>
          </div>
        </div>
      </div>

      {/* Battery Progress Bar */}
      <div className="w-full bg-[#F0F0F0] h-2.5 rounded-full overflow-hidden mb-5 p-[1px] relative">
        <motion.div
          className="h-full bg-gradient-to-r from-[#6DBE07] to-[#7ED321] rounded-full relative"
          style={{ width: `${batteryPercent}%` }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
        </motion.div>
      </div>

      {/* Telemetry Grid */}
      <div className="grid grid-cols-2 gap-3 pt-1">
        <div className="bg-[#F8F8F8] border border-[#E5E5E5] rounded-2xl p-3">
          <div className="flex items-center gap-1.5 text-[#666666] text-[11px] mb-1">
            <Gauge className="w-3.5 h-3.5 text-[#6DBE07]" />
            <span>Range Added</span>
          </div>
          <div className="text-sm font-bold text-[#000000] font-mono">
            +{rangeAdded} <span className="text-xs text-[#666666] font-normal">km</span>
          </div>
        </div>

        <div className="bg-[#F8F8F8] border border-[#E5E5E5] rounded-2xl p-3">
          <div className="flex items-center gap-1.5 text-[#666666] text-[11px] mb-1">
            <Clock className="w-3.5 h-3.5 text-[#000000]" />
            <span>Est. to 90%</span>
          </div>
          <div className="text-sm font-bold text-[#000000] font-mono">
            ~14 <span className="text-xs text-[#666666] font-normal">min</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
