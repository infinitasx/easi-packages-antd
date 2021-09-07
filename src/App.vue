<template>
  <EASIProvider :locale="ZH" :waterMarker="{userInfo: {mobile: '+610400000012'}}">
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
