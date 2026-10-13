import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowRight, Zap } from 'lucide-react';

interface PricingProps {
  onOpenEnroll: (plan: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenEnroll }) => {
  const [billingCycle, setBillingCycle] = useState<'once' | 'split'>('once');

  return (
    <section id="tarifs" className="py-24 border-t border-slate-800/80 bg-[#08090D] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase font-mono mb-2">
            Investissement & Accès
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Tarifs transparents. Accès à vie.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Rejoins la formation aujourd’hui et accède immédiatement à l’ensemble des modules, fichiers sources et mises à jour continues.
          </p>

          {/* Billing Switcher (Functional Segmented Control) */}
          <div className="mt-8 inline-flex items-center p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setBillingCycle('once')}
              className={`cursor-pointer px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                billingCycle === 'once'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Paiement en 1 fois (Économique)
            </button>
            <button
              onClick={() => setBillingCycle('split')}
              className={`cursor-pointer px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                billingCycle === 'split'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Paiement en 3 fois sans frais
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {/* Plan 1: Autonomie */}
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-950/80 border border-slate-800/90 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-semibold text-slate-400 uppercase">
                Formule Autonomie
              </div>
              <h3 className="text-2xl font-bold text-white mt-1">
                Cursus Complet
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Idéal pour apprendre à ton rythme avec l'ensemble des vidéos et fichiers sources.
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-white font-mono">
                  {billingCycle === 'once' ? '297 €' : '3 x 109 €'}
                </span>
                <span className="text-xs text-slate-400">
                  {billingCycle === 'once' ? 'paiement unique' : '/ mois pendant 3 mois'}
                </span>
              </div>

              <div className="mt-8 space-y-3.5 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>28 leçons vidéo HD accessibles à vie 24/7</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Bibliothèque de 250+ prompts publicitaires testés</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Templates After Effects & Premiere Pro inclus</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Accès à la communauté Discord privée</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Mises à jour incluses lors des sorties de nouveaux modèles IA</span>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={() => onOpenEnroll('autonomie')}
                className="cursor-pointer w-full py-4 px-6 text-sm font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
              >
                <span>Choisir la formule Autonomie</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Plan 2: Pro & Mentorat (Recommandé) */}
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border-2 border-blue-500 shadow-2xl shadow-blue-500/15 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[11px] font-bold font-mono uppercase tracking-wider py-1 px-4 rounded-bl-lg">
              Recommandé
            </div>

            <div>
              <div className="text-xs font-mono font-semibold text-blue-400 uppercase">
                Formule Accompagnement
              </div>
              <h3 className="text-2xl font-bold text-white mt-1">
                Programme Pro & Mentorat
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Pour aller deux fois plus vite, sécuriser tes premiers clients et avoir des retours personnalisés sur tes vidéos.
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-white font-mono">
                  {billingCycle === 'once' ? '497 €' : '3 x 179 €'}
                </span>
                <span className="text-xs text-slate-400">
                  {billingCycle === 'once' ? 'paiement unique' : '/ mois pendant 3 mois'}
                </span>
              </div>

              <div className="mt-8 space-y-3.5 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="font-medium text-white">Tout ce qui est inclus dans la Formule Autonomie</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Revues vidéo personnalisées</strong> de tes 3 premiers spots publicitaires</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Modèles de contrats, devis et grilles tarifaires prêts à envoyer</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Accès prioritaire aux canaux d'entraide et sessions Q&A en direct</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Canal d’opportunités d’affaires et briefs clients partagés</span>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={() => onOpenEnroll('pro')}
                className="cursor-pointer w-full py-4 px-6 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Rejoindre le Programme Pro</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Guarantee Badge */}
        <div className="mt-12 text-center max-w-xl mx-auto flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-400">
          <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
          <span>
            Garantie 30 jours satisfait ou remboursé sans condition. Si la méthode ne te convient pas, un simple e-mail suffit.
          </span>
        </div>
      </div>
    </section>
  );
};
