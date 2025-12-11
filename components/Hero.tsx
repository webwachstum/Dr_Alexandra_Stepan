import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sage-50 border border-sage-100 text-sage-700 text-xs font-semibold tracking-wide uppercase">
              Wahlarztordination in Sinabelkirchen
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-charcoal font-medium">
              Zeit für Ihre <br/>
              <span className="text-sage-500 italic">Gesundheit</span> und <br/>
              Ihr Wohlbefinden.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Individuelle Betreuung in Allgemeinmedizin, Psychiatrie und psychotherapeutischer Medizin. Ein ganzheitlicher Ansatz für Körper und Seele.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
          
          <div className="relative lg:h-[600px] hidden lg:block fade-in" style={{animationDelay: '0.2s'}}>
             {/* Abstract visual representation instead of generic stock photo */}
             <div className="absolute inset-0 bg-gradient-to-tr from-sage-100 to-transparent rounded-[2rem] transform rotate-3"></div>
             <img 
               src="https://picsum.photos/800/1000?grayscale" 
               alt="Beruhigende Natur-Detailaufnahme" 
               className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl grayscale-[20%] sepia-[10%]"
             />
          </div>
        </div>
      </div>
    </section>
  );
};