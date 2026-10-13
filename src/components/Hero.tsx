import React from 'react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenEnroll: (plan?: string) => void;
  onScrollToShowreel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnroll, onScrollToShowreel }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Subtle radial ambient light */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 blur-[120px] rounded-full" 
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* LE TITRE EST LE TOUT PREMIER ÉLÉMENT : AUCUN BADGE AU-DESSUS */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.06] max-w-5xl mx-auto">
          Apprends à créer des vidéos publicitaires avec l'IA.
        </h1>

        {/* Sous-titre descriptif percutant */}
        <p className="mt-8 text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          De la direction artistique au montage final. Maîtrise le pipeline complet utilisé par les studios
          pour concevoir des spots cinématographiques haute conversion en moins de 24 heures.
        </p>

        {/* Actions principales */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenEnroll('pro')}
            className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all duration-200 rounded-xl shadow-xl shadow-blue-600/30 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <span>Rejoindre la formation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={onScrollToShowreel}
            className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 transition-all duration-200 rounded-xl whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
          >
            <Play className="w-4 h-4 text-blue-400 fill-blue-400" />
            <span>Voir les vidéos réalisées</span>
          </button>
        </div>

        {/* Métadonnées & preuves sociales discrètes (sans pilules, séparateurs typographiques ·) */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="text-slate-200 font-medium">Pipeline éprouvé</span>
            <span className="text-slate-500">Runway, Midjourney & AE</span>
          </div>
          <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="text-slate-200 font-medium">140+ créateurs formés</span>
            <span className="text-slate-500">Note 4.9/5</span>
          </div>
          <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="text-slate-200 font-medium">Garantie 30 jours</span>
            <span className="text-slate-500">Satisfait ou remboursé</span>
          </div>
        </div>
      </div>
    </section>
  );
};
