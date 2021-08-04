<template>
  <a-drawer placement="right" width="320px" v-bind="$attrs" @close="$emit('update:visible', false)">
    <template #title>
      <header class="flex items-center">
        <a-avatar shape="circle" size="default" v-if="userInfo?.avatar" :src="userInfo.avatar" :style="{ backgroundColor: '#ffbf00', verticalAlign: 'middle', marginRight: '8px' }"> </a-avatar>
        {{ userInfo?.name || "用户名" }}
      </header>
    </template>

    <slot name="action-render"></slot>

    <a-typography-text strong class="block mb-32"> {{ message.styleSetting }}</a-typography-text>
    <div class="flex items-center mb-24">
      <span class="flex-1">
        <a-typography-text> {{ message.darkSetting }} </a-typography-text>
      </span>
      <div>
        <a-switch :checked="globalProvider.mode" @change="setSetting('mode', $event)" />
      </div>
    </div>
    <div class="flex items-center mb-24" v-if="showTabSetting">
      <span class="flex-1">
        <a-typography-text> {{ message.showTabSetting }} </a-typography-text>
      </span>
      <div>
        <a-switch :checked="globalProvider.showTab" @change="setSetting('showTab', $event)" />
      </div>
    </div>
    <div class="flex items-center mb-24" v-if="showTabSetting">
      <span class="flex-1">
        <a-typography-text> {{ message.fixedTabSetting }} </a-typography-text>
      </span>
      <div>
        <a-switch :checked="globalProvider.fixedTab" @change="setSetting('fixedTab', $event)" />
      </div>
    </div>

    <a-divider />

    <a-typography-text strong class="block margin-bottom" v-if="!!onLogout || !!toDashboard || !!editPassword"> {{ message.more }}</a-typography-text>
    <div class="more-item flex items-center cursor-pointer easi-hover-block" @click="handleToDashBoard" v-if="!!toDashboard">
      <CompassOutlined class="mr-8 text-14" />
      <a-typography-text>{{ message.backToDashBoard }}</a-typography-text>
    </div>
    <div class="more-item flex items-center cursor-pointer easi-hover-block" @click="handleEditPassword" v-if="!!editPassword">
      <UnlockOutlined class="mr-8 text-14" />
      <a-typography-text>{{ message.editPassword }}</a-typography-text>
    </div>
    <div class="more-item flex items-center cursor-pointer text-red-400 easi-hover-block" @click="handleLogout" v-if="!!onLogout">
      <LogoutOutlined class="mr-8 text-14" />
      <a-typography-text type="danger">{{ message.logout }}</a-typography-text>
    </div>
  </a-drawer>
</template>

<script lang="ts">
import { createVNode, defineComponent, inject, PropType } from "vue";
import { createNamespace } from "../utils/create";
import { Modal } from "ant-design-vue";
import { setProvider, IProvider, defaultProvider } from "../utils/globalProvider";
import { ExclamationCircleOutlined, LogoutOutlined, CompassOutlined, UnlockOutlined } from "@ant-design/icons-vue";
import { UserInfo } from '../../typings/antd'
import { IGlobalLocal } from '../locale'

export default defineComponent({
  name: createNamespace("Setting"),
  emits: ["update:visible"],
  props: {
    userInfo: {
      type: Object as PropType<UserInfo>,
      default: () => ({}),
    },
    showTabSetting: {
      type: Boolean,
      default: true,
    },
    onLogout: {
      type: Function,
      default: undefined,
    },
    toDashboard: {
      type: Function,
      default: undefined,
    },
    editPassword: {
      type: Function,
      default: undefined,
    }
  },
  setup(props) {

    const globalProvider = inject<IProvider>("globalProvider", {...defaultProvider});
    const globalEASILocale = inject<IGlobalLocal>('globalEASILocale', {message: {}});

    const setSetting = (key: string, value: boolean | string) => {
      (globalProvider as IProvider)[key] = value;
      setProvider(globalProvider as IProvider);
    };

    return {
      globalProvider,
      setSetting,
      handleLogout() {
        Modal.confirm({
          title: globalEASILocale.message.logoutTitle,
          icon: createVNode(ExclamationCircleOutlined),
          content: globalEASILocale.message.logoutMessage,
          centered: true,
          okText: globalEASILocale.message.confirm,
          cancelText: globalEASILocale.message.cancel,
          async onOk() {
            return props?.onLogout ? props.onLogout() : true;
          },
        });
      },
      handleToDashBoard(){
        props?.toDashboard && props.toDashboard();
      },
      handleEditPassword(){
        props?.editPassword && props.editPassword();
      },
      message: globalEASILocale.message,
    };
  },
  components: {
    LogoutOutlined,
    ExclamationCircleOutlined,
    CompassOutlined,
    UnlockOutlined,
  },
});
</script>

<style lang="scss" scoped>
.margin-bottom{
  margin-bottom: 20px;
}
.more-item{
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 10px;
  margin-left: -24px;
  margin-right: -24px;
  height: 44px;
}
</style>
