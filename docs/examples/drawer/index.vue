<template>
  <EASIButton type="link" @click="visible = true">打开抽屉</EASIButton>
  <EASIDrawer title="这是标题" :visible="visible" @close="visible = false">
    <EASIButton @click="visible = false">关闭抽屉</EASIButton>
  </EASIDrawer>
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
