import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    disabled: BooleanConstructor;
    ghost: BooleanConstructor;
    htmlType: {
        type: StringConstructor;
        default: string;
    };
    icon: FunctionConstructor;
    loading: BooleanConstructor;
    shape: StringConstructor;
    size: {
        default: string;
        type: StringConstructor;
    };
    type: {
        default: string;
        type: PropType<"default" | "primary" | "success" | "info" | "warn" | "danger" | "dashed">;
    };
    link: {
        type: BooleanConstructor;
        default: boolean;
    };
    block: BooleanConstructor;
}, {
    className: import("vue").ComputedRef<"easi-btn-success" | "easi-btn-info" | "easi-btn-warning" | "easi-btn-link-success px-0" | "easi-btn-link-info px-0" | "easi-btn-link-warning px-0" | "easi-btn-link-danger px-0" | "px-0" | "" | null>;
    customType: import("vue").ComputedRef<"default" | "primary" | "success" | "info" | "warn" | "danger" | "dashed" | "link">;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled?: unknown;
    ghost?: unknown;
    htmlType?: unknown;
    icon?: unknown;
    loading?: unknown;
    shape?: unknown;
    size?: unknown;
    type?: unknown;
    link?: unknown;
    block?: unknown;
} & {
    disabled: boolean;
    ghost: boolean;
    htmlType: string;
    loading: boolean;
    size: string;
    type: "default" | "primary" | "success" | "info" | "warn" | "danger" | "dashed";
    link: boolean;
    block: boolean;
} & {
    icon?: Function | undefined;
    shape?: string | undefined;
}>, {
    disabled: boolean;
    ghost: boolean;
    htmlType: string;
    loading: boolean;
    size: string;
    type: "default" | "primary" | "success" | "info" | "warn" | "danger" | "dashed";
    link: boolean;
    block: boolean;
}>;
export default _default;
