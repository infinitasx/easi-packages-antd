<template>
  <EASIProvider :locale="zhCN" :waterMarker="{ ip: '127.0.0.1', cityName: '重庆' }">
    <p>这是全局根组件Provider，代替ant design vue的ConfigProvider组件。</p>
    <p>并给整个屏幕强制添加水印，水印参数见waterMarker</p>
  </EASIProvider>
</template>

<script>
import { defineComponent, ref } from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

export default defineComponent({
  setup() {
    return { zhCN };
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
