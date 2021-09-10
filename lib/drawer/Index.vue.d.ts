import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    visible: {
        default: boolean;
        type: BooleanConstructor;
    };
    width: {
        default: string;
        type: StringConstructor;
    };
    bodyStyle: {
        default: () => {};
        type: PropType<any>;
    };
}, {
    computedBodyStyle: import("vue").ComputedRef<{}>;
    handleClose(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "close" | "show")[], "update:visible" | "close" | "show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    visible?: unknown;
    width?: unknown;
    bodyStyle?: unknown;
} & {
    visible: boolean;
    width: string;
    bodyStyle: {};
} & {}> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    width: string;
    bodyStyle: {};
}>;
export default _default;
