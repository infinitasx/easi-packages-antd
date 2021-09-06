declare const _default: import("vue").DefineComponent<{
    emptyTitle: {
        type: StringConstructor;
        default: undefined;
    };
    emptySubTitle: {
        type: StringConstructor;
        default: undefined;
    };
}, {
    getText(key: string, value?: {
        [props: string]: string | number;
    } | undefined): any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "clickEmpty"[], "clickEmpty", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    emptyTitle?: unknown;
    emptySubTitle?: unknown;
} & {} & {
    emptyTitle?: string | undefined;
    emptySubTitle?: string | undefined;
}> & {
    onClickEmpty?: ((...args: any[]) => any) | undefined;
}, {
    emptyTitle: string;
    emptySubTitle: string;
}>;
export default _default;
