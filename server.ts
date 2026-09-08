import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI {
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// Local Knowledge Engine fallback in case of temporary Gemini API upstream demand spikes (503/429)
function getLocalFallbackResponse(query: string, lang: string): string {
  const q = (query || '').toLowerCase();
  if (q.includes('loi 25') || q.includes('confidential') || q.includes('donnée') || q.includes('donnee') || q.includes('vie privée') || q.includes('privacy')) {
    return lang === 'fr'
      ? "Chez Nextcomedia, la conformité à la Loi 25 du Québec est totale et rigoureuse :\n\n- **Zéro stockage pérenne** : les renseignements sont purgés sous 30 à 90 jours après transmission au courtier.\n- **Minimisation stricte** : aucun NAS, aucune coordonnée bancaire, aucun dossier médical n'est collecté.\n- **ÉFVP réalisée** : une Évaluation des Facteurs relatifs à la Vie Privée encadre le transfert transfrontalier Québec-Bénin.\n- **Sécurité** : accords de non-divulgation (NDA) stricts et accès nominatifs restreints."
      : "At Nextcomedia, compliance with Quebec's Law 25 is rigorous and absolute:\n\n- **Zero permanent storage**: prospect records purged within 30 to 90 days after delivery.\n- **Strict data minimization**: no SIN, banking info, or confidential medical records.\n- **Completed Privacy Impact Assessment (PIA)**: regulates secure transborder transfers.\n- **Security**: strict NDAs and role-based encrypted access controls.";
  }
  if (q.includes('qualification') || q.includes('processus') || q.includes('comment') || q.includes('étape') || q.includes('etape') || q.includes('workflow')) {
    return lang === 'fr'
      ? "Notre méthodologie de qualification en 4 étapes garantit des rendez-vous ciblés :\n\n1. **Cadrage de la campagne** : Définition de vos profils cibles et critères exclusifs avec notre direction à Montréal.\n2. **Prise de contact ciblée** : Téléprospection courtoise et respectueuse menée par nos agents à Cotonou.\n3. **Qualification rigoureuse** : Validation scrupuleuse des critères et double contrôle par un superviseur qualité.\n4. **Transmission & Rendez-vous** : Pré-calage direct dans l'agenda de vos courtiers certifiés."
      : "Our 4-step qualification framework ensures high-conversion scheduled consultations:\n\n1. **Campaign scoping**: Defining your exact criteria with our Montreal leadership.\n2. **Targeted telephone outreach**: Courteous calls conducted by our trained specialists.\n3. **Rigorous qualification**: Systematic checklist validation and supervisor double-check.\n4. **Delivery & Calendar booking**: Instant booking into your certified brokers' agendas.";
  }
  if (q.includes('cotonou') || q.includes('montréal') || q.includes('montreal') || q.includes('equipe') || q.includes('équipe') || q.includes('bureau') || q.includes('organisation')) {
    return lang === 'fr'
      ? "Nextcomedia s'appuie sur une organisation bilatérale équilibrée :\n\n- **Direction d'affaires à Montréal (Québec)** : Pilotage stratégique, gouvernance, relations clients et conformité réglementaire.\n- **Plateau technique à Cotonou (Bénin)** : Équipe dédiée de 10 à 15 téléconseillers formés aux spécificités et aux exigences du marché québécois."
      : "Nextcomedia operates on a proven bilateral model:\n\n- **Executive Office in Montreal (Quebec)**: Strategic direction, client relations, and regulatory governance.\n- **Operational Floor in Cotonou (Benin)**: Dedicated team of 10 to 15 specialists trained in Quebec market standards.";
  }
  if (q.includes('amf') || q.includes('conseil') || q.includes('police') || q.includes('vente') || q.includes('courtier')) {
    return lang === 'fr'
      ? "Précision déontologique fondamentale : Nextcomedia n'est pas un cabinet de courtage et ne vend aucun produit d'assurance. Notre mandat se limite strictement à la qualification amont et à la prise de rendez-vous. Toute analyse de risque et toute recommandation relèvent exclusivement de vos courtiers certifiés."
      : "Essential regulatory clarity: Nextcomedia is not an insurance brokerage and does not sell insurance. We specialize solely in prospect qualification and meeting scheduling. All risk assessments and advice remain the exclusive domain of your certified brokers.";
  }
  return lang === 'fr'
    ? "Nextcomedia accompagne les courtiers indépendants et MGA au Québec en qualifiant des prospects et en pré-calant des rendez-vous d'affaires dans leur agenda. Pilotée depuis Montréal avec une équipe dédiée de 10 à 15 téléprospection à Cotonou, notre structure garantit un respect strict de la Loi 25. Souhaitez-vous échanger avec notre direction ou demander une proposition personnalisée via notre formulaire ?"
    : "Nextcomedia supports independent insurance brokers and MGAs in Quebec with targeted prospect qualification and direct calendar booking. Managed from Montreal with a dedicated 10-to-15 agent team in Cotonou, our operations comply strictly with Law 25. Would you like to connect with our leadership or request a quote via our contact form?";
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Chatbot endpoint using Gemini with multi-model fallback & resilience
  app.post('/api/chat', async (req, res) => {
    try {
      const { messages, lang = 'fr', model = 'gemini-3.1-flash-lite' } = req.body;

      if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Messages array is required' });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        const lastUserMsg = messages[messages.length - 1]?.text || '';
        return res.json({
          reply: getLocalFallbackResponse(lastUserMsg, lang)
        });
      }

      const ai = getAIClient();

      // Convert messages to Gemini format
      const contents = messages.map((m: { role: string; text: string }) => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }],
      }));

      const systemInstruction = `Tu es NextcoBot, l'assistant virtuel expert et conseiller officiel de Nextcomedia (site web : https://nextcomedia.ca).
Ton rôle est d'informer, conseiller et orienter avec précision et courtoisie les courtiers d'assurance indépendants, dirigeants de cabinets de courtage et MGA (agents généraux gestionnaires) au Québec.

Faits clés sur Nextcomedia :
1. Mission : Prise de contact amont, qualification rigoureuse selon les critères convenus avec le cabinet, et prise de rendez-vous qualifiés pré-calés dans l'agenda des courtiers.
2. Organisation bilatérale :
   - Direction générale, gouvernance d'affaires et comités de suivi basés à Montréal (Québec).
   - Plateau technique d'appels de 10 à 15 téléconseillers formés aux spécificités québécoises, basé à Cotonou (Bénin).
3. Règle réglementaire absolue (AMF) : Nextcomedia N'EST PAS un cabinet de courtage en assurance, ne vend pas d'assurance, ne souscrit pas de polices et ne délivre aucun conseil financier ou d'assurance. Les conseillers et courtiers certifiés du client effectuent toute analyse de risque et conclusion de vente.
4. Protection des renseignements personnels & Loi 25 (Québec) :
   - Zéro stockage permanent, données éphémères purgées sous 30 à 90 jours après transmission.
   - Minimisation stricte des données (jamais de NAS, ni données bancaires, ni dossiers médicaux confidentiels).
   - ÉFVP (évaluation des facteurs relatifs à la vie privée pour transfert transfrontalier Québec-Bénin).
   - Protocoles d'accès restreint nominatif et accords de non-divulgation (NDA) signés par chaque collaborateur.
5. Méthodologie en 4 étapes : 
   - 01. Préparation & Cadrage de la campagne (profils, filtres, objectifs)
   - 02. Prise de contact téléphonique ciblée et respectueuse
   - 03. Qualification méthodique et double validation superviseur
   - 04. Transmission sécurisée & rendez-vous pré-calé dans l'agenda
6. Coordonnées & Prise de contact :
   - Courriel : contact@nextcomedia.ca
   - Proposition commerciale personnalisée et planification d'un appel de 20 minutes avec la direction d'affaires à Montréal via le formulaire sur le site.

Consignes de réponse :
- Réponds dans la langue de l'utilisateur (${lang === 'en' ? 'Anglais' : 'Français québécois'}).
- Reste bienveillant, professionnel, concis et précis.
- Utilise des listes à puces claires et faciles à lire pour les professionnels pressés.
- Invite naturellement le visiteur à demander un devis ou à échanger avec notre direction à Montréal si pertinent.`;

      // Fallback chain of candidate models: prioritize fast & reliable models
      const requested = model || 'gemini-3.1-flash-lite';
      const candidateModels = [
        requested,
        'gemini-3.1-flash-lite',
        'gemini-flash-latest',
        'gemini-3.8-flash',
      ].filter((m, idx, arr) => arr.indexOf(m) === idx);

      let reply: string | null = null;

      for (const targetModel of candidateModels) {
        try {
          const response = await ai.models.generateContent({
            model: targetModel,
            contents,
            config: {
              systemInstruction,
              temperature: 0.7,
            },
          });

          if (response?.text) {
            reply = response.text;
            break;
          }
        } catch (err: any) {
          console.warn(`[Nextcomedia Chatbot] Model ${targetModel} notice:`, err?.message || err);
          // Continue to next available model in fallback chain
        }
      }

      // If all external API calls are temporarily rate-limited or experiencing high-demand spikes (e.g. 503 UNAVAILABLE)
      if (!reply) {
        const lastUserMsg = messages[messages.length - 1]?.text || '';
        reply = getLocalFallbackResponse(lastUserMsg, lang);
      }

      res.json({ reply });
    } catch (error: any) {
      console.error('Gemini Chatbot Error:', error);
      const lastUserMsg = req.body?.messages?.[req.body.messages.length - 1]?.text || '';
      const fallbackReply = getLocalFallbackResponse(lastUserMsg, req.body?.lang || 'fr');
      res.json({ reply: fallbackReply });
    }
  });

  // Contact form handler endpoint
  app.post('/api/contact', (req, res) => {
    const { firstName, lastName, company, email, phone, need, message, honeypot } = req.body;

    // Honeypot check
    if (honeypot) {
      return res.json({ success: true, message: 'Message reçu.' });
    }

    if (!firstName || !lastName || !company || !email || !phone || !message) {
      return res.status(422).json({
        success: false,
        error: 'Veuillez remplir tous les champs obligatoires.',
      });
    }

    console.log('[Nextcomedia Contact Submission]', {
      name: `${firstName} ${lastName}`,
      company,
      email,
      phone,
      need,
      timestamp: new Date().toISOString(),
    });

    res.json({
      success: true,
      message: 'Demande reçue avec succès. Notre équipe à Montréal vous recontactera sous 24 à 48 heures.',
    });
  });

  // Vite middleware for development vs static build for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Nextcomedia server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
