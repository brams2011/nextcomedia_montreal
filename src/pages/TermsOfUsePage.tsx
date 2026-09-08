import React from 'react';
import { Lang, PageRoute } from '../types';
import { ComplianceNotice } from '../components/ComplianceNotice';

interface TermsOfUsePageProps {
  lang: Lang;
  onNavigate: (page: PageRoute) => void;
}

export const TermsOfUsePage: React.FC<TermsOfUsePageProps> = ({ lang }) => {
  const isFr = lang === 'fr';

  return (
    <div className="pt-16 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            {isFr ? 'Mentions légales' : 'Legal Notice'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
            {isFr ? "Conditions d'utilisation" : 'Terms of Use'}
          </h1>
          <p className="text-xs text-slate-500">
            {isFr ? 'Dernière mise à jour : Septembre 2024' : 'Last updated: September 2024'}
          </p>

          <div className="mt-6">
            <ComplianceNotice
              lang={lang}
              text={isFr
                ? "Document préliminaire à valider auprès d'un conseiller juridique qualifié au Québec [À VALIDER]."
                : 'Preliminary document subject to formal confirmation by licensed Quebec legal counsel [PENDING VALIDATION].'}
            />
          </div>
        </div>

        <div className="text-sm sm:text-base leading-relaxed space-y-8 text-slate-700">
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              {isFr ? '1. Objet' : '1. Purpose & Acceptance'}
            </h2>
            <p>
              {isFr
                ? "Les présentes Conditions d'utilisation régissent l'accès et l'utilisation du site Internet nextcomedia.ca (le « Site »), édité et opéré par Nextcomedia. En accédant ou en naviguant sur ce Site, vous acceptez d'être lié sans réserve par les présentes dispositions."
                : 'These Terms of Use govern access to and use of the website nextcomedia.ca (the "Site"), published and operated by Nextcomedia. By browsing or using this Site, you accept and agree to be bound by these terms without limitation.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              {isFr ? "2. Absence de conseil et nature de l'activité" : '2. Disclaimer of Brokerage and Advisory Services'}
            </h2>
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-900 leading-relaxed">
              <strong>{isFr ? 'Important : ' : 'Important Regulatory Notice: '}</strong>
              {isFr
                ? "Nextcomedia n'est pas un cabinet de courtage en assurance, ni une société de gestion de contrats d'assurance, ni un conseiller financier. Aucune information présente sur le Site ne saurait être interprétée comme une offre de produit d'assurance, une recommandation financière, ou un acte de courtage au sens de la Loi sur la distribution de produits et services financiers du Québec."
                : 'Nextcomedia is neither an insurance broker, a licensed firm, nor a financial advisory firm. No content on this Site constitutes an insurance quote, policy issuance, financial recommendation, or broker solicitation under the Act respecting the distribution of financial products and services of Quebec.'}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              {isFr ? '3. Utilisation du Site' : '3. Permitted Use'}
            </h2>
            <p className="mb-2">
              {isFr
                ? "L'utilisateur s'engage à utiliser le Site uniquement à des fins licites et professionnelles, et s'interdit formellement :"
                : 'Users agree to utilize this Site solely for legitimate commercial inquiry purposes and expressly agree not to:'}
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>{isFr ? 'De perturber, d\'endommager ou de tenter d\'accéder sans autorisation aux serveurs connectés au Site ;' : 'Disrupt, damage, or compromise the integrity of the server infrastructure hosting the Site;'}</li>
              <li>{isFr ? 'D\'utiliser des robots de collecte ou aspirateurs de données pour extraire le contenu du Site ;' : 'Deploy automated data scraping, crawlers, or harvesting tools against website contents;'}</li>
              <li>{isFr ? 'De soumettre de fausses informations ou des messages frauduleux via les formulaires de contact.' : 'Transmit fraudulent information, phishing content, or deceptive submissions through contact forms.'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              {isFr ? '4. Droit applicable et juridiction' : '4. Governing Law and Jurisdiction'}
            </h2>
            <p>
              {isFr
                ? 'Les présentes Conditions d\'utilisation sont régies et interprétées conformément aux lois de la province de Québec et aux lois du Canada qui y sont applicables. Tout litige découlant de l\'utilisation du Site sera soumis à la compétence exclusive des tribunaux du district judiciaire de Montréal (Québec).'
                : 'These Terms of Use are governed by the laws of the Province of Quebec and the federal laws of Canada applicable therein. Any legal proceeding arising out of these terms shall be submitted to the exclusive jurisdiction of the courts located in the judicial district of Montreal, Quebec.'}
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
