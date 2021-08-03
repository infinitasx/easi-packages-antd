<template>
  <a-drawer placement="right" width="320px" v-bind="$attrs" @close="$emit('update:visible', false)">
    <template #title>
      <header class="flex items-center">
        <a-avatar shape="circle" size="default" v-if="userInfo?.avatar" :src="userInfo.avatar" :style="{ backgroundColor: '#ffbf00', verticalAlign: 'middle', marginRight: '8px' }"> </a-avatar>
        {{ userInfo?.name || "用户名" }}
      </header>
    </template>

    <slot name="action-render"></slot>

    <a-typography-text class="block mb-32"> {{ getEASIText("styleSetting") }}</a-typography-text>
    <div class="flex items-center mb-32">
      <span class="flex-1">
        <a-typography-text type="secondary"> {{ getEASIText("darkSetting") }} </a-typography-text>
      </span>
      <div>
        <a-switch :checked="globalProvider.mode" @change="setSetting('mode', $event)" />
      </div>
    </div>
    <div class="flex items-center mb-32">
      <span class="flex-1">
        <a-typography-text type="secondary"> {{ getEASIText("showTabSetting") }} </a-typography-text>
      </span>
      <div>
        <a-switch :checked="globalProvider.showTab" @change="setSetting('showTab', $event)" />
      </div>
    </div>
    <div class="flex items-center mb-32">
      <span class="flex-1">
        <a-typography-text type="secondary"> {{ getEASIText("fixedTabSetting") }} </a-typography-text>
      </span>
      <div>
        <a-switch :checked="globalProvider.fixedTab" @change="setSetting('fixedTab', $event)" />
      </div>
    </div>

    <a-divider />

    <a-typography-text class="block mb-32"> {{ getEASIText("more") }}</a-typography-text>
    <div class="more-item flex items-center mb-32 cursor-pointer text-blue-400 hover:text-blue-500" @click="toDashBoard" v-if="!!toDashboard">
      <RollbackOutlined class="mr-8 text-14" />
      <div>回到Dashboard</div>
    </div>
    <div class="more-item flex items-center mb-32 cursor-pointer" style="color: #f5222d" @click="handleLogout">
      <LogoutOutlined class="mr-8 text-14" />
      <div>{{ getEASIText("logout") }}</div>
    </div>
  </a-drawer>
</template>

<script lang="ts">
import { createVNode, defineComponent, inject, PropType } from "vue";
import { createNamespace } from "../utils/create";
import { Modal } from "ant-design-vue";
import { setProvider, IProvider, defaultProvider } from "../utils/globalProvider";
import { ExclamationCircleOutlined, LogoutOutlined, RollbackOutlined } from "@ant-design/icons-vue";
import { UserInfo } from '../../typings/antd'
import {getEASIText, IGlobalLocal} from '../locale'

export default defineComponent({
  name: createNamespace("Setting"),
  emits: ["update:visible"],
  props: {
    userInfo: {
      type: Object as PropType<UserInfo>,
      default: () => ({}),
    },
    onLogout: {
      type: Function,
      default: () => Promise.resolve(),
    },
    toDashboard: {
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
          async onOk() {
            return props?.onLogout ? props.onLogout() : true;
          },
        });
      },
      toDashBoard(){
        props?.toDashboard && props.toDashboard();
      },
      getEASIText,
    };
  },
  components: {
    LogoutOutlined,
    ExclamationCircleOutlined,
    RollbackOutlined,
  },
});
</script>

<style lang="scss" scoped></style>
