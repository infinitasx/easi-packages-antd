import { PropType } from "vue";
import { ILocale } from "../locale";
declare const _default: import("vue").DefineComponent<{
    locale: {
        type: PropType<ILocale>;
        default: () => {
            locale: string;
        };
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    locale?: unknown;
} & {
    locale: ILocale;
} & {}> & {}, {
    locale: ILocale;
}>;
export default _default;
