<template>
  <slot name="default"></slot>
  <EASIModal :visible="visible === undefined ? symbolVisible : visible"
             :body-style="{ height: 'calc(100vh - 300px)', maxHeight: 'auto', overflow: 'hidden'}"
             :title="title || getText('uploaderTitle')"
             centered
             @show="handleShow"
             @cancel="handleCancel"
  >
    <a-tabs type="card" v-model:activeKey="activeKey">
      <a-tab-pane class="pane-container" :key="0" :tab="getText('uploaderTab0')">
        <Empty />
      </a-tab-pane>
      <a-tab-pane class="pane-container" :key="1" :tab="getText('uploaderTab1')">
        图片库
      </a-tab-pane>
      <template #tabBarExtraContent>
        <a-form layout="inline">
          <a-form-item>
            <a-input-search
                v-model:value="search"
                placeholder="input search text"
                style="width: 180px"
            />
          </a-form-item>
          <a-form-item>
            <EASIButton type="primary">搜索</EASIButton>
          </a-form-item>
        </a-form>
      </template>
    </a-tabs>

    <template #footer>
      <a-space>
        <EASIButton @click="handleCancel">{{ getText('cancel') }}</EASIButton>
        <EASIButton type="primary" success>{{ getText('uploaderPrimary') }}</EASIButton>
        <EASIButton type="primary">{{ getText('confirm') }}</EASIButton>
      </a-space>
    </template>
  </EASIModal>
</template>

<script lang="ts">
import {defineComponent, inject, ref, onMounted, onBeforeUnmount, getCurrentInstance, ComponentInternalInstance} from "vue";
import EASIModal from '../modal/index.vue';
import { createNamespace } from '../utils/create';
import {getEASIText, IGlobalLocal} from '../locale'
import Empty from './empty.vue';


export default defineComponent({
  name: createNamespace("Uploader"),
  emits: ["update:visible", 'show', 'cancel', 'ok'],
  props: {
    visible: {
      type: Boolean,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    },
    // 如果点击确认按钮需要异步关闭弹框，则传入此参数 ():Promise => {}
    handleOk: {
      type: Function,
      default: null,
    },
  },
  setup(props, {emit, slots}) {
    const globalEASILocale = inject<IGlobalLocal>('globalEASILocale', {message: {}});
    const symbolVisible = ref<boolean>(false);

    const activeKey = ref<number>(0);

    const app = getCurrentInstance() as ComponentInternalInstance;

    const showModal = () => {
      symbolVisible.value = true;
      emit('update:visible', true);
      emit('show');
    }

    const handleCancel = () => {
      symbolVisible.value = false;
      emit('update:visible', false);
      emit('cancel')
    }

    const handleShow = () => {
      activeKey.value = 0;
    }

    let trigger: HTMLElement;
    onMounted(() => {
      if (slots.default && app.subTree?.el?.nextElementSibling) {
        trigger = app.subTree?.el?.nextElementSibling;
        trigger.addEventListener('click', showModal, false);
      }
    })

    onBeforeUnmount(() => {
      if (slots.default && trigger) {
        trigger.removeEventListener('click', showModal, false)
      }
    })

    const search = ref<string>();


    return {
      symbolVisible,
      globalEASILocale,
      activeKey,
      handleCancel,
      handleShow,
      getText(key: string, value?: {[props: string]: string | number}){
        return getEASIText(globalEASILocale, key, value)
      },
      search,
    };
  },
  components: {
    EASIModal,
    Empty,
  },
});
</script>

<style lang="scss" scoped>
.pane-container{
  position: relative;
  height: calc(100vh - 400px);
  overflow: auto;
}
</style>
