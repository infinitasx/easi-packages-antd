import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    pTitle: {
        default: string;
        type: StringConstructor;
    };
    pShow: {
        default: boolean;
        type: BooleanConstructor;
    };
    pSize: {
        default: string;
        type: PropType<"normal" | "small">;
    };
}, {
    show: import("vue").Ref<boolean>;
    title: import("vue").Ref<string>;
    size: import("vue").Ref<"normal" | "small">;
    t: {
        (key: string | number): string;
        (key: string | number, plural: number, options?: import("vue-i18n").TranslateOptions | undefined): string;
        (key: string | number, defaultMsg: string, options?: import("vue-i18n").TranslateOptions | undefined): string;
        (key: string | number, list: unknown[], options?: import("vue-i18n").TranslateOptions | undefined): string;
        (key: string | number, list: unknown[], plural: number): string;
        (key: string | number, list: unknown[], defaultMsg: string): string;
        (key: string | number, named: Record<string, unknown>, options?: import("vue-i18n").TranslateOptions | undefined): string;
        (key: string | number, named: Record<string, unknown>, plural: number): string;
        (key: string | number, named: Record<string, unknown>, defaultMsg: string): string;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:pShow"[], "update:pShow", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    pTitle?: unknown;
    pShow?: unknown;
    pSize?: unknown;
} & {
    pTitle: string;
    pShow: boolean;
    pSize: "normal" | "small";
} & {}>, {
    pTitle: string;
    pShow: boolean;
    pSize: "normal" | "small";
}>;
export default _default;
