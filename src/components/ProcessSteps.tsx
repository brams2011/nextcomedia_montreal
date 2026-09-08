import React from 'react';
import { Lang, PageRoute } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProcessStepsProps {
  lang?: Lang;
  showCta?: boolean;
  onNavigate?: (page: PageRoute) => void;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({
  lang = 'fr',
  showCta = true,
  onNavigate,
}) => {
  const isFr = lang === 'fr';

  const steps = isFr
    ? [
        {
          num: '01',
          title: 'Prise de contact',
          desc: 'Nous prenons contact avec les prospects selon le processus défini.',
          detail: 'Approche téléphonique courtoise et professionnelle, respectueuse de votre réputation.',
        },
        {
          num: '02',
          title: 'Qualification',
          desc: 'Nous recueillons les informations selon vos critères.',
          detail: 'Vérification de l\'éligibilité, des échéances de renouvellement et de l\'intérêt réel.',
        },
        {
          num: '03',
          title: 'Validation',
          desc: 'Nous identifions les prospects correspondant aux critères convenus.',
          detail: 'Tri rigoureux et contrôle qualité avant toute transmission à vos courtiers.',
        },
        {
          num: '04',
          title: 'Rendez-vous',
          desc: 'Nous facilitons la mise en relation avec votre équipe.',
          detail: 'Planification directe dans votre agenda ou envoi de fiches de transfert complètes.',
        },
      ]
    : [
        {
          num: '01',
          title: 'Outreach',
          desc: 'We reach out to prospective clients according to the established framework.',
          detail: 'Courteous and professional telemarketing outreach that safeguards your firm’s brand reputation.',
        },
        {
          num: '02',
          title: 'Qualification',
          desc: 'We gather specific information according to your criteria.',
          detail: 'Verification of eligibility criteria, renewal timelines, and genuine insurance needs.',
        },
        {
          num: '03',
          title: 'Validation',
          desc: 'We identify prospects strictly matching agreed underwriting profile.',
          detail: 'Rigorous quality review and data validation before any transfer to your team.',
        },
        {
          num: '04',
          title: 'Meeting Booking',
          desc: 'We facilitate seamless handover to your team.',
          detail: 'Direct calendar integration or transmission of comprehensive lead handover sheets.',
        },
      ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.num}
            className="relative bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-mono">
                  {step.num}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-blue-100 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-colors"></span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                {step.desc}
              </p>
            </div>
            <p className="text-xs text-slate-500 border-t border-slate-100 pt-3 mt-2">
              {step.detail}
            </p>
          </div>
        ))}
      </div>

      {showCta && onNavigate && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => {
              onNavigate('approach');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-xs hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>{isFr ? 'Voir notre approche détaillée' : 'View our detailed approach'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
