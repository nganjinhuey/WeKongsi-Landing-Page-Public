import React from 'react';
import { MessageCircle, Globe } from 'lucide-react';

const FloatingControls: React.FC = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/60312345678', '_blank');
  };

  const switchLanguage = () => {
    // Placeholder logic for language switching
    console.log("Switching to Bahasa Malaysia");
    // In a real app, this might change the route or context
    const url = new URL(window.location.href);
    url.searchParams.set('lang', 'bm');
    window.history.pushState({}, '', url);
  };

  return (
    <>
      {/* Language Switcher - Floating, Fixed Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <button 
            onClick={switchLanguage}
            className="flex items-center space-x-2 bg-white/90 backdrop-blur-md text-slate-800 px-5 py-3 rounded-full shadow-lg border border-slate-200 hover:bg-slate-50 hover:border-brand-blue/30 transition-all duration-300 hover:scale-105 group"
            aria-label="Switch language to Bahasa Malaysia"
        >
            <Globe className="w-5 h-5 text-brand-navy group-hover:rotate-12 transition-transform duration-500" />
            <span className="font-bold text-sm tracking-wide">Bahasa Malaysia</span>
        </button>
      </div>

      {/* WhatsApp CTA - Floating, Fixed Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
            onClick={openWhatsApp}
            className="flex items-center space-x-3 bg-brand-teal text-brand-navy px-6 py-4 rounded-full shadow-2xl hover:shadow-brand-teal/50 hover:-translate-y-1 transition-all duration-300 font-bold text-lg border-2 border-white ring-4 ring-brand-teal/20 group"
            aria-label="Chat with us on WhatsApp"
        >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span>Chat with us on WhatsApp</span>
        </button>
      </div>
    </>
  );
};

export default FloatingControls;