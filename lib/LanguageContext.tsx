'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { translations, Language, Translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('sr');

  // Učitaj sačuvani jezik iz localStorage nakon mount-a (izbegava hydration mismatch)
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang === 'sr' || savedLang === 'en') {
      setLanguage(savedLang); // eslint-disable-line react-hooks/set-state-in-effect -- hydration-safe sync sa localStorage
    }
  }, []);

  // Sačuvaj jezik u localStorage pri promeni i ažuriraj HTML lang atribut
  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  }, []);

  // Ažuriraj HTML lang atribut pri mount-u i promeni
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
