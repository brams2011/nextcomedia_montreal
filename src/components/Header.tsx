import React, { useState } from 'react';
import { Lang, PageRoute } from '../types';
import { ui } from '../i18n/data';
import { BrandLogo } from './BrandLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  lang: Lang;
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onLanguageChange: (lang: Lang) => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  currentPage,
  onNavigate,
  onLanguageChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = ui[lang];

  const navLinks: { page: PageRoute; label: string }[] = [
    { page: 'home', label: t['nav.home'] },
    { page: 'approach', label: t['nav.approach'] },
    { page: 'compliance', label: t['nav.compliance'] },
    { page: 'about', label: t['nav.about'] },
    { page: 'contact', label: t['nav.contact'] },
  ];

  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div onClick={() => handleNav('home')}>
            <BrandLogo lang={lang} size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1.5 rounded-full bg-slate-50 border border-slate-200/80">
            {navLinks.map((link) => {
              const active = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  type="button"
                  onClick={() => handleNav(link.page)}
                  className={`px-4 py-2 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    active
                      ? 'text-white bg-slate-900 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Items (Desktop) */}
          <div className="hidden lg:flex items-center gap-3.5">
            <LanguageSwitcher lang={lang} onLanguageChange={onLanguageChange} />
            <button
              type="button"
              onClick={() => handleNav('contact')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{t['nav.cta']}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <LanguageSwitcher lang={lang} onLanguageChange={onLanguageChange} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const active = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  type="button"
                  onClick={() => handleNav(link.page)}
                  className={`text-left px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                    active
                      ? 'text-white bg-slate-900 font-semibold'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => handleNav('contact')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md"
            >
              <span>{t['nav.cta']}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
