import { Metadata } from 'next';
import { InteractiveMapSection } from '@/components/home/InteractiveMapSection';
import { mockStations } from '@/data/stations';
import { FinalCTA } from '@/components/home/FinalCTA';
import { MapPin, ExternalLink, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Charging Locations Directory | EVION Superhubs',
  description:
    'Browse EVION high-speed EV charging stations across major Indian cities and highway corridors. View real-time bay availability and amenities.',
};

export default function LocationsPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-[#FFFFFF]">
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E5E5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF8E7] border border-[#CFE8B5] text-xs font-mono text-[#4D8500] uppercase tracking-widest font-semibold">
              SUPERCHARGING CORRIDORS & METRO HUBS
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-[#000000] tracking-tight uppercase leading-[0.95]">
              STATION <br />
              <span className="text-[#6DBE07]">
                DIRECTORY.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed">
              Explore our comprehensive nationwide directory of ultra-fast 350 kW and 180 kW charging hubs. Every station features 24/7 access, security, and premium nearby amenities.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Cards Section */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#000000]">Active Supercharger Hubs</h2>
              <p className="text-xs text-[#666666] font-mono mt-1">
                Showing {mockStations.length} flagship metropolitan hubs
              </p>
            </div>

            <Link
              href="/charging-network"
              className="text-xs font-mono text-[#000000] hover:text-[#6DBE07] flex items-center gap-1 font-semibold"
            >
              <span>Switch to Live Map Radar</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#6DBE07]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockStations.map((station) => (
              <div
                key={station.id}
                className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#6DBE07] transition-all duration-300 space-y-4 flex flex-col justify-between shadow-sm hover:shadow-[0_10px_30px_rgba(109,190,7,0.1)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#EFF8E7] text-[#4D8500] border border-[#CFE8B5] text-xs font-mono font-bold">
                      {station.powerKw} kW DC
                    </span>
                    <span className="text-xs font-mono text-[#666666]">
                      {station.city}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#000000]">{station.name}</h3>
                  <p className="text-xs text-[#666666] mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#6DBE07] shrink-0" />
                    {station.address}
                  </p>

                  {/* Connectors & Pricing */}
                  <div className="grid grid-cols-2 gap-2 my-4 pt-3 border-t border-[#E5E5E5] text-xs font-mono">
                    <div>
                      <div className="text-[#666666] text-[10px]">AVAILABLE BAYS</div>
                      <div className="text-[#000000] font-bold">{station.availablePlugs} / {station.totalPlugs} Plugs</div>
                    </div>
                    <div>
                      <div className="text-[#666666] text-[10px]">TARIFF</div>
                      <div className="text-[#6DBE07] font-bold">₹{station.pricePerKwh}/kWh</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E5E5E5] flex items-center justify-between">
                  <div className="text-xs text-[#666666] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>24/7 Access</span>
                  </div>
                  <Link
                    href="/charging-network"
                    className="text-xs font-bold text-[#000000] hover:text-[#6DBE07] transition-colors"
                  >
                    View Status →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Radar section */}
      <InteractiveMapSection />

      <FinalCTA />
    </div>
  );
}
