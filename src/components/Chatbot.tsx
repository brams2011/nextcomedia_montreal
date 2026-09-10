import React, { useState, useRef, useEffect } from 'react';
import { Lang, PageRoute } from '../types';
import { 
  MessageSquare, 
  X, 
  Send, 
  Minimize2, 
  Maximize2, 
  RotateCcw, 
  Bot, 
  User, 
  Sparkles, 
  Zap,
  ArrowRight,
  Loader2
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

interface ChatbotProps {
  lang: Lang;
  onNavigate: (page: PageRoute) => void;
}

// Official Nextcomedia Support Agent Avatar Component for Bot
const NextcoAvatar: React.FC<{ size?: 'sm' | 'md' }> = ({ size = 'md' }) => {
  const dim = size === 'sm' ? 'w-8 h-8' : 'w-10 h-10';
  return (
    <div className={`${dim} rounded-full ring-2 ring-cyan-400/40 bg-white overflow-hidden shrink-0 shadow-xs relative flex items-center justify-center`}>
      <img
        src="/assets/chatbot/agent.jpg"
        alt="Conseillère Nextcomedia"
        className="w-full h-full object-cover object-top"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export const Chatbot: React.FC<ChatbotProps> = ({ lang, onNavigate }) => {
  const isFr = lang === 'fr';
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [modelType, setModelType] = useState<'gemini-3.1-flash-lite' | 'gemini-flash-latest'>('gemini-3.1-flash-lite');
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const initialGreeting = isFr
    ? "Bonjour ! Je suis l'assistant virtuel de Nextcomedia. Je peux répondre à vos questions sur notre processus de qualification de prospects, notre conformité à la Loi 25, ou notre organisation entre Montréal et Cotonou. Comment puis-je vous aider ?"
    : "Hello! I am Nextcomedia's virtual assistant. I can answer your questions about our lead qualification framework, Law 25 compliance, or our operations across Montreal and Cotonou. How can I help you today?";

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: initialGreeting,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll when messages change
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isMinimized, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, isMinimized]);

  // Suggested prompts
  const suggestions = isFr ? [
    "Comment fonctionne la qualification ?",
    "Quelle est la conformité Loi 25 ?",
    "Quelle organisation entre Montréal et Cotonou ?",
    "Comment demander un devis ?"
  ] : [
    "How does lead qualification work?",
    "What is your Law 25 compliance?",
    "How are Montreal & Cotonou organized?",
    "How can I request a quote?"
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputMessage('');
    setIsLoading(true);

    try {
      // API call to Express backend
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, text: m.text })),
          lang,
          model: modelType,
        }),
      });

      const data = await res.json();

      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'model',
            text: data.reply,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      } else {
        throw new Error(data.error || 'Erreur de réponse');
      }
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'model',
          text: isFr
            ? "Une difficulté de connexion est survenue. N'hésitez pas à nous contacter directement via notre page Contact ou à hamza@nextcomedia.com."
            : "A connection issue occurred. Please feel free to reach out directly via our Contact page or at hamza@nextcomedia.com.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: Date.now().toString(),
        role: 'model',
        text: initialGreeting,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const handleNavigateToContact = () => {
    setIsOpen(false);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Launcher Button with Support Agent Photo */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
          <div className="hidden sm:flex flex-col items-end">
            <span className="px-3.5 py-1.5 rounded-full bg-slate-900/95 text-white text-xs font-semibold shadow-lg border border-slate-700/80 animate-pulse backdrop-blur-xs">
              {isFr ? 'Une question sur Nextcomedia ?' : 'Questions about Nextcomedia?'}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 p-0.5 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center"
            aria-label={isFr ? 'Ouvrir le clavardage' : 'Open chat assistant'}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
              <img
                src="/assets/chatbot/agent.jpg"
                alt={isFr ? 'Conseillère Nextcomedia' : 'Nextcomedia Support Agent'}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-xs"></span>
            </div>
            {/* Floating chat icon badge */}
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md border border-white">
              <MessageSquare className="w-2.5 h-2.5" />
            </div>
          </button>
        </div>
      )}

      {/* Floating Chat Modal / Drawer */}
      {isOpen && (
        <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[95vw] sm:w-[420px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col transition-all duration-300 ${
          isMinimized ? 'h-16' : 'h-[620px] max-h-[85vh]'
        }`}>
          
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <NextcoAvatar size="md" />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm text-white leading-none">NextcoBot</h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1">
                  {isFr ? 'Assistant officiel Nextcomedia' : 'Official Nextcomedia Assistant'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleReset}
                title={isFr ? 'Réinitialiser la conversation' : 'Reset chat'}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? (isFr ? 'Agrandir' : 'Expand') : (isFr ? 'Réduire' : 'Minimize')}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title={isFr ? 'Fermer' : 'Close'}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Model Mode Selector Toolbar */}
              <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 font-medium text-slate-700">
                  <Sparkles className="w-3 h-3 text-blue-600" />
                  <span>{isFr ? 'Modèle IA :' : 'AI Model:'}</span>
                </span>
                
                <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setModelType('gemini-3.5-flash')}
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors ${
                      modelType === 'gemini-3.5-flash'
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Flash 3.5
                  </button>
                  <button
                    type="button"
                    onClick={() => setModelType('gemini-3.1-flash-lite')}
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors flex items-center gap-1 ${
                      modelType === 'gemini-3.1-flash-lite'
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Zap className="w-2.5 h-2.5 text-amber-400" />
                    <span>Lite</span>
                  </button>
                </div>
              </div>

              {/* Scrollable Message Thread */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm bg-slate-50/40">
                {messages.map((msg) => {
                  const isBot = msg.role === 'model';
                  return (
                    <div
                      key={msg.id}
                      className={`flex gap-2.5 items-start ${isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      {isBot && <NextcoAvatar size="sm" />}

                      <div className={`max-w-[82%] rounded-2xl p-3.5 leading-relaxed ${
                        isBot
                          ? 'bg-white border border-slate-200 text-slate-800 shadow-xs'
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs'
                      }`}>
                        <div className="whitespace-pre-wrap">{msg.text}</div>
                        <div className={`text-[10px] mt-1 text-right ${isBot ? 'text-slate-400' : 'text-blue-100'}`}>
                          {msg.timestamp}
                        </div>
                      </div>

                      {!isBot && (
                        <div className="w-7 h-7 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          <User className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Loading indicator */}
                {isLoading && (
                  <div className="flex gap-2.5 items-start">
                    <NextcoAvatar size="sm" />
                    <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3 text-slate-500 text-xs flex items-center gap-2 shadow-xs">
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-600" />
                      <span>{isFr ? 'NextcoBot rédige sa réponse...' : 'NextcoBot is thinking...'}</span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggestions pills (if fewer than 4 user messages) */}
              {messages.length <= 4 && (
                <div className="px-4 py-2 bg-white border-t border-slate-100 flex flex-wrap gap-1.5">
                  {suggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSendMessage(suggestion)}
                      disabled={isLoading}
                      className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 text-[11px] font-medium transition-colors cursor-pointer text-left truncate max-w-full"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}

              {/* Direct Booking Link Card */}
              <div className="px-4 py-2 bg-slate-100/70 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-600 text-[11px]">
                  {isFr ? 'Besoin d\'un devis rapide ?' : 'Ready for a quote?'}
                </span>
                <button
                  type="button"
                  onClick={handleNavigateToContact}
                  className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 text-[11px]"
                >
                  <span>{isFr ? 'Accéder au formulaire' : 'Go to form'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Input Area */}
              <div className="p-3 bg-white border-t border-slate-100">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder={isFr ? 'Posez votre question à NextcoBot...' : 'Ask NextcoBot a question...'}
                    disabled={isLoading}
                    className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-800 placeholder:text-slate-400"
                  />
                  <button
                    type="submit"
                    disabled={!inputMessage.trim() || isLoading}
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed shadow-xs transition-all shrink-0 cursor-pointer"
                    aria-label={isFr ? 'Envoyer' : 'Send'}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </>
          )}

        </div>
      )}
    </>
  );
};
