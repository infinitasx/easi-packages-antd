import { PropType } from "vue";
import { IProvider } from "../utils/globalProvider";
declare const _default: import("vue").DefineComponent<{
    userInfo: {
        type: PropType<any>;
        default: () => {};
    };
    avatar: {
        type: StringConstructor;
    };
}, {
    globalProvider: IProvider | undefined;
    setSetting: (key: string, value: boolean) => void;
    handleLogout(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "logout")[], "update:visible" | "logout", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    userInfo?: unknown;
    avatar?: unknown;
} & {
    userInfo: {};
} & {
    avatar?: string | undefined;
}>, {
    userInfo: {};
}>;
export default _default;
