import { nextTick, reactive, toRaw } from "vue";
import { RouteLocationNormalizedLoaded } from "vue-router";
import { EASILocal } from "easi-web-utils";

export interface IProvider {
  reloadPage: boolean;
  mode: "light" | "dark";
  showTab: boolean;
  fixedTab: boolean;
  cachedPage: string[];
  [props: string]: any;
}

const SETTING_KEY = "setting";

const HTML = document.querySelector("html") as HTMLHtmlElement;

export function initProvider() {
  const defaultData = EASILocal.get(SETTING_KEY) || {
    mode: false,
    fixedTab: true,
    showTab: true,
  };

  defaultData.mode === "dark" && HTML.setAttribute("data-pro-theme", "antdv-pro-theme-dark");

  return reactive<IProvider>({
    ...defaultData,
    cachedPage: [],
    reloadPage: true,
  });
}

export function setProvider(provide: IProvider) {
  const { cachedPage, reloadPage, ...other } = toRaw(provide);
  if (other.mode) {
    HTML.setAttribute("data-pro-theme", "antdv-pro-theme-dark");
  } else {
    HTML.removeAttribute("data-pro-theme");
  }
  EASILocal.set(SETTING_KEY, other);
}

// 刷新页面面组件的方法
export async function useReload(
  provide: IProvider,
  route: RouteLocationNormalizedLoaded,
  refreshAll = false // 刷新所有页面组件的缓存
) {
  if (refreshAll) {
    provide.cachedPage = [];
  } else {
    // 清除当前路由缓存
    if (route.meta.cached) {
      provide.cachedPage = provide.cachedPage.filter((name: string) => route.name !== name);
    }
  }
  provide.reloadPage = false;
  await nextTick();
  // 添加当前路由缓存
  if (route.meta.cached) {
    provide.cachedPage = [...provide.cachedPage, route.name as string];
  }
  provide.reloadPage = true;
}
