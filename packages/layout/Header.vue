<template>
  <MenuFoldOutlined v-show="!collapsed" class="text-18" @click="colToggle" />
  <MenuUnfoldOutlined v-show="collapsed" class="text-18" @click="colToggle" />
  <div class="flex-1"></div>
  <span class="dropdown-trigger px-8 cursor-pointer easi-hover-block" @click="handleShowSetting">
    <a-avatar class="mr-8" shape="circle" size="default" v-if="userInfo?.avatar" :src="userInfo.avatar" :style="{ backgroundColor: '#ffbf00', verticalAlign: 'middle' }"> </a-avatar>
    <span>{{ userInfo?.name || "用户名" }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { createNamespace } from "../utils/create";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import { UserInfo } from '../../typings/antd'


export default defineComponent({
  name: createNamespace("Header"),
  emits: ["colToggle", "handleShowSetting"],
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
    userInfo: {
      type: Object as PropType<UserInfo>,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    return {
      colToggle() {
        emit("colToggle");
      },
      handleShowSetting() {
        emit("handleShowSetting");
      },
    };
  },
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  },
});
</script>

<style lang="scss" scoped>

</style>
