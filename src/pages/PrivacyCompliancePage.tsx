import React from 'react';
import { Lang, PageRoute } from '../types';
import { ComplianceNotice } from '../components/ComplianceNotice';
import { CTASection } from '../components/CTASection';
import { Shield, Lock, FileText, Users, Trash2, AlertCircle } from 'lucide-react';

interface PrivacyCompliancePageProps {
  lang: Lang;
  onNavigate: (page: PageRoute) => void;
}

export const PrivacyCompliancePage: React.FC<PrivacyCompliancePageProps> = ({ lang, onNavigate }) => {
  const isFr = lang === 'fr';

  return (
    <div>
      {/* Page Header */}
      <section className="pt-16 pb-14 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-slate-100 text-slate-800 border border-slate-200 mb-4">
            {isFr ? 'Cadre réglementaire & éthique' : 'Regulatory & Ethical Framework'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            {isFr
              ? 'La protection des renseignements personnels au cœur de notre approche.'
              : 'Personal information protection is at the core of our approach.'}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {isFr
              ? 'Nextcomedia opère des campagnes de prise de contact et de qualification pour le compte de cabinets d\'assurance québécois. La rigueur, la transparence géographique et la conformité contractuelle sont le socle de notre collaboration.'
              : 'Nextcomedia conducts outreach and lead qualification campaigns on behalf of Canadian insurance brokerages and MGAs. Operational transparency, cross-border governance, and contractual compliance form the cornerstone of our client partnerships.'}
          </p>

          <div className="mt-8 max-w-2xl mx-auto">
            <ComplianceNotice
              lang={lang}
              text={isFr
                ? 'Cette page décrit notre cadre organisationnel et les principes applicables. Les protocoles techniques et politiques définitives font l\'objet d\'une validation juridique continue et d\'annexes contractuelles spécifiques avec chaque cabinet client [À VALIDER].'
                : 'This page outlines our organizational practices and baseline principles. Definitive technical protocols and compliance addenda are subject to continuous legal verification and tailored bilateral agreements with each brokerage [PENDING VALIDATION].'}
            />
          </div>
        </div>
      </section>

      {/* Core Content Sections */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Transparency outside Quebec */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-600"></span>
              {isFr
                ? 'Transparence opérationnelle et transferts hors Québec'
                : 'Operational Transparency & Cross-Border Data Flow'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              {isFr
                ? 'Conformément aux exigences québécoises relatives à la protection des renseignements personnels (notamment les principes de la Loi 25), nous informons expressément nos clients que :'
                : 'In accordance with Quebec privacy standards (notably the principles of Law 25 regarding data transfers outside Quebec), we explicitly inform our clients that:'}
            </p>
            <ul className="space-y-2 text-sm text-slate-700 list-disc list-inside">
              <li>
                {isFr
                  ? 'Le pilotage d\'affaires, la coordination contractuelle et la gouvernance sont assurés depuis '
                  : 'Business governance, strategic direction, and contract management are based in '}
                <strong>Montréal (Québec, Canada)</strong>.
              </li>
              <li>
                {isFr
                  ? 'Les opérations d\'appels sortants et de qualification téléphonique sont exécutées depuis notre centre d\'appels dédié à '
                  : 'Outbound calls and telephone qualification activities are executed from our dedicated facility in '}
                <strong>Cotonou (Bénin)</strong>.
              </li>
              <li>
                {isFr
                  ? 'Les flux d\'informations et les accès distants font l\'objet d\'accords bilatéraux et d\'un encadrement strict entre Nextcomedia et les cabinets partenaires.'
                  : 'Information flow and system access are governed by strict bilateral data handling agreements.'}
              </li>
            </ul>
          </div>

          {/* 1. Protection des renseignements */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2.5">
              <Shield className="w-6 h-6 text-blue-600" />
              <span>{isFr ? '1. Protection des renseignements personnels' : '1. Personal Information Protection'}</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {isFr
                ? 'Nextcomedia ne recueille que les données strictement nécessaires à la qualification du prospect en fonction de la grille validée avec le cabinet mandant (nom, prénom, coordonnées de contact, échéance de renouvellement, profil sommaire de besoin).'
                : 'Nextcomedia collects only information strictly necessary to qualify prospects against criteria validated with the client brokerage (name, professional contact details, policy renewal dates, general coverage requirements).'}
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs sm:text-sm text-slate-600">
              <strong>{isFr ? 'Principe de proportionnalité : ' : 'Data Minimization Principle: '}</strong>
              {isFr
                ? 'Nous ne sollicitons jamais de numéros d\'assurance sociale, de données bancaires, ni d\'informations médicales confidentielles. Ces éléments relèvent exclusivement du courtier certifié lors de la souscription.'
                : 'We never request Social Insurance Numbers (SIN), banking details, or sensitive medical records. Those items remain strictly within the exclusive purview of the certified broker during formal policy underwriting.'}
            </div>
          </div>

          {/* 2. ÉFVP */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2.5">
              <FileText className="w-6 h-6 text-indigo-600" />
              <span>{isFr ? '2. Évaluation des facteurs relatifs à la vie privée (ÉFVP)' : '2. Privacy Impact Assessment (PIA / ÉFVP)'}</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {isFr
                ? 'Lorsque requis par la législation applicable au Québec (Loi 25), toute communication de renseignements personnels à l\'extérieur de la province doit faire l\'objet d\'une évaluation préalable des facteurs relatifs à la vie privée afin de vérifier que les renseignements bénéficieront d\'une protection adéquate.'
                : 'Where required by applicable legislation in Quebec (Law 25), any communication of personal data outside the province must be preceded by a Privacy Impact Assessment to verify that the information receives adequate protection.'}
            </p>
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-900">
              <strong>{isFr ? 'Mesure documentaire : ' : 'Compliance Asset: '}</strong>
              {isFr
                ? 'Une ÉFVP standardisée ou un modèle de grille d\'évaluation est mis à la disposition des cabinets clients pour intégration dans leurs registres de gouvernance interne [À VALIDER AVEC LE CONSEILLER JURIDIQUE DU CLIENT].'
                : 'Standardized PIA documentation is made available to partner brokerages to integrate into their internal regulatory governance registers [PENDING FORMAL LEGAL REVIEW BY CLIENT COUNSEL].'}
            </div>
          </div>

          {/* 3. Gestion des accès */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2.5">
              <Lock className="w-6 h-6 text-purple-600" />
              <span>{isFr ? '3. Gestion des accès et sécurité logique' : '3. Access Control and Logical Security'}</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {isFr
                ? 'L\'accès aux fiches de contacts qualifiés est strictement cloisonné selon le principe du moindre privilège :'
                : 'Access to prospect data is segregated on a strict need-to-know basis:'}
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  {isFr
                    ? 'Chaque téléconseiller dispose d\'un identifiant nominatif unique avec authentification sécurisée [À VALIDER : protocoles MFA / SSO].'
                    : 'Each outreach agent is assigned a named login credential with secure authentication [PENDING VALIDATION: MFA / SSO].'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>{isFr ? 'Accès limité aux seuls prospects assignés à la session d\'appel en cours.' : 'Access is strictly restricted to prospects scheduled for the active calling session.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>{isFr ? 'Interdiction stricte de téléchargement local ou d\'extraction non autorisée de fichiers prospects.' : 'Local file downloading or unauthorized prospect list extraction is strictly prohibited.'}</span>
              </li>
            </ul>
          </div>

          {/* 4. Personnel */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2.5">
              <Users className="w-6 h-6 text-blue-600" />
              <span>{isFr ? '4. Confidentialité et formation du personnel' : '4. Staff Confidentiality and Training'}</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {isFr
                ? 'L\'ensemble des collaborateurs du centre d\'appels de Cotonou est soumis à des règles rigoureuses :'
                : 'Every team member at the Cotonou call center is bound by strict ethical standards:'}
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>{isFr ? 'Engagements écrits : ' : 'Written Commitments: '}</strong>{isFr ? 'Signature obligatoire d\'un accord individuel de non-divulgation et de confidentialité préalable à la prise de poste.' : 'Mandatory non-disclosure agreements (NDAs) signed prior to onboarding.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>{isFr ? 'Sensibilisation continue : ' : 'Continuous Training: '}</strong>{isFr ? 'Formation aux impératifs déontologiques et aux attentes des professionnels québécois de l\'assurance.' : 'Regular coaching on Quebec insurance market ethics and courteous communication.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>{isFr ? 'Surveillance opérationnelle : ' : 'Quality Audits: '}</strong>{isFr ? 'Encadrement par des superviseurs sur place et double écoute qualité régulière.' : 'On-site floor supervision and regular double-listening quality sessions.'}</span>
              </li>
            </ul>
          </div>

          {/* 5. Conservation & Purge */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2.5">
              <Trash2 className="w-6 h-6 text-rose-600" />
              <span>{isFr ? '5. Conservation, purge et suppression des données' : '5. Retention, Archival, and Data Purging'}</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {isFr
                ? 'Nextcomedia n\'a pas vocation à constituer une base de données pérenne des assurés du Québec. Les renseignements recueillis n\'ont d\'utilité que pour la transmission initiale au cabinet client.'
                : 'Nextcomedia does not maintain a permanent consumer database. Data collected serves solely to enable introductory qualification and handover to the client brokerage.'}
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs sm:text-sm text-slate-600">
              <strong>{isFr ? 'Calendrier de purge : ' : 'Purge Schedule: '}</strong>
              {isFr
                ? 'Une fois le lead transmis ou archivé après la fin de la campagne, les données font l\'objet d\'une suppression selon la durée de conservation convenue contractuellement (ex. 30 à 90 jours maximum) [À VALIDER SELON CONTRAT CADRE].'
                : 'Once a lead is handed over or archived post-campaign, records are deleted in accordance with the contractually agreed retention timeframe (e.g., 30 to 90 days maximum) [TO BE CONFIRMED PER MASTER SERVICE AGREEMENT].'}
            </div>
          </div>

          {/* 6. Responsabilités contractuelles */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2.5">
              <FileText className="w-6 h-6 text-indigo-600" />
              <span>{isFr ? '6. Responsabilités contractuelles et sous-traitance' : '6. Contractual Allocation of Responsibilities'}</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {isFr
                ? 'Les relations entre Nextcomedia et ses clients cabinets ou MGA sont matérialisées par une convention de services écrite définissant les finalités exclusives autorisées, l\'interdiction de sous-traitance à des tiers sans accord et notre statut distinct d\'intermédiaire technique.'
                : 'Every partnership is formalized through a written Master Services Agreement defining authorized purposes, strict subcontracting prohibitions, and our distinct role as an outreach provider.'}
            </p>
          </div>

          {/* 7. Gestion des incidents */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2.5">
              <AlertCircle className="w-6 h-6 text-amber-600" />
              <span>{isFr ? '7. Gestion des incidents de confidentialité' : '7. Privacy Incident Response'}</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {isFr
                ? 'En cas d\'incident suspecté ou avéré impliquant des renseignements personnels : notification immédiate du cabinet client pour lui permettre d\'assumer ses obligations envers la CAI (Commission d\'accès à l\'information), et isolement immédiat des accès concernés.'
                : 'In the event of an alleged or confirmed confidentiality incident: prompt written notification to client firms to assist them in fulfilling regulatory mandates, and immediate credential revocation.'}
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs sm:text-sm text-slate-600">
              <strong>{isFr ? 'Responsable de la protection des renseignements personnels (RPRP) : ' : 'Privacy Officer (RPRP): '}</strong>
              {isFr
                ? 'Désignation en cours de confirmation [contact-rprp@nextcomedia.ca].'
                : 'Formal appointment in progress [privacy@nextcomedia.ca].'}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        lang={lang}
        title={isFr ? 'Une question sur notre encadrement de conformité ?' : 'Questions regarding our privacy framework?'}
        subtitle={isFr
          ? 'Notre direction à Montréal est à votre disposition pour vous détailler nos procédures et conventions de service.'
          : 'Our Montreal leadership team is available to discuss our security measures and service agreements.'}
        onNavigate={onNavigate}
      />
    </div>
  );
};
