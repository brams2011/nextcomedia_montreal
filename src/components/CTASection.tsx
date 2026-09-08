import React from 'react';
import { Lang, PageRoute } from '../types';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  lang?: Lang;
  title?: string;
  subtitle?: string;
  onNavigate?: (page: PageRoute) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  lang = 'fr',
  title,
  subtitle,
  onNavigate,
}) => {
  const isFr = lang === 'fr';

  const defaultTitle = isFr
    ? 'Vous cherchez une équipe pour qualifier vos prospects ?'
    : 'Looking for a dedicated team to qualify your insurance leads?';

  const defaultSubtitle = isFr
    ? 'Bénéficiez d\'une équipe de 10 à 15 téléconseillers basés à Cotonou et pilotés depuis Montréal, opérant selon vos directives strictes de qualification.'
    : 'Leverage an experienced team of 10 to 15 reps in Cotonou managed from Montreal, working strictly within your qualification guidelines.';

  const handleContact = () => {
    if (onNavigate) {
      onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Glowing ambient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-blue-300 text-xs font-semibold tracking-wider uppercase border border-white/15 mb-6 backdrop-blur-xs">
          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
          <span>{isFr ? 'Prise de contact B2B' : 'B2B Outreach'}</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          {title || defaultTitle}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtitle || defaultSubtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-xl shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>{isFr ? 'Parler à Nextcomedia' : 'Speak with Nextcomedia'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleContact}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-semibold text-white border border-slate-700 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            {isFr ? 'Demander un devis' : 'Request a quote'}
          </button>
        </div>

        <p className="mt-8 text-xs text-slate-400">
          {isFr
            ? 'Échanges confidentiels sans engagement. Réponse sous 24 à 48 heures ouvrables.'
            : 'Confidential discussions with no obligation. Inquiries answered within 24 to 48 business hours.'}
        </p>
      </div>
    </section>
  );
};
