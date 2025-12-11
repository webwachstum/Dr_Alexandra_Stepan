import React from 'react';
import { Brain, Stethoscope, HeartHandshake, Ambulance, Activity } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8 text-sage-500" />,
      title: "Allgemeinmedizin",
      description: "Umfassende hausärztliche Betreuung, Vorsorgeuntersuchungen und Behandlung akuter und chronischer Erkrankungen."
    },
    {
      icon: <Brain className="w-8 h-8 text-sage-500" />,
      title: "Psychiatrie",
      description: "Diagnostik und Therapie psychischer Erkrankungen mit viel Zeit für das persönliche Gespräch und individuelle Behandlungspläne."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-sage-500" />,
      title: "Psychotherapie",
      description: "Psychotherapeutische Medizin zur Bewältigung von Lebenskrisen, Ängsten oder Depressionen in einem geschützten Rahmen."
    },
    {
      icon: <Ambulance className="w-8 h-8 text-sage-500" />,
      title: "Notarzt",
      description: "Umfangreiche notfallmedizinische Erfahrung für Ihre Sicherheit in akuten medizinischen Situationen."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">Medizinische Kompetenz</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Als Wahlarztordination biete ich Ihnen den Vorteil kurzer Wartezeiten und ausreichend Zeit für eine ausführliche Anamnese und Behandlung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-cream border border-stone-200 hover:border-sage-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sage-500/10"
            >
              <div className="mb-6 inline-block p-4 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-3 group-hover:text-sage-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};