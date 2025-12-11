import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { AccessibilityControls } from './components/AccessibilityControls';
import { WaitingRoomImage } from './components/WaitingRoomImage';

export default function App() {
  const [zoomLevel, setZoomLevel] = useState(1);

  // Function to handle font size changes for accessibility
  const handleZoomChange = (newZoom: number) => {
    setZoomLevel(newZoom);
    document.documentElement.style.fontSize = `${16 * newZoom}px`;
  };

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-charcoal bg-cream selection:bg-sage-100 selection:text-sage-700">
      <Navigation />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <WaitingRoomImage />
        <ContactSection />
      </main>

      <Footer />
      
      <CookieBanner />
      <AccessibilityControls currentZoom={zoomLevel} onZoomChange={handleZoomChange} />
    </div>
  );
}