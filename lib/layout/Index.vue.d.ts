import { PropType } from "vue";
import { RouteLocationNormalized } from "vue-router";
import { IProvider } from "../utils/globalProvider";
import { UserInfo } from '../../typings/antd';
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
        type: PropType<UserInfo>;
        default: () => {};
    };
    showTabSetting: {
        type: BooleanConstructor;
        default: boolean;
    };
    onLogout: {
        type: FunctionConstructor;
        default: undefined;
    };
    toDashboard: {
        type: FunctionConstructor;
        default: undefined;
    };
    editPassword: {
        type: FunctionConstructor;
        default: undefined;
    };
    startYear: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    setting: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    isH5: import("vue").Ref<boolean>;
    showSetting: import("vue").Ref<boolean>;
    collapsed: import("vue").Ref<boolean>;
    addTransition: import("vue").Ref<boolean>;
    setCollapsed(): void;
    collWidth: import("vue").ComputedRef<"80px" | "200px">;
    globalProvider: IProvider;
    cachedPage: import("vue").ComputedRef<string[]>;
    onReloadPage(refresh?: boolean): Promise<boolean>;
    handleShowSetting(): void;
    copyRightYear(): string | number;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:setting"[], "update:setting", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    logo?: unknown;
    title?: unknown;
    subTitle?: unknown;
    nav?: unknown;
    userInfo?: unknown;
    showTabSetting?: unknown;
    onLogout?: unknown;
    toDashboard?: unknown;
    editPassword?: unknown;
    startYear?: unknown;
    setting?: unknown;
} & {
    logo: string;
    title: string;
    subTitle: string;
    nav: RouteLocationNormalized[];
    userInfo: UserInfo;
    showTabSetting: boolean;
    startYear: string | number;
    setting: boolean;
} & {
    onLogout?: Function | undefined;
    toDashboard?: Function | undefined;
    editPassword?: Function | undefined;
}> & {
    "onUpdate:setting"?: ((...args: any[]) => any) | undefined;
}, {
    logo: string;
    title: string;
    subTitle: string;
    nav: RouteLocationNormalized[];
    userInfo: UserInfo;
    showTabSetting: boolean;
    onLogout: Function;
    toDashboard: Function;
    editPassword: Function;
    startYear: string | number;
    setting: boolean;
}>;
export default _default;
