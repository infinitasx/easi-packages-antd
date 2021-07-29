<template>
  <a-tabs
      :activeKey="activeKey"
      :tabBarStyle="{ paddingLeft: '16px' }"
      hide-add
      @tabClick="toPage"
      type="editable-card"
      class="page-tab"
  >
    <a-tab-pane v-for="(pane, index) in panes" :key="pane.fullPath" :closable="false">
      <template #tab>
        <span class="flex items-center">
          {{ pane.title }}
          <ReloadOutlined
              class="icon-action text-12 leading-0 ml-8"
              v-show="pane.fullPath === activeKey"
              @click.stop="reloadPage"
          />
          <CloseOutlined
              class="icon-action text-12 leading-0 ml-8"
              v-show="panes.length !== 1"
              @click.stop="removeTab(index)"
          />
        </span>
      </template>
    </a-tab-pane>
    <template #tabBarExtraContent>
      <a-dropdown @click="action">
        <a class="ant-dropdown-link p-12 mr-8" @click.prevent>
          <MoreOutlined class="text-16 leading-0"/>
        </a>
        <template #overlay>
          <a-menu @click="action">
            <a-menu-item key="closeAll">关闭其他</a-menu-item>
            <a-menu-item key="refresh">刷新当前页</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </template>
  </a-tabs>
</template>

<script lang="ts">
import {defineComponent, watch, inject, ref} from "vue"
import {createNamespace} from "../utils/create";
import { MenuInfo } from '../../typings/antd';
import { IProvider } from '../utils/globalProvider';
import { useRoute, useRouter, RouteLocationNormalizedLoaded, Router, RouteMeta } from 'vue-router';
import { MoreOutlined, ReloadOutlined, CloseOutlined } from '@ant-design/icons-vue';

export interface TabPane {
  title: string;
  fullPath: string;
  name: string;
  cached: boolean;
}

export default defineComponent({
  name: createNamespace('Tab'),
  emits: ['reloadPage'],
  setup(props, { emit }){
    const route: RouteLocationNormalizedLoaded = useRoute();
    const router: Router = useRouter();

    const globalProvider = inject<IProvider>('globalProvider')

    const activeKey = ref<string>('');
    const panes = ref<TabPane[]>([]);

    const handleRouteFullPath = () => {
      activeKey.value = route.fullPath;
      if (route.name === 'Index') return;
      if (
          panes.value.length === 0 ||
          !panes.value.some((pane: TabPane) => pane.fullPath === route.fullPath)
      ) {
        const meta = route.meta as RouteMeta;
        panes.value.push({
          title: (route.query.title as string) || route.meta.title,
          fullPath: route.fullPath,
          name: route.name as string,
          cached: meta.cached === true || meta.cached === undefined,
        } as TabPane);
      }
    };

    handleRouteFullPath();
    watch(
        () => route.fullPath,
        () => {
          handleRouteFullPath();
        },
    );

    const toPage = (key: string) => {
      key !== activeKey.value && router.push(key);
    };

    const reloadPage = () => {
      emit('reloadPage');
    };

    const removeTab = (index: number) => {
      const { fullPath, name, cached } = panes.value[index];
      panes.value.splice(index, 1);
      if (cached) {
        (globalProvider as IProvider).cachedPage = (globalProvider as IProvider).cachedPage.filter((key: string) => key !== name);
      }
      if (fullPath === activeKey.value) {
        activeKey.value = panes.value[panes.value.length - 1].fullPath;
        router.push(activeKey.value);
      }
    };

    const removeOtherTab = () => {
      panes.value = panes.value.filter((pane: TabPane) => pane.fullPath === activeKey.value);
      (globalProvider as IProvider).cachedPage = panes.value[0].cached ? [panes.value[0].name] : []
    };

    return {
      activeKey,
      panes,
      toPage,
      reloadPage,
      removeTab,
      action({ key }: MenuInfo) {
        switch (key) {
          case 'closeAll':
            removeOtherTab();
            break;
          case 'refresh':
            reloadPage();
            break;
          default:
            break;
        }
      },
    }
  },
  components: {
    MoreOutlined,
    ReloadOutlined,
    CloseOutlined,
  },
})
</script>

<style lang="scss" scoped>
.page-tab {
  height: 64px;
}

.icon-action {
  margin-right: 0 !important;
  color: rgba(0, 0, 0, 0.85);

  &:hover {
    color: #177ddc;
  }
}

[data-pro-theme='antdv-pro-theme-dark'] .icon-action {
  margin-right: 0 !important;
  color: hsla(0, 0%, 100%, 0.45);

  &:hover {
    color: #177ddc;
  }
}
</style>

