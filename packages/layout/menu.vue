<template>
  <div class="py-6 flex items-center" :class="[collapsed ? 'px-24' : 'px-16']">
    <img :src="logo" alt="" class="logo" />
    <div class="admin-title text-white ml-16 truncate" v-if="title || subTitle" v-show="!collapsed">
      <p class="truncate" v-if="title" :class="[subTitle ? 'text-14' : 'text-16']">{{ title }}</p>
      <p class="text-12 truncate text-gray-400" v-if="subTitle">
        {{ subTitle }}
      </p>
    </div>
  </div>
  <div class="flex-1 overflow-y-auto overflow-x-hidden">
    <a-menu mode="inline" :inlineCollapsed="false" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" theme="dark">
      <template v-for="item in nav" :key="item.name">
        <template v-if="item.children && item.children.length > 0 && !item.meta.hideMenu">
          <a-sub-menu :key="item.name">
            <template #title>
              <span class="flex items-center">
                <i :class="item.meta.icon" v-if="!!item.meta.icon" class="anticon"></i>
                <span>{{ item.meta.title }}</span>
              </span>
            </template>
            <template v-for="child in item.children" :key="child.name">
              <a-menu-item :key="child.name" v-if="!child.meta.hideMenu" class="flex items-center" @click="toPage(child.name)">
                <i :class="child.meta.icon" v-if="!!child.meta.icon" class="anticon"></i>
                <span>{{ child.meta.title }}</span>
              </a-menu-item>
            </template>
          </a-sub-menu>
        </template>
        <template v-else-if="!item.children && !item.meta.hideMenu">
          <a-menu-item :key="item.name" class="flex items-center" @click="toPage(item.name)">
            <i :class="item.meta.icon" v-if="!!item.meta.icon" class="anticon"></i>
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRaw, watch, onMounted, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import { createNamespace } from "../utils/create";
import { BreadcrumbRoute } from "../../typings/antd";

export default defineComponent({
  name: createNamespace("menu"),
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
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
      type: Array,
      default: [],
    },
  },
  setup(props) {
    const { collapsed } = toRefs(props);

    const route = useRoute();
    const router = useRouter();

    const openKeys = ref<string[]>([]);
    const selectedKeys = ref<string[]>([]);

    const _changeSelect = () => {
      const matched: BreadcrumbRoute[] = [...toRaw((route.meta.breadcrumb || []) as BreadcrumbRoute[])];
      if (!collapsed.value) {
        openKeys.value = matched.map((_matched: BreadcrumbRoute) => _matched.name) as string[];
      }
      selectedKeys.value = [(route.meta.selected || route.name) as string];
    };

    onMounted(() => {
      _changeSelect();
    });

    watch(() => route.name, _changeSelect);

    watch(
      () => collapsed.value,
      (newCollapsed) => {
        if (!newCollapsed) {
          const matched: BreadcrumbRoute[] = [...toRaw((route.meta.breadcrumb || []) as BreadcrumbRoute[])];
          openKeys.value = matched.map((_matched: BreadcrumbRoute) => _matched.name) as string[];
        } else {
          openKeys.value = [];
        }
      }
    );

    const toPage = (key: string) => {
      route.name !== key && router.push({ name: key });
    };

    return {
      openKeys,
      selectedKeys,
      toPage,
    };
  },
});
</script>

<style lang="scss" scoped>
.logo {
  width: 34px;
  height: 34px;
}

.iconfont {
  vertical-align: middle;
  &:before {
    display: block !important;
  }
}

.admin-title {
  animation: fade-in 0.2s;
}

@keyframes fade-in {
  0% {
    display: none;
    opacity: 0;
  }

  99% {
    display: none;
    opacity: 0;
  }

  100% {
    display: block;
    opacity: 1;
  }
}
</style>
