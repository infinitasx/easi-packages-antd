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
    title: any;
    size: import("vue").Ref<"normal" | "small">;
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
