import { createI18n } from "vue-i18n";
import { i18n } from '../easi-packages-antd/index'
import ZH from "./lang/zh";
import EN from "./lang/en";
import JA from "./lang/ja";


type Lang = "zh" | "en" | "ja";

const langMap = {
  zh: ZH,
  en: EN,
  ja: JA,
}

export function initI18n() {
  return createI18n({
    legacy: false,
    globalInjection: true,
    useScope: "global",
    locale: "zh",
    fallbackLocale: "zh",
    messages: {
      zh: ZH,
    },
  });
}

export function setLocale(lang: Lang) {
  // const { setLocaleMessage } = useI18n();
  i18n.global.setLocaleMessage(lang, langMap[lang]);
}
