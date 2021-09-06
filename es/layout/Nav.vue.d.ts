declare const _default: import("vue").DefineComponent<{
    collapsed: {
        type: BooleanConstructor;
        default: boolean;
    };
    collWidth: {
        type: StringConstructor;
        default: string;
    };
    isH5: {
        type: BooleanConstructor;
        default: boolean;
    };
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
        type: ArrayConstructor;
        default: () => never[];
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "hideMenu"[], "hideMenu", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    collapsed?: unknown;
    collWidth?: unknown;
    isH5?: unknown;
    logo?: unknown;
    title?: unknown;
    subTitle?: unknown;
    nav?: unknown;
} & {
    collapsed: boolean;
    collWidth: string;
    isH5: boolean;
    logo: string;
    title: string;
    subTitle: string;
    nav: unknown[];
} & {}> & {
    onHideMenu?: ((...args: any[]) => any) | undefined;
}, {
    collapsed: boolean;
    collWidth: string;
    isH5: boolean;
    logo: string;
    title: string;
    subTitle: string;
    nav: unknown[];
}>;
export default _default;
