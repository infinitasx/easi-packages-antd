import { IGlobalLocal } from '../locale';
import { IPreviewItem } from './methods';
declare const _default: import("vue").DefineComponent<{
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
        type: import("vue").PropType<string[]>;
        default: () => string[];
    };
    accept: {
        type: import("vue").PropType<string[]>;
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
        type: (StringConstructor | FunctionConstructor)[];
        default: undefined;
    };
    authorizationKey: {
        type: StringConstructor;
        default: string;
    };
    timeout: {
        type: NumberConstructor;
        default: number;
    };
    env: {
        type: import("vue").PropType<"development" | "production">;
        default: "development" | "production";
    };
    aspectRatio: {
        type: NumberConstructor;
        default: number;
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
    symbolVisible: import("vue").Ref<boolean>;
    globalEASILocale: IGlobalLocal;
    uploadGlobal: {
        cropLoading: boolean;
        uploadLoading: boolean;
        listLoading: boolean;
    };
    activeKey: import("vue").Ref<number>;
    imageStoreRef: import("vue").Ref<any>;
    handleCancel: () => void;
    handleShow: () => void;
    getText: (key: string, value?: {
        [props: string]: string | number;
    } | undefined) => any;
    handleSearch: () => void;
    search: import("vue").Ref<string | undefined>;
    actionType: import("vue").Ref<import("./methods").IActionType>;
    setActionType: (actionType: import("./methods").IActionType) => void;
    uploadRef: import("vue").Ref<any>;
    localUploadList: import("vue").Ref<{
        file: {
            readonly lastModified: number;
            readonly name: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: {
                (): Promise<ArrayBuffer>;
                (): Promise<ArrayBuffer>;
            };
            slice: {
                (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
                (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
            };
            stream: {
                (): ReadableStream<any>;
                (): ReadableStream<any>;
            };
            text: {
                (): Promise<string>;
                (): Promise<string>;
            };
        };
        name: string;
        url: string;
        originUrl: string;
        width: number;
        height: number;
        size: number;
        uploadSuccess: boolean;
        uploadFail: boolean;
        uploadLoading: boolean;
        checked?: boolean | undefined;
        aspectRatio?: string | undefined;
    }[]>;
    localUploadLoading: import("vue").Ref<boolean>;
    localUploadMustCrop: import("vue").Ref<{
        file: {
            readonly lastModified: number;
            readonly name: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: {
                (): Promise<ArrayBuffer>;
                (): Promise<ArrayBuffer>;
            };
            slice: {
                (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
                (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
            };
            stream: {
                (): ReadableStream<any>;
                (): ReadableStream<any>;
            };
            text: {
                (): Promise<string>;
                (): Promise<string>;
            };
        };
        name: string;
        url: string;
        originUrl: string;
        width: number;
        height: number;
        size: number;
        uploadSuccess: boolean;
        uploadFail: boolean;
        uploadLoading: boolean;
        checked?: boolean | undefined;
        aspectRatio?: string | undefined;
    }[]>;
    checkedList: import("vue").Ref<{
        file: {
            readonly lastModified: number;
            readonly name: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: {
                (): Promise<ArrayBuffer>;
                (): Promise<ArrayBuffer>;
            };
            slice: {
                (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
                (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
            };
            stream: {
                (): ReadableStream<any>;
                (): ReadableStream<any>;
            };
            text: {
                (): Promise<string>;
                (): Promise<string>;
            };
        };
        name: string;
        url: string;
        originUrl: string;
        width: number;
        height: number;
        size: number;
        uploadSuccess: boolean;
        uploadFail: boolean;
        uploadLoading: boolean;
        checked?: boolean | undefined;
        aspectRatio?: string | undefined;
    }[]>;
    alreadyUpload: import("vue").ComputedRef<{
        file: {
            readonly lastModified: number;
            readonly name: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: {
                (): Promise<ArrayBuffer>;
                (): Promise<ArrayBuffer>;
            };
            slice: {
                (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
                (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
            };
            stream: {
                (): ReadableStream<any>;
                (): ReadableStream<any>;
            };
            text: {
                (): Promise<string>;
                (): Promise<string>;
            };
        };
        name: string;
        url: string;
        originUrl: string;
        width: number;
        height: number;
        size: number;
        uploadSuccess: boolean;
        uploadFail: boolean;
        uploadLoading: boolean;
        checked?: boolean | undefined;
        aspectRatio?: string | undefined;
    }[]>;
    waitToUpload: import("vue").ComputedRef<{
        file: {
            readonly lastModified: number;
            readonly name: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: {
                (): Promise<ArrayBuffer>;
                (): Promise<ArrayBuffer>;
            };
            slice: {
                (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
                (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
            };
            stream: {
                (): ReadableStream<any>;
                (): ReadableStream<any>;
            };
            text: {
                (): Promise<string>;
                (): Promise<string>;
            };
        };
        name: string;
        url: string;
        originUrl: string;
        width: number;
        height: number;
        size: number;
        uploadSuccess: boolean;
        uploadFail: boolean;
        uploadLoading: boolean;
        checked?: boolean | undefined;
        aspectRatio?: string | undefined;
    }[]>;
    isCropping: import("vue").Ref<boolean>;
    cropIndex: import("vue").Ref<number>;
    domain: import("vue").ComputedRef<"https://oss.easiglobal.com" | "https://oss.melbdelivery.com">;
    ratio: import("vue").ComputedRef<string | 0>;
    handleCropBack: () => void;
    handleDelete: (item: IPreviewItem, index: number) => void;
    handleCrop: (item: IPreviewItem, index: number) => void;
    handleConfirmCrop: (item: IPreviewItem, index: number, isMustCrop?: boolean) => void;
    handleToCrop: () => void;
    handleToNext: () => void;
    handleToPrev: () => void;
    handleUpload: () => Promise<void>;
    handleOK: () => {
        destroy: () => void;
        update: (newConfig: import("ant-design-vue").ModalFuncProps) => void;
    } | undefined;
    handleCheckedChange: (checked: boolean, item: IPreviewItem, index: number) => void;
    handleChange(e: DragEvent, fromAction?: 'drop' | ''): Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "show" | "cancel" | "ok" | "change" | "error")[], "update:visible" | "show" | "cancel" | "ok" | "change" | "error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
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
    authorizationKey?: unknown;
    timeout?: unknown;
    env?: unknown;
    aspectRatio?: unknown;
    minCropBoxWidth?: unknown;
    minCropBoxHeight?: unknown;
    emptyTitle?: unknown;
    emptySubTitle?: unknown;
} & {
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
    authorizationKey: string;
    timeout: number;
    env: "development" | "production";
    aspectRatio: number;
    minCropBoxWidth: number;
    minCropBoxHeight: number;
} & {
    authorization?: string | Function | undefined;
    visible?: boolean | undefined;
    title?: string | undefined;
    system?: string | undefined;
    emptyTitle?: string | undefined;
    emptySubTitle?: string | undefined;
}> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onOk?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
}, {
    authorization: string | Function;
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
    authorizationKey: string;
    timeout: number;
    env: "development" | "production";
    aspectRatio: number;
    minCropBoxWidth: number;
    minCropBoxHeight: number;
    emptyTitle: string;
    emptySubTitle: string;
}>;
export default _default;
