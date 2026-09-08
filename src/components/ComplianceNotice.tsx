import React from 'react';
import { Lang } from '../types';
import { AlertTriangle } from 'lucide-react';

interface ComplianceNoticeProps {
  text?: string;
  lang?: Lang;
  className?: string;
}

export const ComplianceNotice: React.FC<ComplianceNoticeProps> = ({
  lang = 'fr',
  text = lang === 'fr'
    ? 'Document de cadrage préliminaire — Les informations réglementaires et opérationnelles doivent être validées juridiquement avant diffusion contractuelle [À VALIDER].'
    : 'Preliminary framework document — Regulatory and operational disclosures must be legally verified prior to contractual execution [PENDING VALIDATION].',
  className = '',
}) => {
  return (
    <div className={`inline-flex items-start gap-3 p-4 rounded-xl bg-amber-50/90 border border-amber-200/90 text-amber-900 text-xs sm:text-sm leading-relaxed ${className}`} role="note">
      <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
      <div>
        <span className="font-semibold">{lang === 'fr' ? 'Note de conformité :' : 'Compliance Note:'}</span> {text}
      </div>
    </div>
  );
};
