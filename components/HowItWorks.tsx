import React from 'react';
import Section from './Section';

const ScenarioCard: React.FC<{ 
    situationNumber: number; 
    title: string;
    bill: string; 
    members: string; 
    outcomeTitle: string;
    outcomeDesc: string;
    highlight: string;
    colorClass: string;
}> = ({ situationNumber, title, bill, members, outcomeTitle, outcomeDesc, highlight, colorClass }) => {
    
    // Explicit color mapping for brand consistency
    let borderClass = '';
    let badgeClass = '';
    let highlightBgClass = '';
    let bottomBoxClass = '';

    if (colorClass === 'bg-brand-navy') {
        // High Bill (Capped) - Navy Theme
        borderClass = 'border-brand-navy';
        badgeClass = 'bg-brand-navy';
        highlightBgClass = 'bg-indigo-100 text-brand-navy';
        bottomBoxClass = 'text-brand-navy border-brand-navy';
    } else if (colorClass === 'bg-brand-blue') {
        // Low Bill - Brand Blue Theme
        borderClass = 'border-brand-blue';
        badgeClass = 'bg-brand-blue';
        highlightBgClass = 'bg-sky-100 text-brand-blue';
        bottomBoxClass = 'text-brand-blue border-brand-blue';
    } else if (colorClass === 'bg-teal-500') {
        // No Bill - Vibrant Teal Theme
        borderClass = 'border-teal-500';
        badgeClass = 'bg-teal-500';
        highlightBgClass = 'bg-teal-100 text-teal-800';
        bottomBoxClass = 'text-teal-700 border-teal-500';
    } else {
        // Fallback
        borderClass = 'border-slate-200';
        badgeClass = 'bg-slate-500';
        highlightBgClass = 'bg-slate-100 text-slate-800';
        bottomBoxClass = 'text-slate-600 border-slate-200';
    }

    return (
        <div className={`rounded-3xl border-t-8 ${borderClass} bg-white shadow-xl hover:shadow-2xl overflow-hidden flex flex-col items-center p-8 transition-all duration-300 group h-full text-center relative hover:-translate-y-2`}>
            
            {/* Situation Badge */}
            <div className={`mb-6 px-4 py-1.5 rounded-full ${badgeClass} text-white text-xs font-bold uppercase tracking-widest shadow-md`}>
                Situation {situationNumber}
            </div>

            {/* Content */}
            <div className="flex-1 w-full flex flex-col items-center">
                <h4 className="text-xl font-bold text-brand-navy mb-6">{title}</h4>
                
                <div className="w-full bg-slate-50 p-5 rounded-xl border border-slate-100 mb-8 text-sm text-slate-600 space-y-3 shadow-inner">
                    <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                        <div className="flex items-center text-slate-500 font-medium">Bill for the month</div>
                        <strong className="text-slate-800 text-base">{bill}</strong>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                        <div className="flex items-center text-slate-500 font-medium">Active Members</div>
                        <strong className="text-slate-800 text-base">{members}</strong>
                    </div>
                </div>

                <div className="mt-auto w-full flex flex-col items-center">
                    {/* Outcome Title with Soft Background for Emphasis */}
                    <div className={`inline-block px-8 py-3 rounded-xl font-extrabold text-2xl mb-4 ${highlightBgClass} shadow-sm`}>
                        {outcomeTitle}
                    </div>
                    
                    <p className="text-slate-500 text-sm mb-6 min-h-[40px] leading-snug max-w-[220px]">{outcomeDesc}</p>
                    
                    <div className={`inline-block w-full px-4 py-3 bg-white border ${bottomBoxClass} border-opacity-30 text-sm font-bold rounded-xl shadow-sm`}>
                        {highlight}
                    </div>
                </div>
            </div>
        </div>
    );
};

const HowItWorks: React.FC = () => {
  return (
    <Section 
        title="How Does Cost Sharing Work?" 
        subtitle="Simple, Fair, and Transparent." 
        className="bg-gradient-to-br from-sky-100 via-cyan-50 to-teal-100" 
        id="how-it-works"
    >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            
            {/* Scenario 1 - Brand Blue */}
            <ScenarioCard 
                situationNumber={1}
                colorClass="bg-brand-blue"
                title="Low Medical Bill Month"
                bill="RM10,000"
                members="1,000"
                outcomeTitle="RM10 / Pax"
                outcomeDesc="Calculation: RM10,000 ÷ 1,000 members"
                highlight="Only RM10 this month!"
            />

            {/* Scenario 2 - Brand Navy */}
            <ScenarioCard 
                situationNumber={2}
                colorClass="bg-brand-navy"
                title="High Bill Month (Capped)"
                bill="RM70,000"
                members="1,000"
                outcomeTitle="Max Share: RM50"
                outcomeDesc="Actual cost RM70/pax, but capped at RM50."
                highlight="RM20 carried forward"
            />

            {/* Scenario 3 - Vibrant Teal */}
            <ScenarioCard 
                situationNumber={3}
                colorClass="bg-teal-500"
                title="No Medical Bill Month"
                bill="RM0"
                members="1,000"
                outcomeTitle="RM0 / Pax"
                outcomeDesc="If nobody is admitted, nobody pays."
                highlight="Relax & Save!"
            />
            
        </div>
    </Section>
  );
};

export default HowItWorks;