
import React, { useState, useEffect } from 'react';

const FixedCTA: React.FC = () => {
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 2000); // Duration of the pulse animation
    }, 5000); // Triggers every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm p-4 z-50 shadow-lg border-t border-gray-800">
      <div className="container mx-auto flex items-center justify-center">
        <a
          href="https://pay.kiwify.com.br/mrjl9M1"
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-[#d90429] text-white font-bold text-lg py-3 px-8 rounded-lg shadow-md shadow-red-500/40 transition-transform duration-300 hover:scale-105 ${isPulsing ? 'animate-pulse-red' : ''}`}
        >
          Quero parar em 15 dias
        </a>
      </div>
    </div>
  );
};

export default FixedCTA;
