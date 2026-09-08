import React from 'react';
import { Lang, PageRoute } from '../types';
import { ComplianceNotice } from '../components/ComplianceNotice';

interface PrivacyPolicyPageProps {
  lang: Lang;
  onNavigate: (page: PageRoute) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ lang }) => {
  const isFr = lang === 'fr';

  return (
    <div className="pt-16 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            {isFr ? 'Gouvernance des données' : 'Data Governance'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
            {isFr ? 'Politique de confidentialité' : 'Privacy Policy'}
          </h1>
          <p className="text-xs text-slate-500">
            {isFr
              ? 'Version préliminaire de travail — Dernière mise à jour : Septembre 2024'
              : 'Preliminary Working Draft — Last updated: September 2024'}
          </p>

          <div className="mt-6">
            <ComplianceNotice
              lang={lang}
              text={isFr
                ? 'Ce document constitue un modèle d\'organisation soumis à révision juridique formelle avant adoption définitive par la direction de Nextcomedia [À VALIDER AVEC AVOCAT EN DROIT DES AFFAIRES DU QUÉBEC].'
                : 'This document represents a preliminary operational framework subject to formal legal review prior to final corporate ratification [PENDING FORMAL LEGAL COUNSEL REVIEW].'}
            />
          </div>
        </div>

        <div className="text-sm sm:text-base leading-relaxed space-y-8 text-slate-700">
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              {isFr ? '1. Préambule et Champ d\'application' : '1. Scope and Preamble'}
            </h2>
            <p className="mb-2">
              {isFr
                ? 'Nextcomedia accorde une importance primordiale à la confidentialité et à la protection des renseignements personnels qu\'elle est amenée à traiter dans le cadre de son site web nextcomedia.ca et de ses prestations de prise de contact, de qualification et de mise en relation destinées aux courtiers et cabinets d\'assurance québécois.'
                : 'Nextcomedia is deeply committed to protecting personal information handled through our website nextcomedia.ca and throughout our outbound qualification, telemarketing, and appointment setting services delivered to Canadian insurance brokers and MGAs.'}
            </p>
            <p>
              {isFr
                ? 'La présente politique vise à exposer nos pratiques conformément aux exigences applicables au Québec, notamment la Loi sur la protection des renseignements personnels dans le secteur privé (telle que modifiée par la Loi 25).'
                : 'This policy outlines our privacy commitments under applicable Canadian and Quebec legislation, specifically the Act respecting the protection of personal information in the private sector (as amended by Law 25).'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              {isFr ? '2. Renseignements personnels collectés' : '2. Personal Information Collected'}
            </h2>
            <p className="mb-2">
              {isFr
                ? 'Nous recueillons uniquement les renseignements nécessaires aux finalités poursuivies :'
                : 'We collect only personal information strictly necessary for identified operational purposes:'}
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>{isFr ? 'Formulaire de devis / contact : ' : 'Quote & Consultation Forms: '}</strong>
                {isFr
                  ? 'Prénom, nom, nom de l\'entreprise/cabinet, courriel professionnel, numéro de téléphone, volume estimé de prospects, besoins déclarés et contenu du message.'
                  : 'First name, last name, company/brokerage name, corporate email, phone number, estimated prospect volume, stated requirements, and inquiry text.'}
              </li>
              <li>
                <strong>{isFr ? 'Données de prospection commerciale : ' : 'B2B Outreach Operations: '}</strong>
                {isFr
                  ? 'Coordonnées professionnelles publiques ou transmises selon mandat, échéances déclarées de renouvellement d\'assurance, critères de qualification validés.'
                  : 'Public or mandated business contact details, declared insurance policy renewal timelines, and verified underwriting criteria.'}
              </li>
              <li>
                <strong>{isFr ? 'Navigation web : ' : 'Website Browsing: '}</strong>
                {isFr
                  ? 'Nous utilisons une solution d\'analyse sans cookies respectueuse de la vie privée (Plausible Analytics), ne collectant aucune donnée personnelle identifiable.'
                  : 'We utilize cookieless, privacy-first analytics (Plausible Analytics), collecting no persistent cross-site identifiers.'}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              {isFr ? '3. Finalités de la collecte et Utilisation' : '3. Purposes and Use of Data'}
            </h2>
            <p className="mb-2">{isFr ? 'Les renseignements recueillis sont utilisés exclusivement afin de :' : 'Collected data is used strictly for:'}</p>
            <ul className="list-disc list-inside space-y-1">
              <li>{isFr ? 'Répondre aux demandes d\'information, de devis et de planification d\'appels préliminaires ;' : 'Responding to requests for quotes and organizing introductory discovery calls;'}</li>
              <li>{isFr ? 'Évaluer la faisabilité technique d\'une campagne de qualification pour un cabinet client ;' : 'Evaluating campaign feasibility and tailoring qualification criteria for partner brokerages;'}</li>
              <li>{isFr ? 'Exécuter les mandats de qualification de prospects conformément aux directives contractuelles convenues ;' : 'Executing qualification campaigns in strict alignment with client master service agreements;'}</li>
              <li>{isFr ? 'Assurer le respect de nos obligations légales et réglementaires.' : 'Ensuring compliance with applicable legal and statutory responsibilities.'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              {isFr ? '4. Conservation et Suppression des renseignements' : '4. Retention and Data Purging'}
            </h2>
            <p>
              {isFr
                ? 'Les renseignements personnels ne sont conservés que pendant la durée strictement nécessaire à l\'accomplissement des finalités. Les fiches prospects sont purgées des systèmes selon le calendrier convenu avec le cabinet mandant (ex: 30 à 90 jours post-transmission) [À VALIDER SELON ACCORD CADRE].'
                : 'Personal data is retained only for as long as necessary. Outreach prospect files are purged from active systems according to the schedule agreed upon with client brokerages (e.g., 30 to 90 days post-handover) [TO BE CONFIRMED PER MASTER AGREEMENT].'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              {isFr ? '5. Droits des personnes concernées & Contact RPRP' : '5. Individual Rights & Privacy Officer'}
            </h2>
            <p className="mb-3">
              {isFr
                ? 'Toute personne dispose d\'un droit d\'accès, de rectification et de retrait de consentement auprès de notre Responsable de la protection des renseignements personnels :'
                : 'Individuals maintain rights of access, rectification, and consent withdrawal with our Privacy Officer:'}
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-1">
              <p><strong>Nextcomedia</strong></p>
              <p><strong>{isFr ? 'À l\'attention du : ' : 'Attention: '}</strong>{isFr ? 'Responsable de la protection des renseignements personnels' : 'Privacy Officer'} [NOM DU RESPONSABLE À CONFIRMER]</p>
              <p><strong>Email : </strong><a href="mailto:privacy@nextcomedia.ca" className="text-blue-600 underline">privacy@nextcomedia.ca</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
