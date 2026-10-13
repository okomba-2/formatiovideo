import React, { useState } from 'react';
import { Camera, Layers, Wand2, Music, ArrowRight, Check } from 'lucide-react';

interface Step {
  id: number;
  label: string;
  title: string;
  summary: string;
  details: string[];
  tools: string[];
  output: string;
}

const STEPS: Step[] = [
  {
    id: 1,
    label: 'Étape 01',
    title: 'Direction Artistique & Prompting Cinématographique',
    summary: 'Création d’images clés ultra-réalistes avec une identité visuelle et une consistance de produit irréprochable.',
    details: [
      'Maîtrise des ratios d’éclairage de studio (Rembrandt, rim light, volumétrique)',
      'Techniques de Prompt Weighting pour figer les logos et packagings produits',
      'Upscaling 4K sans perte de texture via Topaz Gigapixel & Magnific AI'
    ],
    tools: ['Midjourney v6.1', 'Flux 1.1 Pro', 'Magnific AI'],
    output: 'Images sources prêtes pour l’animation'
  },
  {
    id: 2,
    label: 'Étape 02',
    title: 'Génération Vidéo & Contrôle Caméra Dynamique',
    summary: 'Transformation des visuels statiques en plans de cinéma fluides avec contrôle des axes de caméra au millimètre.',
    details: [
      'Paramétrage des mouvements de caméra : crash zooms, travellings circulaires, tilts',
      'Gestion du Motion Brush pour animer uniquement les éléments souhaités (fumée, liquides, néons)',
      'Interpolation 60 FPS ultra-fluide sans artefacts ni déformations étranges'
    ],
    tools: ['Runway Gen-3 Alpha', 'Kling AI 1.5', 'Luma Dream Machine'],
    output: 'Plans animés cinématiques haute fidélité'
  },
  {
    id: 3,
    label: 'Étape 03',
    title: 'Sound Design & Voix Off Hyper-Réaliste',
    summary: 'Création de l’ambiance sonore qui donne 80% de l’impact émotionnel à la vidéo publicitaire.',
    details: [
      'Génération de voix off professionnelles avec intonations et respirations naturelles',
      'Création d’effets sonores de transitions percutants (whoosh, sub drops, impacts, risers)',
      'Synchronisation des basses fréquences sur les accélérations d’image'
    ],
    tools: ['ElevenLabs Voice & SFX', 'Udio / Suno', 'Adobe Audition'],
    output: 'Piste sonore multicanal prête au mixage'
  },
  {
    id: 4,
    label: 'Étape 04',
    title: 'Montage Publicitaire & Typographie Animée',
    summary: 'Assemblage rythmé, titrages cinématiques et calibrage colorimétrique pour convertir les spectateurs.',
    details: [
      'Règles du rythme publicitaire court (formats TikTok, Meta Ads 9:16 et 16:9)',
      'Animation de titres percutants (kinetic typography) et kinetic brand logos',
      'Étalonnage colorimétrique pour un rendu homogène digne des productions télévisées'
    ],
    tools: ['Adobe After Effects', 'Premiere Pro', 'DaVinci Resolve'],
    output: 'Master publicitaire final prêt pour la diffusion'
  }
];

export const WorkflowSection: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const activeStep = STEPS.find((s) => s.id === activeStepId) || STEPS[0];

  return (
    <section id="workflow" className="py-24 border-t border-slate-800/80 bg-[#08090D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase font-mono mb-2">
            Méthode étape par étape
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Le pipeline publicitaire complet.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Un processus reproductible conçu pour transformer une simple idée en une publicité vidéo professionnelle en moins d’une journée.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {STEPS.map((step) => {
            const isSelected = activeStepId === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepId(step.id)}
                className={`cursor-pointer p-4 rounded-xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-slate-900 border-blue-500/80 shadow-lg shadow-blue-500/10'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700'
                }`}
              >
                <div className={`text-xs font-mono font-semibold ${isSelected ? 'text-blue-400' : 'text-slate-500'}`}>
                  {step.label}
                </div>
                <div className={`mt-1 text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                  {step.title.split('&')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold text-blue-400 uppercase">
                  {activeStep.label} sur 04
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {activeStep.title}
                </h3>
                <p className="mt-3 text-base text-slate-300 leading-relaxed">
                  {activeStep.summary}
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-3 pt-2">
                {activeStep.details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded bg-blue-500/20 text-blue-400 mt-0.5 shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-slate-300">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Tools list */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400">Logiciels enseignés :</span>
                {activeStep.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual simulation box for this step */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-slate-800">
                <span>RÉSULTAT DE L’ÉTAPE</span>
                <span className="text-blue-400">Prêt pour production</span>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 text-sm text-slate-200">
                <div className="font-semibold text-white mb-1">Livrable clé :</div>
                <div>{activeStep.output}</div>
              </div>

              <div className="text-xs text-slate-400 leading-relaxed">
                Dans cette partie de la formation, tu suis des tutoriels filmés en direct sur l’écran avec exercices pratiques et fichiers modèles fournis.
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveStepId((prev) => (prev < 4 ? prev + 1 : 1))}
                  className="cursor-pointer w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>Passer à l’étape suivante</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
