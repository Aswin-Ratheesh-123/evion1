'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, ChevronDown, ArrowRight } from 'lucide-react';
import { images } from '@/config/images';
import { Button } from '@/components/ui/Button';
import { HeroChargingCard } from '@/components/home/HeroChargingCard';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-between pt-28 sm:pt-32 pb-12 overflow-hidden bg-[#FFFFFF]">
      {/* Background Image Layer with Next/Image and Light Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero}
          alt="EVION Electric Vehicle Ultra-Fast Charging Station"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out opacity-10"
        />
        {/* Editorial Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/80 to-[#FFFFFF]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/90 to-transparent" />
        {/* Subtle Radial Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6DBE07]/8 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Signature Animated Energy Stream (GRID -> CHARGER -> VEHICLE) */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden lg:block overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="heroEnergyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6DBE07" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#7ED321" stopOpacity="1" />
              <stop offset="100%" stopColor="#6DBE07" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Grid to charger line */}
          <path
            d="M 50,120 Q 400,180 650,450 T 1100,560"
            fill="none"
            stroke="url(#heroEnergyGrad)"
            strokeWidth="2.5"
            filter="url(#glowFilter)"
            className="animate-energy-line opacity-70"
          />

          {/* Glowing pulse nodes */}
          <circle cx="50" cy="120" r="4" fill="#6DBE07" className="animate-ping" />
          <circle cx="650" cy="450" r="5" fill="#6DBE07" />
        </svg>
      </div>

      {/* Hero Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines & Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F8F8F8] border border-[#E5E5E5]"
            >
              <Zap className="w-3.5 h-3.5 text-[#6DBE07]" />
              <span className="text-xs font-mono font-medium tracking-widest text-[#333333] uppercase">
                EVION / NEXT-GEN ELECTRIC MOBILITY
              </span>
            </motion.div>

            {/* Massive Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-extrabold tracking-tight text-[#000000] leading-[0.95] uppercase">
                POWERING <br />
                <span className="text-[#6DBE07]">
                  EVERY JOURNEY.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-[#4B5563] max-w-xl font-normal leading-relaxed"
            >
              Ultra-fast 350 kW charging infrastructure engineered for precision, high reliability, and seamless energy flow wherever the road takes you.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                href="/charging-network"
                showArrow
                data-cursor="CHARGE"
              >
                Find a Charger
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="/solutions"
                data-cursor="EXPLORE"
              >
                Explore EVION
              </Button>

              <Link
                href="/solutions/business"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#000000] hover:text-[#6DBE07] transition-colors py-2 px-3 group"
              >
                <span>For Businesses</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Mini Trust Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-[#666666] border-t border-[#E5E5E5]"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6DBE07]" />
                <span className="text-[#333333]">350 kW Ultra-Fast DC</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6DBE07]" />
                <span className="text-[#333333]">99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#000000]" />
                <span className="text-[#333333]">Plug & Charge (ISO 15118)</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Real-Time Floating Charging HUD */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroChargingCard />
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 flex items-center justify-between text-xs font-mono text-[#666666]">
        <div className="flex items-center gap-2">
          <span className="text-[#6DBE07] font-bold">01</span>
          <span className="w-8 h-[1px] bg-[#E5E5E5]" />
          <span>CHARGE SMART</span>
        </div>

        <a
          href="#stats"
          className="flex items-center gap-2 text-[#666666] hover:text-[#000000] transition-colors group"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 text-[#6DBE07] animate-bounce group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  );
};
