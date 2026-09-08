import React from 'react';
import { Lang, PageRoute } from '../types';
import { ui } from '../i18n/data';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  lang: Lang;
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const t = ui[lang];
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle ambient glow in footer */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Brand & Mission (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="mb-4" onClick={() => handleNav('home')}>
              <BrandLogo lang={lang} dark={true} size="md" showTagline={true} />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm">
              {t['footer.description']}
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              {t['footer.quickLinks']}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home')}
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 inline-block transition-transform cursor-pointer"
                >
                  {t['nav.home']}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('approach')}
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 inline-block transition-transform cursor-pointer"
                >
                  {t['nav.approach']}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('compliance')}
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 inline-block transition-transform cursor-pointer"
                >
                  {t['nav.compliance']}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 inline-block transition-transform cursor-pointer"
                >
                  {t['nav.about']}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 inline-block transition-transform cursor-pointer"
                >
                  {t['nav.contact']}
                </button>
              </li>
            </ul>
          </div>

          {/* Compliance & Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              {t['footer.legal']}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('compliance')}
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 inline-block transition-transform cursor-pointer"
                >
                  {t['nav.compliance']}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('privacy')}
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 inline-block transition-transform cursor-pointer"
                >
                  {t['footer.privacy']}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('terms')}
                  className="text-slate-300 hover:text-white hover:translate-x-0.5 inline-block transition-transform cursor-pointer"
                >
                  {t['footer.terms']}
                </button>
              </li>
            </ul>
          </div>

          {/* Coordinates & Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              {lang === 'fr' ? 'Coordonnées' : 'Contact Details'}
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li>
                <span className="block text-white font-medium">Montréal (QC, Canada) :</span>
                <span className="text-slate-400">[Adresse d'affaires à confirmer]</span>
              </li>
              <li>
                <span className="block text-white font-medium">Courriel :</span>
                <a href="mailto:contact@nextcomedia.ca" className="text-blue-400 hover:underline">contact@nextcomedia.ca</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory Disclaimer Box */}
        <div className="pt-8 border-t border-slate-800 mb-8">
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-[11px] sm:text-xs text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-300 block mb-1">
              {lang === 'fr' ? 'Avertissement réglementaire & Déontologie :' : 'Regulatory Notice & Professional Ethics:'}
            </span>
            {t['footer.disclaimer']}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 pt-4 border-t border-slate-800/60">
          <div>
            &copy; {currentYear} Nextcomedia. {t['footer.allRights']}
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => handleNav('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t['footer.privacy']}
            </button>
            <button
              type="button"
              onClick={() => handleNav('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t['footer.terms']}
            </button>
            <span>Québec (CA) • Bénin (BJ)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
