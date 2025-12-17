import React from 'react';
import Section from './Section';
import { ShieldCheck, Award } from 'lucide-react';

const Partners: React.FC = () => {
  const PARTNERS_BASE = [
    'image17.jpg',
    'image18.jpg',
    'image19.jpg',
    'image20.jpg',
    'image21.jpg'
  ];
  // Repeat the partners list to ensure it covers the width of any screen before duplication
  const PARTNERS_SET = [...PARTNERS_BASE, ...PARTNERS_BASE, ...PARTNERS_BASE];

  return (
    <Section className="bg-slate-50 relative overflow-hidden">
      {/* Soft Color Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 opacity-60"></div>
      
      {/* Title Area */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Our Partners & Compliance</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-600 mt-4">Verified compliance and trusted collaborations for your peace of mind.</p>
        <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-brand-navy"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center max-w-6xl mx-auto relative z-10">
        
        {/* Left Column: Text & Partner Logos */}
        <div className="w-full lg:w-7/12 text-left">
            <div className="inline-flex items-center px-3 py-1 bg-white text-brand-teal rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-teal/20">
                <ShieldCheck className="w-3 h-3 mr-2" /> Trust & Safety
            </div>
            
            <h3 className="text-3xl font-bold text-brand-navy mb-2">Officially Shariah-Compliant</h3>
            <p className="text-lg text-brand-blue font-medium mb-6">Certified and Vetted by Afsha Shariah Advisory</p>
            
            <p className="text-slate-600 mb-10 leading-relaxed">
                We Kongsi’s commitment to fairness and ethical operations is independently verified. The entire We Kongsi program has been officially recognized as Shariah-compliant by the independent advisory body, Afsha Shariah Advisory. This certification assures every member that our medical cost-sharing operations are completely transparent, ethical, and align fully with Islamic principles. See the official certificate displayed on the right.
            </p>

            <div>
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2 inline-block">Trusted Technology & Compliance Partners</h4>
                
                {/* Scrolling Marquee Container */}
                <div className="w-full relative overflow-hidden">
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 items-center py-4">
                        {/* Original Set */}
                        {PARTNERS_SET.map((imgSrc, idx) => (
                            <div key={`set1-${idx}`} className="bg-white border border-slate-200 shadow-sm rounded-xl min-w-[120px] w-[120px] h-[70px] flex items-center justify-center hover:shadow-lg transition-all hover:border-brand-blue/30 relative overflow-hidden group cursor-pointer flex-shrink-0">
                                <div className="flex flex-col items-center z-10 p-2 w-full h-full">
                                    <img 
                                        src={imgSrc} 
                                        alt="Partner" 
                                        className="w-full h-full object-contain transition-all duration-300" 
                                    />
                                </div>
                            </div>
                        ))}
                        {/* Duplicate Set for Seamless Loop */}
                        {PARTNERS_SET.map((imgSrc, idx) => (
                            <div key={`set2-${idx}`} className="bg-white border border-slate-200 shadow-sm rounded-xl min-w-[120px] w-[120px] h-[70px] flex items-center justify-center hover:shadow-lg transition-all hover:border-brand-blue/30 relative overflow-hidden group cursor-pointer flex-shrink-0">
                                <div className="flex flex-col items-center z-10 p-2 w-full h-full">
                                    <img 
                                        src={imgSrc} 
                                        alt="Partner" 
                                        className="w-full h-full object-contain transition-all duration-300" 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Certificate Placeholder */}
        <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-xs">
                {/* Decorative border effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative bg-white p-6 rounded-xl border border-slate-100 shadow-xl">
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-md z-10 border-4 border-white">
                        <Award className="w-8 h-8 text-yellow-900" />
                    </div>
                    
                    {/* Placeholder Visual */}
                    <div className="aspect-[3/4] bg-white rounded-lg flex flex-col items-center justify-center text-center overflow-hidden shadow-sm group-hover:bg-slate-50 transition-colors">
                        <img 
                            src="image22.jpg" 
                            alt="Shariah Compliance Certificate" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                </div>
            </div>
        </div>

      </div>
    </Section>
  );
};

export default Partners;