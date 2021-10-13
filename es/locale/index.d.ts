export declare type Lang = "zh-cn" | "en" | "ja";
export interface IGlobalLocal {
    message: any;
}
export interface ILocale {
    locale: Lang;
    [props: string]: any;
}
export declare const langMap: any;
export declare function initI18n(lang: Lang): {
    message: any;
};
export declare function getEASIText(globalEASILocale: IGlobalLocal, key: string, value?: {
    [props: string]: string | number;
}): any;
