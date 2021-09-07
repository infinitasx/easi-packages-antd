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
    globalProvider: {
        [x: string]: any;
        reloadPage: boolean;
        mode: boolean;
        showTab: boolean;
        fixedTab: boolean;
        cachedPage: string[];
        userInfo: {
            name?: string | undefined;
            avatar?: string | undefined;
            devices?: {
                [x: string]: any;
                device_type: "Desktop" | "Mobile" | "Tablet";
                active_at: number;
                ip: string;
                id: string;
            }[] | undefined;
            session_id?: string | undefined;
            mobile?: string | undefined;
        };
        cityName?: string | undefined;
        ip?: string | undefined;
    };
    timestamp: import("vue").Ref<string>;
    totalNumber: import("vue").Ref<number>;
    showWaterMaker: import("vue").Ref<boolean>;
    domain: string;
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
