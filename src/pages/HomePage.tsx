import React from 'react';
import { Lang, PageRoute } from '../types';
import { Hero } from '../components/Hero';
import { SectionTitle } from '../components/SectionTitle';
import { TrustCards } from '../components/TrustCards';
import { ProcessSteps } from '../components/ProcessSteps';
import { CTASection } from '../components/CTASection';
import { ComplianceNotice } from '../components/ComplianceNotice';
import { ArrowRight, ShieldCheck, Zap, Target } from 'lucide-react';

interface HomePageProps {
  lang: Lang;
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ lang, onNavigate }) => {
  const isFr = lang === 'fr';

  return (
    <div>
      {/* Hero Section */}
      <Hero lang={lang} onNavigate={onNavigate} />

      {/* Section Notre Rôle / Positioning */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14">
            {/* Left: Text content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-50 text-blue-800 border border-blue-200/80 shadow-xs">
                {isFr ? 'Notre positionnement' : 'Our Positioning'}
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {isFr ? 'Nous préparons le contact. ' : 'We prepare the contact. '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  {isFr ? 'Vous faites le reste.' : 'You do the rest.'}
                </span>
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                <p>
                  {isFr
                    ? 'Nextcomedia accompagne les cabinets et MGA dans leurs opérations de prospection et de qualification.'
                    : 'Nextcomedia supports insurance brokerage firms and MGAs across their cold outreach and prospect qualification operations.'}
                </p>
                <p>
                  {isFr
                    ? 'Nous prenons contact avec les prospects, recueillons les informations pertinentes selon vos critères et facilitons la mise en relation avec votre équipe de courtiers autorisés.'
                    : 'We initiate contact with prospective clients, gather relevant data based on your underwriting parameters, and facilitate seamless handovers to your certified advisory team.'}
                </p>
              </div>

              {/* Feature highlight pills */}
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start pt-2">
                <span className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-blue-600" />
                  {isFr ? 'Stratégie de ciblage' : 'Targeting Strategy'}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                  {isFr ? 'Exécution rigoureuse' : 'Rigorous Execution'}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-purple-600" />
                  {isFr ? 'Croissance mesurable' : 'Measurable Growth'}
                </span>
              </div>
            </div>

            {/* Right: Operational Metric Visual Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-gradient-to-br from-slate-900 to-indigo-950 p-7 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="text-xs font-semibold text-blue-300">
                    {isFr ? 'Structure Bilatérale' : 'Bilateral Structure'}
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-blue-500/20 text-[10px] font-bold text-blue-300 border border-blue-400/30">
                    QC • BJ
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[11px] text-slate-400 uppercase font-semibold block mb-1">
                      {isFr ? 'Centre d\'appels opérationnel' : 'Operations Call Center'}
                    </span>
                    <span className="text-xl font-bold text-white block">
                      {isFr ? '10 à 15 téléconseillers dédiés' : '10 to 15 Dedicated Reps'}
                    </span>
                    <span className="text-xs text-slate-300 mt-1 block">
                      {isFr ? 'Plateau téléphonique à Cotonou (Bénin)' : 'Outreach facility in Cotonou (Benin)'}
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[11px] text-slate-400 uppercase font-semibold block mb-1">
                      {isFr ? 'Gouvernance & Cadrage' : 'Governance & Strategy'}
                    </span>
                    <span className="text-xl font-bold text-white block">
                      {isFr ? 'Montréal (Québec)' : 'Montreal (Quebec)'}
                    </span>
                    <span className="text-xs text-slate-300 mt-1 block">
                      {isFr ? 'Contrôle déontologique et conformité Loi 25' : 'Ethics control & Law 25 compliance'}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="mt-6 w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{isFr ? 'Découvrir notre organisation' : 'Explore our structure'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Essential Regulatory Distinction Box */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 text-center max-w-3xl mx-auto shadow-xs">
            <strong className="text-slate-900 font-semibold">
              {isFr ? 'Distinction essentielle : ' : 'Essential Distinction: '}
            </strong>
            {isFr
              ? "Nextcomedia n'est pas un cabinet de courtage et ne distribue aucun produit financier ou d'assurance. Notre mandat se concentre exclusivement sur la prise de contact amont et le filtrage initial des prospects pour le compte de professionnels autorisés."
              : 'Nextcomedia is not an insurance brokerage and does not advise on, distribute, or underwrite financial or insurance products. Our scope is strictly limited to top-of-funnel outreach and preliminary qualification on behalf of authorized professionals.'}
          </div>

        </div>
      </section>

      {/* Section Why Nextcomedia */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge={isFr ? 'Pourquoi Nextcomedia' : 'Why Nextcomedia'}
            title={isFr ? 'Une structure conçue pour rassurer vos courtiers' : 'Built to give your brokerage total confidence'}
            subtitle={isFr
              ? 'Un modèle transparent combinant rigueur d\'affaires montréalaise et agilité d\'un centre d\'appels piloté depuis Montréal.'
              : 'A transparent model pairing Montreal executive governance with the agility of a call center managed from Montreal.'}
          />
          <TrustCards lang={lang} />
        </div>
      </section>

      {/* Section Methodology / Process */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge={isFr ? 'Méthodologie' : 'Methodology'}
            title={isFr ? 'Une approche simple et structurée.' : 'A simple, structured approach.'}
            subtitle={isFr
              ? 'Du premier appel à la passation dans votre agenda, chaque étape répond à des critères précis.'
              : 'From first call to calendar handover, each step adheres strictly to defined underwriting benchmarks.'}
          />
          <ProcessSteps lang={lang} showCta={true} onNavigate={onNavigate} />
        </div>
      </section>

      {/* Section Privacy & Compliance Banner */}
      <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 rounded-3xl p-8 sm:p-12 lg:p-14 text-white relative shadow-2xl overflow-hidden border border-slate-800">
            {/* Ambient glows */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-8 space-y-6">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  {isFr ? 'Réglementation & Éthique' : 'Compliance & Ethics'}
                </span>
                
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {isFr ? "La confidentialité n'est pas une option." : 'Confidentiality is not an option.'}
                </h2>
                
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                  {isFr
                    ? "Lorsque des renseignements personnels sont traités dans le cadre d'une opération de prospection, leur gestion doit être encadrée par des procédures et responsabilités clairement définies."
                    : 'When personal information is handled during outreach operations, its governance must be backed by clearly defined procedures, restricted permissions, and enforceable contractual obligations.'}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('compliance');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 shadow-md cursor-pointer"
                  >
                    <span>{isFr ? 'Confidentialité & conformité' : 'Privacy & compliance'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('approach');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white border border-slate-700 bg-white/5 hover:bg-white/10 cursor-pointer"
                  >
                    {isFr ? 'Voir notre démarche' : 'Explore our methodology'}
                  </button>
                </div>

                <ComplianceNotice lang={lang} className="bg-slate-950/80 border-slate-800 text-slate-300" />
              </div>

              {/* Right decorative visual box */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-xs space-y-3 max-w-xs w-full">
                  <div className="text-sm font-bold text-white border-b border-white/10 pb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>{isFr ? 'Engagements Clés' : 'Key Commitments'}</span>
                  </div>
                  <p className="text-slate-300">✓ {isFr ? 'Zéro conservation permanente' : 'Zero permanent storage'}</p>
                  <p className="text-slate-300">✓ {isFr ? 'Purge sous 30 à 90 jours' : 'Purged in 30 to 90 days'}</p>
                  <p className="text-slate-300">✓ {isFr ? 'Évaluation ÉFVP / PIA' : 'Law 25 PIA documentation'}</p>
                  <p className="text-slate-300">✓ {isFr ? 'Accords de confidentialité signés' : 'Binding staff NDAs'}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection lang={lang} onNavigate={onNavigate} />
    </div>
  );
};
