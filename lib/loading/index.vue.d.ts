import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    pTitle: {
        type: StringConstructor;
        default: undefined;
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
    root: import("vue").Ref<{
        localeMessage: {
            [x: string]: any;
            locale: import("../locale").Lang;
        };
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:pShow"[], "update:pShow", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    pTitle?: unknown;
    pShow?: unknown;
    pSize?: unknown;
} & {
    pShow: boolean;
    pSize: "normal" | "small";
} & {
    pTitle?: string | undefined;
}> & {
    "onUpdate:pShow"?: ((...args: any[]) => any) | undefined;
}, {
    pTitle: string;
    pShow: boolean;
    pSize: "normal" | "small";
}>;
export default _default;
