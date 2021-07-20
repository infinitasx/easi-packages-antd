<template>
  <p>这是一个easi text组件</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createNamespace } from "../utils/create";
export default defineComponent({
  name: createNamespace("text"),
});
</script>

<style></style>
