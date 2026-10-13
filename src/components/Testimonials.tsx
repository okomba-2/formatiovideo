import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  location: string;
  result: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Julien Mercier',
    role: 'Motion Designer Freelance',
    location: 'Lyon',
    result: '+3 400 € facturés le premier mois',
    quote: 'Avant la formation, je passais des jours à animer des vecteurs classiques. Grâce au module sur Runway Gen-3 et le prompting d’éclairage, j’ai pu vendre deux spots complets à une marque de montres et une agence de publicité dès ma troisième semaine.'
  },
  {
    name: 'Sarah Benali',
    role: 'Directrice Artistique & Créatrice de contenu',
    location: 'Paris',
    result: 'ROAS multiplié par 2.4 sur TikTok Ads',
    quote: 'Notre équipe marketing avait du mal à renouveler les créatifs publicitaires chaque semaine. Ce pipeline nous permet de sortir 5 déclinaisons cinématiques par jour. La clarté des leçons sur le sound design et le rythme After Effects fait toute la différence.'
  },
  {
    name: 'Alexandre Fontaine',
    role: 'Fondateur de studio digital',
    location: 'Bordeaux',
    result: 'Contrat annuel signé avec une marque de luxe',
    quote: 'Ce n’est pas un simple tutoriel d’outils IA, c’est une vraie méthode professionnelle de direction artistique. Les clients sont bluffés par la cohérence des plans et le rendu 4K. La formation est rentabilisée dès la toute première vidéo livrée.'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="temoignages" className="py-24 border-t border-slate-800/80 bg-[#06070a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase font-mono mb-2">
            Retours d'expérience
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Ils ont transformé leur activité créative.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Des motion designers, monteurs et créateurs qui appliquent quotidiennement la méthode.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div className="space-y-4">
                {/* Result Highlight */}
                <div className="text-sm font-semibold text-blue-400 font-mono">
                  {t.result}
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  « {t.quote} »
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {t.role} · {t.location}
                  </div>
                </div>

                <div className="flex text-amber-400" aria-label="5 étoiles sur 5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
