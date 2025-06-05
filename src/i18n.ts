import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './i18n/en.json';
import pt from './i18n/pt.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt },
  },
  lng: 'pt', // idioma padrão
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false, // React já faz a sanitização
  },
});

export default i18n;
