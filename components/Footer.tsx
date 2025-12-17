import React from 'react';
import Button from './Button';
import { HeartHandshake, Facebook, MapPin, Image as ImageIcon, Users, Globe } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const Footer: React.FC = () => {
  const openWhatsApp = () => {
      window.open('https://wa.me/60108768760', '_blank');
  };

  return (
    <footer className="bg-brand-navy text-slate-300">
        
        {/* Redesigned CTA Section */}
        <div id="join-section" className="bg-brand-surface-navy py-12 px-4 md:px-8 relative overflow-hidden">
            {/* Background Pattern */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#16647d 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 bg-white rounded-[2rem] shadow-2xl overflow-hidden relative border border-slate-100">
                 {/* Decorative Blobs */}
                 <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

                {/* Left: Text */}
                <div className="w-full lg:w-1/2 text-left space-y-8 pl-8 pr-8 py-12 lg:pl-16 relative z-10">
                    <div>
                        <div className="inline-block bg-brand-navy text-white text-xs font-bold px-3 py-1 rounded-full mb-4">Join The Community</div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight">
                            What Are You <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">Waiting For?</span>
                        </h2>
                    </div>
                    
                    <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                        Join <strong>We Kongsi</strong> today. Secure your peace of mind with <span className="text-brand-navy font-bold decoration-brand-teal underline decoration-4 underline-offset-4">RM1,000,000</span> medical protection.
                    </p>

                    <div className="flex flex-col sm:flex-col gap-5">
                        <Button 
                            size="lg" 
                            className="shadow-xl shadow-brand-teal/30 bg-gradient-to-r from-brand-navy to-brand-blue hover:to-brand-navy text-white px-10 py-5 text-xl w-fit animate-[bounce_2s_infinite]" 
                            onClick={openWhatsApp}
                        >
                            Sign Up Now
                        </Button>
                        
                        {/* Elaborated Counter */}
                        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 max-w-md">
                            <div className="bg-white p-3 rounded-full shadow-sm text-brand-teal">
                                <Users className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center text-brand-navy font-bold text-xl leading-none">
                                    <AnimatedCounter end={12543} />
                                    <span className="ml-1">+</span>
                                </div>
                                <p className="text-xs text-slate-500 leading-tight mt-1">
                                    Trusted Malaysians have already joined to protect themselves and their families.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="w-full lg:w-1/2 relative h-full min-h-[400px] lg:min-h-[500px]">
                    <div className="absolute inset-0 bg-slate-200 flex items-center justify-center group overflow-hidden">
                        <img 
                            src="image31.jpg" 
                            alt="Join We Kongsi Movement" 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        
                         {/* Interactive hover overlay */}
                        <div className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <span className="text-white font-bold text-2xl tracking-widest border-2 border-white px-6 py-2 backdrop-blur-sm">WE KONGSI</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {/* Brand */}
                <div>
                    <div className="flex items-center space-x-2 mb-6">
                        <HeartHandshake className="w-8 h-8 text-brand-teal" />
                        <span className="font-bold text-2xl text-white">We Kongsi</span>
                    </div>
                    <p className="text-sm text-slate-400 mb-6 leading-relaxed max-w-xs">
                        Community-driven medical cost sharing. Affordable, Transparent, Fair. We are building a healthier nation together.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/wekongsi.health" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-brand-teal hover:text-brand-navy transition-all flex items-center justify-center">
                            <Facebook size={18} />
                        </a>
                        <a href="https://www.tiktok.com/@wekongsi.official" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-brand-teal hover:text-brand-navy transition-all flex items-center justify-center">
                            {/* TikTok SVG */}
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-bold text-white text-lg mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li className="flex items-start">
                             <MapPin className="w-5 h-5 mr-3 shrink-0 text-brand-teal" />
                             <span>c/o WeWork Level 18, Kita Kongsi Sdn Bhd, Equatorial Plaza, Jln Sultan Ismail, 50250 Kuala Lumpur</span>
                        </li>
                        <li className="flex items-center text-white hover:text-brand-teal transition-colors">
                            <Globe className="w-5 h-5 mr-3 text-brand-teal" />
                            <a href="https://www.wekongsi.com" target="_blank" rel="noopener noreferrer">www.wekongsi.com</a>
                        </li>
                    </ul>
                </div>

                {/* Disclaimer (Moved here) */}
                <div>
                     <h4 className="font-bold text-white text-lg mb-6">Disclaimer</h4>
                     <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        We Kongsi is not an insurance company or takaful. Our program is driven by the voluntary agreement among members to share each other's medical expenses.
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                         This membership does not function as an insurance policy. Members are responsible for their own expenses but share risks collectively.
                    </p>
                </div>
            </div>

            {/* Copyright Line */}
            <div className="border-t border-white/10 pt-8 text-center text-sm text-slate-500">
                &copy; {new Date().getFullYear()} We Kongsi. All Rights Reserved.
            </div>
        </div>
    </footer>
  );
};

export default Footer;