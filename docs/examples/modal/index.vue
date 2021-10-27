<template>
  <EASIProvider :locale="zhCN">
    <EASIButton @click="visible = true">打开弹窗</EASIButton>
    <br />
    <EASIModal :visible="visible" title="弹窗标题" @cancel="visible = false">内容</EASIModal>
  </EASIProvider>
</template>

<script>
import { defineComponent, ref } from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
export default defineComponent({
  setup() {
    const visible = ref(false);
    return { visible ,zhCN };
  },
});
</script>

<style></style>
