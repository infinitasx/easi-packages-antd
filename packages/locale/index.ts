import {createI18n, useI18n} from 'vue-i18n';

type Lang = 'cn' | 'en' | 'ja'

export function initI18n() {
  return createI18n({
    legacy: false,
    globalInjection: true,
    useScope: 'global',
    locale: 'cn',
    fallbackLocale: 'cn',
    messages: {
      cn: require(`./cn`).default,
    },
  });
}

export function setLocale(lang: Lang) {
  const { setLocaleMessage } = useI18n();
  import(
    /* webpackInclude: /(cn|ja|en)\.ts/ */ /* webpackChunkName: "locale-[request]" */ `./${lang}.ts`
    )
  .then((message) => {
    setLocaleMessage(lang, message.default)
  })
}
