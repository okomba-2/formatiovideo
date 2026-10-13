import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Ai-je besoin d’un ordinateur puissant pour suivre la formation ?',
    answer: 'Non ! Contrairement à la 3D traditionnelle (Blender, Cinema 4D) qui exige de coûteuses cartes graphiques, 90% des calculs d’intelligence artificielle sont effectués dans le cloud (sur les serveurs de Midjourney, Runway, Kling). Un simple PC portable ou Mac standard avec une connexion internet suffit pour générer les images et vidéos.'
  },
  {
    question: 'Quel est le budget mensuel à prévoir pour les outils d’intelligence artificielle ?',
    answer: 'Pour démarrer confortablement, comptez environ 30€ à 50€/mois pour les abonnements de base (Midjourney standard ~30€, et crédits Runway ou Kling selon vos projets). Nous vous enseignons également comment optimiser vos crédits et rentabiliser ces coûts dès votre premier contrat client.'
  },
  {
    question: 'Je débute complètement en montage vidéo, est-ce accessible ?',
    answer: 'Absolument. La formation est pensée pour vous guider pas à pas, de la prise en main des outils d’IA jusqu’au montage dans After Effects et Premiere Pro. Les templates fournis vous permettent d’obtenir des résultats de haut niveau même si vous n’avez jamais fait de montage auparavant.'
  },
  {
    question: 'L’accès à la formation est-il limité dans le temps ?',
    answer: 'Non, votre accès est illimité et à vie. Vous pouvez suivre les modules à votre propre rythme, revoir les leçons autant de fois que nécessaire, et bénéficier gratuitement de toutes les futures mises à jour lors de la sortie de nouveaux modèles IA.'
  },
  {
    question: 'Comment fonctionne la garantie satisfait ou remboursé de 30 jours ?',
    answer: 'Si vous appliquez la méthode et constatez qu’elle ne répond pas à vos attentes, il vous suffit de nous envoyer un e-mail dans les 30 jours suivant votre inscription. Nous vous rembourserons intégralement, sans justification requise.'
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 border-t border-slate-800/80 bg-[#06070a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase font-mono mb-2">
            Questions fréquentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Tout ce que tu dois savoir avant de commencer.
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="cursor-pointer w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div className="p-1 rounded-md bg-slate-800 text-slate-300 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
