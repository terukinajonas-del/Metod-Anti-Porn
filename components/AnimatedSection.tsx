
import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'zoom-in';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', animationType = 'fade-in' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getAnimationClasses = () => {
    if (animationType === 'zoom-in') {
      return `transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`;
    }
    // Default to fade-in
    return `transition-all duration-1000 ease-in-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`;
  };

  return (
    <div ref={sectionRef} className={`${className} ${getAnimationClasses()}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
