<template>
  <EASIButton type="link" @click="visible = true">打开抽屉</EASIButton>
  <EASIDrawer :visible="visible" @close="visible = false" />
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const visible = ref(false);
    return { visible };
  },
};
</script>
