import React from 'react';
import Section from './Section';
import { CHART_DATA } from '../constants';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Coffee, Users, Activity, Building2, HeartHandshake } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-xl shadow-xl border border-slate-100 text-sm">
        <p className="text-slate-500 text-xs font-bold mb-1 uppercase tracking-wide">{label}</p>
        <p className="text-brand-navy font-extrabold text-xl">
          RM {payload[0].value.toFixed(2)}
        </p>
        <p className="text-brand-blue text-[10px] font-semibold mt-0.5">Sharing Fee</p>
      </div>
    );
  }
  return null;
};

const Impact: React.FC = () => {
  return (
    <Section 
        title="What Our Community Has Built Together" 
        subtitle="See the real impact we make when we come together."
        id="impact" 
        className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50"
        dark={false}
    >
      
      {/* Soft Background Blobs for mixed cool tones */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-40 mix-blend-multiply bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-200 via-cyan-100 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-4 mb-8">
        
        {/* HIERARCHY LEVEL 1: Dominant Card (Total Members) - WHITE CARD */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl text-center flex flex-col items-center justify-center min-h-[200px] transform transition-transform hover:scale-[1.01] relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50 opacity-50 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative z-10">
                <div className="p-3 bg-blue-50 rounded-full mb-3 text-brand-blue shadow-sm inline-flex">
                    <Users className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-2 tracking-tight leading-none">
                    <AnimatedCounter end={5230} suffix="+" />
                </div>
                <div className="text-sm md:text-base font-bold text-slate-500 uppercase tracking-widest">Total Members</div>
                <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                    A rapidly growing family protecting each other.
                </p>
            </div>
        </div>

        {/* HIERARCHY LEVEL 2: Compact Secondary Grid - WHITE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Total Shared */}
            <div className="bg-white rounded-2xl p-4 border border-slate-100 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all">
                <HeartHandshake className="w-5 h-5 text-teal-500 mb-2" />
                <div className="text-xl md:text-2xl font-bold text-brand-navy leading-tight">
                    RM<AnimatedCounter end={1200000} />+
                </div>
                <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase mt-1 tracking-wide">Total Shared Amount</div>
            </div>

            {/* Hospital Cases */}
            <div className="bg-white rounded-2xl p-4 border border-slate-100 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all">
                <Building2 className="w-5 h-5 text-blue-500 mb-2" />
                <div className="text-xl md:text-2xl font-bold text-brand-navy leading-tight">
                    <AnimatedCounter end={142} />
                </div>
                <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase mt-1 tracking-wide">Hospital Cases Approved</div>
            </div>

            {/* Clinic Cases */}
            <div className="bg-white rounded-2xl p-4 border border-slate-100 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all">
                <Activity className="w-5 h-5 text-indigo-500 mb-2" />
                <div className="text-xl md:text-2xl font-bold text-brand-navy leading-tight">
                    <AnimatedCounter end={856} />
                </div>
                <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase mt-1 tracking-wide">Clinic Cases Approved</div>
            </div>
        </div>
      </div>

      {/* Graph Section - Larger Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 relative overflow-hidden">
        <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-6 text-center">Average Monthly Sharing Fee (2025)</h3>
        
        <div className="h-[350px] w-full relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={CHART_DATA} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }} 
                tickFormatter={(value) => `RM${value}`}
              />
              <Tooltip 
                content={<CustomTooltip />}
                cursor={{ stroke: '#34e3c4', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="amount" 
                stroke="#16647d" 
                strokeWidth={4} 
                dot={{ fill: '#fff', strokeWidth: 2, r: 6, stroke: '#16647d' }} 
                activeDot={{ r: 8, fill: '#34e3c4', stroke: '#fff' }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Value Context Bubble - Rewritten */}
        <div className="mt-8 flex justify-center">
            <div className="bg-slate-50 border border-slate-100 rounded-full px-5 py-3 flex items-center space-x-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-brand-navy p-1.5 rounded-full text-white">
                    <Coffee className="w-4 h-4" />
                </div>
                <div className="text-sm text-slate-700">
                    <span className="font-bold text-brand-navy">Think about it:</span> That's less than <span className="font-bold text-brand-blue">RM1.60 a day</span>—cheaper than a Teh Tarik—for <span className="font-bold text-brand-teal">RM1 Million</span> coverage.
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Impact;