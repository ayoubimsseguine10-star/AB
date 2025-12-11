import React from 'react';
import { 
  Flower2, 
  Sparkles, 
  Leaf, 
  Hand, 
  Scissors, // Used as a placeholder for pedicure tools or precision
  Feather
} from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'massage-relax',
    title: 'Massage Relaxation',
    description: 'A soothing full-body treatment designed to release tension and restore inner peace.',
    icon: Flower2,
  },
  {
    id: 'massage-minc',
    title: 'Massage Amincissant',
    description: 'Targeted techniques to contour the body, improve circulation, and firm the skin.',
    icon: Leaf,
  },
  {
    id: 'soin-visage',
    title: 'Soin du Visage',
    description: 'Customized facials using premium clinical products for radiant, youthful skin.',
    icon: Sparkles,
  },
  {
    id: 'manicure',
    title: 'Manicure',
    description: 'Expert nail shaping, cuticle care, and high-gloss polish application for elegant hands.',
    icon: Hand,
  },
  {
    id: 'pedicure',
    title: 'Pédicure',
    description: 'Complete foot care focusing on hygiene, comfort, and aesthetic perfection.',
    icon: Scissors, // Representing precision tools
  },
  {
    id: 'epilation',
    title: 'Épilation',
    description: 'Gentle and effective hair removal leaving your skin silky smooth and irritation-free.',
    icon: Feather,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-stone-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gold-300 mx-auto mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto font-light">
            We offer a curated selection of treatments performed by certified aestheticians using state-of-the-art techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 border border-stone-100 bg-stone-50 hover:border-gold-200 hover:bg-white hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center group-hover:bg-gold-100 group-hover:text-gold-600 transition-colors duration-300">
                <service.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3 group-hover:text-gold-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;