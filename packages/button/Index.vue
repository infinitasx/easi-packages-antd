<template>
  <a-button
      v-bind="$attrs"
      :type="type"
      :class="className"
  >
    <template #icon>
      <slot name="icon"></slot>
    </template>
    <slot></slot>
  </a-button>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, toRefs} from 'vue';
import { createNamespace } from "../utils/create";

export default defineComponent({
  name: createNamespace('Button'),
  props: {
    type: {
      type: String as PropType<'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'>,
      default: 'default'
    }
  },
  setup(props){

    const { type } = toRefs(props);

    return {
      className: computed(() => type.value === 'link' ? 'px-0' : '')
    }
  },
});
</script>
