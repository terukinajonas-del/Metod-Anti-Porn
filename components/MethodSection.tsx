
import React from 'react';
import AnimatedSection from './AnimatedSection';

const pillars = [
  { name: "Físico", description: "Recupere sua energia e disposição com rotinas e hábitos que fortalecem seu corpo e mente." },
  { name: "Social", description: "Reconstrua suas relações sociais e aprenda a se conectar de forma genuína com as pessoas." },
  { name: "Afetivo", description: "Desenvolva inteligência emocional para criar laços afetivos saudáveis e duradouros." },
  { name: "Profissional", description: "Retome o foco e a produtividade, alcançando seus objetivos de carreira sem distrações." },
];

const MethodSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Os 4 Pilares da sua <span className="text-[#d90429]">Transformação</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            O Método AntiPorn atua nas 4 áreas essenciais da sua vida, garantindo uma mudança completa e definitiva.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={index}>
              <div className="bg-[#d90429] p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-2xl font-poppins font-bold text-white mb-3">{pillar.name}</h3>
                <p className="text-gray-200">{pillar.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
