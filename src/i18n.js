import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    debug: true,
    ns: [
      "about",
      "contact",
      "faces",
      "home",
      "industries",
      "insights",
      "investors",
      "layerfive",
      "layerfour",
      "layerone",
      "layersix",
      "layerthree",
      "layertwo",
      "news",
      "partnerspage",
      "requestpage",
      "services"
    ],
    defaultNS: "home", // or any default you prefer
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    }
  });

export default i18n;
