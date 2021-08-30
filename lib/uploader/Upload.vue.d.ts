import { PropType } from "vue";
import { IPreviewItem } from './methods';
declare const _default: import("vue").DefineComponent<{
    localUploadList: {
        type: PropType<IPreviewItem[]>;
        default: () => never[];
    };
    localUploadMustCrop: {
        type: PropType<IPreviewItem[]>;
        default: () => never[];
    };
    isCropping: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: undefined;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: undefined;
    };
    extType: {
        type: PropType<string[]>;
        default: () => string[];
    };
    accept: {
        type: PropType<string[]>;
        default: () => string[];
    };
    multiple: {
        type: (NumberConstructor | BooleanConstructor)[];
        default: boolean;
    };
    maxFilesSize: {
        type: NumberConstructor;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    crop: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxWidth: {
        type: NumberConstructor;
        default: number;
    };
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    system: {
        type: StringConstructor;
        default: undefined;
    };
    authorization: {
        type: StringConstructor;
        default: undefined;
    };
    timeout: {
        type: NumberConstructor;
        default: number;
    };
    env: {
        type: PropType<"development" | "production">;
        default: "development" | "production";
    };
    aspectRatio: {
        type: StringConstructor;
        default: undefined;
    };
    minCropBoxWidth: {
        type: NumberConstructor;
        default: number;
    };
    minCropBoxHeight: {
        type: NumberConstructor;
        default: number;
    };
    emptyTitle: {
        type: StringConstructor;
        default: undefined;
    };
    emptySubTitle: {
        type: StringConstructor;
        default: undefined;
    };
}, {
    inputRef: import("vue").Ref<any>;
    cropImageRef: import("vue").Ref<any>;
    cropperItem: import("vue").Ref<IPreviewItem | undefined>;
    cropperIndex: import("vue").Ref<number>;
    uploadGlobal: {
        cropLoading: boolean;
        uploadLoading: boolean;
    };
    confirmCrop: (mustCrop?: boolean) => Promise<unknown>;
    toNext: () => Promise<void>;
    toPrev: () => void;
    setCurrent: (item: IPreviewItem, index: number) => void;
    initCrop: () => void;
    showAddBtn: import("vue").ComputedRef<boolean>;
    handleChange(e: InputEvent): void;
    handleDelete(item: IPreviewItem, index: number): void;
    handleCrop(item: IPreviewItem, index: number): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("inputChange" | "handleDelete" | "handleCrop" | "handleConfirmCrop")[], "inputChange" | "handleDelete" | "handleCrop" | "handleConfirmCrop", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    localUploadList?: unknown;
    localUploadMustCrop?: unknown;
    isCropping?: unknown;
    visible?: unknown;
    maskClosable?: unknown;
    destroyOnClose?: unknown;
    title?: unknown;
    extType?: unknown;
    accept?: unknown;
    multiple?: unknown;
    maxFilesSize?: unknown;
    disabled?: unknown;
    crop?: unknown;
    maxWidth?: unknown;
    maxHeight?: unknown;
    system?: unknown;
    authorization?: unknown;
    timeout?: unknown;
    env?: unknown;
    aspectRatio?: unknown;
    minCropBoxWidth?: unknown;
    minCropBoxHeight?: unknown;
    emptyTitle?: unknown;
    emptySubTitle?: unknown;
} & {
    localUploadList: IPreviewItem[];
    localUploadMustCrop: IPreviewItem[];
    isCropping: boolean;
    maskClosable: boolean;
    destroyOnClose: boolean;
    extType: string[];
    accept: string[];
    multiple: number | boolean;
    maxFilesSize: number;
    disabled: boolean;
    crop: boolean;
    maxWidth: number;
    maxHeight: number;
    timeout: number;
    env: "development" | "production";
    minCropBoxWidth: number;
    minCropBoxHeight: number;
} & {
    visible?: boolean | undefined;
    title?: string | undefined;
    system?: string | undefined;
    authorization?: string | undefined;
    aspectRatio?: string | undefined;
    emptyTitle?: string | undefined;
    emptySubTitle?: string | undefined;
}> & {
    onInputChange?: ((...args: any[]) => any) | undefined;
    onHandleDelete?: ((...args: any[]) => any) | undefined;
    onHandleCrop?: ((...args: any[]) => any) | undefined;
    onHandleConfirmCrop?: ((...args: any[]) => any) | undefined;
}, {
    localUploadList: IPreviewItem[];
    localUploadMustCrop: IPreviewItem[];
    isCropping: boolean;
    visible: boolean;
    maskClosable: boolean;
    destroyOnClose: boolean;
    title: string;
    extType: string[];
    accept: string[];
    multiple: number | boolean;
    maxFilesSize: number;
    disabled: boolean;
    crop: boolean;
    maxWidth: number;
    maxHeight: number;
    system: string;
    authorization: string;
    timeout: number;
    env: "development" | "production";
    aspectRatio: string;
    minCropBoxWidth: number;
    minCropBoxHeight: number;
    emptyTitle: string;
    emptySubTitle: string;
}>;
export default _default;
