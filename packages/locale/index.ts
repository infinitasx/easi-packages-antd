import { createI18n } from "vue-i18n";
import ZH from "./lang/zh";
import EN from "./lang/en";
import JA from "./lang/ja";


type Lang = "zh" | "en" | "ja";

const langMap = {
  zh: ZH,
  en: EN,
  ja: JA,
}

let _EASII18n: any;

export function initI18n() {
  _EASII18n =  createI18n({
    legacy: false,
    globalInjection: true,
    inheritLocale: false,
    locale: "zh",
    fallbackLocale: "zh",
    messages: {
      zh: ZH,
    },
  });
  return _EASII18n;
}

export function setLocale(lang: Lang) {
  // const { setLocaleMessage } = useI18n();
  _EASII18n.setLocaleMessage(lang, langMap[lang]);
  console.log(_EASII18n);
}
