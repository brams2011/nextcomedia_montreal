import React from 'react';
import { Lang, PageRoute } from '../types';
import { ContactForm } from '../components/ContactForm';
import { BrandLogo } from '../components/BrandLogo';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Heart,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Smile,
  PhoneCall,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';

interface ContactPageProps {
  lang: Lang;
  onNavigate: (page: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const isFr = lang === 'fr';

  const scrollToForm = () => {
    const el = document.getElementById('contact-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Page Hero with Warm & Convivial Contact Photo */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-blue-50/70 via-slate-50 to-white border-b border-slate-100 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-rose-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading, Context & Core Highlights (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-100/70 text-blue-800 border border-blue-200/80 shadow-2xs">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>{isFr ? 'Accueil chaleureux & Écoute attentive' : 'Warm Welcome & Dedicated Support'}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {isFr ? 'Parlons de votre ' : "Let's talk about your "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  {isFr ? 'prochaine campagne.' : 'next campaign.'}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                {isFr
                  ? 'Vous êtes courtier indépendant, responsable de cabinet ou dirigeant de MGA ? Notre équipe vous accueille avec bienveillance, transparence et courtoisie pour étudier vos besoins sans aucun engagement.'
                  : 'Are you an independent broker, firm executive, or MGA leader? Our team welcomes you with warmth, clarity, and attentiveness to evaluate your campaign goals with zero commitment.'}
              </p>

              {/* 3 Convivial Value Pillars Mini Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm shrink-0">
                    <Smile className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{isFr ? 'Accueil' : 'Welcome'}</span>
                    <span className="text-[11px] text-slate-500">{isFr ? 'Sourire & écoute' : 'Warm & attentive'}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{isFr ? 'Réactivité' : 'Speed'}</span>
                    <span className="text-[11px] text-slate-500">{isFr ? 'Retour sous 24h' : 'Within 24 hours'}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm shrink-0">
                    <ShieldCheck className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{isFr ? 'Conseil' : 'Advisory'}</span>
                    <span className="text-[11px] text-slate-500">{isFr ? '100% Sans engagement' : 'Zero commitment'}</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all cursor-pointer"
                >
                  <span>{isFr ? 'Remplir le formulaire en ligne' : 'Fill online request form'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="mailto:contact@nextcomedia.ca"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>contact@nextcomedia.ca</span>
                </a>
              </div>

            </div>

            {/* Right Column: High-Impact Convivial Contact Photo Presentation Card (5 cols on lg) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white group hover:shadow-indigo-500/15 transition-all duration-300 max-w-md mx-auto">
                
                {/* Photo & Card Header with presentation styling */}
                <div className="relative min-h-[390px] sm:min-h-[430px] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
                  
                  {/* Convivial Contact Advisor Photo placed across the card with warm lighting */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <img
                      src="/assets/contact/hero-contact-warm.jpg"
                      alt={isFr ? 'Conseillère chaleureuse et souriante à votre écoute chez Nextcomedia' : 'Warm and smiling advisor ready to help at Nextcomedia'}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('hero-contact-advisor')) {
                          target.src = '/assets/contact/hero-contact-advisor.jpg';
                        }
                      }}
                    />
                    {/* Subtle gradient overlay to ensure text contrast and elegance */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-transparent"></div>
                  </div>

                  {/* Card Header: Nextcomedia Branding */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-white/40 shadow-xs">
                      <BrandLogo lang={lang} size="sm" showTagline={true} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/25 text-rose-200 text-[10px] font-bold border border-rose-300/30 backdrop-blur-xs">
                      <Smile className="w-3 h-3 text-rose-400" />
                      <span>{isFr ? 'À votre écoute' : 'Ready to help'}</span>
                    </span>
                  </div>

                  {/* Headline & Value Highlights inside Card */}
                  <div className="relative z-10 my-4 max-w-[300px]">
                    <div className="text-[11px] font-bold tracking-wider uppercase text-cyan-300 mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                      <span>{isFr ? 'Disponibilité & Bienveillance' : 'Availability & Empathy'}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-white leading-snug tracking-tight mb-3">
                      {isFr
                        ? 'Un échange simple, direct et personnalisé.'
                        : 'A simple, direct, and personalized conversation.'}
                    </h2>

                    <p className="text-xs text-slate-200/90 leading-relaxed mb-4 bg-slate-900/60 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
                      {isFr
                        ? 'Nous prenons le temps de comprendre vos priorités de courtage afin de calibrer une prospection qui vous ressemble.'
                        : 'We take the time to understand your brokerage targets and design an outreach approach tailored to your identity.'}
                    </p>
                  </div>

                  {/* Card Action Button */}
                  <div className="relative z-10">
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-lg shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                    >
                      <span>{isFr ? 'Démarrer l\'échange' : 'Start conversation'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* Bottom Footer strip of the card */}
                <div className="px-6 py-3.5 bg-slate-900 text-white flex items-center justify-between text-xs border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span className="font-medium text-slate-300">
                      {isFr ? 'Équipe de direction à Montréal' : 'Montreal Executive Team'}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {isFr ? '< 24h ouvrables' : '< 24 business hours'}
                  </span>
                </div>

                {/* Floating Top Badge */}
                <div className="absolute top-4 -right-2 sm:-right-3 bg-white p-3 rounded-2xl border border-rose-100 shadow-lg text-xs flex items-center gap-2.5 z-20">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    <Smile className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">
                      {isFr ? 'Accueil chaleureux' : 'Warm welcome'}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      {isFr ? 'Conseil bienveillant' : 'Caring guidance'}
                    </span>
                  </div>
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-14 -left-2 sm:-left-3 bg-white p-3 rounded-2xl border border-blue-100 shadow-lg text-xs flex items-center gap-2.5 z-20">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">
                      {isFr ? 'Sans engagement' : 'No commitment'}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      {isFr ? 'Cadrage personnalisé' : 'Tailored scoping'}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form & Coordinates Section */}
      <section id="contact-form-section" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Form (8 cols on lg) */}
            <div className="lg:col-span-8">
              <ContactForm lang={lang} />
            </div>

