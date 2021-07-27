import { PropType } from "vue";
export interface UserInfo {
    name: string;
    post?: string;
    email?: string;
    tel?: string;
    headImg?: string;
}
declare const _default: import("vue").DefineComponent<{
    userInfo: {
        type: PropType<UserInfo>;
        require: boolean;
        default: () => {};
    };
}, {
    openHandler(): void;
    show: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "openHandler"[], "openHandler", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    userInfo?: unknown;
} & {
    userInfo: UserInfo;
} & {}>, {
    userInfo: UserInfo;
}>;
export default _default;
