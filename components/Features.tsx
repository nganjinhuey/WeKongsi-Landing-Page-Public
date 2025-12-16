import React from 'react';
import Section from './Section';
import { FEATURES } from '../constants';
import Button from './Button';
import { ArrowRight, Sparkles, Image as ImageIcon } from 'lucide-react';

const Features: React.FC = () => {
  const scrollToJoin = () => {
    document.getElementById('join-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-hidden bg-white">
        
        {/* Intro / Who We Are Section - Soft Blue & Cyan Gradient */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-surface-blue via-cyan-100 to-sky-200 rounded-3xl my-8 mx-4 md:mx-auto relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                    <div className="inline-flex items-center px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm border border-brand-blue/10">
                        <Sparkles className="w-4 h-4 text-brand-navy mr-2" />
                        <span className="text-xs font-bold tracking-wider uppercase text-brand-navy">Who We Are</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-8 leading-tight">
                        Introducing <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-blue to-brand-teal animate-gradient">We Kongsi</span>
                    </h2>

                    {/* Special Bubble - Cool Tone Gradient (Brand Matches) */}
                    <div className="inline-block w-full">
                         <div className="bg-gradient-to-r from-cyan-50 via-blue-50 to-cyan-50 p-6 rounded-full shadow-lg border border-cyan-200 mb-8 text-center relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 group">
                             {/* Decorative shine */}
                             <div className="absolute top-0 right-0 w-full h-full bg-white/40 skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                            
                            <h3 className="text-lg md:text-xl font-extrabold text-brand-navy uppercase tracking-wide leading-snug relative z-10">
                                A Community Based Medical Cost-Sharing Program
                            </h3>
                        </div>
                    </div>

                    <p className="text-slate-700 text-lg leading-relaxed mb-8 font-medium">
                        We are a community dedicated to ensuring transparent, affordable, and fair healthcare for everyone. We believe that by coming together, we can protect each other without the burden of expensive medical premiums.
                    </p>

                    <Button variant="primary" className="px-8 shadow-brand-navy/20 bg-brand-navy hover:bg-brand-navy-light text-white border-none" onClick={scrollToJoin}>
                        Talk to Us to Understand the Benefits <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>

                {/* Right Image Placeholder */}
                <div className="w-full lg:w-1/2 relative">
                    <div className="rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white/50 min-h-[400px] bg-slate-200 flex items-center justify-center group">
                        <div className="flex flex-col items-center justify-center text-slate-400">
                             <ImageIcon className="w-20 h-20 mb-4 opacity-50 group-hover:scale-110 transition-transform duration-500" />
                             <span className="font-bold text-lg uppercase tracking-wider">Image Placeholder</span>
                        </div>

                        {/* Overlay Card */}
                        <div className="absolute bottom-6 left-6 max-w-xs bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-xl text-brand-navy border border-white/50">
                            <div className="text-3xl font-bold text-brand-blue mb-1">100%</div>
                            <div className="text-sm font-semibold opacity-80">Committed to Transparency & Care</div>
                        </div>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/30 rounded-full blur-3xl -z-10 mix-blend-overlay"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
                </div>
            </div>
        </section>

        {/* Features Grid - Bright, but soft Light Cyan Background */}
        <Section 
            title="Why Malaysians Trust We Kongsi" 
            subtitle="Built on transparency, fairness, and shared responsibility."
            id="benefits" 
            className="bg-cyan-50 relative"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {FEATURES.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-cyan-100 group relative overflow-hidden">
                            {/* Hover Reveal Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300 shadow-sm text-brand-blue border border-cyan-100">
                                    <Icon className="w-7 h-7 group-hover:scale-110 transition-transform duration-300 text-cyan-600" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:translate-x-1 transition-transform">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700">{feature.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    </div>
  );
};

export default Features;