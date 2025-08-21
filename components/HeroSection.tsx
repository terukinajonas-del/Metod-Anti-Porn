
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
       <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-red-600/30 rounded-full blur-3xl animate-pulse"></div>
       <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="z-10">
        <h1 className="font-poppins text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-tight">
          A Pornografia é pior que <span className="text-[#d90429]">cocaína</span>
          <br />
          Pare em 15 dias com o <span className="text-[#d90429]">Método AntiPorn</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
          Transforme sua vida, recupere seu foco e vença o vício de uma vez por todas.
        </p>
        <a
          href="https://pay.kiwify.com.br/mrjl9M1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block bg-[#d90429] text-white font-bold text-xl py-4 px-12 rounded-lg shadow-lg shadow-red-500/30 transform transition-all duration-300 hover:scale-105 hover:bg-red-700"
        >
          Quero Começar Agora
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
