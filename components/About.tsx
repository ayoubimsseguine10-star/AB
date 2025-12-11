import React from 'react';
import { ShieldCheck, UserCheck, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <img 
                src="https://picsum.photos/800/1000" 
                alt="Professional aesthetician working" 
                className="w-full h-full object-cover z-10 relative shadow-2xl"
              />
              {/* Decorative Frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold-300 z-0 hidden md:block"></div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <span className="text-gold-600 tracking-widest text-sm uppercase font-semibold mb-2 block">
              About The Institute
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">
              Excellence in <br/>
              <span className="italic text-stone-500">Aesthetic Care</span>
            </h2>
            <p className="text-stone-700 font-light text-lg mb-8 leading-relaxed">
              At Lumière Esthétique, we believe that true beauty is revealed through professional care and attention to detail. Our institute is a sanctuary of clinical hygiene and refined technique, far removed from the bustle of everyday life.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-gold-600 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Uncompromising Hygiene</h4>
                  <p className="text-sm text-stone-600 font-light">
                    We adhere to the strictest clinical standards of sterilization and cleanliness to ensure your safety and comfort at all times.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <UserCheck className="w-6 h-6 text-gold-600 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Certified Experts</h4>
                  <p className="text-sm text-stone-600 font-light">
                    Our team consists exclusively of licensed aestheticians with advanced training in dermatological care and body wellness.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Star className="w-6 h-6 text-gold-600 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Premium Products</h4>
                  <p className="text-sm text-stone-600 font-light">
                    We utilize only top-tier, clinically tested products renowned for their efficacy and gentle formulation.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;