import React from 'react';
import { Lang } from '../types';
import { Filter, ClipboardCheck, Users, ShieldCheck } from 'lucide-react';

interface TrustCardsProps {
  lang?: Lang;
}

export const TrustCards: React.FC<TrustCardsProps> = ({ lang = 'fr' }) => {
  const isFr = lang === 'fr';

  const cards = isFr
    ? [
        {
          icon: Filter,
          gradient: 'from-blue-500 to-indigo-600',
          title: 'Qualification structurée',
          description: 'Vos critères déterminent les informations recherchées et la qualification des prospects.',
          detail: 'Filtres d\'éligibilité, validation du besoin d\'assurance et recueil des informations convenues.',
        },
        {
          icon: ClipboardCheck,
          gradient: 'from-indigo-500 to-purple-600',
          title: 'Processus documenté',
          description: 'Chaque étape du parcours est définie afin d\'assurer une approche cohérente.',
          detail: 'Scripts de cadrage, compte-rendu d\'appels systématique et transmission standardisée.',
        },
        {
          icon: Users,
          gradient: 'from-purple-500 to-blue-600',
          title: 'Équipe dédiée',
          description: 'Une équipe de téléprospection pilotée depuis Montréal.',
          detail: '10 à 15 collaborateurs formés aux spécificités de la prise de contact B2B québécoise.',
        },
        {
          icon: ShieldCheck,
          gradient: 'from-blue-600 to-cyan-500',
          title: 'Approche confidentielle',
          description: 'Les renseignements transmis dans le cadre des opérations sont traités selon les procédures et engagements convenus avec le client.',
          detail: 'Clauses de confidentialité contractuelles et politiques internes d\'accès restreint.',
        },
      ]
    : [
        {
          icon: Filter,
          gradient: 'from-blue-500 to-indigo-600',
          title: 'Structured Qualification',
          description: 'Your specific criteria dictate the information collected and the qualification of prospects.',
          detail: 'Eligibility filters, verification of insurance needs, and standardized inquiry points.',
        },
        {
          icon: ClipboardCheck,
          gradient: 'from-indigo-500 to-purple-600',
          title: 'Documented Process',
          description: 'Every stage of outreach is formalized to ensure a consistent, professional brand experience.',
          detail: 'Custom outreach frameworks, systematic call logging, and seamless handover to your brokers.',
        },
        {
          icon: Users,
          gradient: 'from-purple-500 to-blue-600',
          title: 'Dedicated Team',
          description: 'A specialized outreach team supervised from Montreal.',
          detail: '10 to 15 professionals trained in the communication nuances of the Quebec insurance market.',
        },
        {
          icon: ShieldCheck,
          gradient: 'from-blue-600 to-cyan-500',
          title: 'Confidential Framework',
          description: 'Information handled during outreach is managed strictly according to agreed procedures and client agreements.',
          detail: 'Enforceable NDA clauses, restricted role-based permissions, and transparent workflows.',
        },
      ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const IconComponent = card.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.gradient} text-white flex items-center justify-center mb-5 shadow-xs group-hover:scale-110 transition-transform duration-200`}>
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {card.description}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
              {card.detail}
            </div>
          </div>
        );
      })}
    </div>
  );
};
