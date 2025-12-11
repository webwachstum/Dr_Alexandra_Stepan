import React, { useEffect } from 'react';

export const Footer = () => {
  // Inject Favicon programmatically to meet requirement #6 without external file
  useEffect(() => {
    const link = document.querySelector<HTMLLinkElement>("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'shortcut icon';
    // A simple, clean cross symbol in sage green
    link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23577B6D%22/><path d=%22M50 25v50M25 50h50%22 stroke=%22white%22 stroke-width=%2212%22 stroke-linecap=%22round%22/></svg>';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">Dr. Alexandra Stepan</h3>
            <p className="text-stone-400 leading-relaxed max-w-xs">
              Ganzheitliche Medizin und psychiatrische Betreuung in einer Atmosphäre des Vertrauens.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4 text-sage-200">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Datenschutzerklärung</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie-Einstellungen</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-serif text-lg mb-4 text-sage-200">Mitgliedschaften</h4>
             <p className="text-sm text-stone-400">
               Mitglied der Ärztekammer für Steiermark<br/>
               Diplome der Österreichischen Ärztekammer
             </p>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Dr. Alexandra Stepan. Alle Rechte vorbehalten.</p>
          <p className="mt-2 sm:mt-0">Design: Luxury Editorial Medical Theme</p>
        </div>
      </div>
    </footer>
  );
};