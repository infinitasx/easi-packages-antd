<template>
  <a-drawer
      placement="right"
      width="320px"
      v-bind="$attrs"
      :headerStyle="{ backgroundColor: globalProvider.mode === 'dark' ? '' : '#fafafa' }"
      @close="$emit('update:visible', false)"
  >
    <template #title>
      <header class="flex items-center">
        <a-avatar
            shape="circle"
            size="default"
            :src="require('/assets/img/head.png')"
            :style="{ backgroundColor: '#ffbf00', verticalAlign: 'middle', marginRight: '8px' }"
        >
        </a-avatar>
        {{ userInfo?.name || '用户名' }}
      </header>
    </template>

    <slot name="action-render"></slot>

    <a-typography-text class="block mb-32"> {{$t('styleSetting')}}</a-typography-text>
    <div class="flex items-center mb-32">
      <span class="flex-1">
        <a-typography-text type="secondary"> {{ $t('darkSetting') }} </a-typography-text>
      </span>
      <div>
        <a-switch :checked="globalProvider.mode" checkedValue="dark" unCheckedValue="light" @change="setSetting('mode', $event)"/>
      </div>
    </div>
    <div class="flex items-center mb-32">
      <span class="flex-1">
        <a-typography-text type="secondary"> {{ $t('showTabSetting') }} </a-typography-text>
      </span>
      <div>
        <a-switch :checked="globalProvider.showTab" @change="setSetting('showTab', $event)"/>
      </div>
    </div>
    <div class="flex items-center mb-32">
      <span class="flex-1">
        <a-typography-text type="secondary"> {{ $t('fixedTabSetting') }} </a-typography-text>
      </span>
      <div>
        <a-switch :checked="globalProvider.fixedTab" @change="setSetting('fixedTab', $event)"/>
      </div>
    </div>

    <a-divider/>

    <a-typography-text class="block mb-32"> {{ $t('more') }}</a-typography-text>
    <div
        class="more-item flex items-center mb-32 cursor-pointer"
        style="color: #f5222d"
        @click="handleLogout"
    >
      <LogoutOutlined class="mr-8 text-14"/>
      <div>{{ $t('logout') }}</div>
    </div>
  </a-drawer>
</template>

<script lang="ts">
import {createVNode, defineComponent, inject} from "vue"
import {createNamespace} from "../utils/create";
import {Modal} from 'ant-design-vue';
import {setProvider, IProvider} from '../utils/globalProvider'
import {ExclamationCircleOutlined, LogoutOutlined} from '@ant-design/icons-vue';
import {useI18n} from 'vue-i18n';

export default defineComponent({
  name: createNamespace('Setting'),
  emits: ['update:visible', 'logout'],
  props: {
    userInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const globalProvider = inject<IProvider>('globalProvider');
    const { t } = useI18n();

    const setSetting = (key: string, value: boolean) => {
      globalProvider[key] = value;
      setProvider(globalProvider)
    }

    return {
      globalProvider,
      setSetting,
      handleLogout(){
        Modal.confirm({
          title: t('logoutTitle'),
          icon: createVNode(ExclamationCircleOutlined),
          content: t('logoutMessage'),
          centered: true,
          onOk() {
            emit('logout')
          },
        });
      }
    }
  },
  components: {
    LogoutOutlined,
    ExclamationCircleOutlined,
  }
})
</script>

<style lang="scss" scoped>

</style>
