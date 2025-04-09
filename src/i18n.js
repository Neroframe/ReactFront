import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"; // если используешь бэкенд

i18n
  .use(Backend) // если используешь бэкенд
  .use(initReactI18next)
  .init({
    lng: "ru", // язык по умолчанию
    fallbackLng: "ru", // запасной язык
    ns: ["translation", "about"], // неймспейсы
    interpolation: {
      escapeValue: false, // не экранируем значения
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // путь к файлам переводов
    },
  });

export default i18n;
