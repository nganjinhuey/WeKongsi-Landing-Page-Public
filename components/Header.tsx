import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-3 group">
              <img 
                src="logo.jpg" 
                alt="We Kongsi Logo" 
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <div>
                <span className={`block font-bold text-xl text-brand-navy`}>We Kongsi</span>
                <span className={`block text-xs font-medium text-brand-blue`}>Anyone Can Afford Healthcare</span>
              </div>
            </a>
          </div>

          {/* Right Side: Language Switcher & Action Button */}
          <div className="flex items-center gap-3 md:gap-4">
            
            {/* Language Switcher Dropdown */}
            <div className="relative" ref={dropdownRef}>
                <button 
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="flex items-center space-x-1.5 px-3 py-2 rounded-lg hover:bg-slate-100 transition-all duration-200 group text-brand-navy"
                    aria-expanded={isLangOpen}
                    aria-label="Select Language"
                >
                    <Globe className="w-5 h-5 group-hover:text-brand-blue transition-colors" />
                    <ChevronDown className={`w-4 h-4 text-slate-400 group-hover:text-brand-blue transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLangOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-brand-navy rounded-xl shadow-xl py-2 z-50 border border-brand-teal/20 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/10 mb-1">
                            Select Language
                        </div>
                        <a href="/index.html" className="flex items-center px-4 py-2.5 text-sm text-white hover:bg-brand-blue transition-colors">
                            <span className="mr-3 text-lg">🇬🇧</span> English
                        </a>
                        <a href="/bm/index.html" className="flex items-center px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-brand-blue transition-colors">
                            <span className="mr-3 text-lg">🇲🇾</span> Bahasa Malaysia
                        </a>
                        <a href="/cn/index.html" className="flex items-center px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-brand-blue transition-colors">
                            <span className="mr-3 text-lg">🇨🇳</span> Chinese
                        </a>
                    </div>
                )}
            </div>

            {/* CTA Button - Links to WhatsApp */}
            <Button size="sm" className="shadow-md" onClick={() => window.open('https://wa.me/60108768760', '_blank')}>
                Join Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;