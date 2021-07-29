import { VNodeChild, VNode, Slots } from 'vue';

export interface MenuInfo {
  key: string;
  keyPath: string[];
  item: VNodeChild;
  domEvent: MouseEvent;
}

export interface BreadcrumbRoute {
  name: string;
  path: string;
  breadcrumbName: string;
  [props: string]: any;
}

export interface PageRender {
  page: number;
  type: 'page' | 'prev' | 'next';
  originalElement: HTMLElement;
}

export interface Pagination {
  current: number;
  pageSize?: number;
  defaultPageSize?: number;
  disabled?: boolean;
  hideOnSinglePage?: boolean;
  itemRender?: (PageRender) => VNode | Slots;
  pageSizeOptions?: string[];
  showLessItems?: boolean;
  showQuickJumper?: boolean;
  showSizeChanger?: boolean;
  showTotal?: (total: number, range: [number, number]) => string;
  simple?: boolean;
  size?: string;
  total: number;
  buildOptionText?: (props: { value: number }) => string;
}

export interface UserInfo {
  name?: string; // 用户名称
  avatar?: string; // 用户头像
}
