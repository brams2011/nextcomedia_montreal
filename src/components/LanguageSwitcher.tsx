import React from 'react';
import { Lang } from '../types';

interface LanguageSwitcherProps {
  lang: Lang;
  onLanguageChange: (newLang: Lang) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  lang,
  onLanguageChange,
}) => {
  return (
    <div className="inline-flex items-center rounded-md border border-slate-200 bg-white p-1 text-xs font-medium text-slate-800 shadow-xs">
      <button
        type="button"
        onClick={() => onLanguageChange('fr')}
        className={`px-2 py-1 rounded transition-colors cursor-pointer ${
          lang === 'fr' ? 'bg-slate-900 text-white font-semibold shadow-xs' : 'text-slate-500 hover:text-slate-900'
        }`}
        aria-label="Passer au français"
      >
        FR
      </button>
      <span className="text-slate-300 px-0.5" aria-hidden="true">|</span>
      <button
        type="button"
        onClick={() => onLanguageChange('en')}
        className={`px-2 py-1 rounded transition-colors cursor-pointer ${
          lang === 'en' ? 'bg-slate-900 text-white font-semibold shadow-xs' : 'text-slate-500 hover:text-slate-900'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};
