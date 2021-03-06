import { PropType, ComputedRef } from "vue";
import { BreadcrumbRoute } from "../../typings/antd";
declare const _default: import("vue").DefineComponent<{
    showPageHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    breadcrumb: {
        type: PropType<BreadcrumbRoute[]>;
        default: undefined;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
    layoutType: {
        type: PropType<"card" | "customer">;
        default: string;
    };
    hasPermission: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    breadcrumbRoutes: ComputedRef<BreadcrumbRoute[]>;
    pageTitle: ComputedRef<string>;
    pageDesc: ComputedRef<string>;
    getText(key: string, value?: {
        [props: string]: string | number;
    } | undefined): any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "initPage"[], "initPage", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    showPageHeader?: unknown;
    breadcrumb?: unknown;
    title?: unknown;
    desc?: unknown;
    layoutType?: unknown;
    hasPermission?: unknown;
} & {
    showPageHeader: boolean;
    title: string;
    desc: string;
    layoutType: "card" | "customer";
    hasPermission: boolean;
} & {
    breadcrumb?: BreadcrumbRoute[] | undefined;
}> & {
    onInitPage?: ((...args: any[]) => any) | undefined;
}, {
    showPageHeader: boolean;
    breadcrumb: BreadcrumbRoute[];
    title: string;
    desc: string;
    layoutType: "card" | "customer";
    hasPermission: boolean;
}>;
export default _default;
