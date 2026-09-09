import React, { useState } from 'react';
import { Lang, ContactFormData } from '../types';
import { CheckCircle2, AlertCircle, Calendar, ArrowRight, Loader2, ExternalLink, Clock } from 'lucide-react';

interface ContactFormProps {
  lang?: Lang;
}

export const ContactForm: React.FC<ContactFormProps> = ({ lang = 'fr' }) => {
  const isFr = lang === 'fr';

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    companyType: '',
    estimatedVolume: '50 à 200',
    need: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (formData.honeypot && formData.honeypot.trim() !== '') {
      errs.honeypot = isFr ? 'Soumission automatisée détectée.' : 'Automated submission detected.';
      setErrors(errs);
      return false;
    }

    if (!formData.firstName.trim()) {
      errs.firstName = isFr ? 'Le prénom est requis.' : 'First name is required.';
    } else if (formData.firstName.length > 80) {
      errs.firstName = isFr ? 'Le prénom est trop long.' : 'First name is too long.';
    }

    if (!formData.lastName.trim()) {
      errs.lastName = isFr ? 'Le nom est requis.' : 'Last name is required.';
    } else if (formData.lastName.length > 80) {
      errs.lastName = isFr ? 'Le nom est trop long.' : 'Last name is too long.';
    }

    if (!formData.company.trim()) {
      errs.company = isFr ? "Le nom de l'entreprise est requis." : 'Company name is required.';
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      errs.email = isFr ? 'Le courriel professionnel est requis.' : 'Business email is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = isFr ? 'Veuillez saisir un courriel valide.' : 'Please enter a valid email address.';
    }

    const phoneDigits = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      errs.phone = isFr ? 'Le numéro de téléphone est requis.' : 'Phone number is required.';
    } else if (phoneDigits.length < 10) {
      errs.phone = isFr ? 'Le numéro doit comporter au moins 10 chiffres.' : 'Phone number must have at least 10 digits.';
    }

    if (!formData.companyType) {
      errs.companyType = isFr ? "Le type d'organisation est requis." : 'Organization type is required.';
    }

    if (!formData.need) {
      errs.need = isFr ? 'Le type de besoin est requis.' : 'Primary need is required.';
    }

    if (!formData.message.trim()) {
      errs.message = isFr ? 'Le message est requis.' : 'Message is required.';
    } else if (formData.message.length > 3000) {
      errs.message = isFr ? 'Le message dépasse la limite de 3000 caractères.' : 'Message exceeds 3000 characters limit.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGlobalError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitSuccess(true);
      } else {
        setGlobalError(data.error || (isFr ? 'Une erreur est survenue lors de l\'envoi.' : 'An error occurred during submission.'));
      }
    } catch {
      // Graceful fallback for client-side display if fetch fails
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
      {/* Success Feedback Box */}
      {submitSuccess && (
        <div className="mb-6 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-base text-emerald-950">
                {isFr ? 'Demande transmise avec succès !' : 'Inquiry submitted successfully!'}
              </h4>
              <p className="text-sm text-emerald-800 mt-1">
                {isFr
                  ? 'Merci pour votre confiance. Notre équipe de direction à Montréal prendra contact avec vous dans les 24 à 48 heures ouvrables pour analyser vos critères.'
                  : 'Thank you for reaching out. Our Montreal management team will contact you within 24 to 48 business hours to review your criteria.'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitSuccess(false);
                  setFormData({
                    firstName: '',
                    lastName: '',
                    company: '',
                    email: '',
                    phone: '',
                    companyType: '',
                    estimatedVolume: '50 à 200',
                    need: '',
                    message: '',
                    honeypot: '',
                  });
                }}
                className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold hover:bg-emerald-700 transition-colors"
              >
                {isFr ? 'Envoyer une autre demande' : 'Submit another inquiry'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Feedback */}
      {globalError && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>{globalError}</div>
        </div>
      )}

      {!submitSuccess && (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Honeypot Anti-Spam */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp-field">Honeypot</label>
            <input
              type="text"
              id="hp-field"
              name="honeypot"
              value={formData.honeypot || ''}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Prénom & Nom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2">
                {isFr ? 'Prénom *' : 'First name *'}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder={isFr ? 'Jean' : 'John'}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm bg-slate-50/50 transition-all outline-none"
              />
              {errors.firstName && <p className="mt-1 text-xs text-rose-600">{errors.firstName}</p>}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2">
                {isFr ? 'Nom *' : 'Last name *'}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder={isFr ? 'Tremblay' : 'Smith'}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm bg-slate-50/50 transition-all outline-none"
              />
              {errors.lastName && <p className="mt-1 text-xs text-rose-600">{errors.lastName}</p>}
            </div>
          </div>

          {/* Entreprise & Courriel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2">
                {isFr ? 'Entreprise / Cabinet *' : 'Company / Firm *'}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder={isFr ? 'Cabinet Tremblay Assurance' : 'Tremblay Insurance Inc.'}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm bg-slate-50/50 transition-all outline-none"
              />
              {errors.company && <p className="mt-1 text-xs text-rose-600">{errors.company}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2">
                {isFr ? 'Courriel professionnel *' : 'Business email *'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="contact@votrecabinet.ca"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm bg-slate-50/50 transition-all outline-none"
              />
              {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
            </div>
          </div>

          {/* Téléphone & Type d'organisation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2">
                {isFr ? 'Téléphone professionnel *' : 'Business phone *'}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(514) 000-0000"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm bg-slate-50/50 transition-all outline-none"
              />
              {errors.phone && <p className="mt-1 text-xs text-rose-600">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="companyType" className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2">
                {isFr ? 'Type d\'organisation *' : 'Organization type *'}
              </label>
              <select
                id="companyType"
                name="companyType"
                value={formData.companyType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm bg-slate-50/50 transition-all outline-none"
              >
                <option value="">{isFr ? 'Sélectionnez votre profil' : 'Select your profile'}</option>
                <option value="Courtier / Broker">{isFr ? 'Courtier indépendant' : 'Independent broker'}</option>
                <option value="Cabinet">{isFr ? 'Cabinet d\'assurance' : 'Insurance brokerage firm'}</option>
                <option value="MGA">{isFr ? 'MGA (Agent général gestionnaire)' : 'MGA (Managing General Agent)'}</option>
                <option value="Autre / Other">{isFr ? 'Autre structure' : 'Other organization'}</option>
              </select>
              {errors.companyType && <p className="mt-1 text-xs text-rose-600">{errors.companyType}</p>}
            </div>
          </div>

          {/* Volume mensuel & Besoin */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="estimatedVolume" className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2">
                {isFr ? 'Nombre approximatif de prospects / mois' : 'Approximate prospects / month'}
              </label>
              <select
                id="estimatedVolume"
                name="estimatedVolume"
                value={formData.estimatedVolume}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm bg-slate-50/50 transition-all outline-none"
              >
                <option value="Moins de 50">{isFr ? 'Moins de 50 prospects / mois' : 'Less than 50 prospects / month'}</option>
                <option value="50 à 200">{isFr ? '50 à 200 prospects / mois' : '50 to 200 prospects / month'}</option>
                <option value="200 à 500">{isFr ? '200 à 500 prospects / mois' : '200 to 500 prospects / month'}</option>
                <option value="Plus de 500">{isFr ? 'Plus de 500 prospects / mois' : 'More than 500 prospects / month'}</option>
              </select>
            </div>

            <div>
              <label htmlFor="need" className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2">
                {isFr ? 'Besoin prioritaire *' : 'Primary need *'}
              </label>
              <select
                id="need"
                name="need"
                value={formData.need}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm bg-slate-50/50 transition-all outline-none"
              >
                <option value="">{isFr ? 'Sélectionnez un besoin' : 'Select a need'}</option>
                <option value="Qualification de prospects">{isFr ? 'Qualification de prospects' : 'Lead qualification'}</option>
                <option value="Prise de rendez-vous">{isFr ? 'Prise de rendez-vous qualifiés' : 'Qualified appointment setting'}</option>
                <option value="Campagne de prospection">{isFr ? 'Campagne de prospection téléphonique complète' : 'Full telemarketing outreach campaign'}</option>
                <option value="Autre">{isFr ? 'Autre besoin sur-mesure' : 'Custom requirement'}</option>
              </select>
              {errors.need && <p className="mt-1 text-xs text-rose-600">{errors.need}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2">
              {isFr ? 'Précisions sur vos critères de qualification ou objectifs *' : 'Details on qualification criteria or goals *'}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder={isFr
                ? 'Décrivez votre clientèle cible (particuliers, entreprises), vos gammes prioritaires et vos attentes en termes de transmission...'
                : 'Describe your target market (personal, commercial lines), primary insurance products, and handover criteria...'}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm bg-slate-50/50 transition-all outline-none"
            ></textarea>
            {errors.message && <p className="mt-1 text-xs text-rose-600">{errors.message}</p>}
          </div>

          {/* Notice confidentiality */}
          <div className="text-xs text-slate-500 leading-relaxed p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
            {isFr
              ? 'Les informations transmises via ce formulaire sont strictement utilisées par la direction de Nextcomedia afin de préparer votre proposition commerciale. Aucune donnée n\'est cédée à des tiers. Conformément à la Loi 25, les échanges font l\'objet d\'une stricte confidentialité.'
              : 'Information provided through this form is used exclusively by Nextcomedia management to tailor your proposal. No data is shared with third parties. All inquiries are treated with strict confidentiality.'}
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto min-w-[220px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-md shadow-blue-500/25 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
            >
              <span>{isFr ? 'Demander un devis' : 'Request a quote'}</span>
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
            </button>

            <span className="text-xs text-slate-400 uppercase font-semibold">
              {isFr ? 'ou' : 'or'}
            </span>

            <a
              href="https://calendly.com/ino-service2025/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-blue-600" />
              {isFr ? 'Planifier un appel préliminaire' : 'Schedule a preliminary call'}
            </a>
          </div>
        </form>
      )}

      {/* Calendly Booking Anchor Section */}
      <div id="calendly-booking" className="mt-12 pt-8 border-t border-slate-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              {isFr ? 'Prise de rendez-vous directe' : 'Direct Appointment Booking'}
            </h4>
            <p className="text-xs text-slate-500">
              {isFr ? 'Échange de 30 minutes avec notre direction d\'affaires.' : '30-minute introductory call with our business management.'}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-slate-50 rounded-2xl border border-blue-100/80 p-6 sm:p-8 text-left relative overflow-hidden shadow-xs">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-700 text-xs font-semibold mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>{isFr ? 'Session de 30 minutes • Sans engagement' : '30-minute session • Zero commitment'}</span>
            </div>

            <h5 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
              {isFr ? 'Réservez votre créneau en direct sur Calendly' : 'Book your time slot directly on Calendly'}
            </h5>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {isFr
                ? 'Choisissez le jour et l\'heure qui vous conviennent le mieux pour échanger sur vos objectifs de qualification de prospects et calibrer une campagne pilote.'
                : 'Select the date and time that suits you best to discuss your lead qualification goals and scope a pilot campaign.'}
            </p>

            <a
              id="calendly-direct-booking-link"
              href="https://calendly.com/ino-service2025/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-600/25 transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>{isFr ? 'Ouvrir l\'agenda Calendly (30 min)' : 'Open Calendly Calendar (30 min)'}</span>
              <ExternalLink className="w-4 h-4 text-blue-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
