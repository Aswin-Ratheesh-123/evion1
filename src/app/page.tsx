import React from 'react';
import { Hero } from '@/components/home/Hero';
import { QuickStats } from '@/components/home/QuickStats';
import { NetworkHighlights } from '@/components/home/NetworkHighlights';
import { InteractiveMapSection } from '@/components/home/InteractiveMapSection';
import { ScrollEnergyFlow } from '@/components/home/ScrollEnergyFlow';
import { HowItWorks } from '@/components/home/HowItWorks';
import { TechCards } from '@/components/home/TechCards';
import { ChargerShowcase } from '@/components/home/ChargerShowcase';
import { BusinessSection } from '@/components/home/BusinessSection';
import { ROICalculator } from '@/components/home/ROICalculator';
import { SmartEnergyDashboard } from '@/components/home/SmartEnergyDashboard';
import { Testimonials } from '@/components/home/Testimonials';
import { FAQSection } from '@/components/home/FAQSection';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <QuickStats />
      <NetworkHighlights />
      <InteractiveMapSection />
      <ScrollEnergyFlow />
      <HowItWorks />
      <TechCards />
      <ChargerShowcase />
      <BusinessSection />
      <ROICalculator />
      <SmartEnergyDashboard />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
