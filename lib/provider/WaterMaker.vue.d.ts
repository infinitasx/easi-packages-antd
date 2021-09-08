import { IProvider } from "../utils/globalProvider";
declare const _default: import("vue").DefineComponent<{}, {
    globalProvider: IProvider;
    mobile: import("vue").ComputedRef<string | undefined>;
    totalNumber: import("vue").Ref<number>;
    timestamp: import("vue").Ref<number>;
    domain: import("vue").Ref<string | undefined>;
    waterMarker: import("vue").Ref<{
        ip?: string | undefined;
        cityName?: string | undefined;
        userInfo?: {
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
        } | undefined;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}> & ({} | {}), {}>;
export default _default;
