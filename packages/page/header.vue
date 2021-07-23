<template>
  <MenuFoldOutlined v-show="!collapsed" class="text-18" @click="colToggle" />
  <MenuUnfoldOutlined v-show="collapsed" class="text-18" @click="colToggle" />
  <div class="flex-1"></div>
  <span class="dropdown-trigger px-8 cursor-pointer hover:bg-gray-100" @click="handleShowSetting">
    <a-avatar
        shape="circle"
        size="default"
        :src="require('/assets/img/head.png')"
        :style="{ backgroundColor: '#ffbf00', verticalAlign: 'middle' }"
    >
    </a-avatar>
    <span class="pl-8">{{ userInfo?.name || '用户名' }}</span>
  </span>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {createNamespace} from "../utils/create";
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: createNamespace('Header'),
  emits: ['colToggle', 'handleShowSetting'],
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
    userInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    return {
      colToggle() {
        emit('colToggle');
      },
      handleShowSetting() {
        emit('handleShowSetting');
      }
    };
  },
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  },
})
</script>

<style lang="scss" scoped>

</style>
