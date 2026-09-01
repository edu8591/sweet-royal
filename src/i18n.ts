import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/messages/en";
import es from "@/messages/es";
import ja from "@/messages/ja";
import ko from "@/messages/ko";
import zh from "@/messages/zh";

const SUPPORTED_LANGUAGES = ["en", "es", "ja", "ko", "zh"] as const;
const LANGUAGE_STORAGE_KEY = "sweet-royal:language";

function getStoredLanguage() {
  if (typeof window === "undefined") return "en";

  const candidate = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (
    candidate &&
    SUPPORTED_LANGUAGES.includes(
      candidate as (typeof SUPPORTED_LANGUAGES)[number],
    )
  ) {
    return candidate;
  }

  return "en";
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    ja: { translation: ja },
    ko: { translation: ko },
    zh: { translation: zh },
  },
  lng: getStoredLanguage(),
  fallbackLng: "en",
  supportedLngs: [...SUPPORTED_LANGUAGES],
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);
});

export default i18n;
