<template>
  <span class="dropdown-trigger px-8 cursor-pointer hover:bg-gray-100" @click="openHandler">
    <a-avatar shape="circle" size="default" :src="userInfo.headImg || '../../assets/img/head.png'" :style="{ backgroundColor: '#ffbf00', verticalAlign: 'middle' }"> </a-avatar>
    <span class="pl-8">{{ userInfo.name || "用户名" }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType } from "vue";

export interface UserInfo {
  name: string; // 姓名
  post?: string; // 职位
  email?: string; // 邮箱
  tel?: string; // 电话号码
  headImg?: string; // 头像
}

export default defineComponent({
  name: "user-account-action",
  props: {
    userInfo: {
      type: Object as PropType<UserInfo>,
      require: true,
      default: () => ({}),
    },
  },
  emits: ["openHandler"],
  setup(props, { emit }) {
    const show = ref(false);

    return {
      openHandler() {
        emit("openHandler");
      },
      show,
    };
  },
});
</script>

<style lang="scss" scoped></style>
