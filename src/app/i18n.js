import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { heroH1: 'Crafting Digital Experiences, Building the Future.' } },
    ar: { translation: { heroH1: 'صياغة التجارب الرقمية، بناء المستقبل.' } },
  },
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;