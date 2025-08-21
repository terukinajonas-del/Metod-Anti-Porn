
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ShieldCheckIcon, RocketLaunchIcon, UsersIcon, ChartBarIcon } from './Icons';

const benefits = [
  {
    icon: <RocketLaunchIcon />,
    title: "Rompa o ciclo vicioso",
    description: "Nosso método foi desenhado para quebrar o ciclo da pornografia em apenas 15 dias.",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Método 100% Validado",
    description: "Centenas de vidas já foram transformadas com este passo a passo prático e direto ao ponto.",
  },
  {
    icon: <ChartBarIcon />,
    title: "Passo a Passo Prático",
    description: "Sem enrolação. Aulas e materiais diretos para você aplicar e ver resultados imediatos.",
  },
  {
    icon: <UsersIcon />,
    title: "Comunidade Exclusiva",
    description: "Entre para a maior comunidade AntiPorn do Brasil e receba apoio de quem vive o mesmo desafio.",
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-12">
            Por que o Método <span className="text-[#d90429]">Funciona</span>?
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} className="flex flex-col items-center text-center">
              <div className="bg-[#1c1c1c] border border-gray-800 rounded-lg p-8 h-full transform transition-transform duration-300 hover:-translate-y-2">
                <div className="text-[#d90429] mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold font-poppins mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
