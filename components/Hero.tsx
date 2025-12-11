import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decorative background element - adjusted for centered layout */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-30 z-0 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-8 fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sage-50 border border-sage-100 text-sage-700 text-xs font-semibold tracking-wide uppercase mx-auto">
              Wahlarztordination in Sinabelkirchen
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-charcoal font-medium">
              Zeit für Ihre <br/>
              <span className="text-sage-500 italic">Gesundheit</span> und <br/>
              Ihr Wohlbefinden.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Individuelle Betreuung in Allgemeinmedizin, Psychiatrie und psychotherapeutischer Medizin. Ein ganzheitlicher Ansatz für Körper und Seele.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center px-8 py-4 bg-sage-500 text-white rounded-lg hover:bg-sage-600 transition-all shadow-lg hover:shadow-sage-500/30 font-medium text-lg group"
              >
                Termin vereinbaren
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="inline-flex justify-center items-center px-8 py-4 bg-white border border-stone-200 text-charcoal rounded-lg hover:bg-stone-50 transition-colors font-medium text-lg"
              >
                Unsere Leistungen
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};