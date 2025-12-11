import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Über mich', href: '#about' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Ordination', href: '#ordination' },
    { name: 'Kontakt & Termine', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
      aria-label="Hauptnavigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex flex-col group">
              <span className="font-serif text-2xl font-bold tracking-tight text-charcoal group-hover:text-sage-600 transition-colors">Dr. Alexandra Stepan</span>
              <span className="text-xs tracking-widest uppercase text-sage-600 font-medium">Wahlarztordination</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-charcoal hover:text-sage-500 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-sage-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+43676887065110" 
              className="flex items-center gap-2 px-4 py-2 bg-sage-500 text-white rounded-md hover:bg-sage-600 transition-colors shadow-sm text-sm font-medium"
            >
              <Phone size={16} />
              <span>Notfall: 144</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal hover:text-sage-500 p-2 focus:outline-none focus:ring-2 focus:ring-sage-500 rounded-md"
              aria-label="Menü öffnen"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-cream border-b border-sage-100 transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100 max-h-screen' : 'opacity-0 scale-y-0 max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-charcoal hover:text-sage-600 hover:bg-sage-50 rounded-md border-b border-stone-200 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
             <a 
              href="tel:+43676887065110" 
              className="flex w-full justify-center items-center gap-2 px-4 py-3 bg-sage-500 text-white rounded-md hover:bg-sage-600 transition-colors font-medium"
            >
              <Phone size={18} />
              <span>Anrufen</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};