import { PropType } from 'vue';
import { RouteLocationNormalized } from 'vue-router';
declare const _default: import("vue").DefineComponent<{
    logo: {
        type: StringConstructor;
        default: null;
    };
    title: {
        type: StringConstructor;
        default: null;
    };
    subTitle: {
        type: StringConstructor;
        default: null;
    };
    nav: {
        type: PropType<RouteLocationNormalized[]>;
        default: () => never[];
    };
    userInfo: {
        type: ObjectConstructor;
        default: () => {};
    };
    avatar: {
        type: StringConstructor;
    };
}, {
    isH5: import("vue").Ref<boolean>;
    showSetting: import("vue").Ref<boolean>;
    collapsed: import("vue").Ref<boolean>;
    addTransition: import("vue").Ref<boolean>;
    setCollapsed(): void;
    collWidth: import("vue").ComputedRef<"80px" | "200px">;
    globalProvider: {
        [x: string]: any;
        reloadPage: boolean;
        mode: "light" | "dark";
        showTab: boolean;
        fixedTab: boolean;
        cachedPage: string[];
    };
    cachedPage: import("vue").ComputedRef<string[]>;
    onReloadPage(): Promise<void>;
    handleShowSetting(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "logout"[], "logout", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    logo?: unknown;
    title?: unknown;
    subTitle?: unknown;
    nav?: unknown;
    userInfo?: unknown;
    avatar?: unknown;
} & {
    logo: string;
    title: string;
    subTitle: string;
    nav: RouteLocationNormalized[];
    userInfo: Record<string, any>;
} & {
    avatar?: string | undefined;
}>, {
    logo: string;
    title: string;
    subTitle: string;
    nav: RouteLocationNormalized[];
    userInfo: Record<string, any>;
}>;
export default _default;
