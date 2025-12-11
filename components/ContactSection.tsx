import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { MapSection } from './MapSection';

type OrderType = 'rezept' | 'ueberweisung' | 'anfrage';

export const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [orderType, setOrderType] = useState<OrderType>('anfrage');
  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Scroll to top of form to show success message
      if (formRef.current) {
        const yOffset = -100; // Offset for sticky nav
        const y = formRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-4xl text-charcoal mb-6">Kontakt & Erreichbarkeit</h2>
              <p className="text-lg text-gray-600 mb-8">
                Vereinbaren Sie Ihren Termin telefonisch oder nutzen Sie unser Online-Formular für Rezeptbestellungen und Anfragen.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-sm">
                    <MapPin className="w-6 h-6 text-sage-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-serif text-lg text-charcoal">Adresse</h4>
                    <p className="text-gray-600">Business Park 2<br/>8200 Sinabelkirchen</p>
                  </div>
                </div>

                <div className="flex items-start">
                   <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-sm">
                    <Phone className="w-6 h-6 text-sage-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-serif text-lg text-charcoal">Telefon</h4>
                    <a href="tel:+43676887065110" className="text-sage-600 hover:text-sage-700 font-medium block mt-1 transition-colors">
                      +43 / 676 / 887 06 51 10
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                   <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-sm">
                    <Mail className="w-6 h-6 text-sage-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-serif text-lg text-charcoal">E-Mail</h4>
                    <a href="mailto:alexandra_stepan@yahoo.com" className="text-sage-600 hover:text-sage-700 font-medium block mt-1 transition-colors">
                      alexandra_stepan@yahoo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                   <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-sm">
                    <Clock className="w-6 h-6 text-sage-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-serif text-lg text-charcoal">Öffnungszeiten</h4>
                    <p className="text-gray-600">Ordinationszeiten nach telefonischer Vereinbarung.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-sage-50 p-6 rounded-xl border border-sage-100">
              <h4 className="font-serif text-lg text-charcoal mb-2">Notfall-Information</h4>
              <p className="text-gray-600 text-sm">
                In lebensbedrohlichen Notfällen wählen Sie bitte sofort den Notruf <strong className="text-red-600">144</strong>. 
                Der ärztliche Bereitschaftsdienst ist unter <strong className="text-charcoal">141</strong> erreichbar.
              </p>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className="bg-white rounded-2xl shadow-xl p-8 border border-stone-100">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="font-serif text-2xl text-charcoal">Anfrage erfolgreich!</h3>
                <p className="text-gray-600 max-w-sm mx-auto">
                  Vielen Dank. Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 px-6 py-2 bg-sage-50 text-sage-700 rounded-lg hover:bg-sage-100 transition-colors font-medium"
                >
                  Neue Anfrage senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-charcoal mb-2">Online Anfrage</h3>
                  <p className="text-gray-500 text-sm">Nutzen Sie dieses Formular für Rezepte, Überweisungen oder Terminwünsche.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Vor- und Nachname *</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-all"
                      placeholder="Max Mustermann"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefonnummer *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-all"
                      placeholder="+43 6xx ..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail Adresse *</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-all"
                    placeholder="max@beispiel.at"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Art der Anfrage *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setOrderType('rezept')}
                      className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${orderType === 'rezept' ? 'bg-sage-500 text-white border-sage-500 shadow-md' : 'bg-white text-gray-600 border-stone-200 hover:bg-stone-50'}`}
                    >
                      Rezeptbestellung
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('ueberweisung')}
                      className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${orderType === 'ueberweisung' ? 'bg-sage-500 text-white border-sage-500 shadow-md' : 'bg-white text-gray-600 border-stone-200 hover:bg-stone-50'}`}
                    >
                      Überweisung
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('anfrage')}
                      className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${orderType === 'anfrage' ? 'bg-sage-500 text-white border-sage-500 shadow-md' : 'bg-white text-gray-600 border-stone-200 hover:bg-stone-50'}`}
                    >
                      Sonstiges
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {orderType === 'rezept' ? 'Welche Medikamente benötigen Sie?' : orderType === 'ueberweisung' ? 'Wohin soll überwiesen werden?' : 'Ihre Nachricht'} *
                  </label>
                  <textarea 
                    id="message" 
                    required 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-all"
                    placeholder="Bitte geben Sie hier Details an..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-5 w-5 text-sage-600 focus:ring-sage-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="font-medium text-gray-700">Datenschutz Zustimmung *</label>
                    <p className="text-gray-500">Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Zuordnung für eventuelle Rückfragen dauerhaft gespeichert werden.</p>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-sage-600 hover:bg-sage-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Wird gesendet...' : 'Absenden'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-20">
          <MapSection />
        </div>
      </div>
    </section>
  );
};