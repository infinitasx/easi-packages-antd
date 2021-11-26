<template>
  <a-drawer
      v-bind="$attrs"
      :visible="visible"
      :width="width"
      :maskClosable="false"
      :body-style="computedBodyStyle"
      @close="handleClose"
  >
    <slot name="default"></slot>
    <div class="easi-packages-drawer-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </a-drawer>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs, watch, PropType, toRaw } from 'vue';
import { createNamespace } from "../utils/create";

export default defineComponent({
  name: createNamespace('Drawer'),
  emits: ['update:visible', 'close', 'show'],
  props: {
    visible: {
      default: false,
      type: Boolean,
    },
    width: {
      default: '500px',
      type: String,
    },
    bodyStyle: {
      default: () => ({}),
      type: Object as PropType<any>,
    },
  },
  setup(props, { emit, slots }) {
    const { bodyStyle, visible } = toRefs(props);

    const computedBodyStyle = computed(() => {
      return slots.footer ? { ...bodyStyle.value, paddingBottom: '55px' } : toRaw(bodyStyle.value);
    });

    watch(
        () => visible.value,
        (newVal: boolean) => {
          if (newVal) {
            emit('show');
          }
        },
    );

    return {
      computedBodyStyle,
      handleClose() {
        emit('update:visible', false);
        emit('close');
      },
    };
  },
});
</script>

<style lang="scss">
[data-pro-theme='antdv-pro-theme-dark'] .easi-packages-drawer-footer {
  background-color: #1f1f1f;
  border-color: #303030;
}
.easi-packages-drawer-footer {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #e9e9e9;
  padding: 10px 16px;
  background: #fff;
  text-align: right;
  z-index: 1;
}
</style>
