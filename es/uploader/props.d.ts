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
export declare const cropProps: {
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
};
export declare const uploadProps: {
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
        type: PropType<"development" | "production">;
        default: "development" | "production";
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
        type: PropType<"development" | "production">;
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
};
