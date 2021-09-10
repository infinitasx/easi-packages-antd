import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: undefined;
    };
    show: {
        default: boolean;
        type: BooleanConstructor;
    };
    size: {
        default: string;
        type: PropType<"normal" | "small">;
    };
}, {
    cShow: import("vue").Ref<boolean>;
    cTitle: import("vue").Ref<string>;
    cSize: import("vue").Ref<"normal" | "small">;
    root: import("vue").Ref<{
        localeMessage: {
            [x: string]: any;
            locale: import("../locale").Lang;
        };
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:show"[], "update:show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    show?: unknown;
    size?: unknown;
} & {
    show: boolean;
    size: "normal" | "small";
} & {
    title?: string | undefined;
}> & {
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    show: boolean;
    size: "normal" | "small";
}>;
export default _default;
