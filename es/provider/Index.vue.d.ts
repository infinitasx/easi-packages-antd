import { PropType } from "vue";
import { ILocale } from "../locale";
declare const _default: import("vue").DefineComponent<{
    locale: {
        type: PropType<ILocale>;
        default: () => {
            locale: string;
        };
    };
    waterMarker: {
        default: () => {};
    };
}, {
    domain: string;
    totalNumber: number;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    locale?: unknown;
    waterMarker?: unknown;
} & {
    locale: ILocale;
    waterMarker: {};
} & {}> & {}, {
    locale: ILocale;
    waterMarker: {};
}>;
export default _default;
