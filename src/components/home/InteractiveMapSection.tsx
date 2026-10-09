'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Zap, Navigation, Clock, SlidersHorizontal, ArrowUpRight, X } from 'lucide-react';
import { mockStations } from '@/data/stations';
import { Station } from '@/types';
import { Button } from '@/components/ui/Button';

export const InteractiveMapSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [activeTabCity, setActiveTabCity] = useState<string>('All Cities');

  const filterOptions = [
    'All',
    'Ultra-Fast 350kW',
    'DC Fast 180kW',
    'Available Now',
    '24/7 Open',
    'CCS2',
    'Type 2',
  ];

  const cities = ['All Cities', 'Bengaluru', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Pune', 'Goa'];

  const filteredStations = useMemo(() => {
    return mockStations.filter((station) => {
      // Search query filter
      const matchesSearch =
        station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        station.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        station.address.toLowerCase().includes(searchQuery.toLowerCase());

      // City filter
      const matchesCity =
        activeTabCity === 'All Cities' || station.city.toLowerCase().includes(activeTabCity.toLowerCase());

      // Tag filter
      let matchesTag = true;
      if (selectedFilter === 'Ultra-Fast 350kW') {
        matchesTag = station.powerKw >= 350;
      } else if (selectedFilter === 'DC Fast 180kW') {
        matchesTag = station.powerKw >= 180 && station.powerKw < 350;
      } else if (selectedFilter === 'Available Now') {
        matchesTag = station.status === 'Available' && station.availablePlugs > 0;
      } else if (selectedFilter === '24/7 Open') {
        matchesTag = station.open247;
      } else if (selectedFilter === 'CCS2') {
        matchesTag = station.connectors.includes('CCS2');
      } else if (selectedFilter === 'Type 2') {
        matchesTag = station.connectors.includes('Type 2');
      }

      return matchesSearch && matchesCity && matchesTag;
    });
  }, [searchQuery, selectedFilter, activeTabCity]);

  return (
    <section id="find-charger" className="py-24 sm:py-32 bg-[#F8F8F8] relative overflow-hidden border-t border-[#E5E5E5]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#6DBE07]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF8E7] border border-[#CFE8B5] text-xs font-mono text-[#4D8500] uppercase tracking-widest mb-3">
              LIVE NETWORK RADAR
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#000000] uppercase">
              FIND YOUR <br />
              <span className="text-[#6DBE07]">
                NEXT CHARGE.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4B5563] max-w-md font-normal">
            Real-time availability, dynamic pricing, and ultra-fast charging speeds across our growing national supercharging network.
          </p>
        </div>

        {/* Search Bar & City Selector */}
        <div className="bg-[#FFFFFF] border border-[#E5E5E5] rounded-3xl p-4 sm:p-6 mb-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666666]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by city, landmark, or station name (e.g. Indiranagar, BKC, Aerocity)..."
                className="w-full bg-[#FFFFFF] border border-[#E5E5E5] rounded-2xl pl-12 pr-4 py-3.5 text-sm text-[#000000] placeholder-neutral-400 focus:outline-none focus:border-[#6DBE07] focus:ring-2 focus:ring-[#6DBE07]/15 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666666] hover:text-[#000000]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* City Selector Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setActiveTabCity(city)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                    activeTabCity === city
                      ? 'bg-[#FFFFFF] text-[#000000] border-2 border-[#6DBE07] font-bold shadow-sm'
                      : 'bg-[#FFFFFF] text-[#666666] hover:text-[#000000] hover:bg-[#F8F8F8] border border-[#E5E5E5]'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-[#E5E5E5] scrollbar-none">
            <span className="text-xs font-mono text-[#666666] flex items-center gap-1 shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Filters:
            </span>
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1 rounded-full text-xs transition-all shrink-0 ${
                  selectedFilter === filter
                    ? 'bg-[#EFF8E7] text-[#4D8500] border border-[#CFE8B5] font-semibold'
                    : 'bg-[#F8F8F8] text-[#666666] hover:text-[#000000] border border-[#E5E5E5]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Map & Station Cards Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Interactive Map Radar Container */}
          <div className="lg:col-span-7 h-[420px] sm:h-[540px] rounded-3xl bg-[#FFFFFF] border border-[#E5E5E5] relative overflow-hidden flex flex-col justify-between p-6 shadow-sm">
            {/* Grid background texture */}
            <div className="absolute inset-0 bg-grid-pattern opacity-60" />

            {/* Simulated Geographic Radar Map Canvas with Interactive Station Nodes */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
              <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
                {/* Simulated Corridor Lines */}
                <path
                  d="M 150,150 Q 300,200 450,180 T 680,280"
                  stroke="rgba(109, 190, 7, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 200,380 Q 400,300 550,420 T 700,480"
                  stroke="rgba(0, 0, 0, 0.15)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {/* Concentric Radar Rings */}
                <circle cx="400" cy="300" r="120" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
                <circle cx="400" cy="300" r="220" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
                <circle cx="400" cy="300" r="320" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />
              </svg>

              {/* Station Markers Overlay */}
              <div className="absolute inset-0 p-8 sm:p-12 relative">
                {filteredStations.slice(0, 8).map((st, i) => {
                  const positions = [
                    { top: '22%', left: '28%' },
                    { top: '35%', left: '65%' },
                    { top: '55%', left: '32%' },
                    { top: '68%', left: '72%' },
                    { top: '42%', left: '48%' },
                    { top: '78%', left: '40%' },
                    { top: '20%', left: '75%' },
                    { top: '60%', left: '15%' },
                  ];
                  const pos = positions[i % positions.length];
                  const isSelected = selectedStation?.id === st.id;

                  return (
                    <motion.button
                      key={st.id}
                      onClick={() => setSelectedStation(st)}
                      data-cursor="CHARGE"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.25 }}
                      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 group focus:outline-none"
                      style={{ top: pos.top, left: pos.left }}
                    >
                      {/* Node Dot */}
                      <div className="relative">
                        {st.status === 'Available' && (
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6DBE07] opacity-60" />
                        )}
                        <div
                          className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md transition-all ${
                            isSelected
                              ? 'bg-[#000000] text-[#FFFFFF] ring-4 ring-[#6DBE07]'
                              : st.status === 'Available'
                              ? 'bg-[#6DBE07] text-[#000000] ring-2 ring-[#6DBE07]/40'
                              : st.status === 'Charging'
                              ? 'bg-[#000000] text-[#FFFFFF] ring-2 ring-[#000000]/40'
                              : 'bg-amber-500 text-white'
                          }`}
                        >
                          <Zap className="w-3 h-3 fill-current" />
                        </div>
                      </div>

                      {/* Tooltip Tag */}
                      <span
                        className={`hidden sm:inline-block px-2.5 py-1 rounded-lg text-[11px] font-mono whitespace-nowrap backdrop-blur-md transition-all ${
                          isSelected
                            ? 'bg-[#000000] text-[#FFFFFF] font-bold shadow-lg'
                            : 'bg-[#FFFFFF] border border-[#E5E5E5] text-[#000000] group-hover:border-[#6DBE07] shadow-sm'
                        }`}
                      >
                        {st.name.replace('EVION ', '')} · {st.powerKw}kW
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Radar Header Info */}
            <div className="relative z-10 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E5E5E5] text-xs font-mono text-[#333333]">
                <span className="w-2 h-2 rounded-full bg-[#6DBE07] animate-ping" />
                <span>INTERACTIVE NETWORK MATRIX</span>
              </div>
              <div className="text-xs font-mono text-[#666666] bg-[#FFFFFF]/90 px-3 py-1 rounded-full border border-[#E5E5E5]">
                {filteredStations.length} HUBS IN VIEW
              </div>
            </div>

            {/* Radar Map Legend */}
            <div className="relative z-10 flex flex-wrap items-center gap-4 text-xs font-mono text-[#666666] bg-[#FFFFFF]/90 backdrop-blur-md p-3 rounded-2xl border border-[#E5E5E5] pointer-events-none shadow-sm">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6DBE07]" />
                <span className="text-[#000000] font-medium">Available</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#000000]" />
                <span className="text-[#000000] font-medium">Active Charging</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-[#000000] font-medium">High Demand</span>
              </div>
            </div>
          </div>

          {/* Station List Sidebar */}
          <div className="lg:col-span-5 space-y-4 max-h-[540px] overflow-y-auto pr-1">
            {filteredStations.length === 0 ? (
              <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E5E5E5] text-center text-[#666666]">
                <MapPin className="w-8 h-8 text-[#666666] mx-auto mb-3" />
                <div className="text-base font-semibold text-[#000000] mb-1">No stations found</div>
                <p className="text-xs text-[#666666]">Try searching for a different city or clearing applied filters.</p>
              </div>
            ) : (
              filteredStations.map((station) => {
                const isSelected = selectedStation?.id === station.id;
                return (
                  <motion.div
                    key={station.id}
                    onClick={() => setSelectedStation(station)}
                    whileHover={{ y: -2 }}
                    className={`p-5 rounded-3xl transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-[#EFF8E7]/40 border-2 border-[#6DBE07] shadow-md'
                        : 'bg-[#FFFFFF] border-[#E5E5E5] hover:border-[#6DBE07] hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h4 className="text-base font-bold text-[#000000] group-hover:text-[#6DBE07] flex items-center gap-2">
                          {station.name}
                          {station.isPopular && (
                            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#EFF8E7] text-[#4D8500] border border-[#CFE8B5] font-bold">
                              SUPERHUB
                            </span>
                          )}
                        </h4>
                        <div className="text-xs text-[#666666] flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-[#6DBE07] shrink-0" />
                          <span>{station.address}</span>
                        </div>
                      </div>

                      <span
                        className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${
                          station.status === 'Available'
                            ? 'bg-[#EFF8E7] text-[#4D8500] border-[#CFE8B5] font-medium'
                            : 'bg-[#F8F8F8] text-[#333333] border-[#E5E5E5]'
                        }`}
                      >
                        {station.availablePlugs}/{station.totalPlugs} Available
                      </span>
                    </div>

                    {/* Specs Row */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#E5E5E5] text-xs font-mono my-3">
                      <div>
                        <div className="text-[#666666] text-[10px]">SPEED</div>
                        <div className="font-bold text-[#000000]">{station.powerKw} kW</div>
                      </div>
                      <div>
                        <div className="text-[#666666] text-[10px]">TARIFF</div>
                        <div className="font-bold text-[#6DBE07]">₹{station.pricePerKwh}/kWh</div>
                      </div>
                      <div>
                        <div className="text-[#666666] text-[10px]">PLUGS</div>
                        <div className="font-bold text-[#000000]">{station.connectors.join(', ')}</div>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1.5 text-xs text-[#666666]">
                        <Clock className="w-3.5 h-3.5 text-[#666666]" />
                        <span>{station.open247 ? 'Open 24/7' : '6 AM - 11 PM'}</span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStation(station);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#000000] hover:text-[#6DBE07]"
                      >
                        <span>View Station</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Interactive Floating Station Modal / Drawer */}
      <AnimatePresence>
        {selectedStation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedStation(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-lg rounded-3xl bg-[#FFFFFF] border border-[#E5E5E5] p-6 sm:p-8 shadow-2xl relative text-[#000000] space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStation(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#F8F8F8] hover:bg-[#E5E5E5] text-[#000000] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EFF8E7] text-[#4D8500] border border-[#CFE8B5] text-xs font-mono font-bold">
                    {selectedStation.speedCategory}
                  </span>
                  <span className="text-xs font-mono text-[#666666]">
                    {selectedStation.city}, {selectedStation.state}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#000000]">{selectedStation.name}</h3>
                <p className="text-sm text-[#4B5563] mt-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#6DBE07] shrink-0" />
                  {selectedStation.address}
                </p>
              </div>

              {/* Telemetry Highlights */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5] font-mono text-center">
                <div>
                  <div className="text-[10px] text-[#666666] uppercase">Power Output</div>
                  <div className="text-lg font-bold text-[#000000]">{selectedStation.powerKw} kW</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#666666] uppercase">Live Tariff</div>
                  <div className="text-lg font-bold text-[#6DBE07]">₹{selectedStation.pricePerKwh}/kWh</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#666666] uppercase">Live Bays</div>
                  <div className="text-lg font-bold text-[#000000]">
                    {selectedStation.availablePlugs} / {selectedStation.totalPlugs}
                  </div>
                </div>
              </div>

              {/* Supported Connectors */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#666666] mb-2 font-semibold">
                  Supported Connectors
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedStation.connectors.map((c, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-[#F8F8F8] border border-[#E5E5E5] text-xs font-mono font-medium text-[#000000] flex items-center gap-1.5"
                    >
                      <Zap className="w-3.5 h-3.5 text-[#6DBE07]" />
                      {c} Ultra-Fast
                    </span>
                  ))}
                </div>
              </div>

              {/* Nearby Amenities */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#666666] mb-2 font-semibold">
                  Station Amenities
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedStation.amenities.map((a, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-[#F8F8F8] border border-[#E5E5E5] text-xs text-[#4B5563]"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <Button
                  variant="secondary"
                  size="md"
                  className="w-full"
                  onClick={() => alert(`Starting navigation to ${selectedStation.name}...`)}
                  icon={<Navigation className="w-4 h-4 text-[#000000]" />}
                >
                  Get Directions
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  href="/contact"
                  icon={<Zap className="w-4 h-4 fill-current" />}
                >
                  Reserve Bay
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
