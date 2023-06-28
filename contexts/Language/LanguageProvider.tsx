import { ReactNode, useState } from "react";
import { LanguageContext } from "./LanguageContext";

interface LanguageProviderProps {
  children: ReactNode;
}
export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
