<template>
  <a-table :scroll="scroll" v-bind="$attrs" v-loading="loading">
    <template #title v-if="!!$slots.headerLeft || !!$slots.headerRight">
      <a-row align="middle" class="flex-wrap" :class="styleClass">
        <a-col :flex="1" class="md:min-w-0">
          <a-space v-if="$slots.headerLeft" class="flex-wrap">
            <slot name="headerLeft"></slot>
          </a-space>
        </a-col>
        <a-col>
          <a-space v-if="$slots.headerRight">
            <slot name="headerRight"></slot>
          </a-space>
        </a-col>
      </a-row>
    </template>
    <template v-for="(index, name) in $slots" v-slot:[name]="slotProps">
      <slot :name="name" v-bind="slotProps" v-if="$slots.name !== 'title' && $slots.name !== 'headerLeft' && $slots.name !== 'headerRight'"></slot>
    </template>
  </a-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createNamespace } from "../utils/create";

export default defineComponent({
  name: createNamespace("Table"),
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    styleClass: {
      type: String,
    },
    scroll: {
      type: Object,
      default: () => ({ x: 1620 }),
    },
  },
});
</script>
