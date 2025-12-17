import React from 'react';

const HospitalNetwork: React.FC = () => {
  
  // Logic to generate 12 items referencing image4.jpg to image15.jpg
  const NETWORK_ITEMS = Array(12).fill(null).map((_, i) => ({
    id: i,
    label: "Medical Partner",
    // i=0 -> image4.jpg, i=11 -> image15.jpg
    image: `image${i + 4}.jpg`
  }));

  // Duplicate list to ensure seamless infinite scrolling loop
  const SCROLL_ITEMS = [...NETWORK_ITEMS, ...NETWORK_ITEMS];

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
        {/* Marquee Container */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {SCROLL_ITEMS.map((item, index) => (
            <div key={index} className="mx-4">
              <div className="w-64 h-32 bg-white rounded-xl shadow-sm flex flex-col items-center justify-center p-4 gap-2 transition-all duration-300 hover:border-brand-blue/50 hover:bg-brand-surface-blue group cursor-default select-none">
                <img 
                    src={item.image} 
                    alt={item.label} 
                    className="h-16 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalNetwork;