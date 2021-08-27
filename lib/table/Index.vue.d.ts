declare const _default: import("vue").DefineComponent<{
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    styleClass: {
        type: StringConstructor;
    };
    scroll: {
        type: ObjectConstructor;
        default: () => {
            x: number;
        };
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    loading?: unknown;
    styleClass?: unknown;
    scroll?: unknown;
} & {
    loading: boolean;
    scroll: Record<string, any>;
} & {
    styleClass?: string | undefined;
}> & {}, {
    loading: boolean;
    scroll: Record<string, any>;
}>;
export default _default;
