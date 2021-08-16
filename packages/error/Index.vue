<template>
  <a-card :bordered="false" class="error-full-page">
    <a-result :status="status">
      <template v-for="(index, name) in $slots" v-slot:[name]="slotProps">
        <slot
            :name="name"
            v-bind="slotProps"
        ></slot>
      </template>
    </a-result>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { createNamespace } from "../utils/create";

export default defineComponent({
  name: createNamespace('Error'),
  props: {
    status: {
      type: String as PropType<'403' | '404' | 'success' | 'warning' | '500' | 'error' | ''>,
      default: ''
    },
  }
});
</script>

<style lang="scss" scoped>
.error-full-page {
  height: calc(100vh - 160px);
}
</style>
