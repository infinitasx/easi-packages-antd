import { nextTick, reactive, toRaw } from 'vue';
import { RouteLocationNormalizedLoaded } from 'vue-router';
import { getLocal, setLocal } from 'easi-web-utils';
import { UserInfo } from '../../typings/antd';

export interface IProvider {
  reloadPage: boolean;
  mode: false | true | 'dark' | '';
  showTab: boolean;
  fixedTab: boolean;
  cachedPage: string[];
  userInfo: UserInfo;
  [props: string]: any;
}

const SETTING_KEY = 'setting';

const HTML = document.querySelector('html') as HTMLHtmlElement;

export const defaultProvider: IProvider = {
  reloadPage: true,
  mode: false,
  showTab: true,
  fixedTab: true,
  cachedPage: [],
  userInfo: {},
};

export function initProvider() {
  const defaultData = getLocal(SETTING_KEY) || {
    mode: false,
    fixedTab: true,
    showTab: true,
  };

  if (defaultData.mode === true || (defaultData.mode as any) === 'dark') {
    defaultData.mode && HTML.setAttribute('data-pro-theme', 'antdv-pro-theme-dark');
  }

  return reactive<IProvider>({
    ...defaultData,
    cachedPage: [],
    reloadPage: true,
    userInfo: {},
  });
}

export function setProvider(provide: IProvider) {
  const { cachedPage, reloadPage, ...other } = toRaw(provide);
  if (other.mode === true || (other.mode as any) === 'dark') {
    HTML.setAttribute('data-pro-theme', 'antdv-pro-theme-dark');
  } else {
    HTML.removeAttribute('data-pro-theme');
  }
  setLocal(SETTING_KEY, other);
}

// 刷新页面面组件的方法
export async function useReload(
  provide: IProvider,
  route: RouteLocationNormalizedLoaded,
  refreshAll = false, // 刷新所有页面组件的缓存
) {
  if (refreshAll) {
    provide.cachedPage = [];
  } else {
    // 清除当前路由缓存
    if (route.meta.cached !== false) {
      provide.cachedPage = provide.cachedPage.filter((name: string) => route.name !== name);
    }
  }
  provide.reloadPage = false;
  await nextTick();
  // 添加当前路由缓存
  if (route.meta.cached !== false) {
    provide.cachedPage = [...provide.cachedPage, route.name as string];
  }
  provide.reloadPage = true;
}

export default useReload;
