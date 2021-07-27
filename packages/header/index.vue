<template>
  <MenuFoldOutlined v-show="!collapsed" class="text-18" @click="colToggle" />
  <MenuUnfoldOutlined v-show="collapsed" class="text-18" @click="colToggle" />
  <div class="flex-1"></div>
  <UserAccountAction v-bind="$attrs" v-on="$listener"></UserAccountAction>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import UserAccountAction from "./user-account-action.vue";
import { createNamespace } from "../utils/create";
export default defineComponent({
  name: createNamespace("Header"),
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["colToggle"],
  setup(props, { emit }) {
    return {
      colToggle() {
        emit("colToggle");
      },
    };
  },
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserAccountAction,
  },
});
</script>
<style></style>
