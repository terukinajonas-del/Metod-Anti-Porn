
import React from 'react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    name: "Carlos M.",
    quote: "Eu não acreditava que fosse possível, mas em 2 semanas já estava livre do vício. O método é direto ao ponto e a comunidade me deu a força que eu precisava."
  },
  {
    name: "João P.",
    quote: "Minha vida mudou completamente. Hoje tenho mais energia, mais clareza mental e meu relacionamento melhorou 100%. Sou um novo homem."
  },
  {
    name: "Ricardo S.",
    quote: "O valor que paguei é irrisório perto da transformação que tive. Se você está na dúvida, apenas comece. É o melhor investimento que você fará por si mesmo."
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-12">
            O que dizem sobre o <span className="text-[#d90429]">Método</span>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index}>
              <div className="bg-[#0f0f0f] border-2 border-[#d90429] rounded-lg p-8 h-full flex flex-col justify-between">
                <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <p className="font-bold text-lg text-white font-poppins">- {testimonial.name}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
