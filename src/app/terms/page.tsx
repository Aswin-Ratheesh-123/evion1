import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | EVION Technologies',
  description: 'Terms and conditions governing the use of EVION charging stations, mobile applications, and enterprise services.',
};

export default function TermsPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FFFFFF]">
      <section className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF8E7] border border-[#CFE8B5] text-xs font-mono text-[#4D8500] uppercase tracking-widest mb-3 font-semibold">
            AGREEMENT & SERVICE STANDARDS
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#000000] uppercase">Terms of Service</h1>
          <p className="text-sm text-[#666666] mt-2">Last Updated: October 2026</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-[#333333] text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#000000]">1. Acceptance of Terms</h2>
          <p>
            By accessing or using EVION charging stations, software applications, websites, and APIs, you agree to be bound by these Terms of Service and all applicable electrical safety regulations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#000000]">2. Charging Station Usage & Safety</h2>
          <p>
            Users must ensure their vehicles comply with applicable national automotive safety standards (e.g. AIS 038/AIS 156 / IEC 61851). EVION chargers must only be plugged into compatible, undamaged vehicle inlets. Drivers are responsible for relocating vehicles promptly upon session completion to prevent overstay bay idle fees.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#000000]">3. Tariffs & Billing</h2>
          <p>
            Charging fees are calculated based on kWh dispensed and active session duration as displayed in real-time on the station touch screen and in the EVION App. Applicable government taxes and DISCOM electricity tariffs are included transparently.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#000000]">4. Commercial Host & Fleet Partners</h2>
          <p>
            Commercial property hosts and fleet depot operators are governed by their respective Enterprise Master Service Agreements (MSA) and Service Level Agreements (SLA).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#000000]">5. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India, with exclusive jurisdiction in Bengaluru, Karnataka.
          </p>
        </section>
      </div>
    </div>
  );
}
