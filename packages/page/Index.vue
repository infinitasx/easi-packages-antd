<template>
  <div>
    <template v-if="$usePermissions($route.meta.permission) || hasPermission">
      <div class="easi-packages-page-breadcrumb-wrap" v-if="showPageHeader">
        <a-page-header :title="pageTitle" :ghost="false">
          <template #breadcrumb>
            <a-breadcrumb :routes="breadcrumbRoutes" v-if="breadcrumbRoutes.length > 1">
              <template #itemRender="{ route }">
                <router-link :to="route.path">
                  {{ route.breadcrumbName }}
                </router-link>
              </template>
            </a-breadcrumb>
          </template>
          <p v-if="pageDesc">{{ pageDesc }}</p>
          <slot name="header"></slot>
        </a-page-header>
      </div>
      <div class="p-24">
        <a-card v-if="layoutType === 'card'">
          <slot></slot>
        </a-card>
        <slot v-else></slot>
      </div>
    </template>
    <NoPermission status="403" v-else>
      <template #title> 403 </template>
      <template #sub-title>
        {{ getText("noPermission") }}
      </template>
    </NoPermission>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  toRefs,
  PropType,
  ComputedRef,
  getCurrentInstance,
  ComponentInternalInstance,
  inject
} from "vue";
import { useRoute, RouteLocationNormalizedLoaded, RouteLocationMatched } from "vue-router";
import { BreadcrumbRoute } from "../../typings/antd";
import NoPermission from "../../packages/error/index";
import { createNamespace } from "../utils/create";
import {getEASIText, IGlobalLocal} from '../locale'

export default defineComponent({
  name: createNamespace("Page"),
  emits: ['initPage'],
  props: {
    showPageHeader: {
      type: Boolean,
      default: true,
    },
    breadcrumb: {
      type: Array as PropType<BreadcrumbRoute[]>,
      default: undefined,
    },
    title: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
    // 如果不想要默认card模式布局，则可以传入'customer'，这样slot不会被card包裹
    layoutType: {
      type: String as PropType<"card" | "customer">,
      default: "customer",
    },
    // 传true则会跳过用户权限检查
    hasPermission: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const { breadcrumb, title, desc, hasPermission } = toRefs(props);

    const globalEASILocale = inject<IGlobalLocal>('globalEASILocale', {message: {}});

    const route: RouteLocationNormalizedLoaded = useRoute();

    const { appContext } = getCurrentInstance() as ComponentInternalInstance;

    const breadcrumbRoutes: ComputedRef<BreadcrumbRoute[]> = computed((): BreadcrumbRoute[] => {
      return (breadcrumb.value ||
        route.meta.breadcrumb ||
        route.matched.slice(1).map((_route: RouteLocationMatched) => {
          return {
            path: _route.path,
            breadcrumbName: _route.meta.title,
          };
        })) as BreadcrumbRoute[];
    });

    const pageTitle = computed((): string => {
      return title.value || ((route.meta.title && route.meta.title) as string);
    });

    const pageDesc = computed((): string => {
      return desc.value || ((route.meta.desc && route.meta.desc) as string);
    });

    // 是否可以执行初始化渲染请求数据
    if (hasPermission.value || appContext.config.globalProperties.$usePermissions(route.meta.permission)) {
      emit("initPage");
    }

    return {
      breadcrumbRoutes,
      pageTitle,
      pageDesc,
      getText(key: string, value?: {[props: string]: string | number}){
        return getEASIText(globalEASILocale, key, value)
      },
    };
  },
  components: {
    NoPermission,
  },
});
</script>

<style lang="scss">
.easi-packages-page-breadcrumb-wrap {
  .ant-page-header-footer {
    margin: 0;
  }
}
</style>
