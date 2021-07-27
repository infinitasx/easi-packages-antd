import { PropType } from "vue";
export declare type defaultSeting = {
    mode: "dark" | "light";
    showTab: boolean;
    fixedTab?: boolean;
};
declare const _default: import("vue").DefineComponent<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    drawerSeting: {
        type: PropType<defaultSeting>;
        default: () => {
            mode: string;
            showTab: boolean;
            fixedTab: boolean;
        };
    };
}, {
    visible: import("vue").Ref<boolean>;
    setSetting: (key: string, value: boolean) => void;
    logoutHandler(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:show" | "update:drawerSeting" | "logout")[], "update:show" | "update:drawerSeting" | "logout", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    show?: unknown;
    drawerSeting?: unknown;
} & {
    show: boolean;
    drawerSeting: defaultSeting;
} & {}>, {
    show: boolean;
    drawerSeting: defaultSeting;
}>;
export default _default;
