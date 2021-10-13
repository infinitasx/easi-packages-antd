import { Pagination } from '../../typings/antd';
export declare function usePagination(initValue: Pagination): {
    current: number;
    pageSize?: number | undefined;
    defaultPageSize?: number | undefined;
    disabled?: boolean | undefined;
    hideOnSinglePage?: boolean | undefined;
    itemRender?: ((PageRender: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>) | undefined;
    pageSizeOptions?: string[] | undefined;
    showLessItems?: boolean | undefined;
    showQuickJumper: boolean;
    showSizeChanger: boolean;
    showTotal: ((total: number) => any) | ((total: number, range: [number, number]) => string);
    simple?: boolean | undefined;
    size?: string | undefined;
    total: number;
    buildOptionText?: ((props: {
        value: number;
    }) => string) | undefined;
    showSizeChange: () => null;
    onShowSizeChange: () => null;
};
export default usePagination;
