import { PropType } from "vue";
import { IProvider } from "../utils/globalProvider";
import { UserInfo } from '../../typings/antd';
import { getEASIText } from '../locale';
declare const _default: import("vue").DefineComponent<{
    userInfo: {
        type: PropType<UserInfo>;
        default: () => {};
    };
    onLogout: {
        type: FunctionConstructor;
        default: () => Promise<void>;
    };
    toDashboard: {
        type: FunctionConstructor;
        default: undefined;
    };
}, {
    globalProvider: IProvider;
    setSetting: (key: string, value: boolean | string) => void;
    handleLogout(): void;
    toDashBoard(): void;
    getEASIText: typeof getEASIText;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:visible"[], "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    userInfo?: unknown;
    onLogout?: unknown;
    toDashboard?: unknown;
} & {
    userInfo: UserInfo;
    onLogout: Function;
} & {
    toDashboard?: Function | undefined;
}>, {
    userInfo: UserInfo;
    onLogout: Function;
    toDashboard: Function;
}>;
export default _default;
