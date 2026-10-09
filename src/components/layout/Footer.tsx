'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { footerLinks } from '@/data/navigation';
import { Button } from '@/components/ui/Button';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#050505] border-t border-neutral-800 overflow-hidden text-neutral-400">
      {/* Signature Animated Energy Pulse Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6DBE07] to-transparent opacity-40 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 pb-16 border-b border-neutral-800">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center transition-opacity hover:opacity-90 duration-200"
              aria-label="EVION Home"
            >
              <Image
                src="/logo1.jpeg"
                alt="EVION"
                width={1536}
                height={364}
                className="h-8 sm:h-9 w-auto object-contain rounded-md"
              />
            </Link>

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Powering every journey. Ultra-fast, intelligent EV charging infrastructure engineered for drivers, forward-thinking enterprises, and modern mobility networks.
            </p>

            {/* Network Health Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6DBE07] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6DBE07]"></span>
              </span>
              <span className="text-white font-medium">99.9% Network Uptime SLA</span>
            </div>

            {/* Newsletter */}
            <div className="space-y-2 pt-2">
              <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                Stay updated on new superhubs
              </div>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-[#6DBE07] bg-[#EFF8E7]/10 p-2.5 rounded-xl border border-[#6DBE07]/30">
                  <CheckCircle2 className="w-4 h-4 text-[#6DBE07]" />
                  <span>You&apos;re subscribed to EVION network updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter work email"
                    required
                    className="bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#6DBE07] flex-1"
                  />
                  <Button type="submit" variant="primary" size="sm" className="rounded-full px-4">
                    Join
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Column 1: Charging */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">Charging</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.charging.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-[#6DBE07] transition-colors inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.solutions.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-[#6DBE07] transition-colors inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.company.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-[#6DBE07] transition-colors inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.resources.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-[#6DBE07] transition-colors inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <span>© 2026 EVION Technologies Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#6DBE07] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#6DBE07] transition-colors">
              Terms of Service
            </Link>
            <div className="flex items-center gap-1.5 text-neutral-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#6DBE07]" />
              <span>ISO 15118 & OCPP 2.0.1 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
