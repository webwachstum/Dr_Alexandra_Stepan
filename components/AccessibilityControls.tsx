import React, { useState } from 'react';
import { Type, Minus, Plus, X } from 'lucide-react';

interface AccessibilityControlsProps {
  currentZoom: number;
  onZoomChange: (zoom: number) => void;
}

export const AccessibilityControls: React.FC<AccessibilityControlsProps> = ({ currentZoom, onZoomChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 z-40 flex flex-col items-end gap-2">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl border border-stone-200 p-4 mb-2 animate-in slide-in-from-bottom-5 fade-in duration-300 w-48">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-charcoal">Schriftgröße</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
              <X size={16} />
            </button>
          </div>
          
          <div className="flex items-center justify-between bg-stone-50 rounded-md p-1 border border-stone-200">
            <button 
              onClick={() => onZoomChange(Math.max(1, currentZoom - 0.1))}
              className="p-2 hover:bg-white hover:shadow-sm rounded transition-all text-charcoal disabled:opacity-30"
              disabled={currentZoom <= 1}
              aria-label="Schrift verkleinern"
            >
              <Minus size={18} />
            </button>
            <span className="font-bold text-sage-600 w-12 text-center text-sm">
              {Math.round(currentZoom * 100)}%
            </span>
            <button 
              onClick={() => onZoomChange(Math.min(1.5, currentZoom + 0.1))}
              className="p-2 hover:bg-white hover:shadow-sm rounded transition-all text-charcoal disabled:opacity-30"
              disabled={currentZoom >= 1.5}
              aria-label="Schrift vergrößern"
            >
              <Plus size={18} />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Barrierefreiheit für bessere Lesbarkeit
          </p>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white text-charcoal p-3 rounded-full shadow-lg border border-stone-200 hover:bg-sage-50 transition-all hover:scale-105 group"
        aria-label="Anzeige-Einstellungen öffnen"
      >
        <Type className="w-6 h-6 text-sage-600 group-hover:text-sage-700" />
      </button>
    </div>
  );
};