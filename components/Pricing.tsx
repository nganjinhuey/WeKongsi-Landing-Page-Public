import React from 'react';
import Section from './Section';
import Button from './Button';
import { MEMBERSHIP_PLANS } from '../constants';
import { Check, X, Shield, Star, Crown, MessageCircle, ArrowRight, Info } from 'lucide-react';

const Pricing: React.FC = () => {
  
  const scrollToJoin = () => {
      document.getElementById('join-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Define significantly colored themes for membership cards
  const getCardStyle = (index: number, isHighlight: boolean) => {
    if (index === 0) { // Monthly - Blue
        return "border-blue-200 bg-blue-50 hover:bg-blue-100 hover:shadow-xl hover:-translate-y-1";
    } else if (index === 1) { // Quarterly - Teal
        return "border-teal-200 bg-teal-50 hover:bg-teal-100 hover:shadow-xl hover:-translate-y-1";
    } else { // Yearly - Premium Light with Yellow Glow
        return "border-2 border-yellow-400 bg-white text-slate-900 shadow-2xl shadow-yellow-200/50 transform scale-105 z-10 hover:shadow-yellow-400/40 relative";
    }
  };

  const getTextColor = (index: number) => {
      return "text-brand-navy";
  }

  const getPriceColor = (index: number) => {
      if (index === 1) return "text-teal-700";
      if (index === 2) return "text-yellow-500"; 
      return "text-brand-navy";
  }

  const getSubTextColor = (index: number) => {
      return "text-slate-600";
  }

  return (
    <Section 
        title="What Are You Paying For?" 
        subtitle="Simple, affordable plans with no hidden fees."
        id="pricing" 
        className="bg-slate-100"
    >
      
      {/* 1. Membership Fee Section */}
      <div className="mb-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-brand-navy">1. Membership Fee</h3>
            <p className="text-slate-500">Choose a plan that fits your budget.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MEMBERSHIP_PLANS.map((plan, idx) => (
                <div 
                    key={idx} 
                    className={`rounded-2xl p-8 transition-all duration-300 flex flex-col relative ${getCardStyle(idx, !!plan.highlight)}`}
                >
                    {plan.highlight && (
                        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                             <div className="bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-bl-xl rounded-tr-xl text-xs font-bold shadow-lg shadow-yellow-500/30 flex items-center uppercase tracking-wider">
                                <Crown size={14} className="mr-1.5"/> Best Value
                             </div>
                        </div>
                    )}
                    
                    <h3 className={`text-xl font-bold ${idx === 1 ? 'text-teal-800' : getTextColor(idx)}`}>{plan.name}</h3>
                    <div className="mt-4 flex items-baseline">
                        <span className={`text-4xl font-extrabold ${getPriceColor(idx)}`}>{plan.price}</span>
                        <span className={`ml-1 font-medium ${getSubTextColor(idx)}`}>{plan.period}</span>
                    </div>
                    <p className={`mt-4 text-sm flex-1 ${getSubTextColor(idx)} leading-relaxed`}>{plan.details}</p>
                    <div className="mt-8">
                        <Button 
                            variant={plan.highlight ? 'primary' : 'secondary'} 
                            className={`w-full rounded-xl ${plan.highlight ? 'bg-yellow-400 text-yellow-900 hover:bg-yellow-300 border-none shadow-lg shadow-yellow-200' : 'bg-white border-none shadow-sm hover:shadow-md'}`}
                            onClick={scrollToJoin}
                        >
                            Select {plan.name}
                        </Button>
                    </div>
                </div>
            ))}
          </div>
      </div>

      {/* 2. Sharing Account Payment Section */}
      <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-brand-navy">2. Sharing Account Payment</h3>
            <p className="text-slate-500">Choose between two packages.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Standard Package - Soft Blue */}
            <div className="bg-white rounded-3xl border border-blue-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group h-full">
                <div className="p-8 bg-blue-50/80 border-b border-blue-100">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                            <Shield className="w-8 h-8" />
                        </div>
                        <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase">Standard</span>
                    </div>
                    <h4 className="text-3xl font-bold text-blue-900">RM100</h4>
                    <p className="text-sm text-blue-600 mt-1 font-medium">Auto Top-Up when balance &lt; RM50</p>
                </div>
                <div className="p-8 flex-1 bg-white">
                    <ul className="space-y-4">
                        <li className="flex items-start text-sm text-slate-700">
                            <Check className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                            <span><strong>Hospitalization:</strong> Up to RM1,000,000/year</span>
                        </li>
                        <li className="flex items-start text-sm text-slate-700">
                            <Check className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                            <span><strong>Room & Board:</strong> RM150/day</span>
                        </li>
                        <li className="flex items-start text-sm text-slate-700">
                            <Check className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                            <span><strong>Ambulance:</strong> RM250</span>
                        </li>
                        <li className="flex items-start text-sm text-slate-700">
                            <Check className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                            <span><strong>Govt. Cash Allowance:</strong> RM50/day</span>
                        </li>
                        <li className="flex items-start text-sm text-slate-700">
                            <Check className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                            <span>Conditional Outpatient Benefits</span>
                        </li>
                        <li className="flex items-start text-sm text-slate-700">
                            <Check className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                            <span>Bereavement Benefit: RM10,000</span>
                        </li>
                         <li className="flex items-start text-sm text-slate-400">
                            <X className="w-5 h-5 text-slate-300 mr-3 shrink-0" />
                            <span className="line-through">Pre-Hospital Diagnostics</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Deluxe Package - Changed to CYAN theme */}
            <div className="bg-white rounded-3xl border border-cyan-200 overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col group relative h-full">
                <div className="p-8 bg-cyan-50/80 border-b border-cyan-200">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-white rounded-xl shadow-sm text-cyan-500 border border-cyan-100">
                            <Star className="w-8 h-8 fill-cyan-400 text-cyan-400" />
                        </div>
                        <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-bold uppercase border border-cyan-200">Deluxe</span>
                    </div>
                    <h4 className="text-3xl font-bold text-cyan-900">RM200</h4>
                    <p className="text-sm text-cyan-700 mt-1 font-medium">Auto Top-Up when balance &lt; RM50</p>
                </div>
                <div className="p-8 flex-1 bg-white relative">
                    <ul className="space-y-4">
                        <li className="flex items-start text-sm text-slate-700">
                            <Check className="w-5 h-5 text-cyan-500 mr-3 shrink-0 font-bold" />
                            <span className="font-medium text-slate-900"><strong>Hospitalization:</strong> Up to RM1,000,000/year</span>
                        </li>
                        <li className="flex items-start text-sm text-slate-700">
                            <Check className="w-5 h-5 text-cyan-500 mr-3 shrink-0 font-bold" />
                            <span><strong>Room & Board:</strong> RM250/day</span>
                        </li>
                        <li className="flex items-start text-sm text-slate-700">
                            <Check className="w-5 h-5 text-cyan-500 mr-3 shrink-0 font-bold" />
                            <span className="bg-cyan-50 px-1 rounded text-cyan-900 font-semibold">Ambulance: Fully Covered</span>
                        </li>
                        <li className="flex items-start text-sm text-slate-700">
                            <Check className="w-5 h-5 text-cyan-500 mr-3 shrink-0 font-bold" />
                            <span><strong>Govt. Cash Allowance:</strong> RM100/day</span>
                        </li>
                        <li className="flex items-start text-sm text-slate-700">
                            <Check className="w-5 h-5 text-cyan-500 mr-3 shrink-0 font-bold" />
                            <span>Conditional Outpatient Benefits</span>
                        </li>
                        <li className="flex items-start text-sm text-slate-700">
                            <Check className="w-5 h-5 text-cyan-500 mr-3 shrink-0 font-bold" />
                            <span>Bereavement Benefit: RM10,000</span>
                        </li>
                        <li className="flex items-start text-sm text-slate-700">
                            <Check className="w-5 h-5 text-cyan-500 mr-3 shrink-0 font-bold" />
                            <span className="bg-cyan-50 px-1 rounded text-cyan-900 font-semibold">Pre-Hospital Diagnostics Included</span>
                        </li>
                    </ul>
                </div>
            </div>

          </div>

          {/* New Explanation Block */}
          <div className="mt-8 max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-brand-surface-blue p-2 rounded-lg text-brand-blue">
                        <Info className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-brand-navy">Understanding Your Sharing Account</h4>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">
                    Here’s how it works: Your monthly cost-sharing contribution is automatically deducted from your dedicated Sharing Account. This account acts like your personal, prepaid wallet, ensuring your protection is always active when you need support.
                </p>
            </div>
            <div className="w-full md:w-5/12">
                 <div className="aspect-[4/3] bg-brand-surface-navy rounded-2xl flex flex-col items-center justify-center overflow-hidden relative shadow-inner">
                     <img 
                        src="image16.jpg" 
                        alt="Sharing Account Process" 
                        className="w-full h-full object-cover"
                     />
                 </div>
            </div>
          </div>
      </div>
      
      <div className="mt-8 text-center">
         <p className="text-slate-500 mb-4 font-medium">Not sure which plan is right for you?</p>
         <Button 
            className="rounded-full px-8 py-3 bg-teal-800 text-white shadow-lg hover:shadow-xl hover:bg-teal-700 transform transition-all duration-300 hover:-translate-y-1"
            onClick={scrollToJoin}
        >
            <ArrowRight className="w-5 h-5 mr-2" /> Start Your Protection Plan Now
         </Button>
      </div>

    </Section>
  );
};

export default Pricing;