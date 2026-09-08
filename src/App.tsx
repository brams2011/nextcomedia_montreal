import React, { useState, useEffect } from 'react';
import { Lang, PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { OurApproachPage } from './pages/OurApproachPage';
import { PrivacyCompliancePage } from './pages/PrivacyCompliancePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfUsePage } from './pages/TermsOfUsePage';
import { Chatbot } from './components/Chatbot';

export default function App() {
  const [lang, setLang] = useState<Lang>('fr');
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  useEffect(() => {
    // Dynamic page title update based on current page and language
    const titles: Record<Lang, Record<PageRoute, string>> = {
      fr: {
        home: "Nextcomedia | Génération de leads pour l'assurance au Québec",
        approach: "Notre approche | Nextcomedia — Qualification de prospects d'assurance",
        compliance: "Confidentialité et conformité | Nextcomedia — Encadrement des données",
        about: "À propos de Nextcomedia | Équipe de pilotage depuis Montréal",
        contact: "Contact & Demande de devis | Nextcomedia — Assurance Québec",
        privacy: "Politique de confidentialité | Nextcomedia (Projet préliminaire)",
        terms: "Conditions d'utilisation | Nextcomedia",
      },
      en: {
        home: "Nextcomedia | Lead Generation for the Insurance Industry in Quebec",
        approach: "Our Approach | Nextcomedia — Lead Qualification for Insurance",
        compliance: "Privacy and Compliance | Nextcomedia — Data Protection Standards",
        about: "About Nextcomedia | Leadership Team based in Montreal",
        contact: "Contact & Request a Quote | Nextcomedia — Quebec Insurance Outreach",
        privacy: "Privacy Policy | Nextcomedia (Working Draft)",
        terms: "Terms of Use | Nextcomedia",
      },
    };

    document.title = titles[lang][currentPage] || titles[lang].home;
  }, [lang, currentPage]);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (newLang: Lang) => {
    setLang(newLang);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-600 selection:text-white bg-slate-50 text-slate-900">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-slate-900 focus:text-white focus:outline-none"
      >
        {lang === 'fr' ? 'Passer directement au contenu principal' : 'Skip to main content'}
      </a>

      {/* Persistent Navigation Header */}
      <Header
        lang={lang}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onLanguageChange={handleLanguageChange}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {currentPage === 'home' && (
          <HomePage lang={lang} onNavigate={handleNavigate} />
        )}
        {currentPage === 'approach' && (
          <OurApproachPage lang={lang} onNavigate={handleNavigate} />
        )}
        {currentPage === 'compliance' && (
          <PrivacyCompliancePage lang={lang} onNavigate={handleNavigate} />
        )}
        {currentPage === 'about' && (
          <AboutPage lang={lang} onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && (
          <ContactPage lang={lang} onNavigate={handleNavigate} />
        )}
        {currentPage === 'privacy' && (
          <PrivacyPolicyPage lang={lang} onNavigate={handleNavigate} />
        )}
        {currentPage === 'terms' && (
          <TermsOfUsePage lang={lang} onNavigate={handleNavigate} />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer lang={lang} onNavigate={handleNavigate} />

      {/* Floating Interactive Chatbot */}
      <Chatbot lang={lang} onNavigate={handleNavigate} />
    </div>
  );
}
