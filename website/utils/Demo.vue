<template>
  <a-card title="<!--TITLE_SLOT-->" class="md-card">
    <template #extra>
      <a-tooltip placement="top" @click="show = !show">
        <template #title>
          <span>查看源码</span>
        </template>
        <img src="https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg" />
      </a-tooltip>
    </template>
    <div class="code-content"><!--CONTENT_SLOT--></div>
    <div class="code-demo"><!--DEMO_SLOT--></div>
    <CodeView contents="<!--CODE_SLOT-->" v-show="show" />
  </a-card>
</template>
<script>
import { ref, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const show = ref(false);
    return { show };
  },
});
</script>
