import { Ref } from 'vue';
export declare type IActionType = 'dragover' | 'dragleave' | 'drop' | '';
export interface IValidateError {
    code: 'FILE_TYPE_ERROR' | 'FILE_MAX_COUNT' | 'FILE_MAX_SIZE' | 'FILE_MIN_WITH_HEIGHT' | 'FILE_UPLOAD_ERROR' | 'FILE_LIST_ERROR';
    message: string;
    fileList: File[];
}
export interface ImageProps {
    width: number;
    height: number;
    image: HTMLImageElement;
}
export interface IPrevHandleImageOptions {
    minCropBoxWidth: number;
    minCropBoxHeight: number;
    maxWidth: number;
    maxHeight: number;
}
export interface IPreviewItem {
    file: File;
    name: string;
    url: string;
    originUrl: string;
    width: number;
    height: number;
    size: number;
    uploadSuccess: boolean;
    uploadFail: boolean;
    uploadLoading: boolean;
    checked?: boolean;
    aspectRatio?: string;
}
export interface IUploadOptions {
    domain: string;
    system?: string;
    authorization: string;
    timeout: number;
}
export interface IRequestConfig {
    url: string;
    method: string;
    header: {
        [prop: string]: any;
    };
    body?: any;
    params?: {
        [prop: string]: any;
    };
    timeout?: number;
}
export interface IQueryOptions {
    filename?: string;
    page: number;
    size: number;
}
export declare function useActionType(init?: IActionType): [Ref<IActionType>, (actionType: IActionType) => void];
export declare function getImageSize(src: string): Promise<ImageProps>;
export declare function fileToBlob(file: File): Promise<string>;
export declare function computedMemorySize(size?: number): string;
export declare function canvasToFile(file: File, options: IPrevHandleImageOptions, getText: (key: string, value: any) => string): Promise<IPreviewItem>;
export declare function request(requestConfig: IRequestConfig): Promise<any>;
export declare function uploadPic(previewItem: IPreviewItem, options: IUploadOptions): Promise<IPreviewItem>;
export declare function getPicsList(params: IQueryOptions, options: IUploadOptions): Promise<any>;
