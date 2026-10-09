'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Zap, MapPin, ArrowRight } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFFFF]/95 backdrop-blur-xl border-b border-[#E5E5E5] py-3.5 shadow-sm'
            : 'bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#E5E5E5]/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & System Indicator */}
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="group flex items-center gap-2.5 text-[#000000] font-extrabold tracking-tighter text-2xl transition-transform duration-300"
              >
                <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#F8F8F8] border border-[#E5E5E5] group-hover:border-[#6DBE07] transition-colors">
                  <Zap className="w-4 h-4 text-[#6DBE07] group-hover:scale-110 transition-transform" />
                </span>
                <span className="font-bold tracking-widest text-xl text-[#000000]">EVION</span>
              </Link>

              {/* Status indicator */}
              <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#F8F8F8] border border-[#E5E5E5] text-[10px] font-mono tracking-wider text-[#333333]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6DBE07] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6DBE07]"></span>
                </span>
                <span className="text-[#000000] font-medium">SYSTEM ONLINE</span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((item, idx) => {
                if ('items' in item) {
                  const isOpen = activeDropdown === item.label;
                  const isSectionActive = pathname.startsWith('/solutions');
                  return (
                    <div
                      key={idx}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={`flex items-center gap-1 px-3.5 py-2 rounded-full text-sm font-medium tracking-wide transition-colors ${
                          isSectionActive
                            ? 'text-[#6DBE07] bg-[#EFF8E7]'
                            : 'text-[#000000] hover:text-[#6DBE07] hover:bg-[#F8F8F8]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#6DBE07]' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute top-full left-0 w-80 pt-2 z-50"
                          >
                            <div className="p-3 bg-[#FFFFFF] border border-[#E5E5E5] rounded-2xl shadow-xl space-y-1">
                              {item.items.map((subItem, sIdx) => (
                                <Link
                                  key={sIdx}
                                  href={subItem.href}
                                  className="block p-2.5 rounded-xl hover:bg-[#F8F8F8] transition-colors group"
                                >
                                  <div className="text-sm font-semibold text-[#000000] group-hover:text-[#6DBE07] transition-colors flex items-center justify-between">
                                    {subItem.label}
                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#6DBE07]" />
                                  </div>
                                  {subItem.description && (
                                    <div className="text-xs text-[#666666] mt-0.5 line-clamp-1">
                                      {subItem.description}
                                    </div>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                const isActive = pathname === item.href;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className={`px-3.5 py-2 rounded-full text-sm font-medium tracking-wide transition-colors ${
                      isActive
                        ? 'text-[#6DBE07] bg-[#EFF8E7] font-semibold'
                        : 'text-[#000000] hover:text-[#6DBE07] hover:bg-[#F8F8F8]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                href="/charging-network"
                icon={<MapPin className="w-3.5 h-3.5 text-[#6DBE07]" />}
                className="text-[#000000] hover:text-[#6DBE07]"
              >
                Find a Charger
              </Button>
              <Button
                variant="primary"
                size="sm"
                href="/contact"
                showArrow
              >
                Partner With Us
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                href="/charging-network"
                className="p-2 rounded-full bg-[#F8F8F8] border border-[#E5E5E5] text-[#6DBE07]"
                aria-label="Find a Charger"
              >
                <MapPin className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-[#F8F8F8] border border-[#E5E5E5] text-[#000000] hover:text-[#6DBE07] transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FFFFFF] pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto md:hidden"
          >
            <div className="space-y-6">
              {/* Online indicator */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F8F8F8] border border-[#E5E5E5] text-xs font-mono w-fit text-[#333333]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6DBE07] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6DBE07]"></span>
                </span>
                <span className="text-[#000000] font-medium">EVION NETWORK ONLINE</span>
              </div>

              {/* Navigation Links */}
              <div className="space-y-2">
                {navLinks.map((item, idx) => {
                  if ('items' in item) {
                    return (
                      <div key={idx} className="space-y-2 pt-2 pb-2">
                        <div className="text-xs uppercase font-mono tracking-widest text-[#666666] px-3">
                          {item.label}
                        </div>
                        <div className="grid grid-cols-1 gap-1 pl-2">
                          {item.items.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-3 py-2 rounded-xl text-base font-medium text-[#000000] hover:bg-[#F8F8F8] flex items-center justify-between"
                            >
                              <span>{sub.label}</span>
                              <ArrowRight className="w-4 h-4 text-[#666666]" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2.5 rounded-xl text-lg font-semibold transition-colors ${
                        isActive
                          ? 'text-[#6DBE07] bg-[#EFF8E7]'
                          : 'text-[#000000] hover:text-[#6DBE07]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="space-y-3 pt-6 border-t border-[#E5E5E5] mt-6">
              <Button
                variant="primary"
                size="lg"
                href="/charging-network"
                className="w-full"
                showArrow
              >
                Find a Charger
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="/contact"
                className="w-full"
              >
                Partner With EVION
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
