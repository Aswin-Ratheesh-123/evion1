'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { images } from '@/config/images';
import { Button } from '@/components/ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#050505] overflow-hidden border-t border-neutral-800">
      {/* Background Remote Image with Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.ctaBackground}
          alt="EVION Electric Mobility Open Road Journey at Dusk"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105 brightness-[0.25] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent" />
      </div>

      {/* Signature Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#6DBE07]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 backdrop-blur-md"
        >
          <Zap className="w-4 h-4 text-[#6DBE07]" />
          <span className="text-xs font-mono font-semibold tracking-widest text-white uppercase">
            ACCELERATE THE TRANSITION
          </span>
        </motion.div>

        {/* Big Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-[0.95]"
        >
          YOUR NEXT CHARGE <br />
          <span className="text-[#6DBE07]">
            STARTS HERE.
          </span>
        </motion.h2>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto font-normal leading-relaxed"
        >
          Discover smarter, faster, and more reliable EV charging for your vehicle, fleet, or commercial property.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
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
            href="/contact"
            data-cursor="PARTNER"
          >
            Partner With EVION
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
