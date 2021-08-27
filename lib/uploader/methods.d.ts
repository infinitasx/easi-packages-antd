import { Ref } from 'vue';
export declare type IActionType = 'dragover' | 'dragleave' | 'drop' | '';
export interface IValidateError {
    code: 'FILE_TYPE_ERROR' | 'FILE_MAX_COUNT' | 'FILE_MAX_SIZE' | 'FILE_MIN_WITH_HEIGHT';
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
    size: string;
}
export declare function useActionType(init?: IActionType): [Ref<IActionType>, (actionType: IActionType) => void];
export declare function getImageSize(src: string): Promise<ImageProps>;
export declare function fileToBlob(file: File): Promise<string>;
export declare function canvasToFile(file: File, options: IPrevHandleImageOptions, getText: (key: string, value: any) => string): Promise<IPreviewItem>;
