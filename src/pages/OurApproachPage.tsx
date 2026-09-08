import React from 'react';
import { Lang, PageRoute } from '../types';
import { CTASection } from '../components/CTASection';
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, ShieldCheck, Layers, Users } from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo';

interface OurApproachPageProps {
  lang: Lang;
  onNavigate: (page: PageRoute) => void;
}

export const OurApproachPage: React.FC<OurApproachPageProps> = ({ lang, onNavigate }) => {
  const isFr = lang === 'fr';

  const scrollToSteps = () => {
    const el = document.getElementById('steps-breakdown');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Page Hero with Collaboration Photo Card */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-blue-50/70 via-slate-50 to-white border-b border-slate-100 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading, Context & Core Highlights (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-100/70 text-blue-800 border border-blue-200/80 shadow-2xs">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>{isFr ? 'Méthodologie opérationnelle' : 'Operational Framework'}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {isFr ? 'Un processus simple, ' : 'A simple, '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  {isFr ? 'structuré et mesurable.' : 'structured, and measurable.'}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                {isFr
                  ? 'Chaque campagne est construite sur un protocole rigoureux afin de garantir une qualité irréprochable et un taux de transformation optimal pour vos conseillers certifiés.'
                  : 'Every campaign is built on an exacting protocol to ensure pristine brand representation and maximum closing conversion for your licensed advisors.'}
              </p>

              {/* 3 Value Pillars Mini Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{isFr ? 'Stratégie' : 'Strategy'}</span>
                    <span className="text-[11px] text-slate-500">{isFr ? 'Cadrage précis' : 'Targeted scope'}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{isFr ? 'Exécution' : 'Execution'}</span>
                    <span className="text-[11px] text-slate-500">{isFr ? 'Agents dédiés' : 'Dedicated team'}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{isFr ? 'Croissance' : 'Growth'}</span>
                    <span className="text-[11px] text-slate-500">{isFr ? 'Rendez-vous qualifiés' : 'Closing pipeline'}</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={scrollToSteps}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all cursor-pointer"
                >
                  <span>{isFr ? 'Explorer les 4 étapes' : 'Explore the 4 stages'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs transition-all cursor-pointer"
                >
                  <span>{isFr ? 'Échanger sur vos cibles' : 'Discuss your targets'}</span>
                </button>
              </div>

            </div>

            {/* Right Column: Montreal Boardroom Skyline Presentation Card (5 cols on lg) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white group hover:shadow-indigo-500/15 transition-all duration-300 max-w-md mx-auto">
                
                {/* Photo & Card Header with seamless skyline & gradient blending */}
                <div className="relative min-h-[390px] sm:min-h-[430px] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
                  
                  {/* Montreal Boardroom Skyline Photo placed across the card */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <img
                      src="/assets/approach/montreal-boardroom-skyline.png"
                      alt={isFr ? 'Bureau exécutif surplombant la métropole de Montréal' : 'Executive office overlooking Montreal skyline'}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('skyline-boardroom-photo')) {
                          target.src = '/assets/approach/skyline-boardroom-photo.jpg';
                        }
                      }}
                    />
                    {/* Seamless gradient overlay to ensure text contrast and elegance */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent sm:hidden"></div>
                  </div>

                  {/* Card Header: Nextcomedia Branding */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-white/40 shadow-xs">
                      <BrandLogo lang={lang} size="sm" showTagline={true} />
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-200 text-[10px] font-bold border border-blue-400/30 backdrop-blur-xs">
                      <Sparkles className="w-3 h-3 text-cyan-300" />
                      <span>{isFr ? 'Montréal & B2B' : 'Montreal & B2B'}</span>
                    </span>
                  </div>

                  {/* Headline & Value Pillars matching user's uploaded banner */}
                  <div className="relative z-10 my-4 max-w-[290px] sm:max-w-[270px]">
                    <div className="text-[11px] font-bold tracking-wider uppercase text-cyan-400 mb-1">
                      {isFr ? 'Création de Contenu' : 'Content Strategy'}
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl font-black text-white leading-snug tracking-tight mb-4">
                      {isFr ? (
                        <>
                          Des stratégies qui font la{' '}
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                            différence.
                          </span>
                        </>
                      ) : (
                        <>
                          Strategies that make the{' '}
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                            difference.
                          </span>
                        </>
                      )}
                    </h2>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2.5 text-white text-xs sm:text-sm font-semibold bg-slate-900/70 backdrop-blur-xs px-2 py-1 rounded-lg border border-white/10">
                        <div className="w-4 h-4 rounded-md bg-blue-500/30 border border-cyan-400/60 text-cyan-300 flex items-center justify-center font-bold text-[10px] shrink-0">
                          ✓
                        </div>
                        <span>{isFr ? 'Stratégie' : 'Strategy'}</span>
                      </div>

                      <div className="flex items-center gap-2.5 text-white text-xs sm:text-sm font-semibold bg-slate-900/70 backdrop-blur-xs px-2 py-1 rounded-lg border border-white/10">
                        <div className="w-4 h-4 rounded-md bg-blue-500/30 border border-cyan-400/60 text-cyan-300 flex items-center justify-center font-bold text-[10px] shrink-0">
                          ✓
                        </div>
                        <span>{isFr ? 'Exécution' : 'Execution'}</span>
                      </div>

                      <div className="flex items-center gap-2.5 text-white text-xs sm:text-sm font-semibold bg-slate-900/70 backdrop-blur-xs px-2 py-1 rounded-lg border border-white/10">
                        <div className="w-4 h-4 rounded-md bg-blue-500/30 border border-cyan-400/60 text-cyan-300 flex items-center justify-center font-bold text-[10px] shrink-0">
                          ✓
                        </div>
                        <span>{isFr ? 'Croissance' : 'Growth'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Button ("COMMENÇONS ENSEMBLE ->") */}
                  <div className="relative z-10">
                    <button
                      type="button"
                      onClick={() => {
                        onNavigate('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-lg shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                    >
                      <span>{isFr ? 'Commençons ensemble' : 'Let\'s start together'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* Bottom Footer strip of the card */}
                <div className="px-6 py-3.5 bg-slate-900 text-white flex items-center justify-between text-xs border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="font-medium text-slate-300">
                      {isFr ? 'Équipe de pilotage depuis Montréal' : 'Leadership team based in Montreal'}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 font-semibold">
                    100% Qualifié
                  </span>
                </div>

                {/* Floating Top Badge */}
                <div className="absolute top-4 -right-2 sm:-right-3 bg-white p-3 rounded-2xl border border-blue-100 shadow-lg text-xs flex items-center gap-2.5 z-20">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">
                      {isFr ? 'Protocole rigoureux' : 'Rigorous protocol'}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      {isFr ? '4 étapes maîtrisées' : '4 mastered stages'}
                    </span>
                  </div>
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-14 -left-2 sm:-left-3 bg-white p-3 rounded-2xl border border-purple-100 shadow-lg text-xs flex items-center gap-2.5 z-20">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">
                      {isFr ? 'Passation sécurisée' : 'Secure Handover'}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      {isFr ? 'Conforme Loi 25' : 'Law 25 Compliant'}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Detailed 4 Steps Breakdown */}
      <section id="steps-breakdown" className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Step 1: Préparation */}
          <div className="flex flex-col md:flex-row gap-8 items-start pb-14 border-b border-slate-100">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-mono font-extrabold text-2xl shrink-0 shadow-md">
              01
            </div>
            <div className="space-y-4 flex-grow">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600">
                {isFr ? 'Étape 1' : 'Stage 1'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {isFr ? 'Préparation & Cadrage de la campagne' : 'Preparation & Campaign Alignment'}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {isFr
                  ? 'Avant le moindre appel, nous procédons à une séance de cadrage approfondie avec votre équipe pour aligner nos téléconseillers sur vos impératifs métiers.'
                  : 'Prior to the first phone call, our leadership team conducts an in-depth briefing session with your brokerage to align our call agents with your underwriting requirements.'}
              </p>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-xs">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  {isFr ? 'Éléments analysés et validés ensemble :' : 'Key parameters established together:'}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span><strong>{isFr ? 'Profil des prospects :' : 'Target Profile:'}</strong> {isFr ? 'critères géographiques (Montréal, Laval) et typologie.' : 'geographic territory and business verticals.'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span><strong>{isFr ? 'Critères de qualification :' : 'Qualification Criteria:'}</strong> {isFr ? 'seuils d\'éligibilité, budget indicatif.' : 'eligibility filters, renewal timelines.'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span><strong>{isFr ? 'Informations recherchées :' : 'Required Data:'}</strong> {isFr ? 'dates d\'échéance de police, assureur actuel.' : 'policy renewal dates, current carrier.'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span><strong>{isFr ? 'Règles de transmission :' : 'Handover Protocol:'}</strong> {isFr ? 'format du compte-rendu, canaux sécurisés.' : 'report formats and secure channels.'}</span>
                  </li>
                  <li className="flex items-center gap-2 sm:col-span-2">
                    <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                    <span><strong>{isFr ? 'Objectifs du client :' : 'Brokerage Goals:'}</strong> {isFr ? 'volume hebdomadaire souhaité et capacité de traitement du cabinet.' : 'weekly target volume tailored to your advisors\' processing capacity.'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2: Prise de contact */}
          <div className="flex flex-col md:flex-row gap-8 items-start pb-14 border-b border-slate-100">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center font-mono font-extrabold text-2xl shrink-0 shadow-md">
              02
            </div>
            <div className="space-y-4 flex-grow">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-purple-600">
                {isFr ? 'Étape 2' : 'Stage 2'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {isFr ? 'Prise de contact ciblée' : 'Targeted Outreach & Contact'}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {isFr
                  ? 'Notre équipe de 10 à 15 téléconseillers à Cotonou engage les prises de contact téléphoniques selon le script et les directives convenues.'
                  : 'Our specialized team of 10 to 15 reps in Cotonou executes telephone outreach in strict accordance with the approved dialogue framework.'}
              </p>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-xs">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  {isFr ? 'Caractéristiques de l\'intervention :' : 'Operational safeguards:'}
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>{isFr ? 'Approche respectueuse et professionnelle :' : 'Courteous & Respectful Tone:'}</strong> {isFr ? 'communication soignée et respect systématique des volontés de non-sollicitation.' : 'polite engagement and strict compliance with opt-out / do-not-call requests.'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>{isFr ? 'Présentation transparente :' : 'Clear Brand Positioning:'}</strong> {isFr ? 'nous agissons strictement comme mandataire de prise de contact préalable et ne délivrons aucun conseil financier.' : 'we act strictly as an introductory contact service and never dispense financial advice.'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3: Qualification */}
          <div className="flex flex-col md:flex-row gap-8 items-start pb-14 border-b border-slate-100">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center font-mono font-extrabold text-2xl shrink-0 shadow-md">
              03
            </div>
            <div className="space-y-4 flex-grow">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-indigo-600">
                {isFr ? 'Étape 3' : 'Stage 3'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {isFr ? 'Qualification & Contrôle qualité' : 'Data Collection & Quality Validation'}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {isFr
                  ? 'Nous collectons méthodiquement les informations nécessaires pour vérifier si le prospect correspond aux critères définis lors de la phase de cadrage.'
                  : 'We methodically verify whether the prospect matches all underwriting parameters agreed upon during the preparation stage.'}
              </p>
              
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-xs">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  {isFr ? 'Double niveau de filtrage :' : 'Two-tier validation gate:'}
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>{isFr ? 'Filtrage en direct :' : 'Live Phone Screening:'}</strong> {isFr ? 'validation de l\'intérêt réel du prospect pour une proposition d\'assurance au renouvellement.' : 'verification of genuine interest in reviewing insurance quotes at renewal.'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span><strong>{isFr ? 'Revue superviseur :' : 'Supervisor Review:'}</strong> {isFr ? 'validation systématique par notre équipe de supervision avant toute saisie définitive de la fiche.' : 'systematic review by our quality supervisors prior to any file transmission.'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 4: Transmission */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center font-mono font-extrabold text-2xl shrink-0 shadow-md">
              04
            </div>
            <div className="space-y-4 flex-grow">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600">
                {isFr ? 'Étape 4' : 'Stage 4'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {isFr ? 'Transmission sécurisée & Prise de rendez-vous' : 'Secure Handover & Appointment Booking'}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {isFr
                  ? 'Les prospects confirmés sont transmis à votre cabinet selon le protocole de remise convenu, assurant une passation fluide et immédiate vers vos courtiers certifiés.'
                  : 'Qualified leads are seamlessly delivered to your firm, enabling prompt and contextual engagement by your certified brokers.'}
              </p>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-xs">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  {isFr ? 'Modalités de restitution :' : 'Delivery options:'}
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>{isFr ? 'Rendez-vous pré-calé :' : 'Direct Calendar Booking:'}</strong> {isFr ? 'insertion directe dans l\'agenda partagé de vos courtiers (ex: créneau convenu avec le prospect).' : 'booked appointments inserted directly into your advisors\' shared calendar.'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>{isFr ? 'Fiche prospect détaillée :' : 'Structured Handover Dossier:'}</strong> {isFr ? 'récapitulatif complet de l\'échange, historique et points d\'attention transmis de façon encadrée.' : 'comprehensive briefing sheet transmitted through secure protocols.'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        lang={lang}
        title={isFr ? 'Prêt à calibrer vos critères de qualification ?' : 'Ready to calibrate your qualification criteria?'}
        subtitle={isFr
          ? 'Échangez avec notre direction à Montréal pour définir vos cibles et lancer une première phase test.'
          : 'Speak directly with our Montreal leadership to define your targets and initiate a pilot phase.'}
        onNavigate={onNavigate}
      />
    </div>
  );
};