            {/* Right Column: Information & Reassurance (4 cols on lg) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Montreal Executive Coordinates Card */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-7">
                <h3 className="text-base font-bold text-slate-900 mb-5 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                  {isFr ? 'Coordonnées d\'affaires' : 'Corporate Coordinates'}
                </h3>
                
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block text-xs">
                        {isFr ? 'Montréal (Québec) :' : 'Montreal (Quebec):'}
                      </strong>
                      <span className="text-xs text-slate-500">
                        {isFr ? '[Adresse officielle à confirmer]' : '[Official address pending confirmation]'}
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block text-xs">
                        {isFr ? 'Courriel direct :' : 'Direct Email:'}
                      </strong>
                      <a href="mailto:contact@nextcomedia.ca" className="text-blue-600 hover:underline text-xs font-semibold">
                        contact@nextcomedia.ca
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block text-xs">
                        {isFr ? 'Téléphone d\'affaires :' : 'Phone:'}
                      </strong>
                      <span className="text-xs text-slate-500">
                        {isFr ? '[Numéro officiel à confirmer]' : '[Official phone pending confirmation]'}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Process Clarity Card */}
              <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-7 text-white shadow-xs border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{isFr ? 'Après la soumission' : 'Next steps'}</span>
                </div>
                
                <h3 className="text-sm font-bold text-white mb-3">
                  {isFr ? 'Que se passe-t-il après l\'envoi ?' : 'What happens after submission?'}
                </h3>
                
                <ol className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-400">1.</span>
                    <span>
                      {isFr
                        ? 'Analyse préliminaire de votre marché cible sous 24h ouvrables.'
                        : 'Preliminary assessment of your target market within 24 business hours.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-400">2.</span>
                    <span>
                      {isFr
                        ? 'Échange téléphonique de cadrage avec la direction à Montréal.'
                        : 'Discovery call with our Montreal executive leadership.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-400">3.</span>
                    <span>
                      {isFr
                        ? 'Définition de la grille de qualification et proposition d\'une phase pilote.'
                        : 'Definition of qualification filters and proposal for a low-commitment pilot phase.'}
                    </span>
                  </li>
                </ol>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
