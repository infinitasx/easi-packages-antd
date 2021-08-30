import { PropType } from 'vue';
import { IPreviewItem } from './methods';
declare const _default: import("vue").DefineComponent<{
    checkedList: {
        type: PropType<IPreviewItem[]>;
        default: never[];
    };
    authorization: {
        type: (StringConstructor | FunctionConstructor)[];
        default: undefined;
    };
    timeout: {
        type: NumberConstructor;
        default: number;
    };
    domain: {
        type: StringConstructor;
        default: string;
    };
    multiple: {
        type: (NumberConstructor | BooleanConstructor)[];
        default: boolean;
    };
    getText: {
        type: FunctionConstructor;
        default: () => string;
    };
}, {
    imageList: import("vue").Ref<{
        file: {
            readonly lastModified: number;
            readonly name: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: () => Promise<ArrayBuffer>;
            slice: (start?: number | undefined, end?: number | undefined, contentType?: string | undefined) => Blob;
            stream: () => ReadableStream<any>;
            text: () => Promise<string>;
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
    current: import("vue").Ref<number>;
    uploadGlobal: {
        listLoading: boolean;
    };
    total: import("vue").Ref<number>;
    disabled: import("vue").ComputedRef<boolean>;
    simpleImage: any;
    onChange: (_page: number, _size: number) => void;
    getImageList: (_filename?: string | undefined) => Promise<void>;
    handleCheckChange(e: any, item: IPreviewItem, index: number): void;
    showTotal(total: number): any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("error" | "handleCheckedChange")[], "error" | "handleCheckedChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    checkedList?: unknown;
    authorization?: unknown;
    timeout?: unknown;
    domain?: unknown;
    multiple?: unknown;
    getText?: unknown;
} & {
    checkedList: IPreviewItem[];
    timeout: number;
    domain: string;
    multiple: number | boolean;
    getText: Function;
} & {
    authorization?: string | Function | undefined;
}> & {
    onError?: ((...args: any[]) => any) | undefined;
    onHandleCheckedChange?: ((...args: any[]) => any) | undefined;
}, {
    checkedList: IPreviewItem[];
    authorization: string | Function;
    timeout: number;
    domain: string;
    multiple: number | boolean;
    getText: Function;
}>;
export default _default;
