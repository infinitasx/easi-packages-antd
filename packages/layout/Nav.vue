<template>
  <div
      class="side-placeholder"
      :class="{ 'transition-width': !isH5 }"
      v-show="!isH5"
      :style="{ width: collWidth }"
  ></div>
  <a-layout-sider
      v-show="!isH5"
      class="flex fixed top-0 left-0 flex-col h-screen overflow-hidden z-10"
      collapsible
      :collapsed="collapsed"
      :trigger="null"
  >
    <NavMenu :logo="logo" :title="title" :sub-title="subTitle" :nav="nav" :collapsed="collapsed"/>
  </a-layout-sider>
  <a-drawer
      placement="left"
      width="200px"
      :closable="false"
      :visible="!collapsed && isH5"
      :bodyStyle="{ padding: 0, height: '100%' }"
      @close="$emit('hideMenu')"
  >
    <a-layout-sider
        class="flex flex-col h-screen overflow-hidden"
        collapsible
        :collapsed="false"
        :trigger="null"
    >
      <NavMenu :logo="logo" :title="title" :sub-title="subTitle" :nav="nav" :collapsed="false"/>
    </a-layout-sider>
  </a-drawer>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {createNamespace} from "../utils/create";
import NavMenu from './menu.vue';

export default defineComponent({
  name: createNamespace('Nav'),
  emits: ['hideMenu'],
  props: {
    collapsed: {
      type: Boolean,
      default: true,
    },
    collWidth: {
      type: String,
      default: '',
    },
    isH5: {
      type: Boolean,
      default: false,
    },
    // Logo图片路径
    logo: {
      type: String,
      default: null
    },
    // 系统名称
    title: {
      type: String,
      default: null
    },
    // 系统二级名称，一般放城市
    subTitle: {
      type: String,
      default: null
    },
    // 菜单数据
    nav: {
      type: Array,
      default: () => [],
    }
  },
  components: {
    NavMenu,
  },
})
</script>
