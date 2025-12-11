import React from 'react';

export const MapSection = () => {
  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border border-stone-200 relative">
      {/* 
        Using an iframe for Google Maps. 
        Note: In a real production environment, you would use the official Google Maps JS API key.
        The query is specifically for the address provided.
      */}
      <iframe 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        loading="lazy" 
        allowFullScreen 
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2716.48623456789!2d15.8200!3d47.1000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDA2JzAwLjAiTiAxNcKwNDknMTIuMCJF!5e0!3m2!1sde!2sat!4v1600000000000!5m2!1sde!2sat&q=Business+Park+2,+8200+Sinabelkirchen"
        title="Standort Dr. Alexandra Stepan"
        className="grayscale-[50%] hover:grayscale-0 transition-all duration-500"
      ></iframe>
      
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm text-xs text-gray-600 hidden sm:block">
        Business Park 2, 8200 Sinabelkirchen
      </div>
    </div>
  );
};