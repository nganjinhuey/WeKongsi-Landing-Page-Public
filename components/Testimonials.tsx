import React, { useEffect, useRef, useState } from 'react';
import { Quote, Play, FileText, Star, Video, Image as ImageIcon } from 'lucide-react';

const TESTIMONIAL_DATA = [
  // --- STATIC CARDS ---
  {
    id: 1,
    type: 'static',
    name: "Muhammad Hanif",
    role: "Kelantan",
    quote: "My RM75 clinic bill dropped to just RM10! That's the power of sharing—real financial relief every time I visit the doctor.",
    hasReceipt: true
  },
  {
    id: 2,
    type: 'static',
    name: "Xin Min",
    role: "19, Perak",
    quote: "The RM15,000 surgery I desperately needed was made possible by WeKongsi. It lifted a massive financial burden off my parents—the community really had my back.",
    hasReceipt: false
  },
  {
    id: 3,
    type: 'static',
    name: "Honey",
    role: "27, Perak",
    quote: "My RM45,000 surgery? Fully covered! It was total peace of mind for paying just RM50 a month, which is a fraction of my old insurance premium.",
    hasReceipt: false
  },
  {
    id: 4,
    type: 'static',
    name: "Niena",
    role: "26, Johor",
    quote: "Facing a RM39,000 accident bill was terrifying, but WeKongsi handled everything so smoothly. Zero stress, total peace of mind.",
    hasReceipt: false
  },
  // --- VIDEO CARDS ---
  {
    id: 5,
    type: 'video',
    name: "Syafiq",
    role: "29, Kelantan",
    quote: "I switched from expensive insurance, and when I needed it, my RM42,000 ankle surgery was fully supported. WeKongsi gave me better value and total support."
  },
  {
    id: 6,
    type: 'video',
    name: "Ainul & Abdul",
    role: "35 & 42",
    quote: "We were skeptical at first, but when our child was admitted, the Guarantee Letter came through fast. Our doubts turned into complete confidence!"
  },
  {
    id: 7,
    type: 'video',
    name: "Faiz",
    role: "35, Melaka",
    quote: "I paid a RM2,000 deposit, but the GL came so quickly, WeKongsi refunded it all! That's what true support during an emergency looks like."
  },
  {
    id: 8,
    type: 'video',
    name: "Erma Marzuana",
    role: "Seremban",
    quote: "My child's RM8,000 treatment only cost us RM27 that month. It's incredible to get that level of protection for such a low shared cost."
  }
];

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % TESTIMONIAL_DATA.length);
    }, 5000); // 5 seconds delay before shifting

    return () => clearInterval(interval);
  }, []);

  // Programmatic scrolling when activeIndex changes
  useEffect(() => {
    if (scrollRef.current) {
        // Calculate the position of the active card
        const cardElement = scrollRef.current.children[activeIndex] as HTMLElement;
        if (cardElement) {
             // Center the card in the container
            const containerWidth = scrollRef.current.offsetWidth;
            const cardWidth = cardElement.offsetWidth;
            const cardLeft = cardElement.offsetLeft;
            
            // Calculate scroll position to center the card
            const scrollTo = cardLeft - (containerWidth / 2) + (cardWidth / 2);

            scrollRef.current.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            });
        }
    }
  }, [activeIndex]);

  const handleDotClick = (index: number) => {
      setActiveIndex(index);
  };

  return (
    <section className="py-16 bg-blue-100 relative overflow-hidden">
      {/* Background - Soft Blue Theme with gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[100px] opacity-40 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-200 rounded-full blur-[100px] opacity-40 pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">Stories of Trust & Relief</h2>
        <p className="text-slate-600 mt-2 text-lg font-medium">Real stories from our community members who found peace of mind.</p>
        <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-brand-navy/20"></div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full">
        
        {/* Gradient Fade Masks to focus attention on center - matched to bg-blue-100 */}
        <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-blue-100 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-blue-100 to-transparent z-20 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div 
            ref={scrollRef}
            className="flex overflow-x-auto items-center py-6 px-[50vw] no-scrollbar"
            style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none'
            }}
        >
          {TESTIMONIAL_DATA.map((item, index) => (
            <div 
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`mx-4 inline-block w-[85vw] md:w-[600px] flex-shrink-0 bg-white rounded-2xl shadow-lg border border-blue-50 p-6 md:p-8 whitespace-normal relative transition-all duration-500 cursor-pointer
                ${index === activeIndex ? 'scale-100 opacity-100 ring-4 ring-brand-teal/30 shadow-2xl' : 'scale-95 opacity-50 hover:opacity-80 grayscale-[0.5] hover:grayscale-0'}
              `}
            >
              {/* --- MEDIA PLACEHOLDERS --- */}
              
              {/* Video Placeholder */}
              {item.type === 'video' && (
                <div className="mb-6 w-full aspect-video bg-slate-100 rounded-xl overflow-hidden relative border border-slate-200 shadow-inner group/video flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center text-slate-300 absolute inset-0">
                        <Video size={48} className="mb-2 opacity-50" />
                        <span className="text-xs font-bold uppercase tracking-wider">Video Placeholder</span>
                    </div>
                    {/* YouTube Style Icon */}
                    <div className="relative z-10 w-16 h-11 bg-red-600 rounded-xl flex items-center justify-center shadow-xl hover:bg-red-700 transition-colors cursor-pointer">
                        <Play size={20} className="text-white fill-white ml-0.5" />
                    </div>
                </div>
              )}

              {/* Static Image Placeholder */}
              {item.type === 'static' && (
                <div className="mb-6 w-full aspect-video bg-slate-100 rounded-xl overflow-hidden relative border border-slate-200 shadow-inner flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center text-slate-300">
                        <ImageIcon size={48} className="mb-2 opacity-50" />
                        <span className="text-xs font-bold uppercase tracking-wider">Image Placeholder</span>
                    </div>
                </div>
              )}

              {/* --- HEADER --- */}
              <div className="flex justify-between items-start mb-4">
                <div className="bg-brand-surface-teal p-2 rounded-lg text-brand-teal">
                  <Quote size={20} fill="currentColor" />
                </div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                </div>
              </div>

              {/* --- CONTENT: QUOTE --- */}
              <p className="text-slate-700 italic leading-relaxed text-sm md:text-base mb-6 font-medium">
                "{item.quote}"
              </p>

              {/* --- RECEIPT (Static Only - Specific Card) --- */}
              {item.hasReceipt && (
                  <div className="mb-6">
                      <div className="flex items-center gap-3 bg-blue-50/80 p-3 rounded-xl border border-blue-100 border-dashed">
                          <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-200">
                              <FileText size={20} className="text-brand-blue" />
                          </div>
                          <div>
                              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Official Receipt</div>
                              <div className="text-sm font-bold text-brand-navy">Paid: <span className="text-brand-blue">RM10.00</span></div>
                          </div>
                      </div>
                  </div>
              )}

              {/* --- FOOTER: AUTHOR INFO (No Icon) --- */}
              <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-bold text-brand-navy text-base">{item.name}</h4>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wide">{item.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIAL_DATA.map((_, idx) => (
                <button 
                    key={idx} 
                    onClick={() => handleDotClick(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-brand-navy w-8' : 'bg-slate-300 w-2 hover:bg-slate-400'}`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;