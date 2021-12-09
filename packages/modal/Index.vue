<template>
  <!--  <slot name="trigger" />-->
  <a-modal
      :visible="visible === undefined ? symbolVisible : visible"
      :title="title"
      :bodyStyle="autoHeight ? bodyStyle : { ...bodyScrollStyle, ...bodyStyle }"
      :closable="closable"
      :confirmLoading="autoLoading || confirmLoading"
      :destroyOnClose="destroyOnClose"
      :keyboard="keyboard"
      :maskClosable="maskClosable"
      :width="width"
      :getContainer="getContainer"
      :afterClose="afterClose"
      class="modal-top"
      :class="{ 'no-footer': !footer }"
      v-bind="$attrs"
      @cancel="onCancel"
  >
    <template #title v-if="!title">
      <slot name="title"></slot>
    </template>
    <slot></slot>
    <template #footer>
      <slot name="footer"></slot>
      <div class="footer" :class="{'easi-antd-footer-center': footerCenter}" v-if="!$slots.footer && footer">
        <a-button v-if="showCancel" @click="onCancel">
          {{ cancelText || getText('cancel') }}
        </a-button>
        <a-button
            v-if="showOk"
            :type="okType"
            :loading="autoLoading || confirmLoading"
            @click="onConfirm"
        >
          {{ okText || getText('confirm') }}
        </a-button>
      </div>
    </template>
  </a-modal>
</template>

<script lang="ts">
import {defineComponent, ref, toRefs, watch, PropType, inject} from 'vue';
import { createNamespace } from "../utils/create";
import {getEASIText, IGlobalLocal} from '../locale'

export default defineComponent({
  name: createNamespace('Modal'),
  emits: ['ok', 'cancel', 'update:visible', 'show'],
  props: {
    visible: {
      type: Boolean,
      default: undefined,
    },
    title: {
      type: String,
      default: undefined,
    },
    bodyStyle: Object,
    showCancel: {
      type: Boolean,
      default: true,
    },
    showOk: {
      type: Boolean,
      default: true,
    },
    cancelText: {
      type: String,
    },
    okText: {
      type: String,
    },
    okType: {
      type: String,
      default: 'primary',
    },
    closable: {
      default: true,
      type: Boolean,
    },
    afterClose: Function,
    confirmLoading: {
      type: Boolean,
      default: false,
    },
    destroyOnClose: {
      type: Boolean,
      default: true,
    },
    keyboard: {
      type: Boolean,
      default: false,
    },
    maskClosable: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [String, Number],
      default: 1000,
    },
    getContainer: {
      type: Function,
      default: () => document.body,
    },
    // 如果点击确认按钮需要异步关闭弹框，则传入此参数 ():Promise => {}
    handleOk: {
      type: Function,
      default: null,
    },
    // 是否去掉弹框的滚动条，撑开高度
    autoHeight: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    footer: {
      type: Boolean,
      default: true,
    },
    footerCenter: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, { emit }) {
    const { handleOk, visible } = toRefs(props);
    const symbolVisible = ref(false);

    const globalEASILocale = inject<IGlobalLocal>('globalEASILocale', {message: {}});

    const bodyScrollStyle = {
      maxHeight: 'calc(100vh - 160px)',
      overflow: 'auto',
    };

    const showModal = () => {
      symbolVisible.value = true;
      emit('update:visible', true);
      emit('show');
    };

    watch(
        () => visible.value,
        newVal => {
          if (newVal) {
            emit('update:visible', true);
            emit('show');
          }
        },
    );

    // 管理异步关闭弹框的loading
    const autoLoading = ref(false);

    const onCancel = () => {
      symbolVisible.value = false;
      emit('update:visible', false);
      emit('cancel');
    };

    const onConfirm = async () => {
      if (handleOk.value && typeof handleOk.value === 'function') {
        try {
          autoLoading.value = true;
          await handleOk.value();
          autoLoading.value = false;
          onCancel();
        } catch (e) {
          console.log(e);
          autoLoading.value = false;
        }
      } else {
        emit('ok');
        onCancel();
      }
    };

    return {
      symbolVisible,
      autoLoading,
      bodyScrollStyle,
      onConfirm,
      onCancel,
      showModal,
      getText(key: string, value?: {[props: string]: string | number}){
        return getEASIText(globalEASILocale, key, value)
      },
    };
  },
});
</script>
<style lang="scss">
.easi-antd-footer-center{
  text-align: center;
}
</style>
