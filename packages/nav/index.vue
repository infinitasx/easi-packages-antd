<template>
  <div class="side-placeholder" :class="{ 'transition-width': !isH5 }" v-show="!isH5" :style="{ width: collWidth }">
    <a-layout-sider v-show="!isH5" class="flex fixed top-0 left-0 flex-col h-screen overflow-hidden z-10" collapsible :collapsed="collapsed" :trigger="null">
      <Menu v-bind="$attrs" />
    </a-layout-sider>
    <a-drawer placement="left" width="200px" :closable="false" :visible="!collapsed && isH5" :bodyStyle="{ padding: 0, height: '100%' }" @close="$emit('hideMenu')">
      <a-layout-sider class="flex flex-col h-screen overflow-hidden" collapsible :collapsed="false" :trigger="null">
        <NavMenu v-bind="$attrs" />
      </a-layout-sider>
    </a-drawer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { createNamespace } from "../utils/create";
import Menu from "../menu";
export default defineComponent({
  name: createNamespace("Nav"),
  props: {
    collapsed: {
      type: Boolean,
      default: true,
    },
    collWidth: {
      type: String,
      default: "",
    },
    isH5: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["hideMenu"],
  setup(props) {},
  components: {
    Menu,
  },
});
</script>
<style></style>
