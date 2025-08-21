
import React from 'react';
import AnimatedSection from './AnimatedSection';

const PricingSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 flex justify-center">
        <AnimatedSection animationType="zoom-in" className="w-full max-w-lg">
          <div className="bg-[#d90429] text-white rounded-2xl shadow-2xl shadow-red-500/40 p-10 text-center">
            <h3 className="text-3xl font-poppins font-bold uppercase">Oferta Exclusiva</h3>
            <p className="text-lg opacity-80 mt-2">Acesso Imediato e Vitalício</p>
            <div className="my-8">
              <span className="text-7xl md:text-8xl font-poppins font-black">R$29,90</span>
              <span className="text-2xl font-bold block">Pagamento Único</span>
            </div>
            <p className="mb-8">
              Acesso imediato a todo o Método AntiPorn e à comunidade exclusiva por um preço simbólico.
            </p>
            <a
              href="https://pay.kiwify.com.br/mrjl9M1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block bg-white text-[#d90429] font-bold text-xl py-4 px-12 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-200"
            >
              Quero Garantir Agora
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;
