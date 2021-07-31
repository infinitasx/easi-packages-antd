import { PropType } from 'vue';
import { Lang } from '../locale';
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
    title: any;
    size: import("vue").Ref<"normal" | "small">;
    lang: import("vue").Ref<Lang>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:pShow"[], "update:pShow", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    pTitle?: unknown;
    pShow?: unknown;
    pSize?: unknown;
} & {
    pShow: boolean;
    pSize: "normal" | "small";
} & {
    pTitle?: string | undefined;
}>, {
    pTitle: string;
    pShow: boolean;
    pSize: "normal" | "small";
}>;
export default _default;
