'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Zap, Cpu, Sun, BarChart3, RefreshCw } from 'lucide-react';

export const SmartEnergyDashboard: React.FC = () => {
  const [activeLoad, setActiveLoad] = useState(64);
  const [activePower, setActivePower] = useState(184);
  const onlineHubs = 24;
  const [solarShare, setSolarShare] = useState(38);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLoad(60 + Math.floor(Math.random() * 8));
      setActivePower(180 + Math.floor(Math.random() * 12));
      setSolarShare(36 + Math.floor(Math.random() * 6));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-[#FFFFFF] relative overflow-hidden border-t border-[#E5E5E5]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#6DBE07]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF8E7] border border-[#CFE8B5] text-xs font-mono text-[#4D8500] uppercase tracking-widest mb-4">
            GRID INTELLIGENCE & TELEMETRY
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#000000] uppercase leading-[1.05]">
            CHARGING IS ONLY PART <br />
            <span className="text-[#6DBE07]">
              OF THE EQUATION.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed">
            High-power charging without intelligent orchestration overburdens the electric grid. EVION Smart Energy OS balances utility supply, solar arrays, and stationary batteries in real time.
          </p>
        </div>

        {/* Dashboard Preview Matrix */}
        <div className="rounded-3xl bg-[#FFFFFF] border border-[#E5E5E5] p-6 sm:p-10 shadow-sm space-y-8">
          {/* Top Telemetry Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E5E5]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EFF8E7] border border-[#CFE8B5] flex items-center justify-center text-[#4D8500]">
                <Activity className="w-5 h-5 animate-pulse text-[#6DBE07]" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#000000] flex items-center gap-2">
                  <span>EVION CLOUD OS TELEMETRY</span>
                  <span className="w-2 h-2 rounded-full bg-[#6DBE07] animate-ping" />
                </div>
                <div className="text-xs font-mono text-[#666666]">
                  Node Cluster: AP-SOUTH-HUB-01 · Latency: 12ms
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#666666] bg-[#F8F8F8] border border-[#E5E5E5] px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <RefreshCw className="w-3 h-3 text-[#6DBE07] animate-spin" />
                Live Sub-second Stream
              </span>
            </div>
          </div>

          {/* Key Energy Metrics HUD */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5]">
              <div className="flex items-center justify-between text-[#666666] text-xs font-mono mb-2">
                <span>ACTIVE POWER</span>
                <Zap className="w-3.5 h-3.5 text-[#6DBE07]" />
              </div>
              <div className="text-3xl font-black font-mono text-[#000000]">
                {activePower} <span className="text-sm font-normal text-[#666666]">kW</span>
              </div>
              <div className="text-[11px] text-[#4D8500] mt-1 font-mono font-medium">
                +12% vs last hour
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5]">
              <div className="flex items-center justify-between text-[#666666] text-xs font-mono mb-2">
                <span>GRID LOAD BALANCE</span>
                <Cpu className="w-3.5 h-3.5 text-[#000000]" />
              </div>
              <div className="text-3xl font-black font-mono text-[#000000]">
                {activeLoad} <span className="text-sm font-normal text-[#666666]">%</span>
              </div>
              <div className="text-[11px] text-[#666666] mt-1 font-mono">
                Optimal stability threshold
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5]">
              <div className="flex items-center justify-between text-[#666666] text-xs font-mono mb-2">
                <span>SOLAR MIX</span>
                <Sun className="w-3.5 h-3.5 text-amber-500" />
              </div>
              <div className="text-3xl font-black font-mono text-[#000000]">
                {solarShare} <span className="text-sm font-normal text-[#666666]">%</span>
              </div>
              <div className="text-[11px] text-amber-600 mt-1 font-mono">
                Direct rooftop feed
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5]">
              <div className="flex items-center justify-between text-[#666666] text-xs font-mono mb-2">
                <span>ACTIVE STATIONS</span>
                <BarChart3 className="w-3.5 h-3.5 text-[#6DBE07]" />
              </div>
              <div className="text-3xl font-black font-mono text-[#000000]">
                {onlineHubs} <span className="text-sm font-normal text-[#666666]">Online</span>
              </div>
              <div className="text-[11px] text-[#4D8500] mt-1 font-mono font-medium">
                0 Critical alerts
              </div>
            </div>
          </div>

          {/* Animated Power Flow Graph */}
          <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5] space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#000000] font-bold">24-HOUR POWER FLOW & LOAD HARMONIZATION</span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 text-[#4D8500] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#6DBE07]" /> DC Ultra-Fast Load
                </span>
                <span className="flex items-center gap-1 text-[#000000] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#000000]" /> Solar Inverter Output
                </span>
              </div>
            </div>

            {/* SVG Wave Graph */}
            <div className="h-44 w-full relative">
              <svg className="w-full h-full" viewBox="0 0 800 200" fill="none" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="powerGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6DBE07" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#6DBE07" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="solarGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#000000" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Grid horizontal guidelines */}
                <line x1="0" y1="50" x2="800" y2="50" stroke="rgba(0,0,0,0.06)" strokeDasharray="4 4" />
                <line x1="0" y1="100" x2="800" y2="100" stroke="rgba(0,0,0,0.06)" strokeDasharray="4 4" />
                <line x1="0" y1="150" x2="800" y2="150" stroke="rgba(0,0,0,0.06)" strokeDasharray="4 4" />

                {/* Solar Curve Area */}
                <path
                  d="M 0,160 Q 200,150 350,70 T 550,60 T 800,180 L 800,200 L 0,200 Z"
                  fill="url(#solarGrad)"
                />
                <path
                  d="M 0,160 Q 200,150 350,70 T 550,60 T 800,180"
                  stroke="#000000"
                  strokeWidth="2"
                />

                {/* Power Demand Curve Area */}
                <path
                  d="M 0,130 Q 150,90 300,110 T 500,40 T 700,90 T 800,60 L 800,200 L 0,200 Z"
                  fill="url(#powerGrad)"
                />
                <path
                  d="M 0,130 Q 150,90 300,110 T 500,40 T 700,90 T 800,60"
                  stroke="#6DBE07"
                  strokeWidth="2.5"
                />
              </svg>
            </div>

            <div className="flex justify-between text-[11px] font-mono text-[#666666] pt-2 border-t border-[#E5E5E5]">
              <span>00:00 (Night Off-peak)</span>
              <span>06:00 (Morning Rush)</span>
              <span>12:00 (Solar Peak)</span>
              <span>18:00 (Evening Surge)</span>
              <span>23:59</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
