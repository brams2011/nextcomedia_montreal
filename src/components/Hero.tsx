import React from 'react';
import { Lang, PageRoute } from '../types';
import { ArrowRight, CheckCircle2, TrendingUp, Star, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  lang?: Lang;
  onNavigate: (page: PageRoute) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang = 'fr', onNavigate }) => {
  const isFr = lang === 'fr';

  const titlePrefix = isFr ? 'Des prospects ' : 'Better ';
  const titleGradient = isFr ? 'mieux qualifiés' : 'qualified prospects';
  const titleSuffix = isFr ? " pour votre cabinet d'assurance." : ' for your insurance brokerage.';

  const subtitle = isFr
    ? 'Nextcomedia prend contact avec vos prospects, les qualifie selon vos critères et facilite la prise de rendez-vous avec vos courtiers certifiés.'
    : 'Nextcomedia reaches out to your prospects, qualifies them according to your criteria, and books qualified appointments for your licensed brokers.';

  const badge = isFr
    ? 'Centre d\'appels Pilotage depuis Montréal'
    : 'Call Center Management from Montreal';

  const ctaPrimary = isFr ? 'Demander un devis' : 'Request a quote';
  const ctaSecondary = isFr ? 'Découvrir notre approche' : 'Discover our approach';

  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 bg-gradient-to-b from-blue-50/60 via-slate-50 to-white">
      {/* Soft luminous background effects matching brand colors */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-blue-400/10 via-purple-400/5 to-transparent rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Copy & Actions (7 cols on lg) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Credibility Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-blue-200/90 shadow-xs mb-6 hover:border-blue-300 transition-colors">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 tracking-tight">
                {badge}
              </span>
            </div>

            {/* Main Headline with Gradient */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.14] mb-6">
              {titlePrefix}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                {titleGradient}
              </span>
              {titleSuffix}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                type="button"
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-md shadow-blue-500/25 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                id="hero-phone-call-button"
                href="tel:18889076276"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-blue-700 bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50/70 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100/80 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PhoneCall className="w-4 h-4 text-blue-600 animate-pulse" />
                </div>
                <div className="text-left leading-tight">
                  <span className="block text-xs font-medium text-slate-500">
                    {isFr ? 'Assistante téléphonique' : 'Phone Assistant'}
                  </span>
                  <span className="font-bold text-slate-900 tracking-tight text-sm sm:text-base">
                    1 888 907 6276
                  </span>
                </div>
              </a>
            </div>

            {/* 3 Reassurance Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 text-left">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-blue-100/90 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">
                    {isFr ? 'Critères sur-mesure' : 'Custom Criteria'}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {isFr ? 'Selon votre grille de courtage.' : 'Tailored to your parameters.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-purple-100/90 text-purple-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">
                    {isFr ? 'Conformité Loi 25' : 'Law 25 Compliant'}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {isFr ? 'Procédures encadrées & ÉFVP.' : 'PIA and privacy protocols.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-blue-100/90 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">
                    {isFr ? '10 à 15 téléprospection' : '10 to 15 Reps'}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {isFr ? 'Centre d\'appels dédié à Cotonou.' : 'Dedicated Cotonou center.'}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Photo Presentation Card (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-3xl blur-2xl -z-10"></div>

            {/* Main Presentation Card (faithful to hero-team-collaboration-opt.png) */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white group hover:shadow-indigo-500/15 transition-all duration-300 max-w-md mx-auto">
              
              {/* Top Card Section: Content and Integrated Collaboration Photo */}
              <div className="relative min-h-[380px] sm:min-h-[420px] bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
                
                {/* Background Collaboration Photo placed on the right with soft gradient mask */}
                <div className="absolute inset-y-0 right-0 w-3/4 sm:w-2/3 pointer-events-none overflow-hidden">
                  <img
                    src="/assets/hero/hero-team-collaboration-opt.png"
                    alt={isFr ? 'Équipe Nextcomedia en collaboration' : 'Nextcomedia team collaboration'}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if needed
                      const target = e.currentTarget;
                      if (!target.src.includes('hero-colleagues')) {
                        target.src = '/assets/hero/hero-colleagues.jpg';
                      }
                    }}
                  />
                  {/* Smooth horizontal gradient to blend seamlessly into white card background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 sm:via-white/60 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent sm:hidden"></div>
                </div>

                {/* Card Header: Nextcomedia Branding */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-slate-200/80 shadow-xs">
                    <BrandLogo lang={lang} size="sm" showTagline={true} />
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-600/10 text-blue-700 text-[10px] font-bold border border-blue-200/60 backdrop-blur-xs">
                    <Sparkles className="w-3 h-3 text-blue-600" />
                    <span>Solutions B2B</span>
                  </span>
                </div>

                {/* Card Center: Headline & Checklist */}
                <div className="relative z-10 my-5 max-w-[280px] sm:max-w-[260px]">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug tracking-tight mb-4">
                    {isFr
                      ? 'Des solutions digitales pour un plus grand impact.'
                      : 'Digital solutions for greater impact.'}
                  </h2>

                  {/* 3 Key Value Pillars */}
                  <div className="space-y-2.5 mb-5">
                    <div className="flex items-center gap-2.5 text-slate-800 text-sm font-semibold bg-white/80 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-1 rounded-lg">
                      <div className="w-5 h-5 rounded-md bg-blue-50 border border-blue-500/40 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                        ✓
                      </div>
                      <span>{isFr ? 'Stratégie' : 'Strategy'}</span>
                    </div>

                    <div className="flex items-center gap-2.5 text-slate-800 text-sm font-semibold bg-white/80 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-1 rounded-lg">
                      <div className="w-5 h-5 rounded-md bg-blue-50 border border-blue-500/40 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                        ✓
                      </div>
                      <span>{isFr ? 'Exécution' : 'Execution'}</span>
                    </div>

                    <div className="flex items-center gap-2.5 text-slate-800 text-sm font-semibold bg-white/80 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-1 rounded-lg">
                      <div className="w-5 h-5 rounded-md bg-blue-50 border border-blue-500/40 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                        ✓
                      </div>
                      <span>{isFr ? 'Croissance' : 'Growth'}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Button (exact "COMMENÇONS ENSEMBLE ->") */}
                <div className="relative z-10">
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-md shadow-blue-500/30 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                  >
                    <span>{isFr ? 'Commençons ensemble' : 'Let\'s start together'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Bottom Card Summary Bar: Live Metrics */}
              <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between text-xs border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="font-medium text-slate-300">
                    {isFr ? 'Qualification en temps réel' : 'Real-time qualification'}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 font-semibold">
                  100% Loi 25
                </span>
              </div>

              {/* Floating Stat Badge Top Right */}
              <div className="absolute top-4 -right-2 sm:-right-3 bg-white p-3 rounded-2xl border border-blue-100 shadow-lg text-xs flex items-center gap-2.5 z-20">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block text-xs">
                    {isFr ? 'Prospects qualifiés' : 'Qualified Prospects'}
                  </span>
                  <span className="text-[11px] font-semibold text-blue-600">
                    {isFr ? '+100% selon critères' : '+100% to criteria'}
                  </span>
                </div>
              </div>

              {/* Floating Stat Badge Bottom Left */}
              <div className="absolute bottom-14 -left-2 sm:-left-3 bg-white p-3 rounded-2xl border border-purple-100 shadow-lg text-xs flex items-center gap-2.5 z-20">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block text-xs">
                    {isFr ? 'Pilotage Montréal' : 'Montreal Oversight'}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">
                    {isFr ? 'Supervision d\'affaires directe' : 'Direct business management'}
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

