import React, { useState } from 'react';
import { Menu, X, ArrowRight, Play } from 'lucide-react';

interface HeaderProps {
  onOpenEnroll: (plan?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnroll }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#08090D]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark avec reflet bleu subtil */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
        >
          <span className="text-2xl font-black tracking-tight logo-blue-shimmer font-['Outfit'] select-none">
            Motion Design IA
          </span>
        </a>

        {/* Zone 2: Navigation Links (Clean single-line prose) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a 
            href="#programme" 
            className="hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-blue-500/50"
          >
            Programme
          </a>
          <a 
            href="#workflow" 
            className="hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-blue-500/50"
          >
            Workflow IA
          </a>
          <a 
            href="#showreel" 
            className="hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-blue-500/50"
          >
            Réalisations
          </a>
          <a 
            href="#temoignages" 
            className="hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-blue-500/50"
          >
            Témoignages
          </a>
          <a 
            href="#tarifs" 
            className="hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-blue-500/50"
          >
            Tarifs
          </a>
        </nav>

        {/* Zone 3: 1 Single Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenEnroll('pro')}
            className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all duration-200 rounded-lg shadow-lg shadow-blue-600/25 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <span>Rejoindre la formation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0d0f17] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium text-slate-300">
            <a 
              href="#programme" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white transition-colors"
            >
              Programme
            </a>
            <a 
              href="#workflow" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white transition-colors"
            >
              Workflow IA
            </a>
            <a 
              href="#showreel" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white transition-colors"
            >
              Réalisations
            </a>
            <a 
              href="#temoignages" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white transition-colors"
            >
              Témoignages
            </a>
            <a 
              href="#tarifs" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white transition-colors"
            >
              Tarifs
            </a>
          </div>
          <div className="pt-4 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnroll('pro');
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
            >
              <span>Rejoindre la formation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
