import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Sliders, Film, ArrowUpRight } from 'lucide-react';

import perfumeImg from '../assets/images/ad_perfume_luxury_1791830572188.jpg';
import sneakerImg from '../assets/images/ad_sneaker_cyber_1791830583616.jpg';
import drinkImg from '../assets/images/ad_energy_drink_1791830593950.jpg';

interface Project {
  id: string;
  client: string;
  title: string;
  category: string;
  image: string;
  duration: string;
  tools: string[];
  metrics: string;
  promptArt: string;
  promptMotion: string;
  promptAudio: string;
  parameters: {
    motionStrength: number;
    cameraPan: string;
    guidance: number;
    fps: number;
  };
}

const PROJECTS: Project[] = [
  {
    id: 'perfume',
    client: 'Nocturne Parfums (Paris)',
    title: 'Spot Publicitaire Haute Joaillerie & Fragrance',
    category: 'Luxe & Beauté',
    image: perfumeImg,
    duration: '0:15',
    tools: ['Midjourney v6.1', 'Runway Gen-3 Alpha', 'After Effects', 'ElevenLabs'],
    metrics: '+210% de taux de rétention vidéo vs shooting traditionnel',
    promptArt: 'Cinematic commercial shot of a luxury minimalist perfume glass bottle floating among shimmering liquid droplets and soft smoke, dramatic studio lighting with deep blue and gold refractions, 8k commercial quality',
    promptMotion: 'Slow 360 orbit camera, suspended micro-droplets physics, subtle volumetric light rays expanding, smooth cinematic inertia',
    promptAudio: 'Deep atmospheric sub-bass swell, crystalline glass chime at 0:03, whisper-quiet ASMR breath with Parisian French female voiceover',
    parameters: {
      motionStrength: 6,
      cameraPan: 'Orbit Right + Tilt Up 12°',
      guidance: 8.5,
      fps: 60
    }
  },
  {
    id: 'sneaker',
    client: 'AeroLab Footwear',
    title: 'Lancement Commercial Sneakers Techwear',
    category: 'E-commerce & Sportswear',
    image: sneakerImg,
    duration: '0:20',
    tools: ['Flux 1.1 Pro', 'Kling AI 1.5', 'Premiere Pro', 'Topaz Video AI'],
    metrics: 'Coût par clic réduit de 43% sur Meta Ads & TikTok',
    promptArt: 'Commercial advertising shot of a futuristic sleek sneaker suspended in dynamic motion with glowing light trails and floating architectural particles, cyan rim lighting',
    promptMotion: 'Fast crash zoom in, zero-gravity anti-gravitational particle explosion, hyper-dynamic neon streak follow-through',
    promptAudio: 'Industrial electro riser, pneumatic whoosh on impact, heavy compressed kick with glitch textures',
    parameters: {
      motionStrength: 8,
      cameraPan: 'Crash Zoom In + 180° Spin',
      guidance: 7.2,
      fps: 60
    }
  },
  {
    id: 'drink',
    client: 'Eclipse Energy Beverage',
    title: 'Spot Digital Boisson Énergisante Zesty Citrus',
    category: 'Food & Beverage DTC',
    image: drinkImg,
    duration: '0:12',
    tools: ['Midjourney v6.1', 'Luma Dream Machine', 'After Effects', 'Audition'],
    metrics: '85 000€ de chiffre d’affaires généré en première semaine',
    promptArt: 'High-energy commercial advertisement shot of a sleek frosted matte black beverage can exploding through crystal water splash and floating neon citrus slices, 8k advertising still',
    promptMotion: 'High-speed liquid collision, splash physics, 1000fps ultra slow-motion reveal, water droplets dispersing outwards',
    promptAudio: 'Crisp can opening sound effect, effervescent fizz hiss in binaural stereo, punchy modern house beat drop',
    parameters: {
      motionStrength: 9,
      cameraPan: 'Fixed Macro Shot + Liquid Wave',
      guidance: 9.0,
      fps: 120
    }
  }
];

