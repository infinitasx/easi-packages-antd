<template>
  <a-drawer placement="right" width="320px" v-model:visible="visible" :headerStyle="{ backgroundColor: drawerSeting.mode === 'dark' ? '' : '#fafafa' }" @close="$emit('update:show', false)">
    <template #title>
      <header class="flex items-center">
        <a-avatar shape="circle" size="default" :src="$attrs.userInfo.headImg || '../../assets/img/head.png'" :style="{ backgroundColor: '#ffbf00', verticalAlign: 'middle', marginRight: '8px' }">
        </a-avatar>
        {{ $attrs.userInfo.name || "用户名" }}
      </header>
    </template>
    <slot name="body"></slot>
    <slot name="style">
      <a-typography-text class="block mb-32"> 风格设置 </a-typography-text>
      <div class="flex items-center mb-32">
        <span class="flex-1">
          <a-typography-text type="secondary"> 夜间模式 </a-typography-text>
        </span>
        <div>
          <a-switch size="small" :checked="drawerSeting.mode === 'dark'" @change="(bool) => setSetting('mode', bool)" />
        </div>
      </div>
      <div class="flex items-center mb-32">
        <span class="flex-1">
          <a-typography-text type="secondary"> 显示浏览标签栏 </a-typography-text>
        </span>
        <div>
          <a-switch size="small" v-model:checked="drawerSeting.showTab" @change="setSetting('showTab', drawerSeting.showTab)" />
        </div>
      </div>
      <div class="flex items-center mb-32">
        <span class="flex-1">
          <a-typography-text type="secondary"> 浏览标签栏固定在顶部 </a-typography-text>
        </span>
        <div>
          <a-switch size="small" v-model:checked="drawerSeting.fixedTab" @change="setSetting('fixedTab', drawerSeting.fixedTab)" />
        </div>
      </div>
      <a-divider />
    </slot>
    <a-typography-text class="block mb-32"> 更多操作 </a-typography-text>
    <div class="more-item flex items-center mb-32 cursor-pointer" style="color: #f5222d" @click="logoutHandler">
      <LogoutOutlined class="mr-8 text-14" />
      <div>退出登录</div>
    </div>
  </a-drawer>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watch, reactive, computed, createVNode, PropType } from "vue";
import { Modal } from "ant-design-vue";
import { LogoutOutlined, ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { createNamespace } from "../utils/create";

export type defaultSeting = {
  mode: "dark" | "light";
  showTab: boolean;
  fixedTab?: boolean;
};

export default defineComponent({
  name: createNamespace("Drawer"),
  emits: ["update:show", "update:drawerSeting", "logout"],
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    drawerSeting: {
      type: Object as PropType<defaultSeting>,
      default: () => ({
        mode: "dark",
        showTab: true,
        fixedTab: true,
      }),
    },
  },
  components: {
    LogoutOutlined,
  },
  setup(props, { emit }) {
    // 控制显示隐藏
    const { show, drawerSeting } = toRefs(props);
    const visible = ref(show.value);

    watch(
      () => show.value,
      (newVal: boolean) => {
        if (newVal) {
          visible.value = true;
        }
      }
    );

    const setSetting = (key: string, value: boolean) => {
      let _value: any = value;
      if (key === "mode") {
        _value = value ? "dark" : "light";
      }
      const html = document.querySelector("html") as HTMLHtmlElement;
      html.setAttribute("data-pro-theme", _value === "dark" ? "antdv-pro-theme-dark" : "");
      emit("update:drawerSeting", {
        ...drawerSeting.value,
        ...{
          [key]: _value,
        },
      });
    };

    return {
      visible,
      setSetting,
      logoutHandler() {
        Modal.confirm({
          title: "退出确认",
          icon: createVNode(ExclamationCircleOutlined),
          content: "您确定要退出本系统吗?",
          centered: true,
          onOk() {
            emit("logout");
          },
        });
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.gray {
  color: rgba(00, 00, 00, 0.45);
}

[data-pro-theme="antdv-pro-theme-dark"] {
  .more-item {
    color: rgba(255, 255, 255, 0.65);
  }
}
</style>
