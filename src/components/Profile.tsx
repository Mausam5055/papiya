import React, { useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

export const Profile = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const opacity = 1 - Math.max(0, Math.min(1, -top / 500));
        sectionRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-blue-900' : 'bg-yellow-50'}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1579547945413-497e1b99dac0?auto=format&fit=crop&q=80")' }}
      />
      
      {/* Moving Background and Lines */}
      <div className="absolute inset-0 moving-lines">
        <div className="line" style={{ top: '20%' }}></div>
        <div className="line" style={{ top: '40%' }}></div>
        <div className="line" style={{ top: '60%' }}></div>
        <div className="line" style={{ top: '80%' }}></div>
      </div>

      <div className="relative z-10 text-center p-8">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img
              src="/assets/profile.jpg"
              alt="Papiya Nath Mazumdar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Papiya Nath Mazumdar
        </h1>

        <p className="text-lg leading-relaxed mx-auto max-w-3xl text-center">
        
                
        🍁Welcome to my digital portfolio🍁

       

        
        </p>

        <br></br>

       

        
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-current opacity-20" />
    </section>
  );
};
