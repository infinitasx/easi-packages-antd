<template>
  <div class="p-16 flex items-center" :class="[collapsed ? 'py-16 px-24' : 'p-16']">
    <img src="../../assets/img/logo.png" alt="" class="logo" />
    <div class="admin-title text-white ml-16 truncate" v-show="!collapsed">
      <p class="text-14 truncate">百灵 - 触达中心</p>
      <p class="text-12 truncate text-gray-400">
        {{ cityName }}
      </p>
    </div>
  </div>
  <div class="flex-1 overflow-y-auto overflow-x-hidden">
    <a-menu mode="inline" :inlineCollapsed="false" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" theme="dark">
      <template v-for="item in menu" :key="item.name">
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
import { defineComponent, toRefs, ref } from "vue";
import { createNamespace } from "../utils/create";
export default defineComponent({
  name: createNamespace("Menu"),
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
    cityName: {
      type: String,
      default: "墨尔本",
    },
    openKeys: {
      type: Array,
      default: () => [],
    },
    selectedKeys: {
      type: Array,
      default: () => [],
    },
    menu: {
      type: Array,
      default: () => [],
      require: true,
    },
  },
  emits: ["toPage"],
  setup(props, { emit }) {
    const { collapsed, openKeys, selectedKeys } = toRefs(props);
    const toPage = (key: string) => {
      emit("toPage", key);
    };

    return {
      collapsed,
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
