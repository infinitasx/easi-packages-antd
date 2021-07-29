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
    onLogout: {
        type: FunctionConstructor;
        default: () => Promise<void>;
    };
}, {
    globalProvider: IProvider | undefined;
    setSetting: (key: string, value: boolean | string) => void;
    handleLogout(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:visible"[], "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    userInfo?: unknown;
    avatar?: unknown;
    onLogout?: unknown;
} & {
    userInfo: {};
    onLogout: Function;
} & {
    avatar?: string | undefined;
}>, {
    userInfo: {};
    onLogout: Function;
}>;
export default _default;
