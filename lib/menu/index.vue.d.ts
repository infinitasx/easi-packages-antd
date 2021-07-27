declare const _default: import("vue").DefineComponent<{
    collapsed: {
        type: BooleanConstructor;
        default: boolean;
    };
    cityName: {
        type: StringConstructor;
        default: string;
    };
    openKeys: {
        type: ArrayConstructor;
        default: () => never[];
    };
    selectedKeys: {
        type: ArrayConstructor;
        default: () => never[];
    };
    menu: {
        type: ArrayConstructor;
        default: () => never[];
        require: boolean;
    };
}, {
    collapsed: import("vue").Ref<boolean>;
    openKeys: import("vue").Ref<unknown[]>;
    selectedKeys: import("vue").Ref<unknown[]>;
    toPage: (key: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "toPage"[], "toPage", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    collapsed?: unknown;
    cityName?: unknown;
    openKeys?: unknown;
    selectedKeys?: unknown;
    menu?: unknown;
} & {
    collapsed: boolean;
    cityName: string;
    openKeys: unknown[];
    selectedKeys: unknown[];
    menu: unknown[];
} & {}>, {
    collapsed: boolean;
    cityName: string;
    openKeys: unknown[];
    selectedKeys: unknown[];
    menu: unknown[];
}>;
export default _default;
