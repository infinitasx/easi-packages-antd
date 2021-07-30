<template>
  <slot></slot>
</template>

<script lang="ts">
import {defineComponent, provide} from "vue"
import {createNamespace} from "../utils/create";
import {initProvider} from "../utils/globalProvider";
import {initI18n} from "../locale";

export default defineComponent({
  name: createNamespace('Provider'),
  setup() {
    const globalProvider = initProvider();
    const globalEASILocale = initI18n("zh");
    provide('globalProvider', globalProvider);
    provide('globalEASILocale', globalEASILocale);
    console.log(globalProvider, globalEASILocale);
  },
})
</script>

<style lang="scss" scoped>

</style>
