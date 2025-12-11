import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Elegant aesthetics background" 
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 via-transparent to-stone-50/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <span className="inline-block py-1 px-3 mb-6 border border-gold-400 text-gold-700 text-xs tracking-[0.2em] uppercase rounded-full bg-white/80 backdrop-blur-sm">
          Institut de Beauté
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-medium text-stone-900 mb-6 tracking-tight">
          Reveal Your <span className="italic text-gold-600">True Beauty</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-700 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Experience the pinnacle of aesthetic care in an environment designed for serenity, precision, and visible results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-stone-900 text-white px-8 py-4 rounded-none hover:bg-gold-600 transition-colors duration-300 flex items-center justify-center gap-2 tracking-wider uppercase text-sm"
          >
            Book Your Session
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-transparent border border-stone-900 text-stone-900 px-8 py-4 rounded-none hover:bg-stone-100 transition-colors duration-300 tracking-wider uppercase text-sm"
          >
            View Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;