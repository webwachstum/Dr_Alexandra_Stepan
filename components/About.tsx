import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-sage-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">Dr. Alexandra Stepan</h2>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-light">
              <p>
                Willkommen in meiner Ordination. Als Ärztin für Allgemeinmedizin und Fachärztin für Psychiatrie ist es mir ein Anliegen, den Menschen in seiner Gesamtheit zu betrachten.
              </p>
              <p>
                Körperliches und seelisches Wohlbefinden sind untrennbar miteinander verbunden. Durch meine doppelte Qualifikation und Erfahrung als Notärztin biete ich Ihnen eine umfassende medizinische Betreuung, die weit über die Symptombehandlung hinausgeht.
              </p>
            </div>

            <div className="pt-6 flex flex-col items-center">
              <h3 className="font-serif text-xl mb-6 text-sage-700 italic">Qualifikationen</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['Allgemeinmedizin', 'Psychiatrie', 'Psychotherapeutische Medizin', 'Notarzt', 'Wahlarzt'].map((item) => (
                  <span key={item} className="px-5 py-2 bg-white rounded-full border border-sage-100 text-charcoal shadow-sm text-base">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="pt-8 border-t border-sage-200 w-full max-w-xs mx-auto">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider block mb-3">Sprachen</span>
                <span className="inline-block px-8 py-2 bg-white border border-stone-200 rounded-md text-charcoal font-medium">Deutsch</span>
            </div>
        </div>
      </div>
    </section>
  );
};