export declare type Lang = "zh-cn" | "en" | "ja";
export interface IGlobalLocal {
    message: any;
}
export declare const langMap: any;
export declare function initI18n(lang: Lang): {
    message: any;
};
export declare function getEASIText(key: string, value?: {
    [props: string]: string | number;
}): any;