export const Showreel: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('perfume');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(35);
  const [showParameters, setShowParameters] = useState<boolean>(false);

  const activeProject = PROJECTS.find((p) => p.id === selectedId) || PROJECTS[0];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1.5));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="showreel" className="py-24 border-t border-slate-800/80 bg-[#06070a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase font-mono mb-2">
              Réalisations concrètes
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Des spots créés à 100% avec l'IA.
            </h2>
          </div>
          <p className="text-base text-slate-400 max-w-md">
            Chaque projet ci-dessous a été produit en moins de 24h sans studio de tournage ni équipe de tournage physique.
          </p>
        </div>

        {/* Project Selector (Functional Segmented Buttons) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl mb-8">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              onClick={() => {
                setSelectedId(project.id);
                setProgress(15);
              }}
              className={`cursor-pointer px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedId === project.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {project.category} · {project.client.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Video Player Display Card */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
          <div className="relative aspect-video w-full overflow-hidden bg-black flex items-center justify-center">
            {/* Main Visual Image with subtle zoom & pan simulation */}
            <img
              src={activeProject.image}
              alt={activeProject.title}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                isPlaying ? 'scale-105 filter brightness-105' : 'scale-100'
              }`}
            />

            {/* Cinematic Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 pointer-events-none" />

            {/* Play/Pause central indicator overlay when paused */}
            {!isPlaying && (
              <button
                onClick={() => setIsPlaying(true)}
                className="cursor-pointer absolute inset-0 m-auto w-20 h-20 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-2xl hover:bg-blue-500 hover:scale-110 transition-all focus:outline-none"
                aria-label="Lecture"
              >
                <Play className="w-8 h-8 fill-white ml-1" />
              </button>
            )}

            {/* Top Bar inside Video Player */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 z-10">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 font-mono">
                  {activeProject.duration} HD 4K
                </span>
                <span className="hidden sm:inline text-white/80 font-medium">
                  {activeProject.client}
                </span>
              </div>
              <button
                onClick={() => setShowParameters(!showParameters)}
                className="cursor-pointer px-3 py-1.5 bg-black/60 backdrop-blur-md hover:bg-black/90 rounded border border-white/15 flex items-center gap-1.5 transition-colors text-white font-medium"
              >
                <Sliders className="w-3.5 h-3.5 text-blue-400" />
                <span>{showParameters ? 'Masquer les prompts' : 'Voir les coulisses du prompt'}</span>
              </button>
            </div>

            {/* Bottom Controls Bar inside Video Player */}
            <div className="absolute bottom-4 left-4 right-4 z-10 space-y-3">
              {/* Timeline Progress Bar */}
              <div
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = (e.clientX - rect.left) / rect.width;
                  setProgress(Math.round(pos * 100));
                }}
                className="cursor-pointer h-1.5 w-full bg-white/20 rounded-full overflow-hidden hover:h-2.5 transition-all group"
              >
                <div
                  className="h-full bg-blue-500 rounded-full relative transition-all"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Controls row */}
              <div className="flex items-center justify-between text-white text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="cursor-pointer p-1.5 hover:text-blue-400 transition-colors"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="cursor-pointer p-1.5 hover:text-blue-400 transition-colors"
                    aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-blue-400" />}
                  </button>
                  <span className="font-mono text-slate-300">
                    0:0{Math.floor((progress / 100) * 15)} / {activeProject.duration}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden md:inline text-xs text-blue-300 font-medium">
                    {activeProject.metrics}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Prompt Pipeline Card Footer */}
          <div className="p-6 sm:p-8 bg-slate-900/90 border-t border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              <div className="lg:col-span-2 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>{activeProject.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-blue-400 font-medium">{activeProject.client}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {activeProject.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Spot publicitaire complet généré à partir de zéro en utilisant des générateurs d'images IA
                  pour la cohérence produit, Runway Gen-3 pour le motion design fluide et un mastering sonore personnalisé.
                </p>

                {/* Software Stack */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-slate-500 mr-2">Outils utilisés :</span>
                  {activeProject.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client outcome metric */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">
                  Impact Publicitaire
                </div>
                <div className="text-base font-bold text-emerald-400">
                  {activeProject.metrics}
                </div>
                <div className="text-xs text-slate-400 pt-1">
                  Budget de production économisé : ~6 500 € par rapport à un tournage réel en studio.
                </div>
              </div>
            </div>

            {/* Prompt Breakdown Drawer */}
            {showParameters && (
              <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/80 space-y-1.5">
                  <div className="text-blue-400 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Prompt Image (Midjourney)</span>
                  </div>
                  <p className="text-slate-300 leading-normal font-sans">
                    « {activeProject.promptArt} »
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/80 space-y-1.5">
                  <div className="text-cyan-400 font-bold flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5" />
                    <span>Mouvement Caméra (Runway)</span>
                  </div>
                  <p className="text-slate-300 leading-normal font-sans">
                    « {activeProject.promptMotion} »
                  </p>
                  <div className="text-[11px] text-slate-400 pt-1">
                    Vitesse: {activeProject.parameters.motionStrength} · {activeProject.parameters.cameraPan}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/80 space-y-1.5">
                  <div className="text-indigo-400 font-bold flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Sound Design (ElevenLabs)</span>
                  </div>
                  <p className="text-slate-300 leading-normal font-sans">
                    « {activeProject.promptAudio} »
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
