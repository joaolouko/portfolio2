// src/hooks/useLanguage.ts
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    // Opcional: salvar no localStorage
    localStorage.setItem('lang', lang);
  };

  return {
    t,
    currentLanguage: i18n.language,
    switchLanguage,
  };
};
