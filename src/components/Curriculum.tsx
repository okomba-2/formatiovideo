import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Clock, Download, Check } from 'lucide-react';

interface Module {
  number: string;
  title: string;
  duration: string;
  lessonsCount: number;
  description: string;
  lessons: string[];
}

const MODULES: Module[] = [
  {
    number: '01',
    title: 'Direction Artistique & Prompting Cinématographique',
    duration: '2h 45m',
    lessonsCount: 6,
    description: 'Apprends à générer des images photoréalistes et fidèles à la vision de ton client, sans aucune déformation produit.',
    lessons: [
      'Anatomie d’un prompt de publicité de luxe : éclairage, optiques et focales',
      'Maîtrise de Midjourney v6.1 et Flux 1.1 Pro pour les packagings et textures',
      'Création et verrouillage d’une cohérence stylistique sur une série de 10 plans',
      'Upscaling 4K et débruitage professionnel avec Topaz Gigapixel',
      'Exercice pratique : Réaliser 5 concepts pour une marque de maroquinerie',
      'Téléchargement : Fichier ressource de 250+ prompts publicitaires calibrés'
    ]
  },
  {
    number: '02',
    title: 'Génération Vidéo IA & Mouvements de Caméra',
    duration: '3h 30m',
    lessonsCount: 7,
    description: 'Transforme des images fixes en vidéos fluides et cinématiques avec Runway Gen-3, Kling et Luma.',
    lessons: [
      'Les commandes de caméra indispensables : pan, tilt, zoom, dolly & roll',
      'Contrôle millimétré avec le Motion Brush et les masques multi-zones',
      'Éviter les artefacts et déformations sur les visages et objets en mouvement',
      'Gérer les cadences d’images (24fps cinématique vs 60fps publicitaire)',
      'Assembler des transitions imperceptibles entre deux plans IA',
      'Exercice pratique : Animer un spot publicitaire automobile de 15 secondes',
      'Template de projet : Fiche de tournage virtuel et seeds de génération'
    ]
  },
  {
    number: '03',
    title: 'Sound Design & Voix Off IA Hyper-Réaliste',
    duration: '2h 15m',
    lessonsCount: 5,
    description: 'Donne une puissance émotionnelle à tes vidéos grâce à des bruitages sur-mesure et des voix captivantes.',
    lessons: [
      'Création de voix off naturelles et multilingues avec ElevenLabs',
      'Direction d’acteur virtuelle : intonations, soupirs, pauses dramatiques',
      'Génération d’effets sonores personnalisés (bruitages liquides, impacts, lasers)',
      'Mixage dynamique et compression pour une clarté maximale sur mobile',
      'Banque de ressources sonores libres de droits pour vos clients'
    ]
  },
  {
    number: '04',
    title: 'Montage, Kinetic Typography & Effets Publicitaires',
    duration: '3h 10m',
    lessonsCount: 6,
    description: 'Assemble le tout dans After Effects ou Premiere Pro pour créer une vidéo percutante prête pour la diffusion.',
    lessons: [
      'Le rythme publicitaire TikTok & Instagram Reels : la règle des 3 premières secondes',
      'Création de titres dynamiques et titrages cinématiques',
      'Intégration d’éléments graphiques, logos vectoriels et motion design',
      'Color grading et uniformisation des teintes entre les différents plans IA',
      'Exports optimisés pour Meta Ads, YouTube Shorts et télévision',
      'Fichiers de projets After Effects (.aep) prêts à l’emploi'
    ]
  },
  {
    number: '05',
    title: 'Offre Commerciale, Portfolio & Clients à 2 000€',
    duration: '2h 20m',
    lessonsCount: 4,
    description: 'Comment positionner tes compétences, créer un showreel irrésistible et signer tes premiers contrats.',
    lessons: [
      'Packager une offre de publicité vidéo IA irrésistible pour les marques e-commerce',
      'La structure exacte d’un devis à 1 500 € – 3 000 € par vidéo',
      'Stratégie de prospection douce : démarcher 10 marques et obtenir 3 rendez-vous',
      'Gérer les allers-retours clients et protéger ses créations avec un contrat solide'
    ]
  }
];

export const Curriculum: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="programme" className="py-24 border-t border-slate-800/80 bg-[#06070a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase font-mono mb-2">
            Curriculum complet
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            28 leçons pour devenir expert.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Un apprentissage orienté 100% pratique. Tu construis de vrais projets tout au long de la formation.
          </p>
        </div>

        {/* Modules Accordion */}
        <div className="space-y-4">
          {MODULES.map((mod, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={mod.number}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleModule(idx)}
                  className="cursor-pointer w-full p-6 sm:p-8 text-left flex items-start sm:items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                    <span className="font-mono text-base font-bold text-blue-400">
                      Module {mod.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {mod.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 text-slate-400 text-xs sm:text-sm font-mono">
                    <span className="hidden md:inline">{mod.duration}</span>
                    <span className="hidden sm:inline">·</span>
                    <span>{mod.lessonsCount} leçons</span>
                    <div className="p-1 rounded-lg bg-slate-800 text-slate-300">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 border-t border-slate-800/60 bg-slate-950/40">
                    <p className="text-sm text-slate-300 mb-6 font-normal">
                      {mod.description}
                    </p>

                    <div className="space-y-2.5">
                      {mod.lessons.map((lesson, lIdx) => (
                        <div
                          key={lIdx}
                          className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/50 text-xs sm:text-sm text-slate-300"
                        >
                          <div className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-[10px] font-bold">
                            {lIdx + 1}
                          </div>
                          <span>{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Resources banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 via-slate-900 to-blue-900/20 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Toutes les ressources de production incluses
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Fichiers After Effects, banques de prompts, contrats types, devis pré-remplis et accès Discord privé à vie.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-300 shrink-0 bg-blue-950/80 px-4 py-2 rounded-lg border border-blue-800">
            <Download className="w-4 h-4" />
            <span>Accès immédiat après inscription</span>
          </div>
        </div>
      </div>
    </section>
  );
};
