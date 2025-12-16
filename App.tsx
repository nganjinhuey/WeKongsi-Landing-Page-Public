import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Features from './components/Features';
import HospitalNetwork from './components/HospitalNetwork';
import Coverage from './components/Coverage';
import Impact from './components/Impact';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <Coverage />
        <HospitalNetwork />
        <Impact />
        <Pricing />
        <HowItWorks />
        <Partners />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;