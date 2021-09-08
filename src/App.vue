<template>
  <EASIProvider :locale="ZH">
    <router-view></router-view>
  </EASIProvider>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import ZH from 'ant-design-vue/lib/locale/zh_CN';
export default defineComponent({
  setup() {

    return {
      ZH,
    };
  },
});
</script>

<style></style>
