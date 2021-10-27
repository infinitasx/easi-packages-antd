<template>
  <EASIProvider :locale="zhCN">
    <EASIUploader :aspectRatio="1"
                  :minCropBoxWidth="18"
                  :minCropBoxHeight="18"
    >
      <EASIButton link>上传图片</EASIButton>
    </EASIUploader>
  </EASIProvider>
</template>

<script>
import { defineComponent } from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

export default defineComponent({
  setup() {
    return {
      zhCN
    };
  },
});
</script>

<style>
.table {
  width: 100%;
}
p{
  margin: 0;
}
</style>
