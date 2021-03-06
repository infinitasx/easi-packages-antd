import { PropType } from "vue";
import { IPreviewItem } from './methods';
declare const _default: import("vue").DefineComponent<{
    item: {
        type: PropType<IPreviewItem>;
        default: () => {};
    };
    index: {
        type: NumberConstructor;
        default: number;
    };
    activeKey: {
        type: PropType<0 | 1>;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    ratio: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    crop: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    invalidAspectRatio: import("vue").ComputedRef<boolean>;
    handleDelete(item: IPreviewItem, index: number): void;
    handleCrop(item: IPreviewItem, index: number): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    item?: unknown;
    index?: unknown;
    activeKey?: unknown;
    disabled?: unknown;
    ratio?: unknown;
    crop?: unknown;
    loading?: unknown;
} & {
    item: IPreviewItem;
    index: number;
    activeKey: 0 | 1;
    disabled: boolean;
    ratio: string | number;
    crop: boolean;
    loading: boolean;
} & {}> & {}, {
    item: IPreviewItem;
    index: number;
    activeKey: 0 | 1;
    disabled: boolean;
    ratio: string | number;
    crop: boolean;
    loading: boolean;
}>;
export default _default;
