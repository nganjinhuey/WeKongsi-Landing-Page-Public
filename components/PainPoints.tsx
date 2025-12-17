import React, { useEffect, useState, useRef } from 'react';
import Section from './Section';
import { PAIN_POINTS } from '../constants';
import Button from './Button';
import { ArrowRight, DollarSign, Search, Users, Hand } from 'lucide-react';

const PainPoints: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToJoin = () => {
    document.getElementById('join-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Chart configuration
  const size = 400; 
  const stroke = 60; 
  const center = size / 2;
  const r = (size - stroke) / 2 - 10;
  const circ = 2 * Math.PI * r;

  return (
    <Section className="relative bg-gradient-to-b from-slate-50 via-teal-50/40 to-white overflow-hidden" ref={sectionRef} id="pain-points">
      
      {/* Inject Custom Keyframes for Floating Animation */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float { 
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-float-label { animation: float 4s ease-in-out infinite; }
      `}</style>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-100/50 rounded-full blur-[80px] mix-blend-multiply animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-100/50 rounded-full blur-[80px] mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-purple-50/60 rounded-full blur-[60px] mix-blend-multiply"></div>
      </div>

      {/* 1. Main Section Title: 78% Unprotected - Z-INDEX INCREASED TO 30 */}
      <div className="text-center mb-12 relative z-30">
        <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-6 leading-tight">
            <span className="text-4xl md:text-6xl text-brand-navy mr-2">78%</span> 
            of Malaysians are <br className="md:hidden" /> <span className="text-red-600">UNPROTECTED</span>
        </h2>
        
        <div className="inline-flex items-center bg-white border border-red-100 rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-shadow">
            <span className="text-base font-bold text-red-600 mr-2">Are you one of them?</span>
            <Hand className="w-5 h-5 text-red-500 rotate-90 animate-bounce" />
        </div>
      </div>

      {/* 2. Chart Area (Centered Top) - Z-INDEX 10 (Lower than Title) */}
      <div className="flex justify-center mb-16 relative z-10">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                
                 {/* Radiant Multi-Layer Glow Effects - DIMMED OPACITY */}
                 
                 {/* 1. Large Outer Aura (Slow Rotate) - Slowed to 30s */}
                 <div className="absolute inset-[-50%] rounded-full animate-[spin_30s_linear_infinite] pointer-events-none opacity-20">
                    <div className="w-full h-full rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,theme(colors.teal.200)_120deg,transparent_240deg)] blur-[70px]"></div>
                 </div>

                 {/* 2. Medium Brighter Shine (Reverse Rotate) - Slowed to 25s */}
                 <div className="absolute inset-[-25%] rounded-full animate-[spin_25s_linear_infinite_reverse] pointer-events-none opacity-30">
                    <div className="w-full h-full rounded-full bg-gradient-to-tr from-transparent via-cyan-100 to-transparent blur-3xl"></div>
                 </div>

                 {/* 3. Intense Core Glow (Pulse) - Opacity/Intensity reduced */}
                 <div className="absolute inset-[-5%] rounded-full bg-white/20 blur-3xl animate-pulse pointer-events-none"></div>

                {/* SVG Content */}
                 <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full drop-shadow-2xl overflow-visible relative z-10" role="img" aria-label="Pie chart showing 78% of Malaysians are unprotected">
                    <defs>
                        <filter id="shadow-light" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        
                        {/* Gradient opacity reduced */}
                        <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                             <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                             <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
                             <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                        </linearGradient>
                    </defs>

                    {/* 
                       SEPARATED SECTIONS: Each section (Shadow + Data) is wrapped in a Group <g> 
                       with its own floating animation class.
                    */}

                    {/* Section 1: Pink (42%) */}
                    <g className="animate-float-slow">
                        {/* Shadow */}
                        <circle cx={center} cy={center} r={r} fill="none" stroke="#be185d" strokeWidth={stroke} opacity="0.2"
                            strokeDasharray={`${circ * 0.42} ${circ}`} 
                            strokeLinecap="round"
                            transform={`translate(0, 6) rotate(-90 ${center} ${center})`} 
                        />
                        {/* Data */}
                        <circle cx={center} cy={center} r={r} fill="none" stroke="#ec4899" strokeWidth={stroke} filter="url(#shadow-light)"
                            strokeDasharray={`${circ * 0.42} ${circ}`} 
                            strokeDashoffset={isVisible ? 0 : circ * 0.42} 
                            strokeLinecap="round" 
                            transform={`rotate(-90 ${center} ${center})`} 
                            className="transition-all duration-[1500ms] ease-out delay-100" 
                        />
                    </g>

                    {/* Section 2: Purple (36%) */}
                    <g className="animate-float-medium" style={{ animationDelay: '1s' }}>
                        {/* Shadow */}
                        <circle cx={center} cy={center} r={r} fill="none" stroke="#6d28d9" strokeWidth={stroke} opacity="0.2"
                            strokeDasharray={`${circ * 0.36} ${circ}`} 
                            strokeLinecap="round"
                            transform={`translate(0, 6) rotate(${-90 + 360*0.42} ${center} ${center})`} 
                        />
                        {/* Data */}
                        <circle cx={center} cy={center} r={r} fill="none" stroke="#8b5cf6" strokeWidth={stroke} filter="url(#shadow-light)"
                            strokeDasharray={`${circ * 0.36} ${circ}`} 
                            strokeDashoffset={isVisible ? 0 : circ * 0.36} 
                            strokeLinecap="round" 
                            transform={`rotate(${-90 + 360*0.42} ${center} ${center})`} 
                            className="transition-all duration-[1500ms] ease-out delay-500" 
                        />
                    </g>

                    {/* Section 3: Green (22%) */}
                    <g className="animate-float-fast" style={{ animationDelay: '2s' }}>
                        {/* Shadow */}
                        <circle cx={center} cy={center} r={r} fill="none" stroke="#15803d" strokeWidth={stroke} opacity="0.2"
                            strokeDasharray={`${circ * 0.22} ${circ}`} 
                            strokeLinecap="round"
                            transform={`translate(0, 6) rotate(${-90 + 360*0.78} ${center} ${center})`} 
                        />
                        {/* Data */}
                        <circle cx={center} cy={center} r={r} fill="none" stroke="#22c55e" strokeWidth={stroke} filter="url(#shadow-light)"
                            strokeDasharray={`${circ * 0.22} ${circ}`} 
                            strokeDashoffset={isVisible ? 0 : circ * 0.22} 
                            strokeLinecap="round" 
                            transform={`rotate(${-90 + 360*0.78} ${center} ${center})`} 
                            className="transition-all duration-[1500ms] ease-out delay-700" 
                        />
                    </g>
                    
                    {/* Overlay Rotating Ring Shine - Brighter & Faster - DIMMED OPACITY - SLOWED to 15s */}
                    <circle cx={center} cy={center} r={r} fill="none" stroke="url(#shineGradient)" strokeWidth={stroke} strokeDasharray={`${circ * 0.25} ${circ * 0.75}`} className="animate-[spin_15s_linear_infinite] origin-center opacity-30 mix-blend-overlay" />

                </svg>
                
                {/* Labels - With Colored Cards & No Lines */}
                
                {/* Pink Label (Right) */}
                <div className={`absolute top-[12%] -right-[15%] md:-right-[25%] flex items-center gap-3 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} bg-pink-50 p-4 rounded-2xl shadow-lg border border-pink-100/50 backdrop-blur-sm z-20 animate-float-label`}>
                    <div className="flex flex-col items-end text-right">
                        <span className="text-3xl md:text-4xl font-extrabold text-brand-navy drop-shadow-sm">42%</span>
                        <span className="text-xs md:text-sm font-bold text-pink-700 whitespace-nowrap">Unable to afford</span>
                    </div>
                    <div className="relative">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md text-pink-500 z-10 relative border border-pink-50">
                            <DollarSign className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                        </div>
                    </div>
                </div>

                 {/* Purple Label (Bottom Left) */}
                 <div className={`absolute bottom-[-10%] -left-[10%] md:-left-[20%] flex flex-col-reverse items-center gap-2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} bg-violet-50 p-4 rounded-2xl shadow-lg border border-violet-100/50 backdrop-blur-sm z-20 animate-float-label`} style={{ animationDelay: '1.5s' }}>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-3xl md:text-4xl font-extrabold text-brand-navy drop-shadow-sm">36%</span>
                        <span className="text-xs md:text-sm font-bold text-violet-700 whitespace-nowrap">Think it's unnecessary</span>
                    </div>
                    <div className="relative">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md text-violet-500 z-10 relative border border-violet-50">
                            <Search className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                        </div>
                    </div>
                </div>

                 {/* Green Label (Top Left) */}
                 <div className={`absolute top-[8%] -left-[20%] md:-left-[30%] flex items-center flex-row-reverse gap-3 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'} bg-emerald-50 p-4 rounded-2xl shadow-lg border border-emerald-100/50 backdrop-blur-sm z-20 animate-float-label`} style={{ animationDelay: '2.5s' }}>
                    <div className="flex flex-col items-start text-left">
                        <span className="text-3xl md:text-4xl font-extrabold text-brand-navy drop-shadow-sm">22%</span>
                        <span className="text-xs md:text-sm font-bold text-emerald-700 whitespace-nowrap">Have insurance</span>
                    </div>
                    <div className="relative">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md text-emerald-500 z-10 relative border border-emerald-50">
                            <Users className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                        </div>
                    </div>
                </div>
            </div>
      </div>

      {/* 3. Cards Section (Bottom) */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Secondary Title (Scaled down, Left aligned) */}
        <div className="text-left mb-8 pl-2">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-navy leading-tight">
                 What Most People Overlook <br/> About Medical Protection
            </h3>
            <div className="w-16 h-1 bg-brand-teal mt-4 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {PAIN_POINTS.map((point, idx) => {
                const Icon = point.icon;
                return (
                    <div key={idx} className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-teal-100 hover:border-teal-300 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-start h-full transform hover:-translate-y-1">
                        <div className={`w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300 ring-1 ring-teal-100`}>
                            <Icon className={`w-6 h-6 text-teal-600 group-hover:text-teal-700 transition-colors`} />
                        </div>
                        <h3 className="text-lg font-bold text-brand-navy mb-2 leading-tight">{point.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{point.description}</p>
                    </div>
                );
            })}
        </div>
        
        {/* CTA */}
        <div className="text-center">
             <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-all px-8 py-3 bg-white/50 backdrop-blur-sm" onClick={scrollToJoin}>
                    <ArrowRight className="w-4 h-4 mr-2" /> Start Your Protection Plan Now
             </Button>
        </div>
      </div>

    </Section>
  );
};

export default PainPoints;