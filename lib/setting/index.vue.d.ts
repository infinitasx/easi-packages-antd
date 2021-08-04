import { PropType } from "vue";
import { IProvider } from "../utils/globalProvider";
import { UserInfo } from '../../typings/antd';
declare const _default: import("vue").DefineComponent<{
    userInfo: {
        type: PropType<UserInfo>;
        default: () => {};
    };
    showTabSetting: {
        type: BooleanConstructor;
        default: boolean;
    };
    onLogout: {
        type: FunctionConstructor;
        default: undefined;
    };
    toDashboard: {
        type: FunctionConstructor;
        default: undefined;
    };
    editPassword: {
        type: FunctionConstructor;
        default: undefined;
    };
}, {
    globalProvider: IProvider;
    setSetting: (key: string, value: boolean | string) => void;
    handleLogout(): void;
    handleToDashBoard(): void;
    handleEditPassword(): void;
    message: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:visible"[], "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    userInfo?: unknown;
    showTabSetting?: unknown;
    onLogout?: unknown;
    toDashboard?: unknown;
    editPassword?: unknown;
} & {
    userInfo: UserInfo;
    showTabSetting: boolean;
} & {
    onLogout?: Function | undefined;
    toDashboard?: Function | undefined;
    editPassword?: Function | undefined;
}>, {
    userInfo: UserInfo;
    showTabSetting: boolean;
    onLogout: Function;
    toDashboard: Function;
    editPassword: Function;
}>;
export default _default;
