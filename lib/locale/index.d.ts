declare type Lang = "zh" | "en" | "ja";
export declare function initI18n(): import("vue-i18n").I18n<{
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
    };
}, unknown, unknown, false>;
export declare function setLocale(lang: Lang): void;
export {};
