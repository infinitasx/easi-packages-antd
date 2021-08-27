import { PropType } from 'vue';
export declare const emptyProps: {
    emptyTitle: {
        type: StringConstructor;
        default: undefined;
    };
    emptySubTitle: {
        type: StringConstructor;
        default: undefined;
    };
};
export declare const rootProps: {
    visible: {
        type: BooleanConstructor;
        default: undefined;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: undefined;
    };
    handleOk: {
        type: FunctionConstructor;
        default: null;
    };
    extType: {
        type: PropType<string[]>;
        default: string[];
    };
    accept: {
        type: PropType<string[]>;
        default: string[];
    };
    multiple: {
        type: (BooleanConstructor | NumberConstructor)[];
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
    canEdit: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoUpload: {
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
};
