import React, { useEffect, useState, useRef } from 'react';
import { DollarSign, Search, Users, Hand } from 'lucide-react';

const RealityCheck: React.FC = () => {
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
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Chart configuration
  const size = 400; // viewBox size
  const stroke = 70;
  const center = size / 2;
  const r = (size - stroke) / 2 - 10; // Radius
  const circ = 2 * Math.PI * r;

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-teal-400 to-cyan-600 relative overflow-hidden text-white font-sans">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Headlines */}
            <div className="text-center mb-12 md:mb-20">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight drop-shadow-sm max-w-4xl mx-auto">
                    <span className="relative inline-block mr-3">
                        <span className="relative z-10 text-white">78%</span>
                        {/* Red Underline */}
                        <svg className="absolute -bottom-2 left-0 w-full h-3 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                             <path d="M0 5 Q 50 10 100 5" stroke="#dc2626" strokeWidth="8" fill="none" className="opacity-90" />
                        </svg>
                    </span>
                    of the Malaysia population is UNPROTECTED
                </h2>
                
                <div className="flex items-center justify-center">
                    <div className="bg-white rounded-full px-8 py-3 shadow-xl transform hover:scale-105 transition-transform duration-300 flex items-center gap-4 border-2 border-red-100">
                        <h3 className="text-xl md:text-2xl font-bold text-red-600">
                            Are you one of them?
                        </h3>
                        {/* Pointing Finger Icon */}
                        <Hand className="w-8 h-8 text-red-500 fill-red-100 rotate-90 animate-[bounce_1s_infinite]" />
                    </div>
                </div>
            </div>

            {/* Infographic Chart Area */}
            <div className="relative h-[400px] md:h-[500px] w-full flex justify-center items-center">
                
                {/* 3D SVG Chart Container */}
                <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">
                    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full drop-shadow-2xl overflow-visible">
                        <defs>
                            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        {/* --- Shadow Layer (Simulating 3D Depth) --- */}
                        <g transform="translate(0, 8)" opacity="0.4">
                             {/* Pink Shadow */}
                             <circle cx={center} cy={center} r={r} fill="none" stroke="#be185d" strokeWidth={stroke} 
                                strokeDasharray={`${circ * 0.42} ${circ}`} 
                                transform={`rotate(-90 ${center} ${center})`}
                             />
                             {/* Purple Shadow */}
                             <circle cx={center} cy={center} r={r} fill="none" stroke="#6d28d9" strokeWidth={stroke}
                                strokeDasharray={`${circ * 0.36} ${circ}`}
                                transform={`rotate(${-90 + 360*0.42} ${center} ${center})`}
                             />
                             {/* Green Shadow */}
                             <circle cx={center} cy={center} r={r} fill="none" stroke="#15803d" strokeWidth={stroke}
                                strokeDasharray={`${circ * 0.22} ${circ}`}
                                transform={`rotate(${-90 + 360*0.78} ${center} ${center})`}
                             />
                        </g>

                        {/* --- Main Data Layer --- */}
                        <g filter="url(#shadow)">
                             {/* Segment 1: Pink (42%) - Unable to afford */}
                             <circle cx={center} cy={center} r={r} fill="none" stroke="#ec4899" strokeWidth={stroke}
                                strokeDasharray={`${circ * 0.42} ${circ}`}
                                strokeDashoffset={isVisible ? 0 : circ * 0.42}
                                strokeLinecap="round"
                                transform={`rotate(-90 ${center} ${center})`}
                                className="transition-all duration-[1500ms] ease-out delay-100"
                             />
                             
                             {/* Segment 2: Purple (36%) - Unnecessary */}
                             <circle cx={center} cy={center} r={r} fill="none" stroke="#8b5cf6" strokeWidth={stroke}
                                strokeDasharray={`${circ * 0.36} ${circ}`}
                                strokeDashoffset={isVisible ? 0 : circ * 0.36}
                                strokeLinecap="round"
                                transform={`rotate(${-90 + 360*0.42} ${center} ${center})`}
                                className="transition-all duration-[1500ms] ease-out delay-500"
                             />

                             {/* Segment 3: Green (22%) - Insured */}
                             <circle cx={center} cy={center} r={r} fill="none" stroke="#22c55e" strokeWidth={stroke}
                                strokeDasharray={`${circ * 0.22} ${circ}`}
                                strokeDashoffset={isVisible ? 0 : circ * 0.22}
                                strokeLinecap="round"
                                transform={`rotate(${-90 + 360*0.78} ${center} ${center})`}
                                className="transition-all duration-[1500ms] ease-out delay-700"
                             />
                        </g>
                    </svg>

                    {/* --- Labels & Icons (Floating Elements) --- */}
                    
                    {/* 1. Pink Label (Right) */}
                    <div className={`absolute top-[10%] -right-[10%] md:-right-[25%] flex items-center gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                         <div className="flex flex-col items-end text-right">
                             <span className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">42%</span>
                             <span className="text-sm md:text-base font-bold text-pink-900 bg-pink-100 px-3 py-1 rounded shadow-lg whitespace-nowrap">Unable to afford</span>
                         </div>
                         <div className="relative">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl text-pink-500 animate-[float_4s_ease-in-out_infinite] z-10 relative">
                                <DollarSign className="w-7 h-7" strokeWidth={2.5} />
                            </div>
                            {/* Connecting Line */}
                            <div className="absolute top-1/2 right-full w-12 h-0.5 bg-white/60 -translate-y-1/2 origin-right rotate-12"></div>
                         </div>
                    </div>

                    {/* 2. Purple Label (Bottom Left) */}
                    <div className={`absolute bottom-[-5%] left-[5%] md:-left-[15%] flex flex-col-reverse items-center gap-3 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                         <div className="flex flex-col items-center text-center">
                             <span className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">36%</span>
                             <span className="text-sm md:text-base font-bold text-violet-900 bg-violet-100 px-3 py-1 rounded shadow-lg whitespace-nowrap">Feel it is unnecessary</span>
                         </div>
                         <div className="relative">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl text-violet-500 animate-[float_5s_ease-in-out_infinite] z-10 relative">
                                <Search className="w-7 h-7" strokeWidth={2.5} />
                            </div>
                            {/* Connecting Line */}
                            <div className="absolute bottom-full left-1/2 h-12 w-0.5 bg-white/60 -translate-x-1/2"></div>
                         </div>
                    </div>

                    {/* 3. Green Label (Top Left) */}
                    <div className={`absolute top-[5%] -left-[10%] md:-left-[25%] flex items-center flex-row-reverse gap-4 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                         <div className="flex flex-col items-start text-left">
                             <span className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">22%</span>
                             <span className="text-sm md:text-base font-bold text-green-900 bg-green-100 px-3 py-1 rounded shadow-lg whitespace-nowrap">Have medical insurance</span>
                         </div>
                         <div className="relative">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl text-green-500 animate-[float_6s_ease-in-out_infinite] z-10 relative">
                                <Users className="w-7 h-7" strokeWidth={2.5} />
                            </div>
                            {/* Connecting Line */}
                            <div className="absolute top-1/2 left-full w-12 h-0.5 bg-white/60 -translate-y-1/2 origin-left -rotate-12"></div>
                         </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  );
};

export default RealityCheck;