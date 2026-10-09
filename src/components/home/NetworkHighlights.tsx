'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Home, Building2, Globe2 } from 'lucide-react';
import { images } from '@/config/images';

const networkCards = [
  {
    id: 'home',
    category: 'HOME',
    title: 'Charge where you live.',
    tagline: 'Residential Smart Systems',
    description: 'Effortless overnight replenishment with dynamic home load balancing and rooftop solar inverter sync.',
    image: images.homeCharging,
    href: '/solutions/home',
    icon: <Home className="w-4 h-4 text-[#6DBE07]" />,
    speed: '7.4 – 22 kW AC',
  },
  {
    id: 'business',
    category: 'BUSINESS',
    title: 'Charge where people work.',
    tagline: 'Workplace & Enterprise Charging',
    description: 'Turn commercial parking lots into an essential amenity and revenue stream with multi-tenant billing.',
    image: images.businessCharging,
    href: '/solutions/business',
    icon: <Building2 className="w-4 h-4 text-[#000000]" />,
    speed: '22 – 60 kW Fast',
  },
  {
    id: 'public',
    category: 'PUBLIC',
    title: 'Charge where journeys happen.',
    tagline: 'Highway & Destination Hubs',
    description: 'High-power 350 kW liquid-cooled corridors located at premier shopping malls, transit hubs, and highways.',
    image: images.commercialRealEstate,
    href: '/solutions/commercial',
    icon: <Globe2 className="w-4 h-4 text-[#6DBE07]" />,
    speed: '180 – 350 kW Ultra-Fast',
  },
];

export const NetworkHighlights: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FFFFFF] relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#6DBE07]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF8E7] border border-[#CFE8B5] text-xs font-mono text-[#4D8500] uppercase tracking-widest mb-4">
            THE EVION NETWORK
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#000000] uppercase leading-[1.05]">
            ONE NETWORK. <br />
            <span className="text-[#6DBE07]">
              EVERY DESTINATION.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed">
            From private home garages to bustling commercial headquarters and trans-continental expressways, EVION brings seamless, ultra-reliable energy infrastructure wherever mobility happens.
          </p>
        </div>

        {/* 3 Large Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {networkCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group"
            >
              <Link
                href={card.href}
                data-cursor="VIEW"
                className="block relative h-[480px] sm:h-[520px] rounded-3xl overflow-hidden border border-[#E5E5E5] hover:border-[#6DBE07] transition-all duration-500 bg-[#FFFFFF] shadow-lg hover:shadow-[0_15px_35px_rgba(109,190,7,0.15)] flex flex-col justify-between p-6 sm:p-8"
              >
                {/* Background Remote Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 brightness-[0.45] contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/40 to-transparent" />
                </div>

                {/* Card Top: Category Badge & Speed Tag */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E5E5E5] text-xs font-mono font-medium text-[#000000]">
                    {card.icon}
                    <span>{card.category}</span>
                  </div>

                  <span className="text-[11px] font-mono text-[#4D8500] bg-[#EFF8E7] border border-[#CFE8B5] px-2.5 py-1 rounded-full backdrop-blur-md font-semibold">
                    {card.speed}
                  </span>
                </div>

                {/* Card Bottom: Content & Animated CTA */}
                <div className="relative z-10 space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs uppercase font-mono tracking-widest text-[#6DBE07] group-hover:translate-x-1 transition-transform font-bold">
                      {card.tagline}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-200 line-clamp-3 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-white/20 text-sm font-semibold text-white group-hover:text-[#6DBE07] transition-colors">
                    <span>Explore {card.category} Solution</span>
                    <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-[#6DBE07] group-hover:text-[#000000] flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
