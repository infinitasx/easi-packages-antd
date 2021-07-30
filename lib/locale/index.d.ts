export declare type Lang = "zh" | "en" | "ja";
export interface IGlobalLocal {
    message: any;
}
export declare function initI18n(lang: Lang): {
    message: any;
};
export declare function setLocale(lang: Lang): void;
export declare function getEASIText(key: string, value?: {
    [props: string]: string | number;
}): any;
