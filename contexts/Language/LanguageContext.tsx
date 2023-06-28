
import React, { createContext, useContext } from 'react';

interface LanguageContextProps {
  currentLanguage: string;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const useLanguage = () => useContext(LanguageContext);
