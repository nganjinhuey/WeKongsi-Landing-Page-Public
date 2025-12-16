import React from 'react';
import Section from './Section';
import { COVERAGE_ITEMS, CO_PAYMENT_CONDITIONS, CO_PAYMENT_COVERED, CO_PAYMENT_NOT_COVERED } from '../constants';
import { Check, X, Calendar, Banknote, ShieldCheck, Image as ImageIcon } from 'lucide-react';

const Coverage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Covered Items Grid - Rich Mid-Tone Blue Gradient */}
      <Section 
        title="What's Included in Your Coverage"
        subtitle="Comprehensive protection for peace of mind when you need it most."
        className="bg-gradient-to-br from-blue-100 via-sky-200 to-blue-200"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {COVERAGE_ITEMS.map((item, idx) => {
             const Icon = item.icon;
             return (
              <div key={idx} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full justify-center border border-blue-200/60 group relative overflow-hidden cursor-pointer">
                {/* Vibrant Darker Shade Teal Gradient Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-cyan-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                    <div className="mb-4 text-brand-blue group-hover:text-white transition-colors duration-300 flex justify-center">
                    <Icon size={36} strokeWidth={1.5} />
                    </div>
                    <span className="text-sm md:text-base font-semibold text-brand-navy group-hover:text-white leading-tight transition-colors duration-300">
                        {item.name}
                    </span>
                </div>
              </div>
             );
          })}
        </div>
      </Section>

      {/* RM10 Benefit Section - Fresh Mint/Teal Theme */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden relative">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0d9488 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 opacity-80 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 opacity-80 mix-blend-multiply"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Top Row: Content Left, Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16">
                
                {/* Left: Text Content & Bubbles */}
                <div className="lg:w-8/12 text-left">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-teal text-brand-navy text-xs font-bold uppercase tracking-wider mb-6 shadow-sm border-2 border-white">
                        <ShieldCheck className="w-3 h-3 mr-1" /> Exclusive Perk
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight">
                        Malaysia's First <span className="inline-block text-emerald-600 animate-[bounce_3s_infinite] origin-bottom">RM10</span> <br/>
                        Co-Payment Clinic Benefit <br/>
                        <span className="text-xl md:text-2xl text-slate-500 font-semibold block mt-2 tracking-tight">(Conditional Outpatient Benefit, COB)</span>
                    </h2>
                    
                    <p className="text-lg text-slate-700 mb-8 max-w-xl leading-relaxed">
                        A value-added perk for early outpatient care. This <strong>Conditional Outpatient Benefit (COB)</strong> allows you to get treatment for common illnesses at just RM10 per clinic visit.
                    </p>

                    {/* Feature Bubbles - Clean Light Theme */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-teal-200/50 shadow-md hover:shadow-lg transition-all hover:bg-white">
                            <div className="bg-teal-100 p-3 rounded-full mr-4 text-teal-700">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Frequency</div>
                                <div className="text-brand-navy font-bold text-lg leading-tight">Up to 2 visits / month</div>
                                <div className="text-xs text-slate-400 mt-0.5">Max 6 visits per year</div>
                            </div>
                        </div>

                        <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-teal-200/50 shadow-md hover:shadow-lg transition-all hover:bg-white">
                            <div className="bg-teal-100 p-3 rounded-full mr-4 text-teal-700">
                                <Banknote className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Limit</div>
                                <div className="text-brand-navy font-bold text-lg leading-tight">Claim RM300 / visit</div>
                                <div className="text-xs text-slate-400 mt-0.5">Medication & Consultation</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Image Placeholder */}
                <div className="lg:w-4/12 relative flex justify-center lg:justify-end">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-md aspect-[16/10] bg-teal-50 flex items-center justify-center group">
                        <div className="flex flex-col items-center justify-center text-slate-400">
                             <ImageIcon className="w-16 h-16 mb-2 opacity-50 group-hover:scale-110 transition-transform duration-500 text-teal-300" />
                             <span className="font-bold text-sm uppercase tracking-wider text-teal-300">Image Placeholder</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-teal-100/40 via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>

            {/* Bottom Row: 3 Cards Grid - Yellow, Green, Red */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Card 1: Eligible Conditions (Soft Yellow) */}
                <div className="bg-amber-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col border border-amber-100">
                    <div className="p-5 bg-amber-100/50 border-b border-amber-200 flex items-center">
                        <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center mr-3 text-amber-700 font-bold">
                            <Check className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-amber-900 text-lg">Eligible Conditions</h3>
                    </div>
                    <div className="p-6 flex-1">
                        <ul className="space-y-3">
                            {CO_PAYMENT_CONDITIONS.map((item, i) => (
                                <li key={i} className="flex items-start text-amber-900 text-sm font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 mr-2.5 flex-shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-4 border-t border-amber-200">
                            <p className="text-sm text-amber-800 font-bold bg-amber-200/50 px-3 py-2 rounded-lg inline-block">
                                * Total 17 conditions eligible under COB.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2: Covered Items (Green) */}
                <div className="bg-emerald-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col border border-emerald-100 relative z-10">
                    <div className="p-5 bg-emerald-100/50 border-b border-emerald-200 flex items-center">
                        <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center mr-3 text-emerald-700 font-bold">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-emerald-900 text-lg">Covered Items</h3>
                    </div>
                    <div className="p-6 flex-1">
                        <ul className="space-y-3">
                            {CO_PAYMENT_COVERED.map((item, i) => (
                                <li key={i} className="flex items-start text-emerald-900 text-sm font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 mr-2.5 flex-shrink-0"></span>
                                    <span className="leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Card 3: Non-Covered Items (Red) */}
                <div className="bg-red-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col border border-red-100">
                    <div className="p-5 bg-red-100/50 border-b border-red-200 flex items-center">
                        <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center mr-3 text-red-600 font-bold">
                            <X className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-red-900 text-lg">Not Covered Items</h3>
                    </div>
                    <div className="p-6 flex-1">
                        <ul className="space-y-3">
                            {CO_PAYMENT_NOT_COVERED.map((item, i) => (
                                <li key={i} className="flex items-start text-red-800 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 mr-2.5 flex-shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
      </section>
    </div>
  );
};

export default Coverage;