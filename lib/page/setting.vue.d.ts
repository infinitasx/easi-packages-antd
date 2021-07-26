import { PropType } from "vue";
import { IProvider } from "../utils/globalProvider";
declare const _default: import("vue").DefineComponent<{
    userInfo: {
        type: PropType<any>;
        default: () => {};
    };
}, {
    globalProvider: IProvider | undefined;
    setSetting: (key: string, value: boolean) => void;
    handleLogout(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "logout")[], "update:visible" | "logout", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    userInfo?: unknown;
} & {
    userInfo: {};
} & {}>, {
    userInfo: {};
}>;
export default _default;
