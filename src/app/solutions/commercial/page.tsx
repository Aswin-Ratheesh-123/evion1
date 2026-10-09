import { Metadata } from 'next';
import Image from 'next/image';
import { solutionsData } from '@/data/solutions';
import { Button } from '@/components/ui/Button';
import { FinalCTA } from '@/components/home/FinalCTA';
import { ShoppingBag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Retail & Destination EV Charging | EVION',
  description:
    'Attract high-spending EV drivers and increase retail dwell time with 350 kW ultra-fast destination charging hubs.',
};

export default function CommercialChargingPage() {
  const data = solutionsData.commercial;

  return (
    <div className="pt-24 sm:pt-28 bg-[#FFFFFF]">
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E5E5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF8E7] border border-[#CFE8B5] text-xs font-mono text-[#4D8500] uppercase tracking-widest font-semibold">
                {data.eyebrow}
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-[#000000] tracking-tight uppercase leading-[0.95]">
                {data.title} <br />
                <span className="text-[#6DBE07]">
                  DESTINATION HUBS.
                </span>
              </h1>

              <p className="text-lg text-[#4B5563] max-w-xl leading-relaxed">
                {data.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button variant="primary" size="lg" href="/contact" showArrow>
                  Host a Supercharging Hub
                </Button>
                <Button variant="secondary" size="lg" href="/contact">
                  Explore Zero-Capex Model
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border border-[#E5E5E5] bg-[#F8F8F8] shadow-lg">
                <Image
                  src={data.heroImage}
                  alt={data.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center brightness-[0.95]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="py-12 bg-[#F8F8F8] border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {data.metrics.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E5] shadow-sm">
                <div className="text-xs font-mono text-[#666666] mb-1">{m.label}</div>
                <div className="text-3xl font-black font-mono text-[#6DBE07] mb-1">{m.value}</div>
                <div className="text-xs text-[#666666]">{m.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Specs */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.features.map((feat, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#F8F8F8] border border-[#E5E5E5] hover:border-[#6DBE07] transition-all space-y-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#EFF8E7] border border-[#CFE8B5] flex items-center justify-center text-[#4D8500]">
                  <ShoppingBag className="w-5 h-5 text-[#6DBE07]" />
                </div>
                <h3 className="text-xl font-bold text-[#000000]">{feat.title}</h3>
                <p className="text-sm text-[#666666] leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
