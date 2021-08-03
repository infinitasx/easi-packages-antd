import { PropType } from "vue";
import { UserInfo } from '../../typings/antd';
declare const _default: import("vue").DefineComponent<{
    collapsed: {
        type: BooleanConstructor;
        default: boolean;
    };
    userInfo: {
        type: PropType<UserInfo>;
        default: () => {};
    };
}, {
    colToggle(): void;
    handleShowSetting(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("colToggle" | "handleShowSetting")[], "colToggle" | "handleShowSetting", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    collapsed?: unknown;
    userInfo?: unknown;
} & {
    collapsed: boolean;
    userInfo: UserInfo;
} & {}>, {
    collapsed: boolean;
    userInfo: UserInfo;
}>;
export default _default;
