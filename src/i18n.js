import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../src/Locales/en.json";
import translationDe from "../src/Locales/de.json"


const resources = {
  en: {
    translation: translationEN,
  },
  de:{
    translation: translationDe,
  }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;