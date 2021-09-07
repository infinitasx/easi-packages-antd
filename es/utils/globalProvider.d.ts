import { RouteLocationNormalizedLoaded } from 'vue-router';
import { UserInfo } from '../../typings/antd';
export interface IProvider {
    reloadPage: boolean;
    mode: boolean;
    showTab: boolean;
    fixedTab: boolean;
    cachedPage: string[];
    userInfo: UserInfo;
    cityName?: string;
    ip?: string;
    [props: string]: any;
}
export declare const defaultProvider: IProvider;
export declare function initProvider(): {
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
export declare function setProvider(provide: IProvider): void;
export declare function useReload(provide: IProvider, route: RouteLocationNormalizedLoaded, refreshAll?: boolean): Promise<void>;
export default useReload;
