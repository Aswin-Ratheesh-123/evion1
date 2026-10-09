import { Metadata } from 'next';
import { InteractiveMapSection } from '@/components/home/InteractiveMapSection';
import { FAQSection } from '@/components/home/FAQSection';
import { FinalCTA } from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'Charging Network | Find Ultra-Fast EV Stations',
  description:
    'Locate live EVION ultra-fast charging stations across major highway corridors and metropolitan hubs. Real-time charger availability, speeds up to 350 kW, and transparent pricing.',
};

export default function ChargingNetworkPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-[#FFFFFF]">
      {/* Network Page Hero Banner */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E5E5E5] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#6DBE07]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF8E7] border border-[#CFE8B5] text-xs font-mono text-[#4D8500] uppercase tracking-widest font-semibold">
              EVION SUPERCHARGING CORRIDORS
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-[#000000] tracking-tight uppercase leading-[1.05]">
              NATIONWIDE <br />
              <span className="text-[#6DBE07]">
                HIGH-SPEED NETWORK.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed">
              Explore 500+ ultra-fast charging bays across India&apos;s premier expressways, tech parks, and commercial lifestyle centers. Engineered for 99.9% hardware availability.
            </p>

            {/* Quick telemetry metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E5E5E5]">
              <div className="p-4 rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5]">
                <div className="text-xs font-mono text-[#666666] mb-1">LIVE HUBS</div>
                <div className="text-2xl font-bold font-mono text-[#000000]">500+</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5]">
                <div className="text-xs font-mono text-[#666666] mb-1">PEAK POWER</div>
                <div className="text-2xl font-bold font-mono text-[#6DBE07]">350 kW</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5]">
                <div className="text-xs font-mono text-[#666666] mb-1">UPTIME SLA</div>
                <div className="text-2xl font-bold font-mono text-[#000000]">99.9%</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5]">
                <div className="text-xs font-mono text-[#666666] mb-1">AVG TOP-UP</div>
                <div className="text-2xl font-bold font-mono text-[#000000]">15 Min</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Map & Search Section */}
      <InteractiveMapSection />

      {/* FAQs & CTA */}
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
