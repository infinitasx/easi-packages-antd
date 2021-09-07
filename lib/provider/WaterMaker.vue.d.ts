import { PropType } from 'vue';
import { IProvider } from "../utils/globalProvider";
import { IWaterMarker } from "../../typings/antd";
declare const _default: import("vue").DefineComponent<{
    timestamp: {
        type: StringConstructor;
        default: undefined;
    };
    totalNumber: {
        type: NumberConstructor;
        default: number;
    };
    domain: {
        type: StringConstructor;
        default: undefined;
    };
    waterMarker: {
        type: PropType<IWaterMarker>;
        default: () => {};
    };
}, {
    globalProvider: IProvider;
    mobile: import("vue").ComputedRef<string | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    timestamp?: unknown;
    totalNumber?: unknown;
    domain?: unknown;
    waterMarker?: unknown;
} & {
    totalNumber: number;
    waterMarker: IWaterMarker;
} & {
    timestamp?: string | undefined;
    domain?: string | undefined;
}> & {}, {
    timestamp: string;
    totalNumber: number;
    domain: string;
    waterMarker: IWaterMarker;
}>;
export default _default;
