import React from 'react';
import { Lang, PageRoute } from '../types';
import { CTASection } from '../components/CTASection';
import { BrandLogo } from '../components/BrandLogo';
import {
  Building2,
  PhoneCall,
  ShieldCheck,
  Users,
  Heart,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Smile,
  MapPin,
} from 'lucide-react';

interface AboutPageProps {
  lang: Lang;
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, onNavigate }) => {
  const isFr = lang === 'fr';

  const scrollToNarrative = () => {
    const el = document.getElementById('narrative-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Page Hero with Friendly Team Photo */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-blue-50/70 via-slate-50 to-white border-b border-slate-100 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Mission, Human Warmth & Highlights (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-100/70 text-blue-800 border border-blue-200/80 shadow-2xs">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>{isFr ? 'Une aventure humaine & engagée' : 'A Human & Dedicated Journey'}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {isFr ? 'L’énergie d’une équipe ' : 'The energy of a '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  {isFr ? 'soudée, chaleureuse et passionnée.' : 'close-knit, warm, and passionate team.'}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                {isFr
                  ? 'Chez Nextcomedia, la prospection téléphonique est avant tout une rencontre humaine. Notre force repose sur une équipe bienveillante de 10 à 15 téléconseillers formés dans un esprit de convivialité, d\'écoute active et d\'entraide, guidée par une direction d\'affaires basée à Montréal.'
                  : 'At Nextcomedia, outbound outreach is fundamentally a human connection. Our core strength lies in a collaborative team of 10 to 15 specialists trained with warmth, empathy, and active listening, steered by executive leadership in Montreal.'}
              </p>

              {/* 3 Convivial Value Pillars Mini Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm shrink-0">
                    <Smile className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{isFr ? 'Convivialité' : 'Friendliness'}</span>
                    <span className="text-[11px] text-slate-500">{isFr ? 'Sourire au téléphone' : 'Warm telephone tone'}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{isFr ? 'Esprit d’équipe' : 'Team Spirit'}</span>
                    <span className="text-[11px] text-slate-500">{isFr ? 'Entraide continue' : 'Daily mutual support'}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{isFr ? 'Confiance' : 'Trust'}</span>
                    <span className="text-[11px] text-slate-500">{isFr ? 'Partenariat durable' : 'Long-term partnership'}</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={scrollToNarrative}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all cursor-pointer"
                >
                  <span>{isFr ? 'Découvrir notre organisation' : 'Explore our structure'}</span>
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
                  <span>{isFr ? 'Échanger avec notre direction' : 'Talk with our leadership'}</span>
                </button>
              </div>

            </div>

            {/* Right Column: High-Impact Convivial Team Photo Presentation Card (5 cols on lg) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white group hover:shadow-indigo-500/15 transition-all duration-300 max-w-md mx-auto">
                
                {/* Photo & Card Header with harmonious presentation styling */}
                <div className="relative min-h-[390px] sm:min-h-[430px] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
                  
                  {/* Convivial Team Photo placed across the card with natural warm lighting */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <img
                      src="/assets/about/hero-team-friendly.jpg"
                      alt={isFr ? 'Équipe conviviale et soudée Nextcomedia en pleine collaboration' : 'Friendly and cohesive Nextcomedia team collaborating warmly'}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('hero-team-conviviale')) {
                          target.src = '/assets/about/hero-team-conviviale.jpg';
                        }
                      }}
                    />
                    {/* Subtle soft dark gradient overlay for optimal legibility and contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-transparent"></div>
                  </div>

                  {/* Card Header: Nextcomedia Branding */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-white/40 shadow-xs">
                      <BrandLogo lang={lang} size="sm" showTagline={true} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/25 text-rose-200 text-[10px] font-bold border border-rose-300/30 backdrop-blur-xs">
                      <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
                      <span>{isFr ? 'Esprit d’équipe' : 'Team Spirit'}</span>
                    </span>
                  </div>

                  {/* Headline & Friendly Value Highlights inside Card */}
                  <div className="relative z-10 my-4 max-w-[300px]">
                    <div className="text-[11px] font-bold tracking-wider uppercase text-cyan-300 mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                      <span>{isFr ? 'Humain & Bienveillance' : 'Human & Empathy'}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-white leading-snug tracking-tight mb-3">
                      {isFr
                        ? 'Des relations authentiques qui créent la confiance.'
                        : 'Authentic relationships that build lasting trust.'}
                    </h2>

                    <p className="text-xs text-slate-200/90 leading-relaxed mb-4 bg-slate-900/60 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
                      {isFr
                        ? 'Chaque échange téléphonique est mené avec courtoisie, sourire et écoute attentive pour valoriser votre image de courtier.'
                        : 'Every call is handled with courtesy, genuine warmth, and active listening to elevate your brokerage brand.'}
                    </p>
                  </div>

                  {/* Card Action Button */}
                  <div className="relative z-10">
                    <button
                      type="button"
                      onClick={() => {
                        onNavigate('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-lg shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                    >
                      <span>{isFr ? 'Rencontrer notre équipe' : 'Meet our team'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* Bottom Footer strip of the card */}
                <div className="px-6 py-3.5 bg-slate-900 text-white flex items-center justify-between text-xs border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span className="font-medium text-slate-300">
                      {isFr ? 'Pont humain Cotonou & Montréal' : 'Human bridge Cotonou & Montreal'}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 font-semibold flex items-center gap-1">
                    <Smile className="w-3.5 h-3.5" />
                    {isFr ? '10-15 Conseillers' : '10-15 Agents'}
                  </span>
                </div>

                {/* Floating Top Badge */}
                <div className="absolute top-4 -right-2 sm:-right-3 bg-white p-3 rounded-2xl border border-rose-100 shadow-lg text-xs flex items-center gap-2.5 z-20">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    <Smile className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">
                      {isFr ? 'Ambiance conviviale' : 'Friendly atmosphere'}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      {isFr ? 'Énergie positive au quotidien' : 'Daily positive energy'}
                    </span>
                  </div>
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-14 -left-2 sm:-left-3 bg-white p-3 rounded-2xl border border-blue-100 shadow-lg text-xs flex items-center gap-2.5 z-20">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">
                      {isFr ? 'Équipe stable & formée' : 'Stable & trained team'}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      {isFr ? 'Standard québécois' : 'Quebec standards'}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section id="narrative-section" className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Présentation Nextcomedia */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                {isFr ? 'Qui sommes-nous' : 'Who We Are'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {isFr
                  ? 'Une force de qualification au service des courtiers indépendants et MGA'
                  : 'Dedicated outreach power for independent brokers and MGAs'}
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {isFr
                  ? 'Dans le secteur de l\'assurance au Québec, le temps d\'un courtier certifié est trop précieux pour être consommé par des appels à froid non qualifiés.'
                  : 'In the Canadian insurance industry, a licensed broker\'s time is too valuable to spend navigating cold call gatekeepers and unvetted contacts.'}
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {isFr
                  ? 'Nextcomedia a été conçue pour résoudre précisément ce goulot d\'étranglement : nous prenons en charge la phase amont de contact et de qualification rigoureuse, afin que vos conseillers n\'interviennent que sur des dossiers matures et réceptifs.'
                  : 'Nextcomedia was built to eliminate this specific bottleneck: we manage initial telephone contact and rigorous qualification, delivering only warm, policy-mature prospects to your licensed advisors.'}
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-3.5">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-xs">
                  15
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {isFr ? 'Téléconseillers dédiés' : 'Specialized Call Agents'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {isFr ? 'Équipe resserrée de 10 à 15 téléprospection formés' : 'Focused team of 10 to 15 trained outreach specialists'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  QC
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {isFr ? 'Pilotage d\'affaires à Montréal' : 'Montreal Leadership'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {isFr ? 'Compréhension fine des exigences du marché québécois' : 'Deep alignment with Canadian insurance market dynamics'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  BJ
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {isFr ? 'Plateau technique à Cotonou' : 'Cotonou Operations Center'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {isFr ? 'Capacité d\'émission continue et rigueur opérationnelle' : 'Consistent daily outbound calling and strict QA oversight'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bilateral Architecture */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
              {isFr ? 'Une synergie bilatérale transparente' : 'A Transparent Bilateral Operating Model'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base text-slate-600">
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                  {isFr ? 'Pilotage & Gouvernance (Montréal, QC)' : 'Governance & Strategy (Montreal, QC)'}
                </h3>
                <p className="leading-relaxed">
                  {isFr
                    ? 'La direction assure le cadrage stratégique avec les courtiers et MGA, la rédaction des scripts d\'orientation, la supervision déontologique et le respect des normes contractuelles et de confidentialité (Loi 25).'
                    : 'Our leadership oversees client alignment with brokers and MGAs, call script design, quality control, and strict compliance with Canadian privacy standards (Law 25).'}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                  {isFr ? 'Centre d\'appels opérationnel (Cotonou, Bénin)' : 'Outreach Center (Cotonou, Benin)'}
                </h3>
                <p className="leading-relaxed">
                  {isFr
                    ? 'Une équipe d\'environ 10 à 15 personnes réalise avec constance et écoute active les appels de prise de contact, le recueil des renseignements préliminaires et la planification des rendez-vous.'
                    : 'A dedicated team of 10 to 15 specialists handles daily outbound outreach, preliminary verification of coverage timelines, and appointment booking.'}
                </p>
              </div>
            </div>
          </div>

          {/* Infrastructure Cards */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                {isFr ? 'Nos implantations & installations' : 'Our Facilities & Presence'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                {isFr ? 'Transparence opérationnelle et gouvernance' : 'Operational Transparency & Corporate Governance'}
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                {isFr
                  ? 'Chaque opération s\'appuie sur une infrastructure professionnelle, sécurisée et encadrée entre le Québec et le Bénin.'
                  : 'Every campaign relies on professional, secure, and formalized infrastructure across Canada and Benin.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold text-blue-600 uppercase mb-1">Montréal, QC</div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {isFr ? 'Direction & Cadrage d\'affaires' : 'Executive Management & Strategy'}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isFr
                      ? 'Conception des stratégies de prospection et comités de suivi personnalisés avec les courtiers.'
                      : 'Tailored campaign design, broker onboarding, and ongoing review committees from Montreal.'}
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold text-purple-600 uppercase mb-1">Cotonou, BJ</div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {isFr ? 'Centre d\'appels opérationnel' : 'Operations Call Center'}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isFr
                      ? 'Plateau technique de 10 à 15 téléprospection formés aux standards de communication québécois.'
                      : 'Dedicated facility with 10 to 15 outreach reps trained in Canadian market communication.'}
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold text-cyan-600 uppercase mb-1">Gouvernance</div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {isFr ? 'Espace d\'affaires & Conseil' : 'Corporate Office & Governance'}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isFr
                      ? 'Environnement professionnel dédié aux relations partenariales et au contrôle de conformité Loi 25.'
                      : 'Professional setting dedicated to institutional partnerships and Law 25 compliance oversight.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        lang={lang}
        title={isFr ? 'Envie d\'en savoir plus sur notre structure ?' : 'Want to learn more about our team?'}
        subtitle={isFr
          ? 'Prenez contact avec nous pour échanger directement avec notre direction à Montréal.'
          : 'Connect with our Montreal leadership to discuss tailored outreach opportunities.'}
        onNavigate={onNavigate}
      />
    </div>
  );
};
