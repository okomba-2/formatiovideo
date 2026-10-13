import React, { useState } from 'react';
import { X, Check, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const EnrollModal: React.FC<EnrollModalProps> = ({ isOpen, onClose, defaultPlan = 'pro' }) => {
  const [selectedPlan, setSelectedPlan] = useState<string>(defaultPlan);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Veuillez entrer une adresse e-mail valide.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  const isPro = selectedPlan === 'pro';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wide">
                Inscription Immédiate
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Rejoins Motion Design IA
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Accède immédiatement à l'espace membre, aux 28 leçons et à la bibliothèque de prompts.
              </p>
            </div>

            {/* Plan selector inside modal */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => setSelectedPlan('autonomie')}
                className={`cursor-pointer p-3.5 rounded-xl border text-left transition-all ${
                  !isPro
                    ? 'border-blue-500 bg-slate-900 shadow-sm'
                    : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                }`}
              >
                <div className="text-xs font-semibold text-slate-400">Autonomie</div>
                <div className="text-lg font-bold text-white font-mono">297 €</div>
                <div className="text-[11px] text-slate-500">Accès complet à vie</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedPlan('pro')}
                className={`cursor-pointer p-3.5 rounded-xl border text-left transition-all relative ${
                  isPro
                    ? 'border-blue-500 bg-slate-900 shadow-md shadow-blue-500/10'
                    : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                }`}
              >
                <div className="text-xs font-semibold text-blue-400 flex items-center justify-between">
                  <span>Pro & Mentorat</span>
                  <span className="text-[9px] bg-blue-600 text-white px-1.5 py-0.5 rounded font-mono">TOP</span>
                </div>
                <div className="text-lg font-bold text-white font-mono">497 €</div>
                <div className="text-[11px] text-slate-400">Revues de vos 3 spots</div>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Prénom & Nom
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Thomas Dumas"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex: thomas@domaine.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {error && (
                <div className="text-xs text-rose-400">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="cursor-pointer w-full py-4 px-6 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                <span>Accéder immédiatement à la formation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-slate-400" />
                <span>Paiement sécurisé · Garantie 30 jours satisfait ou remboursé</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Bienvenue dans l'aventure, {name || 'Créateur'} !
            </h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              Ton compte pour la <strong className="text-white">{isPro ? 'Formule Pro & Mentorat' : 'Formule Autonomie'}</strong> a été initialisé. Un lien d'activation instantané vient d'être envoyé à <strong className="text-blue-400">{email}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="cursor-pointer px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-sm font-semibold text-white border border-slate-700 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
