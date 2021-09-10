import { PropType } from "vue";
import { ILocale } from "../locale";
import { IWaterMarker } from '../../typings/antd';
declare const _default: import("vue").DefineComponent<{
    locale: {
        type: PropType<ILocale>;
        default: () => {
            locale: string;
        };
    };
    waterMarker: {
        type: PropType<IWaterMarker>;
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
    waterMarker: IWaterMarker;
} & {}> & {}, {
    locale: ILocale;
    waterMarker: IWaterMarker;
}>;
export default _default;
