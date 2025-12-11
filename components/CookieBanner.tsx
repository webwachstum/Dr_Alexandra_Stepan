import React, { useState, useEffect } from 'react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-[0_-8px_30px_rgba(0,0,0,0.12)] p-6 md:p-8 border border-stone-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex-1">
          <h4 className="font-serif text-lg text-charcoal mb-2">Datenschutz & Cookies</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Wir nutzen Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Webseite zu bieten. 
            Einige sind technisch notwendig, andere helfen uns, unser Angebot zu verbessern.
          </p>
        </div>
        <div className="flex gap-3 whitespace-nowrap">
          <button 
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-charcoal hover:bg-stone-100 rounded-md transition-colors"
          >
            Ablehnen
          </button>
          <button 
            onClick={handleAccept}
            className="px-6 py-2 text-sm font-medium bg-sage-600 text-white hover:bg-sage-700 rounded-md shadow-sm transition-colors"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};