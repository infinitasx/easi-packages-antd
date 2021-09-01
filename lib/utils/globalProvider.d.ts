import { RouteLocationNormalizedLoaded } from "vue-router";
export interface IProvider {
    reloadPage: boolean;
    mode: boolean;
    showTab: boolean;
    fixedTab: boolean;
    cachedPage: string[];
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
};
export declare function setProvider(provide: IProvider): void;
export declare function useReload(provide: IProvider, route: RouteLocationNormalizedLoaded, refreshAll?: boolean): Promise<void>;
