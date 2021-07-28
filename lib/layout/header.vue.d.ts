declare const _default: import("vue").DefineComponent<{
    collapsed: {
        type: BooleanConstructor;
        default: boolean;
    };
    userInfo: {
        type: ObjectConstructor;
        default: () => {};
    };
    avatar: {
        type: StringConstructor;
    };
}, {
    colToggle(): void;
    handleShowSetting(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("colToggle" | "handleShowSetting")[], "colToggle" | "handleShowSetting", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    collapsed?: unknown;
    userInfo?: unknown;
    avatar?: unknown;
} & {
    collapsed: boolean;
    userInfo: Record<string, any>;
} & {
    avatar?: string | undefined;
}>, {
    collapsed: boolean;
    userInfo: Record<string, any>;
}>;
export default _default;
