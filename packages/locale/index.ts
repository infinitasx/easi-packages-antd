import { createI18n, useI18n } from "vue-i18n";
import defaultCN from "./lang/cn";

type Lang = "cn" | "en" | "ja";

export function initI18n() {
  return createI18n({
    legacy: false,
    globalInjection: true,
    useScope: "global",
    locale: "cn",
    fallbackLocale: "cn",
    messages: {
      cn: defaultCN,
    },
  });
}

export function setLocale(lang: Lang) {
  const { setLocaleMessage } = useI18n();
  import(/* @vite-ignore */ `./lang/${lang}.ts`).then((message) => {
    setLocaleMessage(lang, message.default);
  });
}
