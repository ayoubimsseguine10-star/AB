import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-stone-900 text-stone-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Info Side */}
          <div>
            <h2 className="text-4xl font-serif text-white mb-8">Visit Us</h2>
            <p className="text-stone-400 mb-12 font-light max-w-md">
              Located in the heart of the city, our institute offers a private retreat for your beauty needs. 
              Reservations are recommended.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center group-hover:border-gold-500 transition-colors">
                  <MapPin className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-1">Address</h4>
                  <p className="text-stone-400 font-light">12 Avenue des Champs-Élysées<br/>75008 Paris, France</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center group-hover:border-gold-500 transition-colors">
                  <Phone className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-1">Phone</h4>
                  <p className="text-stone-400 font-light">+33 1 23 45 67 89</p>
                  <p className="text-stone-500 text-sm mt-1">Available 9am - 7pm</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center group-hover:border-gold-500 transition-colors">
                  <Mail className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-1">Email</h4>
                  <p className="text-stone-400 font-light">contact@lumiere-esthetique.fr</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Map Side */}
          <div className="bg-stone-800 p-8 md:p-12 rounded-sm border border-stone-700">
            <h3 className="text-2xl font-serif text-white mb-8 flex items-center gap-3">
              <Clock className="w-6 h-6 text-gold-400" /> Opening Hours
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-stone-700 pb-4">
                <span className="text-stone-300">Monday - Friday</span>
                <span className="text-white font-medium">09:00 - 19:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-700 pb-4">
                <span className="text-stone-300">Saturday</span>
                <span className="text-white font-medium">10:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-stone-300">Sunday</span>
                <span className="text-gold-400 font-medium">Closed</span>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-stone-700">
              <p className="text-stone-400 text-sm italic text-center">
                For cancellations, please notify us at least 24 hours in advance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;