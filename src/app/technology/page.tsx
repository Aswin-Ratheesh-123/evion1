import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { TechCards } from '@/components/home/TechCards';
import { ChargerShowcase } from '@/components/home/ChargerShowcase';
import { SmartEnergyDashboard } from '@/components/home/SmartEnergyDashboard';
import { FinalCTA } from '@/components/home/FinalCTA';
import { Cpu, Activity, Droplets } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology & Architecture | EVION Cloud OS & 350kW Hardware',
  description:
    'Discover the engineering behind EVION: Silicon Carbide 350 kW liquid-cooled power electronics, ISO 15118 Plug & Charge, and real-time EVION Cloud OS telemetry.',
};

export default function TechnologyPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-[#FFFFFF]">
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E5E5] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-[#6DBE07]/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF8E7] border border-[#CFE8B5] text-xs font-mono text-[#4D8500] uppercase tracking-widest font-semibold">
              NEXT-GEN POWER ELECTRONICS
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#000000] tracking-tight uppercase leading-[0.95]">
              PRECISION <br />
              <span className="text-[#6DBE07]">
                ENGINEERING.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed">
              Every EVION charger is built from the ground up with modular Silicon Carbide semiconductors, closed-loop active dielectric chiller circuits, and sub-second cloud intelligence.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button variant="primary" size="lg" href="/contact" showArrow>
                Download Technical Whitepaper
              </Button>
              <Button variant="secondary" size="lg" href="/charging-network">
                View Active Network
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Architecture Pillars */}
      <section className="py-24 bg-[#F8F8F8] border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E5E5E5] space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#EFF8E7] border border-[#CFE8B5] flex items-center justify-center text-[#4D8500]">
                <Cpu className="w-6 h-6 text-[#6DBE07]" />
              </div>
              <h3 className="text-2xl font-bold text-[#000000]">Silicon Carbide SiC Modules</h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                97.5% conversion efficiency with reduced thermal losses, allowing full 350 kW throughput in ambient temperatures exceeding 50°C.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E5E5E5] space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5] flex items-center justify-center text-[#000000]">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#000000]">Liquid-Cooled Cable Design</h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Active dielectric chiller circuits keep high-amp 500A charging cables slim, lightweight, and easy to maneuver for all drivers.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E5E5E5] space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#EFF8E7] border border-[#CFE8B5] flex items-center justify-center text-[#4D8500]">
                <Activity className="w-6 h-6 text-[#6DBE07]" />
              </div>
              <h3 className="text-2xl font-bold text-[#000000]">Autonomous Healing OS</h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Continuous telemetry monitors connector wear and ground resistance, automatically resetting temporary grid fluctuations in under 3 seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tech Components */}
      <ChargerShowcase />
      <TechCards />
      <SmartEnergyDashboard />
      <FinalCTA />
    </div>
  );
}
