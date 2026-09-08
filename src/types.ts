export type Lang = 'fr' | 'en';

export type PageRoute = 
  | 'home'
  | 'approach'
  | 'compliance'
  | 'about'
  | 'contact'
  | 'privacy'
  | 'terms';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  companyType: string;
  estimatedVolume: string;
  need: string;
  message: string;
  honeypot?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData: ContactFormData;
}
