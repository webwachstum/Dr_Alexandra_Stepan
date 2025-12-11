import React from 'react';
import { Wifi, Coffee, Sun } from 'lucide-react';

export const WaitingRoomImage = () => {
  return (
    <section id="ordination" className="w-full bg-cream py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Side - Styled to match the provided reference image */}
            <div className="relative order-2 lg:order-1 fade-in">
                <div className="absolute -inset-4 bg-sage-100 rounded-[2rem] transform -rotate-2 z-0"></div>
                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl z-10">
                    {/* 
                       Using a high-quality Unsplash image that closely matches the provided reference:
                       - Brown leather chairs
                       - Large indoor plant (Strelitzia vibe)
                       - Bright, calming atmosphere
                    */}
                    <img 
                        src="https://images.unsplash.com/photo-1596162955779-9c8f7b43f290?q=80&w=2070&auto=format&fit=crop" 
                        alt="Heller Wartebereich mit braunen Ledersesseln und Pflanzen" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-[30s] ease-out"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur px-6 py-4 rounded-xl shadow-lg border border-stone-100 max-w-xs">
                        <p className="font-serif text-charcoal text-lg italic">"Ein Ort der Ruhe, bevor wir uns Ihrer Gesundheit widmen."</p>
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2 space-y-8 lg:pl-8">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage-50 border border-sage-100 text-sage-700 text-xs font-bold tracking-widest uppercase">
                  Die Ordination
                </div>
                
                <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight">
                    Wohlfühlatmosphäre <br/>
                    <span className="text-sage-600">statt Wartezimmer.</span>
                </h2>
                
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                        Der erste Schritt zur Besserung ist, sich gut aufgehoben zu fühlen. 
                        Unsere Räumlichkeiten im Business Park 2 sind bewusst hell und einladend gestaltet.
                    </p>
                    <p>
                        Nehmen Sie in unseren bequemen Sesseln Platz, genießen Sie das natürliche Licht 
                        und lassen Sie den Alltag für einen Moment hinter sich.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-lg shadow-sm text-sage-600">
                            <Sun size={24} />
                        </div>
                        <div>
                            <h4 className="font-serif text-charcoal text-lg">Helles Ambiente</h4>
                            <p className="text-sm text-gray-500">Natürliches Licht für Ihr Wohlbefinden</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-lg shadow-sm text-sage-600">
                            <Wifi size={24} />
                        </div>
                        <div>
                            <h4 className="font-serif text-charcoal text-lg">Freies WLAN</h4>
                            <p className="text-sm text-gray-500">Bleiben Sie vernetzt während Sie warten</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};