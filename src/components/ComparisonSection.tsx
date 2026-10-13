import React from 'react';
import { X, Check } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section className="py-24 border-t border-slate-800/80 bg-[#08090D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase font-mono mb-2">
            Rentabilité & Efficacité
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Pourquoi le marché bascule sur l’IA.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Compare une production publicitaire classique avec la méthode enseignée dans la formation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Méthode Traditionnelle */}
          <div className="p-8 rounded-2xl bg-slate-950/70 border border-slate-800/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold text-slate-500 uppercase">
                  Production Classique
                </span>
                <span className="text-xs text-rose-400 font-mono">Lourd & Coûteux</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-200">
                Tournage & Studio Physique
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Idéal pour les budgets de grands groupes du CAC 40, mais inaccessible ou non rentable pour 95% des marques modernes.
              </p>

              <div className="mt-8 space-y-4 text-sm text-slate-400">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-rose-500/10 text-rose-400 mt-0.5 shrink-0">
                    <X className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-300">Délai : 3 à 5 semaines</span>
                    <p className="text-xs text-slate-500">Repérages, casting d’acteurs, tournage et post-production lente.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-rose-500/10 text-rose-400 mt-0.5 shrink-0">
                    <X className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-300">Coût : 8 000 € à 25 000 €</span>
                    <p className="text-xs text-slate-500">Location de studio, caméras RED/Arri, éclairagistes, maquilleurs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-rose-500/10 text-rose-400 mt-0.5 shrink-0">
                    <X className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-300">Modifications : Presque impossibles</span>
                    <p className="text-xs text-slate-500">Chaque modification de plan exige un nouveau jour de tournage.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-rose-500/10 text-rose-400 mt-0.5 shrink-0">
                    <X className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-300">Équipe : 4 à 8 spécialistes</span>
                    <p className="text-xs text-slate-500">Coordination complexe et marges réparties entre tous les intervenants.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-900 text-xs font-mono text-slate-500">
              Résultat : 1 seule déclinaison vidéo pour un coût élevé.
            </div>
          </div>

          {/* Méthode Motion Design IA */}
          <div className="p-8 rounded-2xl bg-slate-900/90 border border-blue-500/60 shadow-xl shadow-blue-600/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold text-blue-400 uppercase">
                  Méthode Motion Design IA
                </span>
                <span className="text-xs text-blue-400 font-mono font-bold">Agile & Ultra-Rentable</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Créateur Autonome & Pipeline IA
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                La formule qui permet à un seul créateur de produire des vidéos cinématiques à la demande depuis son ordinateur.
              </p>

              <div className="mt-8 space-y-4 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-blue-500/20 text-blue-400 mt-0.5 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">Délai : Moins de 24 heures</span>
                    <p className="text-xs text-slate-400">Génération des plans le matin, animation et montage l’après-midi.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-blue-500/20 text-blue-400 mt-0.5 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">Facturation : 1 500 € à 3 000 € avec 90% de marge</span>
                    <p className="text-xs text-slate-400">Coûts d’outils négligeables (~30€/mois), tout le reste est du bénéfice net.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-blue-500/20 text-blue-400 mt-0.5 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">Itérations infinies en 1 clic</span>
                    <p className="text-xs text-slate-400">Test de variations de décors, d’ambiances et de langues en quelques minutes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-blue-500/20 text-blue-400 mt-0.5 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">100% autonome de chez soi</span>
                    <p className="text-xs text-slate-400">Aucun besoin de matériel encombrant ni de studio de tournage.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 text-xs font-mono text-blue-300">
              Résultat : 3 à 5 déclinaisons A/B testing livrées au client en 1 jour.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
