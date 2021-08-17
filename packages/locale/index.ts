import {inject, reactive} from 'vue';
import ZH from "./lang/zh";
import EN from "./lang/en";
import JA from "./lang/ja";


export type Lang = "zh-cn" | "en" | "ja";

export interface IGlobalLocal {
  message: any
}

export interface ILocale {
  locale: Lang,
  [props: string]: any,
}

export const langMap: any = {
  "zh-cn": ZH,
  en: EN,
  ja: JA,
}

export function initI18n(lang: Lang) {
  return reactive<IGlobalLocal>({
    message: langMap[lang]
  })
}

export function getEASIText(key: string, value?: {[props: string]: string | number}){
  const globalEASILocale = inject<IGlobalLocal>('globalEASILocale', {message: {}});
  let message = globalEASILocale?.message[key];
  if(message){
    if(value){
      const reg = /(\{).*?(\})/g;
      const keyArray = message.match(reg);
      keyArray.forEach((key: string) => {
        let realKey = key.replace(/\{|\}|\s|\n|\t/g, '');
        const reg1 = new RegExp(`${key}`, 'g')
        message = message.replace(reg1, value[realKey])
      })
    }
    return message
  } else {
    console.warn('未匹配到文案key');
    return key
  }
}
