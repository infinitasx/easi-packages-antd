<template>
  <EASIProvider :locale="ZH" :waterMarker="{cityName}">
    <router-view></router-view>
  </EASIProvider>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import ZH from 'ant-design-vue/lib/locale/zh_CN';
export default defineComponent({
  setup() {

    const cityName = ref<string | undefined>();

    const waterMarker = reactive({
      cityName: '131231'
    })

    return {
      ZH,
      cityName,
      waterMarker
    };
  },
});
</script>

<style></style>
