// v-loading 组件
// 使用方法：在需要展示Loading的组件上绑定v-loading指令
// true：显示； false：隐藏
// 也可以接受对象，{show: boolean, title: 'common.loading', size: 'small' | 'normal'}

import Loading from "../loading/Index.vue";
import { createApp, nextTick, DirectiveBinding, App, ComponentInternalInstance } from "vue";

interface CustomerDom extends HTMLElement {
  originalPosition: string;
  domInserted: boolean;
  comp: typeof Loading;
  loadingRoot: HTMLElement;
}

export default {
  install: (app: App) => {

    const insertDom = (el: CustomerDom, title?: string, size?: string) => {
      if (getComputedStyle(el, null).display !== "none" && getComputedStyle(el, null).visibility !== "hidden") {
        if (el.originalPosition !== "absolute" && el.originalPosition !== "fixed") {
          el.style.position = "relative";
        }
        el.comp.cShow = true;

        if(title){
          el.comp.cTitle = title;
        }
        if(size){
          el.comp.cSize = size;
        }
        el.comp.root= (app._instance as ComponentInternalInstance)?.root?.proxy;
        el?.appendChild(el?.loadingRoot);
      }
    };

    const removeDom = (el: CustomerDom) => {
      el &&
        setTimeout(() => {
          el.domInserted = false;
          (el as CustomerDom)?.loadingRoot?.parentElement?.removeChild(el?.loadingRoot);
          // el.removeChild(el.loadingRoot);
        }, 300);
    };

    const toggleLoading = async (el: CustomerDom, binding: DirectiveBinding) => {
      let _title = ''
      let _show = true;
      let _size = "normal";

      if (typeof binding.value === "object") {
        const { title, show, size = "normal" } = binding.value;
        _title = title;
        _show = show;
        _size = size;
      } else {
        _show = binding.value;
      }
      if (_show) {
        await nextTick(() => {
          el.originalPosition = getComputedStyle(el, null).position;
          insertDom(el, _title, _size);
        });
        el.domInserted = true;
      } else {
        el.comp.cShow = false;
        if (el.domInserted) {
          removeDom(el);
        }
      }
    };

    app.directive("loading", {
      async beforeMount(el, binding) {
        const loading = createApp(Loading);

        el.loading = el;
        el.loadingRoot = document.createElement("div");
        el.comp = loading.mount(el.loadingRoot);
        await toggleLoading(el, binding);
      },
      async updated(el, binding) {
        if (binding.oldValue !== binding.value) {
          await toggleLoading(el, binding);
        }
      },
      async beforeUnmount(el) {
        if (el.domInserted) {
          el.loading = el;
          removeDom(el);
          // await toggleLoading(el, { value: false } as DirectiveBinding);
        }
        el.comp = null;
      },
    });
  },
};
