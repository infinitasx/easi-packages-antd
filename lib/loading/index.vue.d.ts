import { PropType } from 'vue';
import { Lang } from '../locale';
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
    lang: {
        type: PropType<Lang>;
        default: string;
    };
}, {
    show: import("vue").Ref<boolean>;
    title: any;
    size: import("vue").Ref<"normal" | "small">;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:pShow"[], "update:pShow", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    pTitle?: unknown;
    pShow?: unknown;
    pSize?: unknown;
    lang?: unknown;
} & {
    pTitle: string;
    pShow: boolean;
    pSize: "normal" | "small";
    lang: Lang;
} & {}>, {
    pTitle: string;
    pShow: boolean;
    pSize: "normal" | "small";
    lang: Lang;
}>;
export default _default;
