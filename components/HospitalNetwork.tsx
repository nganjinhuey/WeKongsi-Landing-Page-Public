import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

const PLACEHOLDER_LOGOS = Array(12).fill(null).map((_, i) => ({
  id: i,
  label: "Medical Partner",
  subLabel: "Logo Placeholder"
}));

const HospitalNetwork: React.FC = () => {
  // Duplicate list to ensure seamless infinite scrolling loop
  const SCROLL_ITEMS = [...PLACEHOLDER_LOGOS, ...PLACEHOLDER_LOGOS];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">Our Trusted Hospital & Clinic Network</h2>
        <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
            Part of a wide medical network connecting you to quality care nationwide.
        </p>
        <div className="w-20 h-1 mx-auto mt-5 rounded-full bg-brand-teal"></div>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks for fade effect on edges */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Container */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {SCROLL_ITEMS.map((item, index) => (
            <div key={index} className="mx-4">
              <div className="w-64 h-32 bg-white rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-4 gap-2 opacity-60 hover:opacity-100 transition-all duration-300 hover:border-brand-blue/50 hover:bg-brand-surface-blue group cursor-default select-none">
                <div className="p-3 bg-slate-100 rounded-full group-hover:bg-white transition-colors">
                    <ImageIcon className="w-8 h-8 text-slate-400 group-hover:text-brand-blue" />
                </div>
                <div className="text-center">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-brand-navy">{item.label}</div>
                    <div className="text-[10px] text-slate-300 font-medium">{item.subLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalNetwork;