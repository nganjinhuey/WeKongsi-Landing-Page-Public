import React, { forwardRef } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ id, title, subtitle, children, className = '', dark = false }, ref) => {
  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-10 md:py-16 ${dark ? 'bg-brand-navy text-white' : 'bg-white text-slate-900'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-brand-navy'}`}>{title}</h2>}
            {subtitle && <p className={`text-lg md:text-xl max-w-3xl mx-auto ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{subtitle}</p>}
            <div className={`w-24 h-1 mx-auto mt-6 rounded-full ${dark ? 'bg-brand-teal' : 'bg-brand-navy'}`}></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;