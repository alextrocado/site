
import React from 'react';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Image - Vibrant and Cheerful */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2400" 
          alt="Vibrant Landscape" 
          className="w-full h-full object-cover opacity-80 transition-all duration-1000 scale-105"
        />
        {/* Colorful overlays to blend with the image and ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
        <div className="absolute inset-0 bg-orange-900/10 mix-blend-overlay"></div>
      </div>
      
      <div className="relative z-10 text-center space-y-10 px-4">
        <div className="space-y-2">
          <span className="text-[10px] tracking-[0.5em] uppercase text-white/90 font-medium animate-fade-in drop-shadow-lg">Research & Education</span>
          <h2 className="text-6xl md:text-9xl font-serif italic font-light animate-fade-in-up">
            Alexandre <br /> 
            <span className="not-italic font-bold tracking-tighter text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">Trocado</span>
          </h2>
        </div>
        
        <p className="text-white tracking-[0.15em] text-sm md:text-base uppercase max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-md">
          Mathematics Researcher <span className="mx-2 text-white/40">|</span> 
          Education Researcher <span className="mx-2 text-white/40">|</span>
          Computational Algebra
        </p>
        
        <div className="pt-8 flex flex-col md:flex-row gap-6 justify-center items-center">
          <button 
            onClick={onExplore}
            className="px-12 py-4 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-500 text-[10px] tracking-[0.3em] uppercase font-bold group"
          >
            Publications
          </button>
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="px-12 py-4 bg-transparent backdrop-blur-sm border border-white/40 hover:border-white text-white transition-all duration-500 text-[10px] tracking-[0.3em] uppercase"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-70">
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent animate-bounce"></div>
      </div>
    </section>
  );
};
