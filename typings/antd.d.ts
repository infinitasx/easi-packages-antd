import { Slots, VNode, VNodeChild } from 'vue';

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

export interface ISystem {
  application_id: string;
  name: string;
  icons: string;
  link: string;
  scopes: { id: string; name: string }[];
}

export interface UserInfo {
  application_id?: string; // 当前系统的标示
  apps?: ISystem[]; // 用户拥有权限的系统
  name?: string; // 用户名称
  avatar?: string; // 用户头像
  devices?: {
    device_type: 'Desktop' | 'Mobile' | 'Tablet';
    active_at: number;
    ip: string;
    id: string;
    [props: string]: any;
  }[]; // 设备信息
  session_id?: string;
  mobile?: string;
}

export interface IWaterMarker {
  ip?: string;
  cityName?: string;
  userInfo?: UserInfo;
}
