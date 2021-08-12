declare const _default: import("vue").DefineComponent<{
    collapsed: {
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
}, {
    openKeys: import("vue").Ref<string[]>;
    selectedKeys: import("vue").Ref<string[]>;
    toPage: (key: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    collapsed?: unknown;
    logo?: unknown;
    title?: unknown;
    subTitle?: unknown;
    nav?: unknown;
} & {
    collapsed: boolean;
    logo: string;
    title: string;
    subTitle: string;
    nav: unknown[];
} & {}> & {}, {
    collapsed: boolean;
    logo: string;
    title: string;
    subTitle: string;
    nav: unknown[];
}>;
export default _default;
