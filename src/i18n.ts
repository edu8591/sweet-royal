import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/messages/en";
import es from "@/messages/es";
import ja from "@/messages/ja";
import ko from "@/messages/ko";
import zh from "@/messages/zh";

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    ja: { translation: ja },
    ko: { translation: ko },
    zh: { translation: zh },
  },
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "es", "ja", "ko", "zh"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
