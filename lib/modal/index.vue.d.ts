import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: undefined;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    bodyStyle: ObjectConstructor;
    showCancel: {
        type: BooleanConstructor;
        default: boolean;
    };
    showOk: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelText: {
        type: StringConstructor;
    };
    okText: {
        type: StringConstructor;
    };
    okType: {
        type: StringConstructor;
        default: string;
    };
    closable: {
        default: boolean;
        type: BooleanConstructor;
    };
    afterClose: FunctionConstructor;
    confirmLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    keyboard: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    getContainer: {
        type: FunctionConstructor;
        default: () => HTMLElement;
    };
    handleOk: {
        type: FunctionConstructor;
        default: null;
    };
    autoHeight: {
        type: PropType<boolean>;
        default: boolean;
    };
    footer: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    symbolVisible: import("vue").Ref<boolean>;
    autoLoading: import("vue").Ref<boolean>;
    bodyScrollStyle: {
        maxHeight: string;
        overflow: string;
    };
    onConfirm: () => Promise<void>;
    onCancel: () => void;
    showModal: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("ok" | "cancel" | "update:visible" | "show")[], "ok" | "cancel" | "update:visible" | "show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    visible?: unknown;
    title?: unknown;
    bodyStyle?: unknown;
    showCancel?: unknown;
    showOk?: unknown;
    cancelText?: unknown;
    okText?: unknown;
    okType?: unknown;
    closable?: unknown;
    afterClose?: unknown;
    confirmLoading?: unknown;
    destroyOnClose?: unknown;
    keyboard?: unknown;
    maskClosable?: unknown;
    width?: unknown;
    getContainer?: unknown;
    handleOk?: unknown;
    autoHeight?: unknown;
    footer?: unknown;
} & {
    title: string;
    showCancel: boolean;
    showOk: boolean;
    okType: string;
    closable: boolean;
    confirmLoading: boolean;
    destroyOnClose: boolean;
    keyboard: boolean;
    maskClosable: boolean;
    width: string | number;
    getContainer: Function;
    handleOk: Function;
    autoHeight: boolean;
    footer: boolean;
} & {
    visible?: boolean | undefined;
    bodyStyle?: Record<string, any> | undefined;
    cancelText?: string | undefined;
    okText?: string | undefined;
    afterClose?: Function | undefined;
}>, {
    visible: boolean;
    title: string;
    showCancel: boolean;
    showOk: boolean;
    okType: string;
    closable: boolean;
    confirmLoading: boolean;
    destroyOnClose: boolean;
    keyboard: boolean;
    maskClosable: boolean;
    width: string | number;
    getContainer: Function;
    handleOk: Function;
    autoHeight: boolean;
    footer: boolean;
}>;
export default _default;
