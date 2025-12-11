import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-white font-serif text-xl mb-1">Lumière Esthétique</h3>
          <p className="text-xs tracking-widest uppercase text-gold-600">Institut de Beauté</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold-400 transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="hover:text-gold-400 transition-colors"><Facebook className="w-5 h-5" /></a>
        </div>

        <div className="text-center md:text-right text-sm font-light">
          <p>&copy; {new Date().getFullYear()} Lumière Esthétique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;