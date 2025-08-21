
import React from 'react';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import MethodSection from './components/MethodSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FixedCTA from './components/FixedCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-white font-inter overflow-x-hidden">
      <main>
        <HeroSection />
        <BenefitsSection />
        <MethodSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <FixedCTA />
      <Footer />
    </div>
  );
};

export default App;
