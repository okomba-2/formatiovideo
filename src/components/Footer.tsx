import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#040507] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-900">
          <div>
            <span className="text-xl font-black tracking-tight logo-blue-shimmer font-['Outfit'] select-none">
              Motion Design IA
            </span>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-sm">
              La méthode moderne pour créer des vidéos publicitaires haute conversion grâce aux outils d'intelligence artificielle.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-xs sm:text-sm text-slate-400">
            <a href="#programme" className="hover:text-white transition-colors">Programme</a>
            <a href="#workflow" className="hover:text-white transition-colors">Workflow IA</a>
            <a href="#showreel" className="hover:text-white transition-colors">Réalisations</a>
            <a href="#temoignages" className="hover:text-white transition-colors">Témoignages</a>
            <a href="#tarifs" className="hover:text-white transition-colors">Tarifs</a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Motion Design IA. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Conditions Générales de Vente</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Contact Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
