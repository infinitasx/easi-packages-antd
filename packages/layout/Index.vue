<template>
  <a-layout class="min-h-screen">
    <!-- 侧边栏导航  -->
    <PageNav :collapsed="collapsed" :coll-width="collWidth" :isH5="isH5" :logo="logo" :sub-title="subTitle" :title="title" :nav="nav" @hideMenu="collapsed = true" />
    <!-- 内容布局 -->
    <a-layout>
      <div class="h-48"></div>
      <a-layout-header
        class="page-header fixed top-0 right-0 bg-white flex items-center h-48 leading-48 pl-16 pr-16 z-10"
        :class="{ 'transition-width': !isH5 }"
        :style="{ width: isH5 ? '100%' : `calc(100% - ${collWidth})` }"
      >
        <PageHeader :collapsed="collapsed" :userInfo="userInfo" @colToggle="setCollapsed" @handleShowSetting="handleShowSetting" />
      </a-layout-header>
      <PageTab
        class="page-tab pt-6 bg-white"
        :class="[globalProvider.fixedTab ? 'fixed top-48 right-0 z-10' : '', !isH5 && addTransition ? 'transition-width' : '']"
        :style="{ width: globalProvider.fixedTab && !isH5 ? `calc(100% - ${collWidth})` : `100%` }"
        @reloadPage="onReloadPage"
        v-if="globalProvider.showTab"
      />
      <div class="h-64" v-if="globalProvider.showTab && globalProvider.fixedTab"></div>
      <a-layout-content>
        <router-view v-slot="{ Component }">
          <transition name="slid-up" mode="out-in">
            <keep-alive :include="cachedPage">
              <component :is="Component" :key="(Component || {}).name" v-if="globalProvider.reloadPage" />
            </keep-alive>
          </transition>
        </router-view>
      </a-layout-content>
      <a-layout-footer class="px-16 py-12 text-center"> &copy; {{copyRightYear()}} EASI, Make Life Easier. </a-layout-footer>
    </a-layout>
    <PageSetting v-model:visible="showSetting" :userInfo="userInfo" :showTabSetting="showTabSetting" :onLogout="onLogout" :toDashboard="toDashboard" :editPassword="editPassword">
      <!--  开发时可自定义插入内容  -->
      <template #action-render>
        <slot name="action-render"></slot>
      </template>
    </PageSetting>
  </a-layout>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onBeforeUnmount, onMounted, ref, toRefs, watch, PropType } from "vue";
import { useRoute, useRouter, RouteLocationNormalized } from "vue-router";
import { createNamespace } from "../utils/create";
import PageNav from "./Nav.vue";
import PageHeader from "./Header.vue";
import PageSetting from "../setting/Index.vue";
import PageTab from "./Tab.vue";
import { isMobile, debounced } from "easi-web-utils";
import { useReload, IProvider, defaultProvider } from "../utils/globalProvider";
import { UserInfo } from '../../typings/antd'

export default defineComponent({
  name: createNamespace("Layout"),
  emits: ['update:setting'],
  props: {
    // Logo图片路径
    logo: {
      type: String,
      default: null,
    },
    // 系统名称
    title: {
      type: String,
      default: null,
    },
    // 系统二级名称，一般放城市
    subTitle: {
      type: String,
      default: null,
    },
    // 菜单数据
    nav: {
      type: Array as PropType<RouteLocationNormalized[]>,
      default: () => [],
    },
    // 用户信息
    userInfo: {
      type: Object as PropType<UserInfo>,
      default: () => ({}),
    },
    // 是否显示tab相关的设置
    showTabSetting: {
      type: Boolean,
      default: true,
    },
    // 退出登陆的方法
    onLogout: {
      type: Function,
      default: undefined,
    },
    // 回到dashboard的方法
    toDashboard: {
      type: Function,
      default: undefined
    },
    // 修改密码的方法
    editPassword: {
      type: Function,
      default: undefined,
    },
    // 项目开始年份
    startYear: {
      type: [String, Number],
      default: 2021,
    },
    setting: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {emit}) {
    const { nav, setting } = toRefs(props);

    const route = useRoute();
    const router = useRouter();

    const isH5 = ref<boolean>(isMobile());

    const addTransition = ref<boolean>(true);

    // 侧边栏折叠面板
    const collapsed = ref<boolean>(isH5.value);

    const showSetting = ref<boolean>(false);

    const globalProvider = inject<IProvider>('globalProvider', {...defaultProvider});

    let timeout: any;
    watch(
      () => globalProvider.fixedTab,
      () => {
        clearTimeout(timeout);
        addTransition.value = false;
        timeout = setTimeout(() => {
          addTransition.value = true;
        }, 200);
      }
    );

    const handleCachedPage = () => {
      if(route.meta.cached && !globalProvider.cachedPage.includes(route.name as string)){
        globalProvider.cachedPage = [...globalProvider.cachedPage, route.name as string]
      }
    }

    handleCachedPage();
    watch(() => route.name, (name) => {
      handleCachedPage();
    })

    // 监听页面resize事件
    const handleResize = () => {
      debounced(() => {
        if (collapsed.value && window.innerWidth > 1200) {
          collapsed.value = false;
        } else if (!collapsed.value && window.innerWidth <= 1200) {
          collapsed.value = true;
        }
        if (isH5.value && window.innerWidth > 750) {
          isH5.value = false;
        } else if (!isH5.value && window.innerWidth <= 750) {
          isH5.value = true;
        }
      }, 250)();
    };

    handleResize();
    window.addEventListener("resize", handleResize, false);

    watch(() => showSetting.value, (newVal) => {
      if(setting.value !== newVal){
        emit('update:setting', newVal);
      }
    })

    watch(() => setting.value, (newVal) => {
      if(showSetting.value !== newVal){
        showSetting.value = newVal
      }
    })

    onMounted(() => {
      if (route.name === "Index" && nav.value.length > 0) {
        router.replace(nav.value[0].path);
      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize, false);
    });

    return {
      isH5,
      showSetting,
      collapsed,
      addTransition,
      setCollapsed() {
        collapsed.value = !collapsed.value;
      },
      collWidth: computed(() => {
        return collapsed.value ? "80px" : "200px";
      }),
      globalProvider,
      cachedPage: computed(() => (globalProvider.showTab ? globalProvider.cachedPage : [])),
      async onReloadPage(refresh = false) {
        await useReload(globalProvider, route, refresh);
        return true;
      },
      handleShowSetting() {
        showSetting.value = true;
      },
      copyRightYear(){
        let year = new Date().getFullYear();
        if(!props.startYear) return '';
        if(props.startYear.toString() === year.toString()){
          return props.startYear;
        }
        return `${props.startYear}-${year}`;
      }
    };
  },
  components: {
    PageNav,
    PageHeader,
    PageSetting,
    PageTab,
  },
});
</script>

<style lang="scss" scoped>
.page-header {
  border-bottom: 2px solid #f1f1f1;
  //
  //.dropdown-trigger {
  //  &:hover {
  //    background-color: rgba(190, 190, 190, 0.2);
  //  }
  //}
}

//[data-pro-theme="antdv-pro-theme-dark"] .dropdown-trigger {
//  &:hover {
//    background-color: rgba(190, 190, 190, 0) !important;
//  }
//}

.transition-width {
  transition: width 0.2s;
}

.side-placeholder {
  flex-shrink: 0;
  overflow: hidden;
}
</style>
