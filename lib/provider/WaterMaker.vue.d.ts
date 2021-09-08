import { PropType } from 'vue';
import { IProvider } from '../utils/globalProvider';
import { IWaterMarker } from "../../typings/antd";
declare const _default: import("vue").DefineComponent<{
    waterMarker: {
        type: PropType<IWaterMarker>;
        default: () => {};
    };
    totalNumber: {
        type: NumberConstructor;
        default: number;
    };
    domain: {
        type: StringConstructor;
        default: undefined;
    };
    globalProvider: {
        type: PropType<IProvider>;
        default: undefined;
    };
}, {
    mobile: import("vue").ComputedRef<string | undefined>;
    globalProvider: import("vue").Ref<{
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
    } | undefined>;
    timestamp: import("vue").Ref<string>;
    showMarker: import("vue").Ref<boolean>;
    setShow(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    waterMarker?: unknown;
    totalNumber?: unknown;
    domain?: unknown;
    globalProvider?: unknown;
} & {
    waterMarker: IWaterMarker;
    totalNumber: number;
} & {
    domain?: string | undefined;
    globalProvider?: IProvider | undefined;
}> & {}, {
    waterMarker: IWaterMarker;
    totalNumber: number;
    domain: string;
    globalProvider: IProvider;
}>;
export default _default;
