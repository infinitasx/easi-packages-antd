export declare type Lang = "zh" | "en" | "ja";
export interface IGlobalLocal {
    message: any;
}
export declare const langMap: {
    zh: {
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
    en: {
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
    ja: {
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
};
export declare function initI18n(lang: Lang): {
    message: any;
};
export declare function getEASIText(key: string, value?: {
    [props: string]: string | number;
}): any;
