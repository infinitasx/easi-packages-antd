export declare type Lang = "zh" | "en" | "ja";
export interface IGlobalLocal {
    message: any;
}
export declare function initI18n(lang: Lang): {
    confirm: string;
    cancel: string;
    loading: string;
    pageTotal: string;
    noPermission: string;
    styleSetting: string;
    darkSetting: string;
    showTabSetting: string;
    fixedTabSetting: string;
    more: string;
    logout: string;
    logoutTitle: string;
    logoutMessage: string;
    closeOther: string;
    refreshPage: string;
} | {
    confirm: string;
    cancel: string;
    loading: string;
    pageTotal: string;
    noPermission: string;
    styleSetting: string;
    darkSetting: string;
    showTabSetting: string;
    fixedTabSetting: string;
    more: string;
    logout: string;
    logoutTitle: string;
    logoutMessage: string;
    closeOther: string;
    refreshPage: string;
} | {
    confirm: string;
    cancel: string;
    loading: string;
    pageTotal: string;
    noPermission: string;
    styleSetting: string;
    darkSetting: string;
    showTabSetting: string;
    fixedTabSetting: string;
    more: string;
    logout: string;
    logoutTitle: string;
    logoutMessage: string;
    closeOther: string;
    refreshPage: string;
};
export declare function setLocale(lang: Lang): void;
export declare function getEASIText(key: string, value?: {
    [props: string]: string | number;
}): any;
