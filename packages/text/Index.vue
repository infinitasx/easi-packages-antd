<template>
  <div>
    <slot>这是一个text组件</slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { createNamespace } from "../utils/create";
import { loadNow } from "connect-google-maps";
console.log(loadNow);

export default defineComponent({
  name: createNamespace("Text"),
  props: {},
  setup(props) {
    // init here
  },
});
</script>
<style></style>
